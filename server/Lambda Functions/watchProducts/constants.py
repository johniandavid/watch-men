import json

with open('./config.json', 'r') as f:
    config = json.load(f)

ACCOUNT_SID = config["twilio"]["account_sid"]
AUTH_TOKEN = config["twilio"]["auth_token"]
TO_PHONE_NUMBER = config["twilio"]["To"]