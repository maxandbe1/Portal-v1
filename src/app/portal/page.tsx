"use client";

import { useState } from "react";
import ModuleFrame from "../../components/ModuleFrame";
import { moduleRegistry } from "../../runtime/moduleRegistry";
import { state } from "../../runtime/stateEngine";
import { route } from "../../runtime/routingEngine";
import { identity } from "../../runtime/identityEngine"; // <-- ADD THIS

export default function PortalPage() {
  const [activeModule, setActiveModule] = useState(state.activeModule);

  function handleClick(e) {
    const target = e.target.getAttribute("data-route");
    if (!target) return;

    const next = route(activeModule, { toModule: target }, identity); // <-- FIXED
    state.setActiveModule(next);
    setActiveModule(next);
  }

  const Module = moduleRegistry[activeModule].component;

  return (
    <div onClick={handleClick}>
      <ModuleFrame>
        import { Suspense } from "react";
      </ModuleFrame>
    </div>
  );
}
