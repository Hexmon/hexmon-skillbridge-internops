import type { LucideIcon } from "lucide-react";

export type PageId =
  | "home"
  | "dashboard"
  | "resources"
  | "tasks"
  | "updates"
  | "ai"
  | "qa"
  | "mentor"
  | "docs"
  | "meetings"
  | "profile";

export type NavItem = {
  id: PageId;
  label: string;
  icon: LucideIcon;
};

export type Intern = {
  id: number;
  name: string;
  primaryRole: string;
  secondaryRole: string;
  availability: string;
  currentFocus: string;
};

export type Resource = {
  id: number;
  title: string;
  role: string;
  topic: string;
  week: number;
  type: "doc" | "video" | "exercise";
  url: string;
};

export type TaskStatus = "todo" | "in_progress" | "review" | "done";
export type Priority = "low" | "medium" | "high";

export type Task = {
  id: number;
  title: string;
  featureCode: string;
  ownerName: string;
  status: TaskStatus;
  priority: Priority;
  dueWeek: number;
  issueUrl?: string;
};

export type DailyUpdate = {
  id: number;
  internName: string;
  date: string;
  done: string;
  blockers: string;
  nextAction: string;
  confidenceScore: number;
};

export type QATestCase = {
  id: string;
  featureCode: string;
  title: string;
  type: "positive" | "negative" | "edge" | "mobile" | "accessibility";
  expected: string;
  status: "draft" | "ready" | "passed" | "failed";
};

export type BugReport = {
  id: number;
  title: string;
  featureCode: string;
  severity: "low" | "medium" | "high" | "critical";
  status: "open" | "triage" | "fixed";
};
