export const identity = {
  userId: null,
  tier: "free",

  setUser(id) {
    this.userId = id;
  },

  setTier(tier) {
    this.tier = tier;
  },

  hasAccess(requiredTier) {
    if (requiredTier === "free") return true;
    if (requiredTier === "pro" && this.tier !== "free") return true;
    if (requiredTier === "operator" && this.tier === "operator") return true;
    return false;
  }
};

