from typing import Dict
from datetime import datetime
import feedparser.datetimes

# fixme: handle multiple channels


def get_title(rss_feed: Dict):
    return rss_feed["rss"]["channel"]["title"]


def get_description(rss_feed: Dict):
    return rss_feed["rss"]["channel"]["description"]


def get_link(rss_feed: Dict):
    return rss_feed["rss"]["channel"]["link"]


def get_items(rss_feed: Dict):
    return rss_feed["rss"]["channel"]["item"]


def parse_date(pub_date):
    dt = feedparser.datetimes._parse_date(pub_date)
    return datetime(dt.tm_year, dt.tm_mon, dt.tm_mday, dt.tm_hour, dt.tm_min, dt.tm_sec)
