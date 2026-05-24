import type { BugReport, DailyUpdate, Intern, QATestCase, Resource, Task } from "../types";

const repoBase = "https://github.com/Hexmon/hexmon-skillbridge-internops/blob/main";

export const interns: Intern[] = [
  {
    id: 1,
    name: "Biswajeet Kar",
    primaryRole: "Full-Stack Integration Lead",
    secondaryRole: "DevOps and AI Prototype Support",
    availability: "Weekday internship hours",
    currentFocus: "Repo scaffold and integration shell",
  },
  {
    id: 2,
    name: "Jiban Jyoti Martha",
    primaryRole: "QA and Reliability Engineer",
    secondaryRole: "Mobile UX and DevOps Support",
    availability: "Weekday internship hours",
    currentFocus: "Manual test cases and smoke checklist",
  },
  {
    id: 3,
    name: "Andole Aasritha Sai",
    primaryRole: "AI/ML and NLP Feature Developer",
    secondaryRole: "Backend Integration and Documentation Support",
    availability: "Weekday internship hours",
    currentFocus: "AI fallback scope and prompt templates",
  },
  {
    id: 4,
    name: "K. Rajesh",
    primaryRole: "Frontend UI/UX Developer",
    secondaryRole: "Product Research Support",
    availability: "Weekday internship hours",
    currentFocus: "App shell, design tokens, and responsive pages",
  },
  {
    id: 5,
    name: "SOHAIL ALAM",
    primaryRole: "Database and Data Quality Developer",
    secondaryRole: "QA and Research Support",
    availability: "Weekday internship hours",
    currentFocus: "Schema draft and seed data",
  },
  {
    id: 6,
    name: "S yatish sunder",
    primaryRole: "Backend API Developer",
    secondaryRole: "Full-Stack and AI Integration Support",
    availability: "Weekday internship hours",
    currentFocus: "FastAPI skeleton and endpoint contracts",
  },
];

export const resources: Resource[] = [
  {
    id: 1,
    title: "React components and props",
    role: "Frontend UI/UX Developer",
    topic: "React",
    week: 3,
    type: "doc",
    url: "https://react.dev/learn/your-first-component",
  },
  {
    id: 2,
    title: "FastAPI first steps",
    role: "Backend API Developer",
    topic: "FastAPI",
    week: 3,
    type: "doc",
    url: "https://fastapi.tiangolo.com/tutorial/first-steps/",
  },
  {
    id: 3,
    title: "SQLAlchemy unified tutorial",
    role: "Database and Data Quality Developer",
    topic: "Database",
    week: 4,
    type: "doc",
    url: "https://docs.sqlalchemy.org/en/20/tutorial/",
  },
  {
    id: 4,
    title: "Manual testing checklist starter",
    role: "QA and Reliability Engineer",
    topic: "QA",
    week: 2,
    type: "exercise",
    url: `${repoBase}/qa/manual-test-cases.md`,
  },
  {
    id: 5,
    title: "Prompt template review",
    role: "AI/ML and NLP Feature Developer",
    topic: "AI",
    week: 4,
    type: "exercise",
    url: `${repoBase}/docs/roles/ai-nlp.md`,
  },
];

export const tasks: Task[] = [
  {
    id: 1,
    title: "Create shared architecture doc",
    featureCode: "F9",
    ownerName: "Biswajeet Kar",
    status: "review",
    priority: "medium",
    dueWeek: 2,
  },
  {
    id: 2,
    title: "Build resources page filters",
    featureCode: "F2",
    ownerName: "K. Rajesh",
    status: "todo",
    priority: "high",
    dueWeek: 5,
  },
  {
    id: 3,
    title: "Implement daily updates endpoint",
    featureCode: "F4",
    ownerName: "S yatish sunder",
    status: "in_progress",
    priority: "high",
    dueWeek: 6,
  },
  {
    id: 4,
    title: "Create seed data script",
    featureCode: "F1",
    ownerName: "SOHAIL ALAM",
    status: "done",
    priority: "medium",
    dueWeek: 4,
  },
  {
    id: 5,
    title: "Draft AI safety checklist",
    featureCode: "F6",
    ownerName: "Andole Aasritha Sai",
    status: "todo",
    priority: "medium",
    dueWeek: 4,
  },
];

export const dailyUpdates: DailyUpdate[] = [
  {
    id: 1,
    internName: "K. Rajesh",
    date: "2026-05-22",
    done: "Created first app shell layout.",
    blockers: "Waiting for confirmed task schema.",
    nextAction: "Wire task board to backend contract.",
    confidenceScore: 4,
  },
  {
    id: 2,
    internName: "Jiban Jyoti Martha",
    date: "2026-05-22",
    done: "Drafted smoke test checklist.",
    blockers: "Need backend health URL confirmed.",
    nextAction: "Run clone/install smoke pass.",
    confidenceScore: 5,
  },
];

export const qaTestCases: QATestCase[] = [
  {
    id: "F1-P1",
    featureCode: "F1",
    title: "Intern directory shows seeded interns",
    type: "positive",
    expected: "All six intern profiles are visible.",
    status: "ready",
  },
  {
    id: "F3-M1",
    featureCode: "F3",
    title: "Task board fits mobile width",
    type: "mobile",
    expected: "No horizontal overflow at narrow width.",
    status: "draft",
  },
  {
    id: "F4-N1",
    featureCode: "F4",
    title: "Daily update rejects empty done field",
    type: "negative",
    expected: "A clear validation message appears.",
    status: "draft",
  },
];

export const bugReports: BugReport[] = [
  {
    id: 1,
    title: "Example bug: task filter includes wrong status",
    featureCode: "F3",
    severity: "medium",
    status: "triage",
  },
];
