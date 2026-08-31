import type { Artifact } from "@/data/types";

export function ArtifactCard({ artifact }: { artifact: Artifact }) {
  switch (artifact.kind) {
    case "slides":
      return (
        <div className="art art-doc">
          <p className="art-kicker">Slide draft</p>
          <h3 className="art-title">{artifact.title}</h3>
          {artifact.cards.map((card) => (
            <div key={card.n} className="art-block">
              <p className="art-label">{card.title}</p>
              <p>{card.body}</p>
            </div>
          ))}
        </div>
      );
    case "one-pager":
      return (
        <div className="art art-doc">
          <p className="art-kicker">{artifact.eyebrow || "One-pager"}</p>
          <h3 className="art-title">{artifact.title}</h3>
          {artifact.sections.map((section) => (
            <div key={section.heading} className="art-block">
              <p className="art-label">{section.heading}</p>
              <p>{section.body}</p>
            </div>
          ))}
        </div>
      );
    case "checklist":
      return (
        <div className="art art-checklist">
          <p className="art-kicker">Sourced checklist</p>
          <h3 className="art-title">{artifact.title}</h3>
          <p className="art-caption">{artifact.sourceNote}</p>
          <ol>
            {artifact.items.map((item) => (
              <li key={item.label}>
                <span aria-hidden>✓</span>
                <p>
                  <strong>{item.label}</strong>
                  <small>{item.answer}</small>
                  <em>{item.source}</em>
                </p>
              </li>
            ))}
          </ol>
        </div>
      );
    case "packet":
      return (
        <div className="art art-doc">
          <p className="art-kicker">Working brief</p>
          <h3 className="art-title">{artifact.title}</h3>
          {artifact.fields.map((field) => (
            <div key={field.label} className="art-block">
              <p className="art-label">{field.label}</p>
              <p>{field.value}</p>
            </div>
          ))}
        </div>
      );
    case "table":
      return (
        <div className="art art-sheet">
          <p className="art-kicker">Sheet</p>
          <h3 className="art-title">{artifact.title}</h3>
          <div className="art-table-wrap">
            <table>
              <thead>
                <tr>
                  {artifact.columns.map((column) => (
                    <th key={column}>{column}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {artifact.rows.map((row, index) => (
                  <tr key={index}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {artifact.caption ? (
            <p className="art-caption">{artifact.caption}</p>
          ) : null}
        </div>
      );
    case "talk-tracks":
      return (
        <div className="art art-tracks">
          <p className="art-kicker">{artifact.title}</p>
          <ul>
            {artifact.tracks.map((track) => (
              <li key={track.seat}>
                <p className="art-label">{track.seat}</p>
                <p>{track.line}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    case "forecast":
      return (
        <div className="art art-forecast">
          <p className="art-kicker">{artifact.title}</p>
          <p className="forecast-status">{artifact.status}</p>
          <p className="forecast-body">{artifact.body}</p>
        </div>
      );
    case "gaps":
      return (
        <div className="art art-gaps">
          <p className="art-kicker">{artifact.title}</p>
          <ul>
            {artifact.items.map((item) => (
              <li key={item.label}>
                <p className="art-label">{item.label}</p>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    case "questions":
      return (
        <div className="art art-questions">
          <p className="art-kicker">{artifact.title}</p>
          <ol>
            {artifact.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      );
    case "scorecard":
      return (
        <div className="art art-score">
          <p className="art-kicker">{artifact.title}</p>
          <p className="score-line">{artifact.score}</p>
          <ul className="score-notes">
            {artifact.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
          <p className="art-label">Say this instead</p>
          <p className="better-answer">{artifact.betterAnswer}</p>
        </div>
      );
    case "deal-kit":
      return (
        <div className="art art-kit">
          <p className="art-kicker">{artifact.title}</p>
          {artifact.weeks.map((week) => (
            <div key={week.label} className="art-block">
              <p className="art-label">{week.label}</p>
              <p>{week.body}</p>
            </div>
          ))}
          <p className="art-label">In the pack</p>
          <ul className="kit-pack">
            {artifact.pack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      );
    case "gmail":
      return (
        <div className="art art-gmail">
          <p className="art-kicker">Gmail draft</p>
          <p className="mail-row">
            <span>To</span>
            {artifact.to}
          </p>
          <p className="mail-row">
            <span>Subject</span>
            {artifact.subject}
          </p>
          <p className="mail-body">{artifact.body}</p>
        </div>
      );
    case "slack":
      return (
        <div className="art art-slack">
          <p className="art-kicker">Slack draft</p>
          <p className="slack-channel">{artifact.channel}</p>
          <p className="slack-body">{artifact.body}</p>
        </div>
      );
    case "redlines":
      return (
        <div className="art art-doc">
          <p className="art-kicker">{artifact.title}</p>
          <ul>
            {artifact.marks.map((mark) => (
              <li key={mark.text}>
                <p className="art-label">{mark.take ? "Answer" : "Hold"}</p>
                <p>{mark.note}</p>
              </li>
            ))}
          </ul>
          <p className="art-caption">{artifact.reply.subject}</p>
        </div>
      );
    case "linkedin":
      return (
        <div className="art art-gmail">
          <p className="art-kicker">LinkedIn draft</p>
          <p className="mail-row">
            <span>To</span>
            {artifact.to}
            {artifact.role ? ` · ${artifact.role}` : ""}
          </p>
          <p className="mail-body">{artifact.body}</p>
        </div>
      );
    case "outbound":
      return (
        <div className="art art-doc art-outbound">
          <p className="art-kicker">Sourced outreach pack</p>
          <h3 className="art-title">{artifact.title}</h3>
          {artifact.hypothesis.map((item) => (
            <div key={item.k} className="art-block">
              <p className="art-label">{item.k}</p>
              <p>{item.body}</p>
            </div>
          ))}
          <div className="art-outbound-grid">
            <section>
              <p className="art-label">Public sources</p>
              {artifact.evidence.map((item) => (
                <p key={item.source}>
                  <strong>{item.source}</strong>
                  <span>{item.finding}</span>
                </p>
              ))}
            </section>
            <section>
              <p className="art-label">Possible owners</p>
              {artifact.targets.map((target) => (
                <p key={target.name}>
                  <strong>{target.name}</strong>
                  <span>{target.why}</span>
                </p>
              ))}
            </section>
          </div>
          <div className="art-outbound-page">
            <p className="art-label">Account page draft</p>
            <strong>{artifact.page.headline}</strong>
            <span>{artifact.page.body}</span>
          </div>
        </div>
      );
    default:
      return null;
  }
}
