import { Send } from "lucide-react";
import { useMemo, useState } from "react";
import { PageHeader } from "../components/PageHeader";
import { StatusBadge } from "../components/StatusBadge";
import { dailyUpdates, interns } from "../services/mockData";

export function DailyUpdatesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [confidence, setConfidence] = useState(4);

  const [doneToday, setDoneToday] = useState("");
  const [summary, setSummary] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [reviewed, setReviewed] = useState(false);

  const visibleUpdates = useMemo(
    () =>
      dailyUpdates.filter((update) =>
        update.internName.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    [searchTerm],
  );

  return (
    <>
      <PageHeader
        eyebrow="F4"
        title="Daily Update Log"
        description="A starter form layout for done, blockers, next action, confidence, and update history."
      />

      <section className="two-column">
        <form className="form-panel">
          <label htmlFor="intern">Intern</label>
          <select id="intern" name="intern">
            {interns.map((intern) => (
              <option key={intern.id}>{intern.name}</option>
            ))}
          </select>

          <label htmlFor="done">Done today</label>
          <textarea
            id="done"
            name="done"
            rows={4}
            placeholder="Describe everything you completed today..."
            value={doneToday}
            onChange={(e) => {
              const value = e.target.value;

              setDoneToday(value);

              setIsGenerating(true);

              setSummary("");

              clearTimeout((window as any).summaryTimer);

              (window as any).summaryTimer = setTimeout(() => {

                if (value.trim().length > 10) {

                  setSummary(
                    `Today I completed ${value.trim()}. I successfully progressed on my assigned internship tasks and will continue with the planned activities in the next session.`
                  );

                }

                setIsGenerating(false);

              }, 4000);
            }}
          />

          <label htmlFor="blockers">Blockers</label>
          <textarea id="blockers" name="blockers" rows={3} placeholder="None or describe the blocker" />

          <label htmlFor="next-action">Next action</label>
          <textarea id="next-action" name="next-action" rows={3} placeholder="Next step..." />

          <label htmlFor="confidence">Confidence score</label>
          <input
            id="confidence"
            type="range"
            min="1"
            max="5"
            value={confidence}
            onChange={(e) => setConfidence(Number(e.target.value))}
          />

          <p>Confidence Level: {confidence}/5</p>

          <div className="ai-summary-card">
            <h3>🤖 AI Daily Summary</h3>

            {isGenerating ? (
              <div className="summary-loading">
                ⏳ Generating summary...
              </div>
            ) : summary ? (
              <>
                <div className="summary-box">
                  {summary}
                </div>

                <label className="review-checkbox">
                  <input
                    type="checkbox"
                    checked={reviewed}
                    onChange={(e) => setReviewed(e.target.checked)}
                  />
                  I have reviewed this summary.
                </label>

                <button
                  type="button"
                  className="secondary-action"
                  onClick={() => navigator.clipboard.writeText(summary)}
                >
                  📋 Copy Summary
                </button>
              </>
            ) : (
              <p className="summary-placeholder">
                Start typing in <strong>Done Today</strong>. After a few seconds, an AI-generated summary will appear here automatically.
              </p>
            )}
          </div>

          <button className="primary-action" type="button" disabled={!reviewed}>
            <span>Submit Update</span>
            <Send size={18} aria-hidden="true" />
          </button>
        </form>

        <div>
          <div className="toolbar">
            <h2>Recent Updates</h2>
          </div>

          <input
            type="text"
            placeholder="Search updates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <p>
            Showing {visibleUpdates.length} updates
          </p>

          <div className="stack">
            {visibleUpdates.map((update) => (
              <article className="info-card" key={update.id}>
                <StatusBadge label={`${update.date} - ${update.internName}`} tone="blue" />
                <p>{update.done}</p>
                <StatusBadge
                  label={`Blocker: ${update.blockers}`}
                  tone="amber"
                />
                <p><strong>Next:</strong> {update.nextAction}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
