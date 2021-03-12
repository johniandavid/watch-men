from decimal import Decimal

def _parse_name(parsed_url,soup):

    if parsed_url.hostname == "www.uniqlo.com":
        print("This is from Uniqlo")
        return soup.find(class_="product-name").string if soup.find(class_="product-name") != None else ""
    elif parsed_url.hostname == "www.asos.com":
        print("This is from ASOS")
    elif parsed_url.hostname == "www.ulta.com":
        print("This is from Ulta")
    elif parsed_url.hostname == "www.urbanoutfitters.com":
        print("This is from Urban Outfitters")
        return soup.find(class_="c-pwa-product-meta-heading").string.strip() if soup.find(class_="c-pwa-product-meta-heading") != None else ""

def _parse_price(parsed_url, soup):

    if parsed_url.hostname == "www.uniqlo.com":
        print("This is from Uniqlo")
        return Decimal(soup.find_all(attrs={"itemprop": "price"})[-1].string) if soup.find_all(attrs={"itemprop": "price"})[-1] != None else ""
    elif parsed_url.hostname == "www.asos.com":
        print("This is from ASOS")
    elif parsed_url.hostname == "www.ulta.com":
        print("This is from Ulta")
    elif parsed_url.hostname == "www.urbanoutfitters.com":
        print("This is from Urban Outfitters")
        return float(soup.find(class_="c-pwa-product-price__current").string[1:])

def _parse_image(parsed_url, soup):

    if parsed_url.hostname == "www.uniqlo.com":
        print("This is from Uniqlo")
        return soup.find(class_="productthumbnail")["src"][0:-9] if soup.find(class_="productthumbnail")["src"] != None else ""
    elif parsed_url.hostname == "www.asos.com":
        print("This is from ASOS")
    elif parsed_url.hostname == "www.ulta.com":
        print("This is from Ulta")
    elif parsed_url.hostname == "www.urbanoutfitters.com":
        print("This is from Urban Outfitters")
        return soup.find(class_="c-pwa-image-viewer__img js-pwa-faceout-image")["src"] if soup.find(class_="c-pwa-image-viewer__img js-pwa-faceout-image")["src"] != None else ""

