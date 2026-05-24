import { ClipboardCheck } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { StatusBadge } from "../components/StatusBadge";
import { bugReports, qaTestCases } from "../services/mockData";

export function QaCenterPage() {
  return (
    <>
      <PageHeader
        eyebrow="F8"
        title="QA Test Center"
        description="Manual cases, bug reports, and release evidence for smoke and regression checks."
      />

      <section className="two-column">
        <div>
          <h2>Manual Test Cases</h2>
          <div className="stack">
            {qaTestCases.map((testCase) => (
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
          <h2>Bug Reports</h2>
          <div className="stack">
            {bugReports.map((bug) => (
              <article className="info-card" key={bug.id}>
                <StatusBadge label={bug.featureCode} tone="red" />
                <h3>{bug.title}</h3>
                <div className="meta-line">
                  <StatusBadge label={bug.severity} tone="amber" />
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
