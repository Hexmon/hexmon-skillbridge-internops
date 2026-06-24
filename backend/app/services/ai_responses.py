GITHUB_RESPONSES = {
    "branch": {
        "answer": (
            "Create a new branch using "
            "'git checkout -b branch-name' or "
            "'git switch -c branch-name'. "
            "For this project, use descriptive names such as "
            "'feat/ai-learning-assistant'."
        ),
        "steps": [
            "Pull the latest code if required.",
            "Create a new feature branch.",
            "Switch to the new branch.",
            "Start your development work.",
        ],
    },

    "commit": {
        "answer": (
            "A commit saves a snapshot of your changes locally. "
            "Use 'git add .' followed by "
            "'git commit -m \"meaningful message\"'."
        ),
        "steps": [
            "Review changed files.",
            "Stage changes using git add.",
            "Create a meaningful commit message.",
            "Verify commit history.",
        ],
    },

    "push": {
        "answer": (
            "Push uploads your local commits to GitHub. "
            "Use 'git push' after committing your changes."
        ),
        "steps": [
            "Commit your changes.",
            "Run git push.",
            "Verify branch appears on GitHub.",
            "Create a pull request if work is ready.",
        ],
    },

    "pull_request": {
        "answer": (
            "A pull request is used to request review and merge "
            "your branch into the target branch."
        ),
        "steps": [
            "Push your branch.",
            "Open GitHub.",
            "Create a pull request.",
            "Add testing evidence.",
            "Request review.",
        ],
    },

    "merge": {
        "answer": (
            "Merging combines changes from one branch into another. "
            "Usually mentors or reviewers merge approved pull requests."
        ),
        "steps": [
            "Complete development.",
            "Open a pull request.",
            "Resolve review comments.",
            "Wait for approval.",
            "Merge after approval.",
        ],
    },
}


TESTING_RESPONSES = {
    "pytest": {
        "answer": (
            "Pytest is the testing framework used for backend testing. "
            "Run tests using the pytest command."
        ),
        "steps": [
            "Open backend directory.",
            "Activate virtual environment.",
            "Run pytest.",
            "Review test results.",
        ],
    },

    "bug_report": {
        "answer": (
            "Bug reports should clearly explain the issue, "
            "expected behavior, and reproduction steps."
        ),
        "steps": [
            "Describe the bug.",
            "Add reproduction steps.",
            "Add expected result.",
            "Add actual result.",
            "Submit the report.",
        ],
    },

    "test_case": {
        "answer": (
            "Test cases verify whether a feature works correctly "
            "under different conditions."
        ),
        "steps": [
            "Define the feature.",
            "List test steps.",
            "Define expected result.",
            "Execute the test.",
            "Record outcome.",
        ],
    },
}


API_RESPONSES = {
    "endpoint": {
        "answer": (
            "An endpoint is a URL exposed by the backend that "
            "accepts requests and returns responses."
        ),
        "steps": [
            "Identify the endpoint URL.",
            "Check request format.",
            "Send request.",
            "Review response.",
        ],
    },

    "request": {
        "answer": (
            "A request is the data sent from frontend or client "
            "to the backend."
        ),
        "steps": [
            "Build request payload.",
            "Validate required fields.",
            "Send request.",
            "Handle backend response.",
        ],
    },

    "response": {
        "answer": (
            "A response is the data returned by the backend "
            "after processing a request."
        ),
        "steps": [
            "Receive response.",
            "Validate response fields.",
            "Handle success or error states.",
            "Display data in frontend.",
        ],
    },

    "contract": {
        "answer": (
            "The API contract defines the agreed request and "
            "response structure between frontend and backend."
        ),
        "steps": [
            "Review docs/api.md.",
            "Follow existing schema.",
            "Discuss changes before implementation.",
        ],
    },
}


WORKFLOW_RESPONSES = {
    "start_task": {
        "answer": (
            "Before starting a task, understand requirements, "
            "review documentation, and identify dependencies."
        ),
        "steps": [
            "Read task description.",
            "Review documentation.",
            "Create branch.",
            "Start implementation.",
        ],
    },

    "documentation": {
        "answer": (
            "Documentation helps developers understand project "
            "structure, APIs, workflows, and responsibilities."
        ),
        "steps": [
            "Read relevant document.",
            "Follow documented workflow.",
            "Update documentation if needed.",
        ],
    },
}