import requests
import json

with open('./config.json', 'r') as f:
    config = json.load(f)

def send_twilio_message(phone_number, message):
    ACCOUNT_SID = config["twilio"]["ACCOUNT_SID"]
    AUTH_TOKEN = config["twilio"]["AUTH_TOKEN"]
    TWILIO_URI = f"https://api.twilio.com/2010-04-01/Accounts/{ACCOUNT_SID}/Messages.json"

    payload = {
        "To": f"+1{phone_number}",
        "From": f'{config["twilio"]["To"]}',
        "Body": message
    }

    try:
        response = requests.post(TWILIO_URI, auth=(ACCOUNT_SID, AUTH_TOKEN), data=payload)

        response.raise_for_status()
    except Exception as err:
        print(response.text)
        print(f'Other error occurred: {err}')
    else:
        print(f'Success! sent message to {phone_number}')


if __name__ == "__main__":
    send_twilio_message("2099142441","Hello")