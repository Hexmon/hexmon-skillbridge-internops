from datetime import date

from app.schemas.daily_updates import DailyUpdateCreate, DailyUpdateRead
from app.schemas.interns import InternRead
from app.schemas.qa import BugReportRead, QATestCaseRead
from app.schemas.resources import ResourceRead
from app.schemas.tasks import TaskRead

interns: list[InternRead] = [
    InternRead(
        id=1,
        name="Biswajeet Kar",
        primary_role="Full-Stack Integration Lead",
        secondary_role="DevOps and AI Prototype Support",
        current_focus="Repo scaffold and integration shell",
    ),
    InternRead(
        id=2,
        name="Jiban Jyoti Martha",
        primary_role="QA and Reliability Engineer",
        secondary_role="Mobile UX and DevOps Support",
        current_focus="Manual test cases and smoke checklist",
    ),
    InternRead(
        id=3,
        name="Andole Aasritha Sai",
        primary_role="AI/ML and NLP Feature Developer",
        secondary_role="Backend Integration and Documentation Support",
        current_focus="AI fallback scope and prompt templates",
    ),
    InternRead(
        id=4,
        name="K. Rajesh",
        primary_role="Frontend UI/UX Developer",
        secondary_role="Product Research Support",
        current_focus="App shell, design tokens, and responsive pages",
    ),
    InternRead(
        id=5,
        name="SOHAIL ALAM",
        primary_role="Database and Data Quality Developer",
        secondary_role="QA and Research Support",
        current_focus="Schema draft and seed data",
    ),
    InternRead(
        id=6,
        name="S yatish sunder",
        primary_role="Backend API Developer",
        secondary_role="Full-Stack and AI Integration Support",
        current_focus="FastAPI skeleton and endpoint contracts",
    ),
]

resources: list[ResourceRead] = [
    ResourceRead(
        id=1,
        title="React components and props",
        role="Frontend UI/UX Developer",
        topic="React",
        week=3,
        type="doc",
        url="https://react.dev/learn/your-first-component",
    ),
    ResourceRead(
        id=2,
        title="FastAPI first steps",
        role="Backend API Developer",
        topic="FastAPI",
        week=3,
        type="doc",
        url="https://fastapi.tiangolo.com/tutorial/first-steps/",
    ),
    ResourceRead(
        id=3,
        title="SQLAlchemy unified tutorial",
        role="Database and Data Quality Developer",
        topic="Database",
        week=4,
        type="doc",
        url="https://docs.sqlalchemy.org/en/20/tutorial/",
    ),
]

tasks: list[TaskRead] = [
    TaskRead(
        id=1,
        title="Create shared architecture doc",
        feature_code="F9",
        owner_id=1,
        owner_name="Biswajeet Kar",
        status="review",
        priority="medium",
        due_week=2,
    ),
    TaskRead(
        id=2,
        title="Build resources page filters",
        feature_code="F2",
        owner_id=4,
        owner_name="K. Rajesh",
        status="todo",
        priority="high",
        due_week=5,
    ),
    TaskRead(
        id=3,
        title="Implement daily updates endpoint",
        feature_code="F4",
        owner_id=6,
        owner_name="S yatish sunder",
        status="in_progress",
        priority="high",
        due_week=6,
    ),
]

daily_updates: list[DailyUpdateRead] = [
    DailyUpdateRead(
        id=1,
        intern_id=4,
        date=date(2026, 5, 22),
        done="Created first app shell layout.",
        blockers="Waiting for confirmed task schema.",
        next_action="Wire task board to backend contract.",
        confidence_score=4,
    )
]

qa_test_cases: list[QATestCaseRead] = [
    QATestCaseRead(
        id="F1-P1",
        feature_code="F1",
        title="Intern directory shows seeded interns",
        type="positive",
        steps=["Open intern directory", "Review visible profiles"],
        expected_result="All six intern profiles are visible.",
        status="ready",
    ),
    QATestCaseRead(
        id="F3-M1",
        feature_code="F3",
        title="Task board fits mobile width",
        type="mobile",
        steps=["Open tasks page at narrow viewport", "Check horizontal scrolling"],
        expected_result="No content overflows horizontally.",
        status="draft",
    ),
]

bug_reports: list[BugReportRead] = [
    BugReportRead(
        id=1,
        title="Example bug: task filter includes wrong status",
        feature_code="F3",
        severity="medium",
        environment="Chrome, Windows, frontend localhost:5173",
        steps_to_reproduce=["Open Tasks page", "Select status filter Done"],
        expected="Only done tasks are visible.",
        actual="Starter example for QA training.",
        status="triage",
    )
]


def next_resource_id() -> int:
    return max((resource.id for resource in resources), default=0) + 1


def next_task_id() -> int:
    return max((task.id for task in tasks), default=0) + 1


def next_daily_update_id() -> int:
    return max((update.id for update in daily_updates), default=0) + 1


def next_test_case_id(feature_code: str) -> str:
    return f"{feature_code}-CUSTOM-{len(qa_test_cases) + 1}"


def next_bug_report_id() -> int:
    return max((bug.id for bug in bug_reports), default=0) + 1


def make_daily_update(payload: DailyUpdateCreate) -> DailyUpdateRead:
    return DailyUpdateRead(id=next_daily_update_id(), **payload.model_dump())
