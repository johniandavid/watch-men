import requests

def send_twilio_message(phone_number, message):

    ACCOUNT_SID = "AC0388e3d447bdbab94b06987abcece99c"
    AUTH_TOKEN = "835278c3056c79d85938b0fb42003795"
    TWILIO_URI = f"https://api.twilio.com/2010-04-01/Accounts/{ACCOUNT_SID}/Messages.json"

    payload = {
        "To": f"+1{phone_number}",
        "From": "+19166941400",
        "Body": message
    }

    try:
        response = requests.post(TWILIO_URI, auth=(ACCOUNT_SID, AUTH_TOKEN), data=payload)

        response.raise_for_status()
    except HTTPError as http_err:
        print(f'HTTP error occurred: {http_err}')
    except Exception as err:
        print(f'Other error occurred: {err}') 
    else:
        print(f'Success! sent message to {phone_number}')