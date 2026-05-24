import { ListChecks } from "lucide-react";
import { useMemo, useState } from "react";
import { PageHeader } from "../components/PageHeader";
import { StatusBadge } from "../components/StatusBadge";
import { tasks } from "../services/mockData";
import type { TaskStatus } from "../types";

const statusOptions: Array<"all" | TaskStatus> = [
  "all",
  "todo",
  "in_progress",
  "review",
  "done",
];

const statusTone: Record<TaskStatus, "neutral" | "blue" | "green" | "amber" | "red"> = {
  todo: "neutral",
  in_progress: "blue",
  review: "amber",
  done: "green",
};

export function TasksPage() {
  const [statusFilter, setStatusFilter] = useState<"all" | TaskStatus>("all");
  const visibleTasks = useMemo(
    () =>
      tasks.filter(
        (task) => statusFilter === "all" || task.status === statusFilter,
      ),
    [statusFilter],
  );

  return (
    <>
      <PageHeader
        eyebrow="F3"
        title="Task And Issue Tracker"
        description="Starter task cards show owner, status, priority, due week, and feature code."
      />

      <section className="segmented-control" aria-label="Task status filter">
        {statusOptions.map((status) => (
          <button
            data-active={statusFilter === status}
            key={status}
            onClick={() => setStatusFilter(status)}
            type="button"
          >
            {status.replace("_", " ")}
          </button>
        ))}
      </section>

      <section className="card-grid">
        {visibleTasks.map((task) => (
          <article className="info-card" key={task.id}>
            <div className="card-icon-line">
              <ListChecks size={18} aria-hidden="true" />
              <StatusBadge label={task.featureCode} tone="red" />
            </div>
            <h3>{task.title}</h3>
            <p>{task.ownerName}</p>
            <div className="meta-line">
              <StatusBadge label={task.status.replace("_", " ")} tone={statusTone[task.status]} />
              <StatusBadge label={task.priority} tone={task.priority === "high" ? "red" : "neutral"} />
              <StatusBadge label={`Week ${task.dueWeek}`} tone="blue" />
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
