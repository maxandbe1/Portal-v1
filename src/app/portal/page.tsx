"use client";

import { useState, Suspense } from "react";
import ModuleFrame from "../../components/ModuleFrame";
import { moduleRegistry } from "../../runtime/moduleRegistry";
import { state } from "../../runtime/stateEngine";
import { route } from "../../runtime/routingEngine";
import { identity } from "../../runtime/identityEngine";

export default function PortalPage() {
  const [activeModule, setActiveModule] = useState(state.activeModule);

  function handleClick(e) {
    const target = e.target.getAttribute("data-route");
    if (!target) return;

    const next = route(activeModule, { toModule: target }, identity);
    state.setActiveModule(next);
    setActiveModule(next);
  }

  const Module = moduleRegistry[activeModule].component;

  return (
    <div onClick={handleClick}>
      <ModuleFrame>
        <Suspense fallback={<div>Loading...</div>}>
          <Module />
        </Suspense>
      </ModuleFrame>
    </div>
  );
}
