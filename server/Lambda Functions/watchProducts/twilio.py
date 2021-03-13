import requests
import json
from constants import ACCOUNT_SID, AUTH_TOKEN, TO_PHONE_NUMBER

def send_twilio_message(phone_number, message):

    TWILIO_URI = f"https://api.twilio.com/2010-04-01/Accounts/{ACCOUNT_SID}/Messages.json"

    payload = {
        "To": f'+1{phone_number}',
        "From": TO_PHONE_NUMBER,
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
    send_twilio_message("2099142441","Test")