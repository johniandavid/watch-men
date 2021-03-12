import boto3

def lambda_handler(event, context):
    client = boto3.resource("dynamodb")
    table = client.Table("Users")

    data = event["pathParameters"]["id"]
    user = {
        'user_id': f'{data}'
    }

    try:
        table.delete_item(Key=user)
        statusCode = 200
        responseBody = f'Deleted user_id: {data}!'

    except:
        statusCode = 404
        responseBody = f'Error! Could not delete with user_id: {data}'

    print(responseBody)

    response = {
        "statusCode": statusCode,
        "headers": {
            'Content-Type': "application/json",
            "access-control-allow-origin": "*"
        },
        "body": responseBody
    }

    return response

