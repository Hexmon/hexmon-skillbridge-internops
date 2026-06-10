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