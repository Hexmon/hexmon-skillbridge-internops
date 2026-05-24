# Testing Guide

Testing evidence is required for every pull request.

## Manual Testing

Use the QA files:

- `qa/manual-test-cases.md`
- `qa/regression-checklist.md`
- `qa/bug-report-samples.md`

Each feature F1-F10 should have positive, negative, edge, mobile, and accessibility checks.

## Backend Tests

Backend tests live in `backend/tests`.

Run:

```powershell
cd backend
pytest
```

Starter expectations:

- `/health` returns `status: ok`.
- Main endpoint groups respond with JSON.
- Invalid data gets clear errors once validation is implemented.

## Frontend Checks

Run:

```powershell
cd frontend
npm run lint
npm run build
```

Starter expectations:

- The app compiles.
- Pages are reachable through navigation.
- Mobile width has no horizontal overflow.
- Forms have visible labels.

## QA Evidence Format

```text
Test run date:
Tester:
Branch/commit:
Environment:
Passed:
Failed:
Blocked:
New bugs created:
Screenshots/logs:
Summary:
Recommended release decision: Go / No-go / Go with known issues
```
