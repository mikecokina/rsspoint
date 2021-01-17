from typing import List

from rsspoint.modules.feed import serializer
from rsspoint.rss.core import get_json_feed
from rsspoint.rss import parser as rss_parser
from rsspoint.modules.feed.db import Feed


def create_entry(url, name, user_info, session):
    rss_feed = get_json_feed(url)
    title = rss_parser.get_title(rss_feed)
    description = rss_parser.get_description(rss_feed)
    link = rss_parser.get_link(rss_feed)

    f = Feed(url=url, name=name, title=title, link=link, description=description, user_id=user_info["id"])
    session.add(f)
    session.commit()
    session.refresh(f)

    return {
        "id": f.id,
        "title": f.title,
        "link": f.link,
        "description": f.description,
        "url": f.url,
        "name": f.name,
        "user": user_info
    }


def _get_rss_content(instances: List[Feed]) -> List:
    return [get_json_feed(instance.url) for instance in instances]


def get_feed_content(user_info, session):
    data = session.query(Feed).filter(Feed.user_id == user_info["id"]).all()
    feeds = _get_rss_content(data)
    return serializer.feed_content_serializer(feeds, data)
