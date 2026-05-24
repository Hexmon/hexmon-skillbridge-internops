from fastapi import APIRouter

from app.schemas.mentor import MentorSummary
from app.services import starter_store

router = APIRouter(prefix="/api/mentor", tags=["mentor"])


@router.get("/summary", response_model=MentorSummary)
def get_mentor_summary() -> MentorSummary:
    open_tasks = [task for task in starter_store.tasks if task.status != "done"]
    blockers = [update for update in starter_store.daily_updates if update.blockers.lower() != "none"]
    ready_cases = [case for case in starter_store.qa_test_cases if case.status == "ready"]

    return MentorSummary(
        intern_count=len(starter_store.interns),
        open_task_count=len(open_tasks),
        blocker_count=len(blockers),
        ready_test_case_count=len(ready_cases),
        summary="Starter scaffold is ready. Replace in-memory data with database-backed services during the feature tickets.",
    )
