"""Print the starter seed payload for the Hexmon SkillBridge project.

The first scaffold keeps this script database-safe by printing JSON. During the
database ticket, connect this payload to SQLAlchemy models and make seeding
idempotent.
"""

from __future__ import annotations

import json


SEED_DATA = {
    "interns": [
        {
            "id": 1,
            "name": "Biswajeet Kar",
            "primary_role": "Full-Stack Integration Lead",
            "secondary_role": "DevOps and AI Prototype Support",
        },
        {
            "id": 2,
            "name": "Jiban Jyoti Martha",
            "primary_role": "QA and Reliability Engineer",
            "secondary_role": "Mobile UX and DevOps Support",
        },
        {
            "id": 3,
            "name": "Andole Aasritha Sai",
            "primary_role": "AI/ML and NLP Feature Developer",
            "secondary_role": "Backend Integration and Documentation Support",
        },
        {
            "id": 4,
            "name": "K. Rajesh",
            "primary_role": "Frontend UI/UX Developer",
            "secondary_role": "Product Research Support",
        },
        {
            "id": 5,
            "name": "SOHAIL ALAM",
            "primary_role": "Database and Data Quality Developer",
            "secondary_role": "QA and Research Support",
        },
        {
            "id": 6,
            "name": "S yatish sunder",
            "primary_role": "Backend API Developer",
            "secondary_role": "Full-Stack and AI Integration Support",
        },
    ],
    "resources": [
        {
            "title": "React components and props",
            "role": "Frontend UI/UX Developer",
            "topic": "React",
            "week": 3,
            "type": "doc",
            "url": "https://react.dev/learn/your-first-component",
        },
        {
            "title": "FastAPI first steps",
            "role": "Backend API Developer",
            "topic": "FastAPI",
            "week": 3,
            "type": "doc",
            "url": "https://fastapi.tiangolo.com/tutorial/first-steps/",
        },
        {
            "title": "SQLAlchemy unified tutorial",
            "role": "Database and Data Quality Developer",
            "topic": "Database",
            "week": 4,
            "type": "doc",
            "url": "https://docs.sqlalchemy.org/en/20/tutorial/",
        },
    ],
    "tasks": [
        {
            "title": "Create shared architecture doc",
            "feature_code": "F9",
            "owner_name": "Biswajeet Kar",
            "status": "review",
            "priority": "medium",
            "due_week": 2,
        },
        {
            "title": "Build resources page filters",
            "feature_code": "F2",
            "owner_name": "K. Rajesh",
            "status": "todo",
            "priority": "high",
            "due_week": 5,
        },
        {
            "title": "Implement daily updates endpoint",
            "feature_code": "F4",
            "owner_name": "S yatish sunder",
            "status": "in_progress",
            "priority": "high",
            "due_week": 6,
        },
    ],
    "qa_test_cases": [
        {
            "id": "F1-P1",
            "feature_code": "F1",
            "title": "Intern directory shows seeded interns",
            "type": "positive",
            "expected_result": "All six intern profiles are visible.",
        },
        {
            "id": "F3-M1",
            "feature_code": "F3",
            "title": "Task board fits mobile width",
            "type": "mobile",
            "expected_result": "No content overflows horizontally.",
        },
    ],
}


def main() -> None:
    print(json.dumps(SEED_DATA, indent=2))


if __name__ == "__main__":
    main()
