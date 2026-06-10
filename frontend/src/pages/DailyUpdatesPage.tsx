import { Send } from "lucide-react";
import { useMemo, useState } from "react";
import { PageHeader } from "../components/PageHeader";
import { StatusBadge } from "../components/StatusBadge";
import { dailyUpdates, interns } from "../services/mockData";

export function DailyUpdatesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [confidence, setConfidence] = useState(4);

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
          <textarea id="done" name="done" rows={4} placeholder="Completed..." />

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

          <button className="primary-action" type="button">
            <span>Submit update</span>
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
