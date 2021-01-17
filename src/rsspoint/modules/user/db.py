from sqlalchemy import Column, Integer, String
from rsspoint.modules.core.db import Base

__all__ = ['User']


class User(Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True)
    username = Column(String, unique=True, nullable=False)
