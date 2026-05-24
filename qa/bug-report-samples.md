# Bug Report Samples

## Good Bug Report

```md
## Bug: Task filter shows wrong cards

Severity: Medium
Feature: F3 Task board
Environment: Chrome, Windows, frontend localhost:5173, backend localhost:8000

Steps:
1. Open Tasks page.
2. Select status filter Done.
3. Observe cards.

Expected: Only done tasks are visible.
Actual: In-progress tasks also appear.
Evidence: Screenshot attached.
Owner suggested: Rajesh if UI filter; Yatish if API returns wrong data.
```

## Weak Bug Report

```md
Tasks broken. Please fix.
```

## Why The Good Report Works

- It names the feature.
- It gives exact steps.
- It explains expected and actual behavior.
- It includes environment details.
- It suggests the likely owner without blaming anyone.
