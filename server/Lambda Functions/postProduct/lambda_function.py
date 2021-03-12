import boto3
import json


def lambda_handler(event, context):
    client = boto3.resource("dynamodb")
    table = client.Table("Users")
    data = json.loads(event["body"])

    user = {
        'user_id': f'{event["pathParameters"]["id"]}',
    }
    url = data["url"]

    lambda_client = boto3.client("lambda")

    response = lambda_client.invoke(
        FunctionName='arn:aws:lambda:us-west-1:140026464577:function:parseWebPage',
        InvocationType='RequestResponse',
        Payload=event["body"]
    )

    product = json.load(response["Payload"])

    try:
        response = table.get_item(Key=user)
        products = response['Item']["products"]

        products[product["product_id"]] = product

        try:
            table.update_item(Key=user, UpdateExpression='SET products = :val1',
                              ExpressionAttributeValues={':val1': products})
            statusCode = 200
            responseBody = f'Sucessfully added product_id: {product["product_id"]} to user_id: {user["user_id"]} from url: {url}!'

        except:
            statusCode = 404
            responseBody = "Error! Could not update product"

    except:
        statusCode = 404
        responseBody = f'Error! Could not get products from user_id: {user["user_id"]}'

    print(responseBody)

    response = {
        'statusCode': statusCode,
        'headers': {
            'Content-Type': "application/json",
            "access-control-allow-origin": "*"
        },
        'body': responseBody
    }

    return response

