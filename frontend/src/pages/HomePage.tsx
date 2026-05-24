import { ArrowRight, ClipboardCheck, FileText, ListChecks, Users } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { StatTile } from "../components/StatTile";
import { StatusBadge } from "../components/StatusBadge";
import { interns } from "../services/mockData";

type HomePageProps = {
  onOpenDashboard: () => void;
};

const featureCards = [
  { code: "F1", title: "Role directory", detail: "Profiles and responsibilities" },
  { code: "F2", title: "Resources", detail: "Week, role, and topic filters" },
  { code: "F3", title: "Task board", detail: "Owner, status, priority, due week" },
  { code: "F4", title: "Daily updates", detail: "Done, blockers, next action" },
  { code: "F8", title: "QA center", detail: "Cases, bugs, regression gates" },
  { code: "F10", title: "Portfolio report", detail: "Final evidence by role" },
];

export function HomePage({ onOpenDashboard }: HomePageProps) {
  return (
    <>
      <PageHeader
        eyebrow="Hexmon SkillBridge"
        title="AI InternOps Platform"
        description="A working starter space for the intern team to build the curriculum project through roles, issues, pull requests, testing, and documentation."
      />

      <section className="action-band">
        <div>
          <h2>Starter scaffold is ready</h2>
          <p>
            Use this app to confirm navigation, contracts, seed content, and QA
            flow before replacing placeholders with real feature work.
          </p>
        </div>
        <button className="primary-action" onClick={onOpenDashboard} type="button">
          <span>Open dashboard</span>
          <ArrowRight size={18} aria-hidden="true" />
        </button>
      </section>

      <section className="stat-grid" aria-label="Project snapshot">
        <StatTile icon={Users} label="Intern roles" value={interns.length} tone="red" />
        <StatTile icon={ListChecks} label="Feature tracks" value="10" tone="blue" />
        <StatTile icon={ClipboardCheck} label="QA modes" value="5" tone="green" />
        <StatTile icon={FileText} label="Core docs" value="6" tone="amber" />
      </section>

      <section className="card-grid" aria-label="Feature starter cards">
        {featureCards.map((feature) => (
          <article className="info-card" key={feature.code}>
            <StatusBadge label={feature.code} tone="red" />
            <h3>{feature.title}</h3>
            <p>{feature.detail}</p>
          </article>
        ))}
      </section>
    </>
  );
}
