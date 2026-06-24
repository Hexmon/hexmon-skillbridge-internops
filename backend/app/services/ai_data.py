GITHUB_GUIDE = {
    "answer": (
        "Follow the project GitHub workflow: create a feature branch, "
        "make focused changes, test your work, commit clearly, push your branch, "
        "and open a pull request for review."
    ),
    "steps": [
        "Create a feature branch from the assigned base branch.",
        "Make focused changes related to a single feature.",
        "Test your changes before committing.",
        "Commit with a meaningful message.",
        "Push the branch and open a pull request.",
    ],
}

PROJECT_WORKFLOW = {
    "answer": (
        "Before starting work, understand the task, review the documentation, "
        "check the API contract if relevant, implement the feature, test it, "
        "and submit it through a pull request."
    ),
    "steps": [
        "Read the assigned task.",
        "Review relevant project documentation.",
        "Implement the feature.",
        "Test the feature.",
        "Create a pull request with testing evidence.",
    ],
}

TESTING_GUIDE = {
    "answer": (
        "Testing evidence is required for every pull request. "
        "Run backend tests, perform manual testing, and document results."
    ),
    "steps": [
        "Run pytest for backend validation.",
        "Perform manual testing.",
        "Record QA evidence.",
        "Include testing notes in the pull request.",
    ],
}

DAILY_UPDATE_GUIDE = {
    "answer": (
        "Daily updates should clearly describe completed work, blockers, "
        "and next actions."
    ),
    "steps": [
        "Mention completed work.",
        "Mention blockers if any.",
        "Mention next planned action.",
        "Keep updates concise and specific.",
    ],
}

API_CONTRACT_GUIDE = {
    "answer": (
        "Do not change API request or response structures without coordinating "
        "with frontend, backend, QA, and other stakeholders."
    ),
    "steps": [
        "Review docs/api.md.",
        "Follow existing request/response models.",
        "Discuss contract changes before implementation.",
    ],
}
RESOURCE_LIBRARY = {
    "react": [
        "React Official Docs - https://react.dev",
        "React Components and Props - https://react.dev/learn/your-first-component",
        "React State Management - https://react.dev/learn/state-a-components-memory",
    ],

    "vite": [
        "Vite Official Docs - https://vite.dev",
        "Getting Started with Vite - https://vite.dev/guide/",
    ],

    "fastapi": [
        "FastAPI Official Docs - https://fastapi.tiangolo.com",
        "FastAPI First Steps - https://fastapi.tiangolo.com/tutorial/first-steps/",
        "FastAPI Request Body Tutorial - https://fastapi.tiangolo.com/tutorial/body/",
    ],

    "python": [
        "Python Official Documentation - https://docs.python.org/3/",
        "Python Tutorial - https://docs.python.org/3/tutorial/",
    ],

    "sqlalchemy": [
        "SQLAlchemy Unified Tutorial - https://docs.sqlalchemy.org/en/20/tutorial/",
        "SQLAlchemy ORM Quick Start - https://docs.sqlalchemy.org/en/20/orm/quickstart.html",
    ],

    "github": [
        "GitHub Docs - https://docs.github.com",
        "Git Branching Guide - https://git-scm.com/docs/git-branch",
        "Pull Request Best Practices - https://docs.github.com/en/pull-requests",
    ],

    "git": [
        "Git Documentation - https://git-scm.com/doc",
        "Git Branching Guide - https://git-scm.com/docs/git-branch",
        "Git Basics Tutorial - https://git-scm.com/docs/gittutorial",
    ],

    "pytest": [
        "Pytest Documentation - https://docs.pytest.org",
        "Pytest Getting Started - https://docs.pytest.org/en/stable/getting-started.html",
    ],

    "testing": [
        "Pytest Documentation - https://docs.pytest.org",
        "FastAPI Testing Guide - https://fastapi.tiangolo.com/tutorial/testing/",
        "Project Testing Guide - docs/testing.md",
    ],

    "docker": [
        "Docker Official Docs - https://docs.docker.com",
        "Docker Getting Started - https://docs.docker.com/get-started/",
    ],

    "ai": [
        "Prompt Engineering Guide - https://www.promptingguide.ai",
        "OpenAI Prompt Engineering Best Practices - https://platform.openai.com/docs/guides/prompt-engineering",
    ],

    "nlp": [
        "NLTK Documentation - https://www.nltk.org",
        "spaCy Documentation - https://spacy.io",
    ],

    "api_contract": [
        "FastAPI Documentation - https://fastapi.tiangolo.com",
        "Project API Contract - docs/api.md",
    ],

    "workflow": [
        "Project Architecture - docs/architecture.md",
        "Setup Guide - docs/setup.md",
        "Testing Guide - docs/testing.md",
    ],
}
ROLE_GUIDANCE = {
    "ai developer": {
        "answer": (
            "The AI/ML and NLP Feature Developer is responsible for "
            "building the AI Coach, resource recommender, prompt templates, "
            "AI evaluation checklist, and documenting AI limitations."
        ),
        "steps": [
            "Build AI Coach features.",
            "Implement resource recommendation logic.",
            "Support frontend AI integration.",
            "Maintain AI documentation.",
        ],
    },

    "backend developer": {
        "answer": (
            "The Backend API Developer is responsible for implementing "
            "FastAPI endpoints, business logic, integrations, and API contracts."
        ),
        "steps": [
            "Implement backend endpoints.",
            "Maintain API contracts.",
            "Integrate services.",
            "Support frontend requirements.",
        ],
    },

    "frontend developer": {
        "answer": (
            "The Frontend UI/UX Developer is responsible for building "
            "user interfaces, pages, forms, navigation, and responsive layouts."
        ),
        "steps": [
            "Build UI pages.",
            "Integrate backend APIs.",
            "Improve user experience.",
            "Ensure responsive design.",
        ],
    },

    "qa engineer": {
        "answer": (
            "The QA Engineer is responsible for testing features, "
            "creating test cases, reporting bugs, and validating releases."
        ),
        "steps": [
            "Create test cases.",
            "Perform manual testing.",
            "Report defects.",
            "Validate fixes.",
        ],
    },

    "database developer": {
        "answer": (
            "The Database and Data Quality Developer is responsible for "
            "database schema design, data quality checks, and data management."
        ),
        "steps": [
            "Design database models.",
            "Maintain data quality.",
            "Support backend data needs.",
            "Optimize queries.",
        ],
    },
}