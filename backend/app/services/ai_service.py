from app.services.ai_responses import (
    GITHUB_RESPONSES,
    TESTING_RESPONSES,
    API_RESPONSES,
    WORKFLOW_RESPONSES,
)
from app.schemas.ai import (
    AICoachRequest,
    AICoachResponse,
    UpdateSummaryRequest,
    UpdateSummaryResponse,
)

from app.services import starter_store

from app.services.ai_data import (
    GITHUB_GUIDE,
    PROJECT_WORKFLOW,
    TESTING_GUIDE,
    DAILY_UPDATE_GUIDE,
    API_CONTRACT_GUIDE,
    RESOURCE_LIBRARY,
    ROLE_GUIDANCE,
)


def detect_intent(question: str) -> str:
    question = question.lower()

    github_keywords = [
        "git",
        "github",
        "branch",
        "commit",
        "push",
        "pull request",
        "merge",
        "pr",
    ]

    testing_keywords = [
        "test",
        "testing",
        "pytest",
        "bug",
    ]

    daily_update_keywords = [
        "daily update",
        "blocker",
        "mentor",
        "update",
        "next action",
    ]

    api_keywords = [
        "api",
        "endpoint",
        "request",
        "response",
        "contract",
    ]

    workflow_keywords = [
        "workflow",
        "feature",
        "task",
        "start",
        "contribute",
    ]

    role_keywords = [
        "role",
        "responsibility",
        "responsibilities",
        "backend developer",
        "frontend developer",
        "database developer",
        "ai developer",
        "intern",
    ]

    resource_keywords = [
        "resource",
        "resources",
        "learn",
        "tutorial",
        "course",
        "study",
        "recommend",
    ]

    if any(keyword in question for keyword in github_keywords):
        return "github"

    if any(keyword in question for keyword in testing_keywords):
        return "testing"

    if any(keyword in question for keyword in daily_update_keywords):
        return "daily_updates"

    if any(keyword in question for keyword in api_keywords):
        return "api_contract"

    if any(keyword in question for keyword in workflow_keywords):
        return "workflow"

    if any(keyword in question for keyword in role_keywords):
        return "role_guidance"

    if any(keyword in question for keyword in resource_keywords):
        return "resource_recommendation"

    return "fallback"


def detect_resource_topic(question: str) -> str:
    question = question.lower()

    if "react" in question:
        return "react"

    if "vite" in question:
        return "vite"

    if "fastapi" in question:
        return "fastapi"

    if "python" in question:
        return "python"

    if "sqlalchemy" in question:
        return "sqlalchemy"

    if "github" in question:
        return "github"

    if "git" in question:
        return "git"

    if "pytest" in question:
        return "pytest"

    if "testing" in question:
        return "testing"

    if "docker" in question:
        return "docker"

    if "ai" in question:
        return "ai"

    if "nlp" in question:
        return "nlp"

    return "workflow"


def get_guide_by_intent(intent: str) -> dict:
    if intent == "github":
        return GITHUB_GUIDE

    if intent == "testing":
        return TESTING_GUIDE

    if intent == "daily_updates":
        return DAILY_UPDATE_GUIDE

    if intent == "api_contract":
        return API_CONTRACT_GUIDE

    if intent == "workflow":
        return PROJECT_WORKFLOW

    if intent == "resource_recommendation":
        return {
            "answer": (
                "Here are some recommended learning resources "
                "related to your topic."
            ),
            "steps": [
                "Review the recommended resources.",
                "Study the fundamentals first.",
                "Apply the concepts in your assigned project tasks.",
            ],
        }

    if intent == "role_guidance":
        return {
            "answer": (
                "Review your assigned role responsibilities and "
                "focus on the current sprint objectives."
            ),
            "steps": [
                "Check your assigned tickets.",
                "Review relevant project documentation.",
                "Coordinate with dependent team members if needed.",
            ],
        }

    return {
        "answer": (
            "I am a project-focused AI Coach for the Hexmon SkillBridge "
            "InternOps platform. Please ask questions related to project "
            "workflow, GitHub, testing, APIs, resources, or internship tasks."
        ),
        "steps": [
            "Review project documentation.",
            "Check your assigned tasks.",
            "Ask a project-related question.",
        ],
    }


