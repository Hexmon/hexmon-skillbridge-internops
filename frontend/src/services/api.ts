const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8000";

export type AICoachRequest = {
  question: string;
  role?: string;
  week?: number;
};

export type AICoachResponse = {
  answer: string;
  suggested_next_steps: string[];
  suggested_resources: string[];
  mode: string;
};

export async function getHealth() {
  const response = await fetch(`${API_BASE_URL}/health`);

  if (!response.ok) {
    throw new Error("Backend health check failed");
  }

  return response.json() as Promise<{ status: string; service: string }>;
}

export async function askAiCoach(payload: AICoachRequest) {
  const response = await fetch(`${API_BASE_URL}/api/ai/coach`, {
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  if (!response.ok) {
    let message = "AI Coach request failed";

    try {
      const errorBody = (await response.json()) as { detail?: unknown };
      if (typeof errorBody.detail === "string") {
        message = errorBody.detail;
      }
    } catch {
      message = `AI Coach request failed with status ${response.status}`;
    }

    throw new Error(message);
  }

  return response.json() as Promise<AICoachResponse>;
}

export { API_BASE_URL };
