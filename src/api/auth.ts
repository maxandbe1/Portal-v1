import { api } from "./client";

export function login(username) {
  return api("/api/login", {
    method: "POST",
    body: JSON.stringify({ username })
  });
}

export function logout() {
  return api("/api/logout", { method: "POST" });
}

