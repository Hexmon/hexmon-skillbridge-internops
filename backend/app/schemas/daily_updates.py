from datetime import date, datetime, timezone

from pydantic import BaseModel, Field


class DailyUpdateCreate(BaseModel):
    intern_id: int
    date: date
    done: str = Field(min_length=1)
    blockers: str = "None"
    next_action: str = Field(min_length=1)
    confidence_score: int = Field(ge=1, le=5)


class DailyUpdateRead(DailyUpdateCreate):
    id: int
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
