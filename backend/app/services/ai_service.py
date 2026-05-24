from app.schemas.ai import AICoachRequest, AICoachResponse, UpdateSummaryRequest, UpdateSummaryResponse
from app.services import starter_store


def coach_response(payload: AICoachRequest) -> AICoachResponse:
    role_hint = f" for {payload.role}" if payload.role else ""
    week_hint = f" in week {payload.week}" if payload.week else ""
    matching_resources = [
        resource.title
        for resource in starter_store.resources
        if (not payload.role or resource.role == payload.role)
        and (not payload.week or resource.week == payload.week)
    ]

    if not matching_resources:
        matching_resources = [resource.title for resource in starter_store.resources[:3]]

    return AICoachResponse(
        answer=(
            f"Start small{role_hint}{week_hint}: identify the feature code, "
            "confirm the API or data contract, create a branch, make one focused "
            "change, and add testing evidence before opening a pull request."
        ),
        suggested_next_steps=[
            "Find the matching issue and acceptance criteria.",
            "Check docs/api.md or docs/database.md before changing contracts.",
            "Add a manual test case or backend/frontend check.",
        ],
        suggested_resources=matching_resources[:3],
    )


def summarize_updates(payload: UpdateSummaryRequest) -> UpdateSummaryResponse:
    blockers = [update for update in payload.updates if "block" in update.lower()]
    next_actions = [update for update in payload.updates if "next" in update.lower()]

    return UpdateSummaryResponse(
        summary=f"Week {payload.week}: {len(payload.updates)} updates were submitted for mentor review.",
        blockers=blockers,
        next_actions=next_actions,
    )
