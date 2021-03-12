import json
import boto3
from decimal import Decimal
from twilio import send_twilio_message


def lambda_handler(event, context):
    client = boto3.resource("dynamodb")
    lambda_client = boto3.client("lambda")

    table = client.Table("Users")
    users = table.scan()["Items"]

    for user in users:

        print(f"\nProducts from user_id: {user['user_id']}")

        for product_id in user["products"]:
            product = user["products"][product_id]

            url = {
                "url": product["url"]
            }

            payload = json.dumps(url)

            # Calls parseWebPages => Product Object
            response = lambda_client.invoke(
                FunctionName='arn:aws:lambda:us-west-1:140026464577:function:parseWebPage',
                InvocationType='RequestResponse',
                Payload=payload
            )

            new_product = json.load(response["Payload"])

            print("Current Product:")
            print(product)
            product_price = Decimal(product["price"])

            print("New Product:")
            print(new_product)
            new_product_price = Decimal(new_product["price"])

            if product_price > new_product_price:
                ##UPDATE TABLE
                key = {
                    'user_id': f'{user["user_id"]}',
                }
                print(f"price changed for product_id: {product['product_id']}!")

                try:
                    table.update_item(
                        Key=key,
                        UpdateExpression="SET products.#product_id.price = :price",
                        ExpressionAttributeNames={
                            "#product_id": product_id
                        },
                        ExpressionAttributeValues={
                            ":price": f'{new_product_price}'
                        }
                    )
                except:
                    print("Error! Could not update product")

                ##TWILIO MESSAGE##

                message = f'\n\nHi! It’s your Watchman! \n\n\nThe {product["name"]} was ${product_price} now it is ${new_product_price}! \n\nCheck it out: {product["url"]}'
                send_twilio_message(user["phone_number"], message)

