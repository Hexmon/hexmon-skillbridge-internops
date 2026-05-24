from fastapi import APIRouter

from app.schemas.daily_updates import DailyUpdateCreate, DailyUpdateRead
from app.services import starter_store

router = APIRouter(prefix="/api/daily-updates", tags=["daily updates"])


@router.get("", response_model=list[DailyUpdateRead])
def list_daily_updates(intern_id: int | None = None) -> list[DailyUpdateRead]:
    updates = starter_store.daily_updates

    if intern_id:
        updates = [update for update in updates if update.intern_id == intern_id]

    return updates


@router.post("", response_model=DailyUpdateRead, status_code=201)
def create_daily_update(payload: DailyUpdateCreate) -> DailyUpdateRead:
    update = starter_store.make_daily_update(payload)
    starter_store.daily_updates.append(update)
    return update
