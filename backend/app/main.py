from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes import ai, daily_updates, interns, mentor, qa, resources, tasks

app = FastAPI(title="Hexmon SkillBridge InternOps API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://192.168.0.18:5173",
        "http://192.168.1.40:5173",
        "http://192.168.1.37:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health", tags=["health"])
def health() -> dict[str, str]:
    return {"status": "ok", "service": "hexmon-skillbridge-internops-api"}


app.include_router(interns.router)
app.include_router(resources.router)
app.include_router(tasks.router)
app.include_router(daily_updates.router)
app.include_router(qa.router)
app.include_router(ai.router)
app.include_router(mentor.router)
