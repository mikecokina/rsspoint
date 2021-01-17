import json
import xmltodict


def xml_to_json(xml):
    doc = xmltodict.parse(xml)
    feed = json.loads(json.dumps(doc))
    return feed
