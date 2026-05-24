from fastapi import APIRouter

from app.schemas.resources import ResourceCreate, ResourceRead
from app.services import starter_store

router = APIRouter(prefix="/api/resources", tags=["resources"])


@router.get("", response_model=list[ResourceRead])
def list_resources(role: str | None = None, topic: str | None = None, week: int | None = None) -> list[ResourceRead]:
    resources = starter_store.resources

    if role:
        resources = [resource for resource in resources if resource.role == role]
    if topic:
        resources = [resource for resource in resources if resource.topic == topic]
    if week:
        resources = [resource for resource in resources if resource.week == week]

    return resources


@router.post("", response_model=ResourceRead, status_code=201)
def create_resource(payload: ResourceCreate) -> ResourceRead:
    resource = ResourceRead(id=starter_store.next_resource_id(), **payload.model_dump())
    starter_store.resources.append(resource)
    return resource
