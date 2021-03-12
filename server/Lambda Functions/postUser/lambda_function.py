import boto3
import json


def lambda_handler(event, context):
    client = boto3.resource("dynamodb")
    table = client.Table("Users")

    data = json.loads(event["body"])

    user = {
        'user_id': f'{data["user_id"]}',
        'name': f'{data["name"]}',
        'phone_number': f'{data["phone_number"]}',
        'products': {},
    }

    try:
        table.put_item(Item=user)
        statusCode = 201
        responseBody = f'Successfully added User! user_id: {user["user_id"]} is now in our database!'


    except:
        statusCode = 400
        responseBody = "Error! Unable to post user"

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

