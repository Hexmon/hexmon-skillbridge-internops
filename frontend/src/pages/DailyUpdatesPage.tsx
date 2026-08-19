import { Send, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { PageHeader } from "../components/PageHeader";
import { StatusBadge } from "../components/StatusBadge";
import { dailyUpdates, interns } from "../services/mockData";

export function DailyUpdatesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [confidence, setConfidence] = useState(4);

  const [doneToday, setDoneToday] = useState("");
  const [blockers, setBlockers] = useState("");
  const [nextAction, setNextAction] = useState("");

  const [summary, setSummary] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [reviewed, setReviewed] = useState(false);
  const [error, setError] = useState("");

  const visibleUpdates = useMemo(
    () =>
      dailyUpdates.filter((update) =>
        update.internName.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    [searchTerm],
  );

  const generateSummary = async () => {
    if (!doneToday.trim() && !blockers.trim() && !nextAction.trim()) {
      setError("Please enter your daily update before generating a summary.");
      return;
    }

    setIsGenerating(true);
    setSummary("");
    setError("");
    setReviewed(false);

    try {
      const today = new Date().toISOString().split("T")[0];

      const response = await fetch(
        "http://localhost:8000/api/ai/summarize-updates",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            date: today,
            completed_work: doneToday,
            blockers: blockers,
            next_actions: nextAction,
          }),
        },
      );

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();

      setSummary(data.summary);
    } catch (error) {
      console.error("Failed to generate summary:", error);
      setError(
        "Unable to generate the summary. Please make sure the backend is running.",
      );
    } finally {
      setIsGenerating(false);
    }
  };

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
            onChange={(e) => setDoneToday(e.target.value)}
          />

          <label htmlFor="blockers">Blockers</label>

          <textarea
            id="blockers"
            name="blockers"
            rows={3}
            placeholder="None or describe the blocker"
            value={blockers}
            onChange={(e) => setBlockers(e.target.value)}
          />

          <label htmlFor="next-action">Next action</label>

          <textarea
            id="next-action"
            name="next-action"
            rows={3}
            placeholder="Next step..."
            value={nextAction}
            onChange={(e) => setNextAction(e.target.value)}
          />

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

          <button
            type="button"
            className="primary-action"
            onClick={generateSummary}
            disabled={isGenerating}
          >
            <Sparkles size={18} aria-hidden="true" />

            <span>
              {isGenerating ? "Generating Summary..." : "Generate Summary"}
            </span>
          </button>

          <div className="ai-summary-card">
            <h3>🤖 Daily Summary</h3>

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
                Fill in your completed work, blockers, and next actions, then
                click <strong>Generate Summary</strong>.
              </p>
            )}

            {error && (
              <p
                style={{
                  marginTop: "12px",
                  color: "#dc2626",
                }}
              >
                {error}
              </p>
            )}
          </div>

          <button
            className="primary-action"
            type="button"
            disabled={!reviewed}
          >
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

          <p>Showing {visibleUpdates.length} updates</p>

          <div className="stack">
            {visibleUpdates.map((update) => (
              <article className="info-card" key={update.id}>
                <StatusBadge
                  label={`${update.date} - ${update.internName}`}
                  tone="blue"
                />

                <p>{update.done}</p>

                <StatusBadge
                  label={`Blocker: ${update.blockers}`}
                  tone="amber"
                />

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