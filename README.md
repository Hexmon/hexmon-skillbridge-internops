# Hexmon SkillBridge AI InternOps Platform

A learning-by-building intern project for hexmon technology Private Limited.

This repository starts as a guided scaffold for the six-intern team. It gives everyone a working project shape, local run commands, documentation, templates, and safe starter code so they can follow the curriculum PDF without getting blocked by missing folders or unclear setup.

## Repository Status

Starter scaffold prepared for interns.

The repository intentionally includes runnable placeholders instead of a finished product. Interns should build the real features through issues, branches, pull requests, reviews, testing evidence, and documentation updates.

## Main Modules

- Frontend: React + Vite + TypeScript
- Backend: FastAPI + Python
- Database: SQLite locally, PostgreSQL optional later
- AI/NLP: rule-based learning assistant and summarizer fallback
- QA: manual test cases, bug reports, regression checklist
- Docs/DevOps: setup docs, architecture docs, API contract, CI starter

## Features To Build

| Code | Feature |
| --- | --- |
| F1 | User and role directory |
| F2 | Learning resource library |
| F3 | Task and issue tracker |
| F4 | Daily update log |
| F5 | Mentor dashboard |
| F6 | AI learning assistant |
| F7 | AI daily-update summarizer |
| F8 | QA test center |
| F9 | Documentation hub |
| F10 | Final portfolio report |

## Team Roles

| Intern | Primary role | Secondary role |
| --- | --- | --- |
| Biswajeet Kar | Full-Stack Integration Lead | DevOps and AI Prototype Support |
| Jiban Jyoti Martha | QA and Reliability Engineer | Mobile UX and DevOps Support |
| Andole Aasritha Sai | AI/ML and NLP Feature Developer | Backend Integration and Documentation Support |
| K. Rajesh | Frontend UI/UX Developer | Product Research Support |
| SOHAIL ALAM | Database and Data Quality Developer | QA and Research Support |
| S yatish sunder | Backend API Developer | Full-Stack and AI Integration Support |

## Quick Start

Install Git, Node.js 20 or newer, Python 3.11 or newer, and VS Code.

```powershell
git clone https://github.com/Hexmon/hexmon-skillbridge-internops
cd hexmon-skillbridge-internops
```

Run the frontend:

```powershell
cd frontend
npm install
npm run dev
```

Run the backend in a second terminal:

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
pip install -r requirements.txt
fastapi dev app/main.py
```

Open:

- Frontend: http://localhost:5173
- Backend health: http://localhost:8000/health
- API docs: http://localhost:8000/docs

More detailed setup steps are in [docs/setup.md](docs/setup.md).

## Team Rule

Never push directly to `main`. Work on branches and create pull requests.

Branch examples:

- `docs/biswajeet-architecture`
- `feature/rajesh-task-board-ui`
- `feature/yatish-tasks-api`
- `test/jiban-manual-test-plan`

Commit examples:

- `docs: add API contract notes`
- `feat: add task board placeholder`
- `test: add daily update test cases`
- `fix: handle empty resource list`

## Definition Of Done

- Feature works locally.
- Acceptance criteria are met.
- Code is on a branch and merged through a pull request.
- Pull request includes testing evidence.
- Documentation is updated when commands, API, data, or UI behavior changed.
- QA has a test case or checklist entry for the feature.
- No secrets or private data are committed.

## Important Docs

- [Setup Guide](docs/setup.md)
- [Architecture](docs/architecture.md)
- [API Contract](docs/api.md)
- [Database Guide](docs/database.md)
- [Testing Guide](docs/testing.md)
- [Deployment Notes](docs/deployment.md)
- [QA Manual Test Cases](qa/manual-test-cases.md)
- [Regression Checklist](qa/regression-checklist.md)
