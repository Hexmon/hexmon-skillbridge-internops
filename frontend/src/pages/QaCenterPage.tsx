import {
  ClipboardCheck,
  Bug,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import { useState } from "react";
import { StatTile } from "../components/StatTile";
import { PageHeader } from "../components/PageHeader";
import { StatusBadge } from "../components/StatusBadge";
import { bugReports, qaTestCases } from "../services/mockData";

export function QaCenterPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTestCases = qaTestCases.filter((testCase) =>
    testCase.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredBugs = bugReports.filter((bug) =>
    bug.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const readyCases = qaTestCases.filter(
    (testCase) => testCase.status === "ready"
  ).length;

  const openBugs = bugReports.filter(
    (bug) => bug.status === "open"
  ).length;

  return (
    <>
      <PageHeader
        eyebrow="F8"
        title="QA Test Center"
        description="Manual cases, bug reports, and release evidence for smoke and regression checks."
      />

      <section className="stat-grid">
        <StatTile
          icon={ClipboardCheck}
          label="Test Cases"
          value={qaTestCases.length}
          tone="blue"
        />

        <StatTile
          icon={CheckCircle2}
          label="Ready Cases"
          value={readyCases}
          tone="green"
        />

        <StatTile
          icon={Bug}
          label="Bug Reports"
          value={bugReports.length}
          tone="amber"
        />

        <StatTile
          icon={AlertTriangle}
          label="Open Bugs"
          value={openBugs}
          tone="red"
        />
      </section>

      <section className="toolbar wide-card">
        <input
          type="text"
          placeholder="Search test cases or bugs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </section>

      <section className="two-column">
        <div>
          <h2>Manual Test Cases ({filteredTestCases.length})</h2>
          <div className="stack">
            {filteredTestCases.map((testCase) => (
              <article className="row-card" key={testCase.id}>
                <div>
                  <div className="card-icon-line">
                    <ClipboardCheck size={18} aria-hidden="true" />
                    <StatusBadge label={testCase.id} tone="blue" />
                  </div>
                  <h3>{testCase.title}</h3>
                  <p>{testCase.expected}</p>
                </div>
                <StatusBadge label={testCase.status} tone={testCase.status === "ready" ? "green" : "neutral"} />
              </article>
            ))}
          </div>
        </div>

        <div>
          <h2>Bug Reports ({filteredBugs.length})</h2>
          <div className="stack">
            {filteredBugs.map((bug) => (
              <article className="info-card" key={bug.id}>
                <StatusBadge label={bug.featureCode} tone="red" />
                <h3>{bug.title}</h3>
                <div className="meta-line">
                  <StatusBadge
                    label={bug.severity}
                    tone={
                      bug.severity === "critical"
                        ? "red"
                        : bug.severity === "high"
                        ? "amber"
                        : "blue"
                    }
                  />
                  <StatusBadge label={bug.status} tone="blue" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
