import boto3
import json


def lambda_handler(event, context):
    client = boto3.resource("dynamodb")
    table = client.Table("Users")

    data = event["pathParameters"]["id"]

    user = {
        'user_id': f"{data}",
    }
    try:
        response = table.get_item(Key=user)
        user = response['Item']
        statusCode = 200
        print(f'Sucessfully retrieved user with user_id: {user["user_id"]}')
        print(user)

        responseBody = json.dumps(user)

    except:
        statusCode = 404
        responseBody = f'Error! Could not get user with user_id: {user["user_id"]}'
        print(responseBody)

    response = {
        "statusCode": statusCode,
        "headers": {
            "Content-Type": "application/json",
            "access-control-allow-origin": "*"
        },
        "body": responseBody
    }

    return response

