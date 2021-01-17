__all__ = ['router']

from fastapi import APIRouter

router: APIRouter = APIRouter()


@router.get("/ping/", tags=["heartbit", "ping"])
async def ping():
    return ["pong"]
