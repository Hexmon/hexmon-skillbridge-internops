from fastapi import APIRouter, HTTPException

from app.schemas.interns import InternRead
from app.services import starter_store

router = APIRouter(prefix="/api/interns", tags=["interns"])


@router.get("", response_model=list[InternRead])
def list_interns() -> list[InternRead]:
    return starter_store.interns


@router.get("/{intern_id}", response_model=InternRead)
def get_intern(intern_id: int) -> InternRead:
    for intern in starter_store.interns:
        if intern.id == intern_id:
            return intern

    raise HTTPException(status_code=404, detail="Intern not found")
