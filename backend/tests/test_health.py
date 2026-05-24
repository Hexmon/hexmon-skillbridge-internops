from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_health_returns_ok() -> None:
    response = client.get("/health")

    assert response.status_code == 200
    assert response.json()["status"] == "ok"


def test_interns_endpoint_returns_seeded_team() -> None:
    response = client.get("/api/interns")

    assert response.status_code == 200
    assert len(response.json()) == 6


def test_ai_coach_fallback_returns_next_steps() -> None:
    response = client.post("/api/ai/coach", json={"question": "How do I start a task?"})

    assert response.status_code == 200
    assert response.json()["mode"] == "rule-based-fallback"
    assert response.json()["suggested_next_steps"]
