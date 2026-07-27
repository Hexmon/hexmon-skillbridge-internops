import { CheckCircle2, ClipboardPlus, RotateCcw, Send, UserRoundCheck } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { PageHeader } from "../components/PageHeader";
import { StatusBadge } from "../components/StatusBadge";
import { interns, tasks as seededTasks } from "../services/mockData";
import type { Priority, Task, TaskStatus } from "../types";

type ViewerRole = "intern" | "mentor";
type WorkflowTask = Task & {
  description?: string;
  completionNote?: string;
  mentorFeedback?: string;
};

const storageKey = "skillbridge-task-workflow";
const statusOptions: Array<"all" | TaskStatus> = ["all", "todo", "in_progress", "review", "done"];
const statusTone: Record<TaskStatus, "neutral" | "blue" | "green" | "amber"> = {
  todo: "neutral",
  in_progress: "blue",
  review: "amber",
  done: "green",
};
const statusLabels: Record<TaskStatus, string> = {
  todo: "To do",
  in_progress: "In progress",
  review: "Awaiting mentor",
  done: "Approved",
};

function loadTasks(): WorkflowTask[] {
  try {
    const saved = localStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) : seededTasks;
  } catch {
    return seededTasks;
  }
}

export function TasksPage() {
  const [viewerRole, setViewerRole] = useState<ViewerRole>("intern");
  const [taskList, setTaskList] = useState<WorkflowTask[]>(loadTasks);
  const [statusFilter, setStatusFilter] = useState<"all" | TaskStatus>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [notice, setNotice] = useState("");
  const [feedback, setFeedback] = useState<Record<number, string>>({});

  const saveTasks = (next: WorkflowTask[], message: string) => {
    setTaskList(next);
    localStorage.setItem(storageKey, JSON.stringify(next));
    setNotice(message);
  };

  const updateTask = (id: number, changes: Partial<WorkflowTask>, message: string) =>
    saveTasks(taskList.map((task) => task.id === id ? { ...task, ...changes } : task), message);

  const visibleTasks = useMemo(
    () => taskList.filter((task) => {
      const matchesStatus = statusFilter === "all" || task.status === statusFilter;
      const search = searchTerm.toLowerCase();
      return matchesStatus && (
        task.title.toLowerCase().includes(search) ||
        task.ownerName.toLowerCase().includes(search) ||
        task.featureCode.toLowerCase().includes(search)
      );
    }),
    [taskList, statusFilter, searchTerm],
  );

  const addTask = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const title = String(form.get("title") ?? "").trim();
    const ownerName = String(form.get("ownerName") ?? "").trim();
    if (!title || !ownerName) return;
    const newTask: WorkflowTask = {
      id: Date.now(),
      title,
      ownerName,
      description: String(form.get("description") ?? "").trim(),
      featureCode: String(form.get("featureCode") ?? "F3").trim() || "F3",
      priority: String(form.get("priority") ?? "medium") as Priority,
      dueWeek: Number(form.get("dueWeek")) || 1,
      status: "todo",
    };
    saveTasks([newTask, ...taskList], `Task assigned to ${ownerName}.`);
    event.currentTarget.reset();
  };

  const submitForReview = (task: WorkflowTask) => {
    const note = window.prompt("Briefly describe what you completed:");
    if (!note?.trim()) return;
    updateTask(task.id, { status: "review", completionNote: note.trim(), mentorFeedback: "" }, "Task submitted for mentor review.");
  };

  const returnTask = (task: WorkflowTask) => {
    const note = feedback[task.id]?.trim();
    if (!note) {
      setNotice("Add feedback before returning the task.");
      return;
    }
    updateTask(task.id, { status: "in_progress", mentorFeedback: note }, "Task returned to the intern with corrections.");
  };

  return (
    <>
      <PageHeader
        eyebrow="F3"
        title="Task Review Workflow"
        description="Mentors assign work, interns submit completed tasks, and mentors approve or return them with corrections."
      />

      <section className="task-role-switch" aria-label="Choose task view">
        <div>
          <strong>Viewing as {viewerRole}</strong>
          <p>{viewerRole === "mentor" ? "Assign tasks and review intern submissions." : "Work on assigned tasks and submit them for review."}</p>
        </div>
        <div className="segmented-control">
          {(["intern", "mentor"] as ViewerRole[]).map((role) => (
            <button data-active={viewerRole === role} key={role} onClick={() => { setViewerRole(role); setNotice(""); }} type="button">
              {role === "intern" ? "Intern view" : "Mentor view"}
            </button>
          ))}
        </div>
      </section>

      {notice && <p className="task-notice" role="status">{notice}</p>}

      {viewerRole === "mentor" && (
        <form className="task-create-card" onSubmit={addTask}>
          <div className="task-section-heading">
            <ClipboardPlus size={22} />
            <div><h2>Assign a new task</h2><p>Create work and assign it to an intern.</p></div>
          </div>
          <div className="task-form-grid">
            <label><span>Task title</span><input name="title" placeholder="e.g. Build profile API" required /></label>
            <label><span>Assign to</span><select name="ownerName" required><option value="">Choose an intern</option>{interns.map((intern) => <option key={intern.id}>{intern.name}</option>)}</select></label>
            <label><span>Feature code</span><input defaultValue="F3" name="featureCode" /></label>
            <label><span>Priority</span><select defaultValue="medium" name="priority"><option value="low">Low</option><option value="medium">Medium</option><option value="high">High</option></select></label>
            <label><span>Due week</span><input defaultValue={6} min={1} name="dueWeek" type="number" /></label>
            <label className="task-form-wide"><span>Instructions</span><textarea name="description" placeholder="Add acceptance criteria or helpful context..." rows={3} /></label>
          </div>
          <button className="primary-action" type="submit"><ClipboardPlus size={17} /> Assign task</button>
        </form>
      )}

      <section className="task-tools">
        <div className="segmented-control" aria-label="Task status filter">
          {statusOptions.map((status) => <button data-active={statusFilter === status} key={status} onClick={() => setStatusFilter(status)} type="button">{status === "all" ? "All" : statusLabels[status]}</button>)}
        </div>
        <input aria-label="Search tasks" onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search tasks, interns, or feature codes..." type="search" value={searchTerm} />
      </section>

      <section className="task-workflow-list" aria-label="Tasks">
        {visibleTasks.map((task) => (
          <article className="task-workflow-card" key={task.id}>
            <div className="task-card-main">
              <div className="task-card-topline">
                <StatusBadge label={statusLabels[task.status]} tone={statusTone[task.status]} />
                <span>{task.featureCode} · Week {task.dueWeek} · {task.priority} priority</span>
              </div>
              <h3>{task.title}</h3>
              <p>{task.description || "No additional instructions provided."}</p>
              <span className="task-owner"><UserRoundCheck size={16} /> Assigned to {task.ownerName}</span>
              {task.completionNote && <div className="task-submission"><strong>Intern submission</strong><p>{task.completionNote}</p></div>}
              {task.mentorFeedback && <div className="task-correction"><strong>Mentor correction</strong><p>{task.mentorFeedback}</p></div>}
            </div>

            <div className="task-card-actions">
              {viewerRole === "intern" && task.status === "todo" && <button className="secondary-action" onClick={() => updateTask(task.id, { status: "in_progress" }, "Task started.")} type="button">Start task</button>}
              {viewerRole === "intern" && task.status === "in_progress" && <button className="primary-action" onClick={() => submitForReview(task)} type="button"><Send size={16} /> Submit completed work</button>}
              {viewerRole === "intern" && task.status === "review" && <span className="task-waiting">Waiting for mentor review</span>}
              {viewerRole === "mentor" && task.status === "review" && (
                <div className="mentor-review-actions">
                  <textarea aria-label={`Feedback for ${task.title}`} onChange={(event) => setFeedback((current) => ({ ...current, [task.id]: event.target.value }))} placeholder="Feedback required when returning work..." rows={2} value={feedback[task.id] ?? ""} />
                  <div>
                    <button className="secondary-action task-return" onClick={() => returnTask(task)} type="button"><RotateCcw size={16} /> Return with corrections</button>
                    <button className="primary-action" onClick={() => updateTask(task.id, { status: "done", mentorFeedback: feedback[task.id]?.trim() || "" }, "Task approved and marked complete.")} type="button"><CheckCircle2 size={16} /> Approve task</button>
                  </div>
                </div>
              )}
              {task.status === "done" && <span className="task-approved"><CheckCircle2 size={17} /> Mentor approved</span>}
            </div>
          </article>
        ))}
        {!visibleTasks.length && <div className="empty-state"><h3>No tasks found</h3><p>Try another status or search term.</p></div>}
      </section>
    </>
  );
}
