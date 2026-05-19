import type { BotResponse, Playlist } from "../data/songs";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api";

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: "Unknown error" }));
    throw new Error(error.message || `Request failed with status ${res.status}`);
  }

  return res.json();
}

export async function postChat(userId: string, message: string): Promise<BotResponse> {
  return request<BotResponse>("/chat", {
    method: "POST",
    body: JSON.stringify({ user_id: userId, message }),
  });
}

export async function postPlaylist(emotionLabel: string, n?: number): Promise<Playlist> {
  return request<Playlist>("/playlist", {
    method: "POST",
    body: JSON.stringify({ emotion_label: emotionLabel, n }),
  });
}

export async function getHealth(): Promise<{ status: string; timestamp: string }> {
  return request("/health");
}
