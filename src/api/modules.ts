import { api } from "./client";

export function getModules() {
  return api("/api/modules");
}

