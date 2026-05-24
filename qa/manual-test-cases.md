# Manual Test Cases

Use these cases as starter coverage for F1-F10. Add concrete cases as each feature becomes real.

| Test ID | Feature | Type | Steps | Expected result |
| --- | --- | --- | --- | --- |
| F1-P1 | User and role directory | Positive | Open intern directory or dashboard and review seeded profiles. | All six interns appear with primary roles. |
| F1-M1 | User and role directory | Mobile | Open role cards at narrow mobile width. | Cards fit without horizontal overflow. |
| F2-P1 | Learning resource library | Positive | Open Resources and filter by role. | Matching resources remain visible. |
| F2-N1 | Learning resource library | Negative | Filter to a role with no resources once implemented. | Friendly empty state appears. |
| F3-P1 | Task and issue tracker | Positive | Open Tasks and filter by status. | Only matching status cards are shown. |
| F3-N1 | Task and issue tracker | Negative | Try to save an invalid task status once editing exists. | Clear validation error appears. |
| F4-P1 | Daily update log | Positive | Submit done, blockers, next action, and confidence. | Update is saved and appears in history. |
| F4-N1 | Daily update log | Negative | Submit with empty required fields. | Clear validation messages appear. |
| F5-P1 | Mentor dashboard | Positive | Open Mentor Dashboard. | Progress, blockers, and QA summary are visible. |
| F6-P1 | AI learning assistant | Positive | Ask a project question. | Helpful fallback answer and next steps appear. |
| F6-A1 | AI learning assistant | Accessibility | Navigate the AI form by keyboard. | Controls are reachable and labeled. |
| F7-P1 | AI daily-update summarizer | Positive | Submit weekly updates for summary. | Mentor-friendly summary is returned. |
| F8-P1 | QA test center | Positive | Open QA Center. | Test cases and bug-report starter data appear. |
| F8-N1 | QA test center | Negative | Submit incomplete bug report once form exists. | Required field errors appear. |
| F9-P1 | Documentation hub | Positive | Open Docs Hub. | Links to setup, architecture, API, database, testing, and deployment docs are visible. |
| F10-P1 | Final portfolio report | Positive | Open portfolio report once implemented. | Role-wise contribution evidence is visible. |

## Evidence Format

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
