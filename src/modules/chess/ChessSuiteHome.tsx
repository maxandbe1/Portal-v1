export default function ChessSuiteHome() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Chess Suite</h1>
      <p>Choose a mode:</p>

      <ul>
        <li data-route="chess-training">Training</li>
        <li>Puzzles (coming soon)</li>
        <li>Analysis (coming soon)</li>
      </ul>
    </div>
  );
}

