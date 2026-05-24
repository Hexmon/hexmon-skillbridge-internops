from fastapi import APIRouter

from app.schemas.qa import BugReportCreate, BugReportRead, QATestCaseCreate, QATestCaseRead
from app.services import starter_store

router = APIRouter(prefix="/api/qa", tags=["qa"])


@router.get("/test-cases", response_model=list[QATestCaseRead])
def list_test_cases(feature_code: str | None = None) -> list[QATestCaseRead]:
    test_cases = starter_store.qa_test_cases

    if feature_code:
        test_cases = [case for case in test_cases if case.feature_code == feature_code]

    return test_cases


@router.post("/test-cases", response_model=QATestCaseRead, status_code=201)
def create_test_case(payload: QATestCaseCreate) -> QATestCaseRead:
    test_case = QATestCaseRead(id=starter_store.next_test_case_id(payload.feature_code), **payload.model_dump())
    starter_store.qa_test_cases.append(test_case)
    return test_case


@router.post("/bug-reports", response_model=BugReportRead, status_code=201)
def create_bug_report(payload: BugReportCreate) -> BugReportRead:
    bug_report = BugReportRead(id=starter_store.next_bug_report_id(), status="open", **payload.model_dump())
    starter_store.bug_reports.append(bug_report)
    return bug_report
