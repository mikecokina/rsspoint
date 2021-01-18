import requests
from bs4 import BeautifulSoup


def parse_meta_from_rss_entry(link):
    html_text = requests.get(link).text
    soup = BeautifulSoup(html_text, 'html.parser')

    default_image = "https://www.joomlashine.com/images/easyblog_articles/505/how-to-create-rss-feed-joomla-3x.jpg"
    image = [meta.get("content") for meta in soup.find_all('meta') if meta.get("property") == "og:image"]

    return {
        "og_image": image[0] if len(image) > 0 else default_image,
        "link": link
    }
