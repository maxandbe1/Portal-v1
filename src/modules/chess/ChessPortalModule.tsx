"use client";

import { useState } from "react";
import ChessSuiteHome from "./ChessSuiteHome";
import TrainingView from "./TrainingView";

export default function ChessPortalModule() {
  const [screen, setScreen] = useState("home");

  function handleClick(e) {
    const route = e.target.getAttribute("data-route");
    if (!route) return;

    if (route === "chess-training") setScreen("training");
  }

  return (
    <div onClick={handleClick}>
      {screen === "home" && <ChessSuiteHome />}
      {screen === "training" && <TrainingView />}
    </div>
  );
}
