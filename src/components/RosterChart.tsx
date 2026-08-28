import { FLEET } from "@/data/fleet";

function isLight(hex: string) {
  if (!hex.startsWith("#") || hex.length < 7) return false;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 180;
}

export function RosterChart() {
  return (
    <section id="roster" className="roster">
      <p className="eyebrow">The agent fleet</p>
      <h2>Three agents. Three computers. One seller in control.</h2>
      <p className="section-lede">
        Each named agent keeps its own workspace and status. The seller can
        watch the work, review the artifact, and decide what leaves the draft.
      </p>
      <div className="fleet-grid">
        {FLEET.map((agent) => (
          <a key={agent.id} className="fleet-agent" href={`#${agent.jobId}`}>
            <header>
              <span
                className="fleet-avatar"
                style={{
                  background: agent.color,
                  color: isLight(agent.color) ? "#0b1f3a" : "#fff",
                }}
                aria-hidden
              >
                {agent.name.slice(0, 1)}
              </span>
              <p>
                <strong>{agent.name}</strong>
                <small>
                  <i aria-hidden />
                  {agent.status}
                </small>
              </p>
            </header>
            <p className="fleet-blurb">{agent.blurb}</p>
            <div className="fleet-computer" aria-label={`${agent.name} computer`}>
              <div className="fleet-computer-bar">
                <span aria-hidden>
                  <i />
                  <i />
                  <i />
                </span>
                <strong>Computer</strong>
              </div>
              <div className="fleet-computer-body">
                <span>{agent.app}</span>
                <p>{agent.task}</p>
                <small>Work stays in draft</small>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
