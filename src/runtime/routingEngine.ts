import { moduleRegistry } from "./moduleRegistry";
import { resolveSymbol } from "./symbolicEngine";

export function route(currentModule, event, identity) {
  // Symbolic routing
  if (event.symbol) {
    return resolveSymbol(event.symbol, identity);
  }

  // Direct module routing
  if (event.toModule && moduleRegistry[event.toModule]) {
    return event.toModule;
  }

  // Default: stay where you are
  return currentModule;
}

