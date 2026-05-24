from fastapi import APIRouter

from app.schemas.ai import AICoachRequest, AICoachResponse, UpdateSummaryRequest, UpdateSummaryResponse
from app.services.ai_service import coach_response, summarize_updates

router = APIRouter(prefix="/api/ai", tags=["ai"])


@router.post("/coach", response_model=AICoachResponse)
def ask_ai_coach(payload: AICoachRequest) -> AICoachResponse:
    return coach_response(payload)


@router.post("/summarize-updates", response_model=UpdateSummaryResponse)
def summarize_daily_updates(payload: UpdateSummaryRequest) -> UpdateSummaryResponse:
    return summarize_updates(payload)
