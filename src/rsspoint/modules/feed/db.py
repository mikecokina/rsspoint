from sqlalchemy import Column, Integer, String, ForeignKey, Text
from sqlalchemy.orm import relationship, backref
from rsspoint.modules.user.db import User
from rsspoint.modules.core.db import Base

__all__ = ['Feed', 'Content']


class Feed(Base):
    __tablename__ = "feed"

    id = Column(Integer, primary_key=True)
    title = Column(String, unique=False, nullable=False)
    description = Column(String, unique=False, nullable=False)
    url = Column(String, unique=True, nullable=False)
    link = Column(String, unique=False, nullable=False)
    name = Column(String, unique=True, nullable=False)

    user_id = Column(Integer, ForeignKey(User.id, onupdate='CASCADE', ondelete='CASCADE'), name="user_id", index=True)
    user = relationship(User, backref=backref('feed', cascade='all, delete-orphan',
                                              passive_deletes=True, lazy='dynamic'))


class Content(Base):
    __tablename__ = "content"

    id = Column(Integer, primary_key=True)
    hash = Column(String, unique=True, nullable=False)
    image = Column(String, unique=True, nullable=False)
    content = Text()