def get_resources_by_intent(
    intent: str,
    question: str,
) -> list[str]:

    if intent == "resource_recommendation":
        topic = detect_resource_topic(question)

        if topic in RESOURCE_LIBRARY:
            return RESOURCE_LIBRARY[topic]

        return RESOURCE_LIBRARY["workflow"]

    if intent == "github":
        return RESOURCE_LIBRARY.get("github", [])

    if intent == "testing":
        return RESOURCE_LIBRARY.get("testing", [])

    if intent == "api_contract":
        return RESOURCE_LIBRARY.get("api_contract", [])

    if intent == "workflow":
        return RESOURCE_LIBRARY.get("workflow", [])

    if intent == "role_guidance":
        return [
            resource.title
            for resource in starter_store.resources
        ]

    return []
def get_specific_response(question: str) -> dict | None:
    question = question.lower()

    # GitHub

    if "branch" in question:
        return GITHUB_RESPONSES["branch"]

    if "commit" in question:
        return GITHUB_RESPONSES["commit"]

    if "push" in question:
        return GITHUB_RESPONSES["push"]

    if "pull request" in question or "pr" in question:
        return GITHUB_RESPONSES["pull_request"]

    if "merge" in question:
        return GITHUB_RESPONSES["merge"]

    # Testing

    if "pytest" in question:
        return TESTING_RESPONSES["pytest"]

    if "bug" in question:
        return TESTING_RESPONSES["bug_report"]

    if "test case" in question:
        return TESTING_RESPONSES["test_case"]

    # API

    if "endpoint" in question:
        return API_RESPONSES["endpoint"]

    if "request" in question:
        return API_RESPONSES["request"]

    if "response" in question:
        return API_RESPONSES["response"]

    if "contract" in question:
        return API_RESPONSES["contract"]

    # Workflow

    if "documentation" in question:
        return WORKFLOW_RESPONSES["documentation"]

    if "start task" in question:
        return WORKFLOW_RESPONSES["start_task"]

    return None

def get_role_response(question: str) -> dict | None:
    question = question.lower()

    if "ai developer" in question:
        return ROLE_GUIDANCE["ai developer"]

    if "backend developer" in question:
        return ROLE_GUIDANCE["backend developer"]

    if "frontend developer" in question:
        return ROLE_GUIDANCE["frontend developer"]

    if "qa engineer" in question or "qa" in question:
        return ROLE_GUIDANCE["qa engineer"]

    if "database developer" in question:
        return ROLE_GUIDANCE["database developer"]

    return None

def coach_response(payload: AICoachRequest) -> AICoachResponse:
    intent = detect_intent(payload.question)

    specific_response = get_specific_response(
        payload.question
    )

    if not specific_response:
        specific_response = get_role_response(
            payload.question
        )

    if specific_response:
        guide = specific_response
    else:
        guide = get_guide_by_intent(intent)   
#till here we will get ans and steps ,then for res we have the neeche wala fun
    resources = get_resources_by_intent(
        intent,
        payload.question,
    )


    return AICoachResponse(
        answer=guide["answer"],
        suggested_next_steps=guide["steps"],
        suggested_resources=resources[:3],
    )

def parse_multiline(text: str) -> list[str]:
    """
    Converts multiline textarea input into a clean list.

    Example:
    Input:
        "Implemented login\nFixed bugs\n\nUpdated docs"

    Output:
        ["Implemented login", "Fixed bugs", "Updated docs"]
    """
    if not text.strip():
        return []

    return [
        line.strip()
        for line in text.splitlines()
        if line.strip()
    ]

def summarize_updates(
    payload: UpdateSummaryRequest,
) -> UpdateSummaryResponse:

    completed = parse_multiline(payload.completed_work)
    blockers = parse_multiline(payload.blockers)
    next_actions = parse_multiline(payload.next_actions)

    summary_lines = [
        f"Daily Update Summary ({payload.date.strftime('%d %b %Y')})",
        "",
        "Completed Work:",
    ]

    if completed:
        summary_lines.extend(
            [f"• {task}" for task in completed]
        )
    else:
        summary_lines.append("• No completed work reported.")

    summary_lines.append("")
    summary_lines.append("Next Actions:")

    if next_actions:
        summary_lines.extend(
            [f"• {task}" for task in next_actions]
        )
    else:
        summary_lines.append("• No next actions reported.")

    summary_lines.append("")
    summary_lines.append("Blockers:")

    if blockers:
        summary_lines.extend(
            [f"• {task}" for task in blockers]
        )
    else:
        summary_lines.append("• No blockers reported.")

    summary = "\n".join(summary_lines)

    return UpdateSummaryResponse(
        summary=summary,
        blockers=blockers,
        next_actions=next_actions,
    )
