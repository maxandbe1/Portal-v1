"use client";

import { useState } from "react";
import { getNextTrainingTask } from "./TrainingLogic";

export default function TrainingView() {
  const [task, setTask] = useState(getNextTrainingTask());

  function next() {
    setTask(getNextTrainingTask());
  }

  return (
    <div style={{ padding: 24 }}>
      <h1>Training</h1>

      <p><strong>Position:</strong> {task.position}</p>
      <p><strong>Prompt:</strong> {task.prompt}</p>

      <button onClick={next}>Next Task</button>
    </div>
  );
}

