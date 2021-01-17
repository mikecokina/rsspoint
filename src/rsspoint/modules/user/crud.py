from fastapi import HTTPException
from sqlalchemy.exc import IntegrityError

from rsspoint.modules.user import serializer
from rsspoint.modules.user.db import User
from rsspoint.modules.core.db import get_session

__all__ = [
    "create_user",
    "get_user",
]


def create_user(username):
    with get_session() as session:
        u = User(username=username)
        try:
            session.add(u)
            session.commit()
        except IntegrityError:
            session.rollback()
            raise HTTPException(status_code=409, detail=f"User with username: {username} already exists.")
        session.refresh(u)
        return serializer.user_serializer(u)


def get_user(username, session):
    data = session.query(User).filter(User.username == username).all()
    if len(data) > 0:
        return serializer.user_serializer(data[0])
    return {}
