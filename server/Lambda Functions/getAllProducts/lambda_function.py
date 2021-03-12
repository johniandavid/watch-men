import boto3
import json


def lambda_handler(event, context):
    client = boto3.resource("dynamodb")
    table = client.Table("Users")

    data = event["pathParameters"]["id"]

    user = {
        'user_id': f'{data}',
    }

    try:
        response = table.get_item(Key=user)
        products = response['Item']["products"]
        statusCode = 200
        print(f'Sucessfully retrieved all products from user_id: {user["user_id"]}')
        responseBody = json.dumps(products)

    except:
        statusCode = 404
        responseBody = f'Error! Could not get products from user_id {user["user_id"]}'
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