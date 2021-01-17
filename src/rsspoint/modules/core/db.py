from sqlalchemy.engine import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.util.compat import contextmanager
from sqlalchemy.orm import sessionmaker


from rsspoint import settings

__all__ = (
    'Base',
    'get_session',
    'SessionMaker',
)


engine = create_engine(
    settings.DATABASE_URL,
    # pool_size=settings.DB_POOL_SIZE,
    # max_overflow=settings.DB_MAX_OVERFLOW,
    # pool_timeout=0,
)

Base = declarative_base(bind=engine)
SessionMaker = sessionmaker(bind=engine)


@contextmanager
def get_session():
    session = SessionMaker()
    try:
        yield session
    finally:
        session.close()
