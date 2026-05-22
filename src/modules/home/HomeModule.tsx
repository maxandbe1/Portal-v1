export default function HomeModule() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Portal Home</h1>

      <h2>Your Modules</h2>
      <ul>
        <li data-route="chess">Open Chess Suite</li>
        <li data-route="maps">Open Symbolic Maps</li>
      </ul>
    </div>
  );
}

