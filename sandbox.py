import requests
import json
from rsspoint.rss import transform, core

RSS_FEED = "http://www.dsl.sk/export/rss_articles.php"


def main():
    rss_feed = core.get_json_feed(RSS_FEED)
    print(json.dumps(rss_feed, indent=4))


if __name__ == '__main__':
    main()
