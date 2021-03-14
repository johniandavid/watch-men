import json

with open('./config.json', 'r') as f:
    config = json.load(f)

ACCOUNT_SID = config["twilio"]["ACCOUNT_SID"]
AUTH_TOKEN = config["twilio"]["AUTH_TOKEN"]
TO_PHONE_NUMBER = config["twilio"]["To"]