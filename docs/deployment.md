# Deployment Notes

Deployment is optional after the MVP works locally.

## Before Deployment

- Frontend build passes.
- Backend tests pass.
- `.env` values are configured in the hosting provider, not committed.
- AI provider keys are approved by the mentor if used.
- Database choice is confirmed.
- QA has completed a regression pass.

## Suggested Beginner Path

- Frontend: Vercel, Netlify, or another mentor-approved static host.
- Backend: Render, Railway, Fly.io, or another mentor-approved Python host.
- Database: keep SQLite local for learning; use PostgreSQL only after mentor approval.

## Environment Variables

Use safe placeholders in `.env.example`. Real secrets belong only in local `.env` files or hosting provider secret settings.

Frontend builds should set `VITE_API_BASE_URL` to the deployed backend URL. Backend secrets such as `AI_API_KEY` must stay in backend hosting secret settings only.

## Release Checklist

- README setup still works.
- API docs match implementation.
- CORS allows only approved frontend origins.
- No debug-only secrets or private data appear in logs.
- Final demo script has been rehearsed.
