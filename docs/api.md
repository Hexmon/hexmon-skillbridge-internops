# API Contract

The API contract is the agreement between frontend, backend, database, AI, and QA owners. Do not casually change endpoint shapes after teammates start using them.

## Endpoint Catalog

| Method | Endpoint | Purpose |
| --- | --- | --- |
| GET | `/health` | Health check for frontend and deployment |
| GET | `/api/interns` | List intern profiles, roles, availability, and dependencies |
| GET | `/api/interns/{intern_id}` | Show one intern profile |
| GET | `/api/resources` | List learning resources filtered by topic, role, or week |
| POST | `/api/resources` | Add a resource after review |
| GET | `/api/tasks` | List project tasks and filters |
| POST | `/api/tasks` | Create a new project task/ticket |
| PATCH | `/api/tasks/{task_id}` | Update status, owner, priority, or due week |
| GET | `/api/daily-updates` | List daily updates |
| POST | `/api/daily-updates` | Create an update with done/blocker/next fields |
| GET | `/api/qa/test-cases` | List QA cases by feature |
| POST | `/api/qa/test-cases` | Create a manual test case |
| POST | `/api/qa/bug-reports` | Create a bug report |
| GET | `/api/mentor/summary` | Mentor dashboard summary |
| POST | `/api/ai/coach` | Ask the AI coach a project or learning question |
| POST | `/api/ai/summarize-updates` | Summarize daily updates into a weekly mentor report |

## Example Daily Update

Request:

```json
{
  "intern_id": 3,
  "date": "2026-05-22",
  "done": "Created first AI prompt template",
  "blockers": "Need backend endpoint structure",
  "next_action": "Connect AI coach form to backend",
  "confidence_score": 4
}
```

Response:

```json
{
  "id": 101,
  "intern_id": 3,
  "date": "2026-05-22",
  "done": "Created first AI prompt template",
  "blockers": "Need backend endpoint structure",
  "next_action": "Connect AI coach form to backend",
  "confidence_score": 4,
  "created_at": "2026-05-22T10:30:00Z"
}
```

## Example Bug Report

Request:

```json
{
  "title": "Task board filter shows completed tasks in open list",
  "feature_code": "F3",
  "severity": "medium",
  "environment": "Chrome, Windows, frontend localhost:5173",
  "steps_to_reproduce": [
    "Open Tasks page",
    "Select status filter: Open",
    "Observe completed cards still visible"
  ],
  "expected": "Only open tasks should appear",
  "actual": "Completed tasks are also visible",
  "owner_id": 4
}
```

## Response Rules

- Return JSON from all API routes.
- Use clear validation errors for missing or invalid fields.
- Keep IDs numeric in the MVP.
- Use ISO dates for API payloads.
- Update this document in the same pull request as any API behavior change.
