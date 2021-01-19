from feedparser import FeedParserDict


def parse_item_image_if_exists(feed_item: FeedParserDict) -> str:
    # search in links image/* type
    if len(feed_item.links) > 0:
        for link in feed_item.links:
            if hasattr(link, "type") and hasattr(link, "href"):
                if str(link.type).startswith("image"):
                    return link.href
