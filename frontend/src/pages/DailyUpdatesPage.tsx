import { Send } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { StatusBadge } from "../components/StatusBadge";
import { dailyUpdates, interns } from "../services/mockData";

export function DailyUpdatesPage() {
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
          <input id="confidence" min="1" max="5" name="confidence" type="number" defaultValue="4" />

          <button className="primary-action" type="button">
            <span>Submit update</span>
            <Send size={18} aria-hidden="true" />
          </button>
        </form>

        <div>
          <h2>Recent Updates</h2>
          <div className="stack">
            {dailyUpdates.map((update) => (
              <article className="info-card" key={update.id}>
                <StatusBadge label={`${update.date} - ${update.internName}`} tone="blue" />
                <p>{update.done}</p>
                <p><strong>Blocker:</strong> {update.blockers}</p>
                <p><strong>Next:</strong> {update.nextAction}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
