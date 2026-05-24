from pydantic import BaseModel


class InternRead(BaseModel):
    id: int
    name: str
    primary_role: str
    secondary_role: str
    availability: str = "Weekday internship hours"
    current_focus: str
