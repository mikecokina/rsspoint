import asyncio

import requests
from bs4 import BeautifulSoup


DEFAULT_IMAGE = "https://www.joomlashine.com/images/easyblog_articles/505/how-to-create-rss-feed-joomla-3x.jpg"

MAX_CONCURRENCY = 200
sem = asyncio.Semaphore(MAX_CONCURRENCY)
session = requests.Session()


async def get_meta(link):
    async with sem:
        html_text = requests.get(link).text
        soup = BeautifulSoup(html_text, 'html.parser')
        image = [meta.get("content") for meta in soup.find_all('meta') if meta.get("property") == "og:image"]
        return {"image": image[0] if len(image) > 0 else DEFAULT_IMAGE, "link": link}


async def asyncio_parse_meta_from_rss_entry(links):
    aio_tasks = [get_meta(link=link) for link in links]
    return await asyncio.gather(*aio_tasks, return_exceptions=True)


def thread_parse_meta_from_rss_entry(link):
    html_text = session.get(link).text
    soup = BeautifulSoup(html_text, 'html.parser')

    default_image = "https://www.joomlashine.com/images/easyblog_articles/505/how-to-create-rss-feed-joomla-3x.jpg"
    image = [meta.get("content") for meta in soup.find_all('meta') if meta.get("property") == "og:image"]

    return {
        "image": image[0] if len(image) > 0 else default_image,
        "link": link
    }
