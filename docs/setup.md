# Setup Guide

This guide is for beginners. Read each command before running it.

## Required Tools

- Git
- Node.js 20 or newer
- npm
- Python 3.11 or newer
- VS Code

Recommended VS Code extensions:

- ESLint
- Prettier
- Python
- Pylance
- Markdown All in One

## Clone The Repository

```powershell
git clone https://github.com/Hexmon/hexmon-skillbridge-internops
cd hexmon-skillbridge-internops
```

## Frontend Setup

```powershell
cd frontend
npm install
npm run dev
```

Open http://localhost:5173.

Useful frontend commands:

```powershell
npm run build
npm run lint
```

## Backend Setup

Open a second terminal from the repository root.

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
pip install -r requirements.txt
fastapi dev app/main.py
```

Open:

- Health check: http://localhost:8000/health
- API docs: http://localhost:8000/docs

## Environment File

Copy `.env.example` to `.env` for local values. Do not commit `.env`.

```powershell
Copy-Item .env.example .env
```

For frontend-only overrides, Vite requires variables to start with `VITE_`. The starter app reads `VITE_API_BASE_URL` and defaults to `http://localhost:8000`.

## Seed Data

The starter seed data lives in `scripts/seed_data.py`. It prints a beginner-safe JSON preview now. Later, Sohail and Yatish can connect it to SQLAlchemy models and the SQLite database.

```powershell
python scripts/seed_data.py
```

## Common Problems

- If `npm` is not recognized, install Node.js and reopen the terminal.
- If `fastapi` is not recognized, activate the backend virtual environment and install requirements again.
- If PowerShell blocks activation, run `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` once, then retry.
- If a port is already used, stop the old terminal process or use the next available port.
