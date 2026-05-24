from typing import Literal

from pydantic import BaseModel, Field

from app.schemas.common import FeatureCode, Severity


class QATestCaseBase(BaseModel):
    feature_code: FeatureCode
    title: str
    type: Literal["positive", "negative", "edge", "mobile", "accessibility"]
    steps: list[str]
    expected_result: str
    status: Literal["draft", "ready", "passed", "failed"] = "draft"


class QATestCaseCreate(QATestCaseBase):
    pass


class QATestCaseRead(QATestCaseBase):
    id: str


class BugReportCreate(BaseModel):
    title: str
    feature_code: FeatureCode
    severity: Severity = "medium"
    environment: str
    steps_to_reproduce: list[str] = Field(min_length=1)
    expected: str
    actual: str
    owner_id: int | None = None


class BugReportRead(BugReportCreate):
    id: int
    status: Literal["open", "triage", "fixed"] = "open"
