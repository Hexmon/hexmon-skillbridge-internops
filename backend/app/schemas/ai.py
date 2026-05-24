from pydantic import BaseModel, Field


class AICoachRequest(BaseModel):
    question: str = Field(min_length=3)
    role: str | None = None
    week: int | None = None


class AICoachResponse(BaseModel):
    answer: str
    suggested_next_steps: list[str]
    suggested_resources: list[str]
    mode: str = "rule-based-fallback"


class UpdateSummaryRequest(BaseModel):
    week: int
    updates: list[str]


class UpdateSummaryResponse(BaseModel):
    summary: str
    blockers: list[str]
    next_actions: list[str]
    mode: str = "rule-based-fallback"
