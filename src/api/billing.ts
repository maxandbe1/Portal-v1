import { api } from "./client";

export function purchaseTier(tier) {
  return api("/api/purchase", {
    method: "POST",
    body: JSON.stringify({ tier })
  });
}

