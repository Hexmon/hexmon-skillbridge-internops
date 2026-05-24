from fastapi import APIRouter, HTTPException

from app.schemas.tasks import TaskCreate, TaskPatch, TaskRead
from app.services import starter_store

router = APIRouter(prefix="/api/tasks", tags=["tasks"])


@router.get("", response_model=list[TaskRead])
def list_tasks(status: str | None = None, owner_id: int | None = None) -> list[TaskRead]:
    tasks = starter_store.tasks

    if status:
        tasks = [task for task in tasks if task.status == status]
    if owner_id:
        tasks = [task for task in tasks if task.owner_id == owner_id]

    return tasks


@router.post("", response_model=TaskRead, status_code=201)
def create_task(payload: TaskCreate) -> TaskRead:
    task = TaskRead(id=starter_store.next_task_id(), **payload.model_dump())
    starter_store.tasks.append(task)
    return task


@router.patch("/{task_id}", response_model=TaskRead)
def update_task(task_id: int, payload: TaskPatch) -> TaskRead:
    for index, task in enumerate(starter_store.tasks):
        if task.id == task_id:
            updated = task.model_copy(update=payload.model_dump(exclude_unset=True))
            starter_store.tasks[index] = updated
            return updated

    raise HTTPException(status_code=404, detail="Task not found")
