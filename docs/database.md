# Database Guide

SQLite is the beginner-friendly default database. PostgreSQL is optional future work.

## MVP Entities

- Intern
- Resource
- Task
- DailyUpdate
- QATestCase
- BugReport
- AIPromptTemplate

## Suggested Relationships

- An intern can own many tasks.
- An intern can submit many daily updates.
- A resource can be linked to a role, topic, and week.
- A QA test case belongs to a feature code.
- A bug report can reference a feature code and suggested owner.

## Starter Rules

- Task status: `todo`, `in_progress`, `review`, `done`
- Priority: `low`, `medium`, `high`
- Confidence score: 1 to 5
- Severity: `low`, `medium`, `high`, `critical`
- Feature codes: `F1` through `F10`

## Seed Data

The starter seed script is `scripts/seed_data.py`. It currently prints the seed payload so interns can inspect the data safely before database insertion is added.

Later implementation should:

1. Create tables with SQLAlchemy models.
2. Insert the six intern profiles.
3. Insert starter resources, tasks, and QA cases.
4. Make the seed command safe to run more than once.

## Local Reset

When SQLite is connected, local reset should be documented as:

```powershell
Remove-Item backend\skillbridge.db
python scripts/seed_data.py
```

Only delete local development databases. Never delete production or shared mentor data.
