import requests
from rsspoint.rss import transform


def get_url(url):
    # requires error handling
    return requests.get(url).content


def get_json_feed(url):
    xml_bytes = get_url(url)
    return transform.xml_to_json(xml_bytes)
