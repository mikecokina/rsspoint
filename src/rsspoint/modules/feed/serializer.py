from multiprocessing.pool import ThreadPool
from typing import List
from rsspoint.rss import parser as rss_parser, og_meta


def feed_serializer(instances):
    raise NotImplemented("")


def feed_content_serializer(rss_feeds: List, db_entries: List):
    _serialized = dict()

    for db_entry, rss_feed in zip(db_entries, rss_feeds):
        for item in rss_feed.entries:
            _serialized[item["link"]] = {
                "channel__name": db_entry.name,
                "channel__title": rss_feed.feed.title,
                "channel__link": rss_feed.feed.link,
                "channel__description": rss_feed.feed.subtitle,
                "item__title": item.title,
                "item__link": item.link,
                "item__description": item.summary,
                "item__date": item.published,
                "item__og_image": None
            }

    pool_size = 15
    # metadata = []
    # with ThreadPool(pool_size) as pool:
    #     async_results = [pool.apply_async(og_meta.parse_meta_from_rss_entry, (_, )) for _ in _serialized]
    #     metadata.append([r.get() for r in async_results])
    #
    # for item in [inner for outter in metadata for inner in outter]:
    #     _serialized[item["link"]]["item__og_image"] = item["og_image"]
    return [item for item in _serialized.values()]
