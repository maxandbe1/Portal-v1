export function resolveSymbol(symbol, identity) {
  const map = {
    "open-chess": "chess",
    "open-maps": "maps",
    "go-home": "home"
  };

  return map[symbol] || "home";
}

