# Contributing

This project is a training repository. The workflow matters as much as the code because the final result should show clear learning, collaboration, and review discipline.

## Daily Workflow

1. Pull latest `main`.
2. Create or switch to your feature branch.
3. Work on one issue at a time.
4. Commit small, clear changes.
5. Push the branch and open a pull request.
6. Add testing evidence to the pull request.
7. Request review from the relevant role owner.

## Branch Naming

Use this pattern:

```text
type/name-short-description
```

Examples:

- `docs/biswajeet-api-contract`
- `feature/rajesh-resource-library-ui`
- `feature/yatish-daily-updates-api`
- `test/jiban-qa-center-acceptance`
- `fix/sohail-task-status-validation`

## Commit Messages

Use short messages that explain the change:

```text
feat: add resources page filters
fix: reject invalid task priority
docs: update backend run guide
test: add QA center manual cases
```

## Pull Requests

Every pull request should include:

- Linked issue.
- What changed.
- How it was tested.
- Screenshots or logs when useful.
- Notes for reviewers.

## Review Expectations

- Review behavior, not just style.
- Check that docs changed when commands, API, data, or UI changed.
- Ask questions early if the API contract or data model changes.
- Keep pull requests small enough for another intern to review.

## No Secrets

Never commit `.env`, API keys, passwords, tokens, private user data, or screenshots containing secrets. Use `.env.example` for safe placeholder values only.
