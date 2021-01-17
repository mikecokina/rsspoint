from typing import List
from rsspoint.rss import parser as rss_parser


def feed_serializer(instances):
    raise NotImplemented("")


def feed_content_serializer(rss_feeds: List, db_entries: List):
    _serialized = []
    for db_entry, rss_feed in zip(db_entries, rss_feeds):
        title = rss_parser.get_title(rss_feed)
        description = rss_parser.get_description(rss_feed)
        link = rss_parser.get_link(rss_feed)

        for item in rss_parser.get_items(rss_feed):
            _serialized.append(
                {
                    "user.name": db_entry.name,
                    "channel.title": title,
                    "channel.link": link,
                    "channel.description": description,
                    "item.title": item["title"],
                    "item.link": item["link"],
                    "item.description": item["description"],
                    "item.date": rss_parser.parse_date(item["pubDate"])
                }
            )

    return _serialized
