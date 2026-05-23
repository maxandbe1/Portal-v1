import { identity } from "../runtime/identityEngine";

export function canAccess(requiredTier) {
  return identity.hasAccess(requiredTier);
}

