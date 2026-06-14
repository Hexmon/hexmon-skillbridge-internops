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

const statusTone: Record<
  TaskStatus,
  "neutral" | "blue" | "green" | "amber" | "red"
> = {
  todo: "neutral",
  in_progress: "blue",
  review: "amber",
  done: "green",
};

export function TasksPage() {
  const [statusFilter, setStatusFilter] = useState<"all" | TaskStatus>("all");
  const [searchTerm, setSearchTerm] = useState("");

  const visibleTasks = useMemo(
    () =>
      tasks.filter((task) => {
        const matchesStatus =
          statusFilter === "all" || task.status === statusFilter;

        const matchesSearch =
          task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          task.ownerName.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesStatus && matchesSearch;
      }),
    [statusFilter, searchTerm],
  );

  const todoTasks = visibleTasks.filter(
    (task) => task.status === "todo"
  );

  const progressTasks = visibleTasks.filter(
    (task) => task.status === "in_progress"
  );

  const reviewTasks = visibleTasks.filter(
    (task) => task.status === "review"
  );

  const doneTasks = visibleTasks.filter(
    (task) => task.status === "done"
  );

  return (
    <>
      <PageHeader
        eyebrow="F3"
        title="Task And Issue Tracker"
        description="Starter task cards show owner, status, priority, due week, and feature code."
      />

      <section
        className="segmented-control"
        aria-label="Task status filter"
      >
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

      <section className="toolbar">
        <input
          type="text"
          placeholder="Search tasks or owners..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </section>

      <p>
        Showing {visibleTasks.length} task
        {visibleTasks.length !== 1 ? "s" : ""}
      </p>

      <section className="kanban-board">

        <div className="kanban-column">
          <h3>Todo ({todoTasks.length})</h3>

          {todoTasks.map((task) => (
            <article className="info-card" key={task.id}>
              <h4>{task.title}</h4>
              <p>{task.ownerName}</p>
            </article>
          ))}
        </div>

        <div className="kanban-column">
          <h3>In Progress ({progressTasks.length})</h3>

          {progressTasks.map((task) => (
            <article className="info-card" key={task.id}>
              <h4>{task.title}</h4>
              <p>{task.ownerName}</p>
            </article>
          ))}
        </div>

        <div className="kanban-column">
          <h3>Review ({reviewTasks.length})</h3>

          {reviewTasks.map((task) => (
            <article className="info-card" key={task.id}>
              <h4>{task.title}</h4>
              <p>{task.ownerName}</p>
            </article>
          ))}
        </div>

        <div className="kanban-column">
          <h3>Done ({doneTasks.length})</h3>

          {doneTasks.map((task) => (
            <article className="info-card" key={task.id}>
              <h4>{task.title}</h4>
              <p>{task.ownerName}</p>
            </article>
          ))}
        </div>

      </section>
    </>
  );
}