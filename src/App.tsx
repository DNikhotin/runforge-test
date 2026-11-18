import { RunsPage } from "./components/RunsPage/RunsPage";
import "./index.css";

function App() {
  return (
    <div>
      <header style={{ padding: '20px 20px 0 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>
          Runforge
        </div>
      </header>
      <RunsPage />
    </div>
  );
}

export default App;