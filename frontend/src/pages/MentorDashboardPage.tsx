import { AlertTriangle, BarChart3, CheckCircle2, Users } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { StatTile } from "../components/StatTile";
import { StatusBadge } from "../components/StatusBadge";
import { dailyUpdates, interns, tasks } from "../services/mockData";

export function MentorDashboardPage() {
  const doneTasks = tasks.filter((task) => task.status === "done").length;
  const openBlockers = dailyUpdates.filter((update) => update.blockers !== "None").length;

  return (
    <>
      <PageHeader
        eyebrow="F5"
        title="Mentor Dashboard"
        description="Progress, blockers, QA readiness, and weekly summary placeholders for mentor review."
      />

      <section className="stat-grid" aria-label="Mentor metrics">
        <StatTile icon={Users} label="Interns" value={interns.length} tone="red" />
        <StatTile icon={BarChart3} label="Tracked tasks" value={tasks.length} tone="blue" />
        <StatTile icon={CheckCircle2} label="Completed" value={doneTasks} tone="green" />
        <StatTile icon={AlertTriangle} label="Blockers" value={openBlockers} tone="amber" />
      </section>

      <section className="info-card wide-card">
        <StatusBadge label="Weekly starter summary" tone="blue" />
        <h2>Current Mentor Notes</h2>
        <p>
          The team has starter content for the scaffold, task board, QA cases,
          AI fallback, and docs hub. Next implementation work should replace
          mock data with backend responses and database persistence.
        </p>
      </section>
    </>
  );
}
