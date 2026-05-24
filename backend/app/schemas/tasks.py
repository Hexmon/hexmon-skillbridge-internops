from pydantic import BaseModel

from app.schemas.common import FeatureCode, Priority, TaskStatus


class TaskBase(BaseModel):
    title: str
    feature_code: FeatureCode
    owner_id: int | None = None
    owner_name: str = "Unassigned"
    status: TaskStatus = "todo"
    priority: Priority = "medium"
    due_week: int | None = None
    issue_url: str | None = None


class TaskCreate(TaskBase):
    pass


class TaskPatch(BaseModel):
    owner_id: int | None = None
    owner_name: str | None = None
    status: TaskStatus | None = None
    priority: Priority | None = None
    due_week: int | None = None
    issue_url: str | None = None


class TaskRead(TaskBase):
    id: int
