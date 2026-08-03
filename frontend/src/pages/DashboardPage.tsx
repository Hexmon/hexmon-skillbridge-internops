import {
  CheckCircle2,
  Clock,
  GitPullRequest,
  MessageCircleWarning,
  LifeBuoy,
} from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { StatTile } from "../components/StatTile";
import { StatusBadge } from "../components/StatusBadge";
import { dailyUpdates, interns, tasks } from "../services/mockData";

export function DashboardPage() {
  const activeTasks = tasks.filter((task) => task.status !== "done");
  const blockers = dailyUpdates.filter((update) => update.blockers !== "None");

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "1.5rem",
        }}
      >
        <PageHeader
          eyebrow="Intern view"
          title="Intern Dashboard"
          description="Current starter data for roles, assigned work, latest updates, and PR-ready evidence."
        />

        <button
          onClick={() =>
            window.open(
              "https://mail.google.com/mail/?view=cm&fs=1&to=andoleaasritha@gmail.com",
              "_blank"
            )
          }
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "10px 16px",
            cursor: "pointer",
            fontWeight: 600,
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <LifeBuoy size={18} />
          Support & Help
        </button>
      </div>

      <section className="stat-grid" aria-label="Intern dashboard metrics">
        <StatTile
          icon={Clock}
          label="Open tasks"
          value={activeTasks.length}
          tone="blue"
        />
        <StatTile
          icon={CheckCircle2}
          label="Done tasks"
          value="1"
          tone="green"
        />
        <StatTile
          icon={MessageCircleWarning}
          label="Blockers logged"
          value={blockers.length}
          tone="amber"
        />
        <StatTile
          icon={GitPullRequest}
          label="PR evidence needed"
          value="Every task"
          tone="red"
        />
      </section>

      <section className="two-column">
        <div>
          <h2>Role Focus</h2>
          <div className="stack">
            {interns.slice(0, 4).map((intern) => (
              <article className="row-card" key={intern.id}>
                <div>
                  <h3>{intern.name}</h3>
                  <p>{intern.primaryRole}</p>
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
                <p>{update.done}</p>
                <p>
                  <strong>Next:</strong> {update.nextAction}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}