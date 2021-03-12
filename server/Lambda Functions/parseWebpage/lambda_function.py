import json
import datetime
import uuid
import requests

from bs4 import BeautifulSoup
from urllib.parse import urlparse
from parser import _parse_name, _parse_price, _parse_image


def lambda_handler(event, context):
    url = event["url"]

    HEADERS = ({'User-Agent':
                    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.192 Safari/537.36",
                'Accept-Language': 'en-US, en;q=0.5'})
    try:
        response = requests.get(url, headers=HEADERS)
        response.raise_for_status()

    except Exception as err:
        print(f'Other error occurred: {err}')

    else:
        html = response.text

        parsed_url = urlparse(url)
        soup = BeautifulSoup(html, 'html.parser')

        name = _parse_name(parsed_url, soup)
        price = _parse_price(parsed_url, soup)
        image = _parse_image(parsed_url, soup)

        product = {
            'product_id': f'{uuid.uuid4()}',
            'name': f'{name}',
            'price': f'{price}',
            'url': f'{url}',
            'image': f"{image}",
            'last_modified': f"{datetime.datetime.now()}"
        }
        return product
