import { AlertCircle, Bot, Sparkles } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { PageHeader } from "../components/PageHeader";
import { StatusBadge } from "../components/StatusBadge";
import { askAiCoach, type AICoachResponse } from "../services/api";
import { resources } from "../services/mockData";

const starterResponse: AICoachResponse = {
  answer:
    "Break the task into a small branch, confirm the API/data contract, add one test or checklist item, then open a pull request with clear evidence.",
  mode: "starter guidance",
  suggested_next_steps: [
    "Find the matching issue and acceptance criteria.",
    "Check docs/api.md or docs/database.md before changing contracts.",
    "Add a manual test case or backend/frontend check.",
  ],
  suggested_resources: resources.slice(0, 3).map((resource) => resource.title),
};

export function AiCoachPage() {
  const [question, setQuestion] = useState("");
  const [role, setRole] = useState("");
  const [week, setWeek] = useState("");
  const [response, setResponse] = useState<AICoachResponse>(starterResponse);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const roleOptions = useMemo(
    () => Array.from(new Set(resources.map((resource) => resource.role))),
    [],
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedQuestion = question.trim();
    if (trimmedQuestion.length < 3) {
      setError("Ask a question with at least 3 characters.");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      const nextResponse = await askAiCoach({
        question: trimmedQuestion,
        role: role || undefined,
        week: week ? Number(week) : undefined,
      });
      setResponse(nextResponse);
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "AI Coach request failed",
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <PageHeader
        eyebrow="F6 + F7"
        title="AI Coach"
        description="Rule-based fallback space for beginner answers, resource suggestions, and daily update summaries."
      />

      <section className="ai-hero">
        <div className="ai-hero-content">
          <Bot size={40} />
          <div>
            <h2>Your Personal AI Learning Assistant</h2>
            <p>
              Ask coding, GitHub, React, FastAPI, project workflow,
              and internship-related questions.
            </p>
          </div>
        </div>
      </section>

      <div className="ai-stats">
        <div>📚 Resources: 20+</div>
        <div>🎯 Guidance: Real-time</div>
        <div>🚀 Role-Based Support</div>
      </div>

      <section className="two-column">
        <form className="form-panel" onSubmit={handleSubmit}>
          <label htmlFor="question">Question</label>
          <textarea
            id="question"
            name="question"
            onChange={(event) => setQuestion(event.target.value)}
            rows={6}
            placeholder="Ask a project or learning question..."
            value={question}
          />

          <div className="prompt-grid">
            <button
              type="button"
              onClick={() =>
                setQuestion("How should I start building the task board feature?")
              }
            >
              🚀 Build Task Board
            </button>

            <button
              type="button"
              onClick={() =>
                setQuestion("How do I connect React frontend with FastAPI backend?")
              }
            >
              ⚛️ React + FastAPI
            </button>

            <button
              type="button"
              onClick={() =>
                setQuestion("How do I write a good pull request?")
              }
            >
              📦 Create Pull Request
            </button>

            <button
              type="button"
              onClick={() =>
                setQuestion("Why is my code not working?")
              }
            >
              🐛 Debug My Code
            </button>
          </div>

          <p className="helper-text">
            {question.length}/500 characters
          </p>

          <label htmlFor="role">Role focus</label>
          <select
            id="role"
            name="role"
            onChange={(event) => setRole(event.target.value)}
            value={role}
          >
            <option value="">Any role</option>
            {roleOptions.map((roleOption) => (
              <option key={roleOption} value={roleOption}>
                {roleOption}
              </option>
            ))}
          </select>

          <label htmlFor="week">Week</label>
          <input
            id="week"
            min="1"
            name="week"
            onChange={(event) => setWeek(event.target.value)}
            placeholder="Optional"
            type="number"
            value={week}
          />

          {error ? (
            <p className="feedback-message" role="alert">
              <AlertCircle size={18} aria-hidden="true" />
              <span>{error}</span>
            </p>
          ) : null}

          <button className="primary-action" disabled={isLoading} type="submit">
            <span>
              {isLoading ? "Thinking..." : "Ask coach"}
            </span>
            <Bot size={18} aria-hidden="true" />
          </button>

          <button
            type="button"
            className="secondary-action"
            onClick={() => {
              setQuestion("");
              setRole("");
              setWeek("");
            }}
          >
            Clear Form
          </button>
        </form>

        <article className="response-panel" aria-live="polite">
          <div className="card-icon-line">
            <Sparkles size={18} aria-hidden="true" />
            <StatusBadge label={response.mode} tone="green" />
          </div>
          <div className="coach-header">
            <Bot size={24} />
            <div>
              <h2>AI Coach Response</h2>
              <span>Ready to assist</span>
            </div>
          </div>
          <p>{response.answer}</p>
          <h3>Next steps</h3>
          <ul className="clean-list">
            {response.suggested_next_steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
          <h3>Suggested resources</h3>
          <ul className="clean-list">
            {response.suggested_resources.map((resource) => (
              <li key={resource}>{resource}</li>
            ))}
          </ul>
        </article>
      </section>
    </>
  );
}
