import boto3


def lambda_handler(event, context):
    client = boto3.resource("dynamodb")
    table = client.Table("Users")

    data = event["pathParameters"]

    user = {
        'user_id': f'{data["id"]}',
    }

    product_id = f'{data["productid"]}'

    try:
        response = table.get_item(Key=user)
        products = response['Item']["products"]

        if product_id in products:
            products.pop(product_id)

        try:
            table.update_item(Key={'user_id': f'{user["user_id"]}'}, UpdateExpression='SET products = :val1',
                              ExpressionAttributeValues={':val1': products})
            statusCode = 200
            responseBody = f'Successfully Deleted Product with product_id: {product_id} from user_id: {user["user_id"]}'

        except:
            statusCode = 404
            responseBody = f'Error! Could not delete product with product_id: {product_id}'
    except:
        statusCode = 404
        responseBody = f'Error! Could not get products with user_id: {user["user_id"]}'

    print(responseBody)

    response = {
        'statusCode': statusCode,
        'headers': {
            "Content-Type": "application/json",
            "access-control-allow-origin": "*"
        },
        'body': responseBody
    }

    return response