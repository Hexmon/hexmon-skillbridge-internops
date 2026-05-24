# Architecture

The platform has four main runtime layers plus the GitHub workflow around them.

## Browser And Frontend

The React/Vite frontend renders the intern-facing and mentor-facing screens:

- Home
- Intern Dashboard
- Resources
- Tasks
- Daily Updates
- AI Coach
- QA Center
- Mentor Dashboard
- Docs Hub

The frontend should call backend endpoints through a small service layer instead of placing raw `fetch` calls across every component.

## Backend API

The FastAPI backend owns validation, route structure, service logic, and future database access.

Starter route groups:

- `/api/interns`
- `/api/resources`
- `/api/tasks`
- `/api/daily-updates`
- `/api/qa`
- `/api/ai`
- `/api/mentor`

## Database

SQLite is the default local database. SQLAlchemy should be used for models, relationships, seed data, and query helpers. PostgreSQL can be introduced later only after the local workflow is stable.

## AI Layer

AI features must work without a paid API key. The first implementation should be rule-based or template-based:

- AI coach answers beginner project questions.
- Resource recommender maps role/topic/week to starter resources.
- Daily update summarizer turns updates into mentor-friendly summaries.

External AI providers are optional future work and require mentor approval for cost, privacy, and key management.

## GitHub Workflow

Issues define work, branches isolate changes, pull requests provide review, and GitHub Actions run starter checks. Every feature should update docs and QA materials when behavior changes.
