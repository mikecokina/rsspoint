__all__ = ['router']

from fastapi import APIRouter, HTTPException
from rsspoint.modules.user.db import User
from rsspoint.modules.user import crud
from rsspoint.modules.core.db import get_session

router: APIRouter = APIRouter()


@router.get("/user", tags=["user"])
async def user():
    with get_session() as session:
        data = session.query(User).all()
        return [{"id": record.id, "username": record.username} for record in data]


@router.get("/user/{uid}", tags=["user id info"])
async def user_info(uid):
    with get_session() as session:
        data = session.query(User)\
            .filter(User.id == uid)\
            .all()

        if len(data) == 0:
            raise HTTPException(status_code=404, detail=f"User with uid: {uid} not found.")

        return {"id": uid, "username": data[0].username}


@router.post("/user", tags=["create user"], status_code=201)
async def create_item(username):
    return crud.create_user(username=username)
