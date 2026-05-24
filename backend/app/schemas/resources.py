from typing import Literal

from pydantic import BaseModel, HttpUrl


class ResourceBase(BaseModel):
    title: str
    role: str
    topic: str
    week: int
    type: Literal["doc", "video", "exercise"]
    url: HttpUrl | str


class ResourceCreate(ResourceBase):
    pass


class ResourceRead(ResourceBase):
    id: int
