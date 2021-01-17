import json
import logging
import os
import warnings
from configparser import ConfigParser
from os.path import dirname
from logging import config as log_conf

c_parse = ConfigParser()

env_variable_config = os.environ.get('RSSPOINT_CONFIG', '')
venv_config = os.path.join(os.environ.get('VIRTUAL_ENV', ''), 'conf', 'rsspoint.ini')
default_config = os.path.join(os.path.dirname(os.path.abspath(__file__)), "config.ini")

# read configuration file
if os.path.isfile(env_variable_config):
    config_file = env_variable_config
elif os.path.isfile(venv_config):
    config_file = venv_config
elif os.path.isfile(default_config):
    config_file = default_config
else:
    raise LookupError("Couldn't resolve configuration file. To define it \n "
                      "  - Set the environment variable RSSPOINT_CONFIG, or \n "
                      "  - Add conf/rsspoint.ini under your virtualenv root \n ")


class _Const(object):
    PROJECT_NAME = "rsspoint"


class Settings(_Const):
    _instance = None

    CONFIG_FILE = config_file
    LOG_CONFIG = os.path.join(dirname(os.path.abspath(__file__)), 'logging.json')
    DEBUG = True
    MOUNT_POINT = ""
    DB_MAX_OVERFLOW = 10
    DB_POOL_SIZE = 10
    DATABASE_URL = "sqlite:////home/mike/Python/rsspoint/rsspoint.db"

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(Settings, cls).__new__(cls)

            # Put any initialization here.
            cls.read_and_update_config()

        return cls._instance

    @classmethod
    def read_and_update_config(cls, conf_path=None):
        if not conf_path:
            conf_path = cls.CONFIG_FILE

        if not os.path.isfile(conf_path):
            msg = (
                "Couldn't find configuration file. Using default settings.\n"
                "   To customize configuration using file either\n"
                "    - specify config with environment variable RSSPOINT_CONFIG\n"
                "    - add conf/rsspoint.ini under your virtualenv root \n")
            warnings.warn(msg, Warning)
            return

        c_parse.read(conf_path)

    @classmethod
    def set_up_logging(cls):
        if os.path.isfile(cls.LOG_CONFIG):
            with open(cls.LOG_CONFIG) as f:
                conf_dict = json.loads(f.read())
            log_conf.dictConfig(conf_dict)
        else:
            logging.basicConfig(level=logging.INFO)


settings = Settings()
