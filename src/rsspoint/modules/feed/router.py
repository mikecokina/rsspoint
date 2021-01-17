from fastapi import APIRouter, HTTPException
from rsspoint.modules.feed import crud
from rsspoint.modules import user
from rsspoint.modules.core.db import get_session

__all__ = ['router']

router: APIRouter = APIRouter()


@router.post("/feed", tags=["create feed entry"], status_code=201)
async def create_item(username, url, name):
    with get_session() as session:
        user_info = user.get_user(username, session)
        if not user_info:
            raise HTTPException(status_code=404, detail=f'User {username} not found.')
        return crud.create_entry(url, name, user_info, session)


@router.get("/feed/content", tags=["get feeds"], status_code=200)
async def get_user_feeds(username, filters=None):
    with get_session() as session:
        user_info = user.get_user(username, session)
        return crud.get_feed_content(user_info, session)
