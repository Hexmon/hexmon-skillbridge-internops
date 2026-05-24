from pydantic import BaseModel


class MentorSummary(BaseModel):
    intern_count: int
    open_task_count: int
    blocker_count: int
    ready_test_case_count: int
    summary: str
