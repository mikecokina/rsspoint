from starlette.middleware.cors import CORSMiddleware

from rsspoint import settings
from fastapi import FastAPI, APIRouter
from rsspoint.modules import (
    heartbeat,
    user,
    feed,
)

app = FastAPI(
    debug=settings.DEBUG,
    title=settings.PROJECT_NAME
)

# middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

router: APIRouter = APIRouter()
router.include_router(heartbeat.router.router)
router.include_router(user.router.router)
router.include_router(feed.router.router)
app.include_router(router, prefix=settings.MOUNT_POINT)


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, debug=True)
