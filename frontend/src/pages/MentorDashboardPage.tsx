import {
  AlertTriangle,
  BarChart3,
  CheckCircle2,
  Users,
  Clock,
} from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { StatTile } from "../components/StatTile";
import { StatusBadge } from "../components/StatusBadge";
import { dailyUpdates, interns, tasks } from "../services/mockData";

export function MentorDashboardPage() {
  const doneTasks = tasks.filter((task) => task.status === "done").length;
  const openBlockers = dailyUpdates.filter((update) => update.blockers !== "None").length;

  const activeTasks = tasks.filter(
    (task) => task.status !== "done"
  ).length;

  const completionRate = Math.round(
    (doneTasks / tasks.length) * 100
  );

  const qaReadiness = 70;

  const internActivity = Math.round(
    ((interns.length - openBlockers) / interns.length) * 100
  );

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
        <StatTile
          icon={Clock}
          label="Completion Rate"
          value={`${completionRate}%`}
          tone="green"
        />
        <StatTile
          icon={CheckCircle2}
          label="QA Ready"
          value="1"
          tone="green"
        />
      </section>

      <section className="two-column">
        <article className="info-card">
          <StatusBadge
            label="Weekly Summary"
            tone="blue"
          />

          <h2>Project Status</h2>

          <p>
            Frontend scaffold is actively progressing.
            Core pages have been enhanced and are
            ready for backend integration.
          </p>

          <div className="meta-line">
            <StatusBadge
              label={`${doneTasks} Completed`}
              tone="green"
            />

            <StatusBadge
              label={`${activeTasks} Active`}
              tone="blue"
            />
          </div>
        </article>

        <article className="info-card">
          <StatusBadge
            label="Mentor Attention"
            tone="amber"
          />

          <h2>Current Blockers</h2>

          <p>
            Backend APIs and database integration
            are pending implementation.
          </p>

          <div className="meta-line">
            <StatusBadge
              label={`${openBlockers} Open Blockers`}
              tone="red"
            />
          </div>
        </article>
      </section>

      <section className="info-card">
        <h2>Mentor Progress Overview</h2>

        <div className="progress-item">
          <span>Overall Completion</span>
          <span>{completionRate}%</span>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill mentor-progress"
            style={{ width: `${completionRate}%` }}
          />
        </div>

        <div className="progress-item">
          <span>QA Readiness</span>
          <span>{qaReadiness}%</span>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill mentor-progress"
            style={{ width: `${qaReadiness}%` }}
          />
        </div>

        <div className="progress-item">
          <span>Intern Activity</span>
          <span>{internActivity}%</span>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill mentor-progress"
            style={{ width: `${internActivity}%` }}
          />
        </div>
      </section>

      <section>
        <h2>Intern Progress Overview</h2>

        <div className="stack">
          {interns.map((intern) => (
            <article
              className="row-card"
              key={intern.id}
            >
              <div>
                <h3>{intern.name}</h3>
                <p>{intern.primaryRole}</p>
              </div>

              <StatusBadge
                label={intern.currentFocus}
                tone="blue"
              />
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
