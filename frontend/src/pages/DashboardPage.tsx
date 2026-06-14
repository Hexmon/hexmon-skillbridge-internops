import { CheckCircle2, Clock, GitPullRequest, MessageCircleWarning } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { StatTile } from "../components/StatTile";
import { StatusBadge } from "../components/StatusBadge";
import { dailyUpdates, interns, tasks, resources } from "../services/mockData";

export function DashboardPage() {
  const activeTasks = tasks.filter((task) => task.status !== "done");
  const blockers = dailyUpdates.filter((update) => update.blockers !== "None");
  const completedTasks = tasks.filter(
    (task) => task.status === "done",
  );
  const totalResources = resources.length;
  const taskProgress = Math.round(
    (completedTasks.length / tasks.length) * 100
  );

  const resourceProgress = 75;
  const qaProgress = 60;
  const activities = [
    {
      type: "success",
      text: "K. Rajesh completed Build resources page filters",
      time: "10 min ago",
    },
    {
      type: "warning",
      text: "Biswajeet Kar updated architecture document",
      time: "25 min ago",
    },
    {
      type: "info",
      text: "New React learning resource added",
      time: "1 hour ago",
    },
    {
      type: "danger",
      text: "Backend API blocker reported",
      time: "2 hours ago",
    },
    {
      type: "success",
      text: "QA checklist created",
      time: "Today",
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Intern view"
        title="Intern Dashboard"
        description="Current starter data for roles, assigned work, latest updates, and PR-ready evidence."
      />

      <section className="stat-grid" aria-label="Intern dashboard metrics">
        <StatTile
          icon={Clock}
          label="Active Tasks"
          value={activeTasks.length}
          tone="blue"
        />
        <StatTile
          icon={CheckCircle2}
          label="Completed Tasks"
          value={completedTasks.length}
          tone="green"
        />
        <StatTile
          icon={MessageCircleWarning}
          label="Blockers"
          value={blockers.length}
          tone="amber"
        />
        <StatTile
          icon={GitPullRequest}
          label="Learning Resources"
          value={totalResources}
          tone="red"
        />
      </section>

      <section className="info-card">
        <h2>Recent Activity</h2>

        <div className="activity-timeline">
          {activities.map((activity, index) => (
            <div
              key={index}
              className={`activity-item ${activity.type}`}
            >
              <div className="activity-dot" />

              <div className="activity-content">
                <p>{activity.text}</p>
                <small>{activity.time}</small>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="info-card">
        <h2>Project Progress</h2>

        <div className="progress-item">
          <span>Task Completion</span>
          <span>{taskProgress}%</span>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${taskProgress}%` }}
          />
        </div>

        <div className="progress-item">
          <span>Resources Coverage</span>
          <span>{resourceProgress}%</span>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${resourceProgress}%` }}
          />
        </div>

        <div className="progress-item">
          <span>QA Readiness</span>
          <span>{qaProgress}%</span>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${qaProgress}%` }}
          />
        </div>
      </section>

      <section className="two-column">
        <div>
          <h2>Role Focus</h2>
          <div className="stack">
            {interns.slice(0, 4).map((intern) => (
              <article className="row-card" key={intern.id}>
                <div>
                  <h3>{intern.name}</h3>
                  <>
                    <p>{intern.primaryRole}</p>
                    <p>
                      <strong>Availability:</strong> {intern.availability}
                    </p>
                  </>
                </div>
                <StatusBadge label={intern.currentFocus} tone="blue" />
              </article>
            ))}
          </div>
        </div>

        <div>
          <h2>Latest Updates</h2>
          <div className="stack">
            {dailyUpdates.map((update) => (
              <article className="info-card" key={update.id}>
                <StatusBadge label={update.date} tone="neutral" />
                <h3>{update.internName}</h3>
                <>
                  <p>{update.done}</p>
                  {update.blockers !== "None" && (
                    <StatusBadge
                      label={`Blocker: ${update.blockers}`}
                      tone="amber"
                    />
                  )}
                </>
                <p><strong>Next:</strong> {update.nextAction}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}