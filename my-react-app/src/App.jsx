import Candidates from "./pages/candidates.jsx";
import "./App.css";
import Bridgers from "./pages/bridgers.jsx";

const navigationItems = [
  "Dashboard",
  "Candidates",
  "Matches",
  "Jobs",
  "Settings",
];

function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <a className="brand" href="#" aria-label="Bridgeback home">
          <span className="brand-mark" aria-hidden="true">B</span>
          <span>Bridgeback</span>
        </a>

        <nav className="sidebar-nav" aria-label="Main navigation">
          {navigationItems.map((item) => (
            <button
              className={`nav-item${item === "Candidates" ? " is-active" : ""}`}
              type="button"
              key={item}
              disabled
              aria-current={item === "Candidates" ? "page" : undefined}
            >
              <span className="nav-indicator" aria-hidden="true" />
              {item}
            </button>
          ))}
        </nav>
      </aside>

      <main className="main-content">
        <header className="page-header">
          <p className="eyebrow">Talent workspace</p>
          <h1>Candidates</h1>
        </header>
        <Candidates />
        <Bridgers/>
      </main>
    </div>
  );
}

export default App;
