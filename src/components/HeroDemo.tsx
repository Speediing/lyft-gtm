"use client";

import { useState } from "react";

import { HERO_JOBS, type HeroJobIcon } from "@/data/hero-jobs";

function JobIcon({ kind }: { kind: HeroJobIcon }) {
  const commonProps = {
    "aria-hidden": true,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.7,
    viewBox: "0 0 16 16",
  };

  switch (kind) {
    case "phone":
      return (
        <svg {...commonProps}>
          <path d="M4.1 2.5 6 5.7 4.8 7c.7 1.7 2.1 3.1 3.8 3.8l1.3-1.2 3.2 1.9-.5 1.8c-.2.6-.8 1-1.4 1C6 13.8 2.2 10 1.7 4.8c0-.6.4-1.2 1-1.4l1.4-.9Z" />
        </svg>
      );
    case "spark":
      return (
        <svg {...commonProps}>
          <path d="M8 1.7 9.1 6l4.2 1.1-4.2 1.1L8 12.5 6.9 8.2 2.7 7.1 6.9 6 8 1.7Z" />
          <path d="m12.4 11 .4 1.4 1.5.4-1.5.4-.4 1.4-.4-1.4-1.4-.4 1.4-.4.4-1.4Z" />
        </svg>
      );
    case "search":
      return (
        <svg {...commonProps}>
          <circle cx="7" cy="7" r="4.2" />
          <path d="m10.2 10.2 3.1 3.1" />
        </svg>
      );
    case "mail":
      return (
        <svg {...commonProps}>
          <rect x="1.8" y="3.2" width="12.4" height="9.6" rx="1.5" />
          <path d="m2.4 4.3 5.6 4 5.6-4" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...commonProps}>
          <rect x="2" y="3.2" width="12" height="10.8" rx="1.5" />
          <path d="M5 1.8v3M11 1.8v3M2 6.6h12" />
        </svg>
      );
    case "people":
      return (
        <svg {...commonProps}>
          <circle cx="6" cy="5.4" r="2.2" />
          <circle cx="11.7" cy="6.4" r="1.6" />
          <path d="M1.8 13c.4-2.3 2-3.6 4.2-3.6s3.8 1.3 4.2 3.6M10.2 10c2.2-.3 3.5.8 3.9 2.7" />
        </svg>
      );
    case "signal":
      return (
        <svg {...commonProps}>
          <path d="M2.2 11.6a8 8 0 0 1 11.6 0M4.6 9.2a4.7 4.7 0 0 1 6.8 0M6.8 6.9a1.7 1.7 0 0 1 2.4 0" />
          <circle cx="8" cy="13" r=".7" fill="currentColor" stroke="none" />
        </svg>
      );
    case "document":
      return (
        <svg {...commonProps}>
          <path d="M3.2 1.8h6l3.6 3.6v8.8h-9.6V1.8Z" />
          <path d="M9.2 1.8v3.6h3.6M5.4 8.2h5.2M5.4 10.7h5.2" />
        </svg>
      );
  }
}

export function HeroDemo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeJob = HERO_JOBS[activeIndex];

  return (
    <>
      <div className="hero-copy">
        <p className="eyebrow">Lyft x SpaceXAI</p>
        <h1>A fleet that keeps GTM work moving.</h1>
        <p className="hero-intro">
          Grok Bot can follow partner calls, clear launch questions, and
          research target accounts. Each agent has its own computer. The work
          starts from the moment, not another prompt.
        </p>

        <div
          className="hero-phone-jobs"
          role="group"
          aria-label="Choose a sample Lyft GTM workflow"
        >
          {HERO_JOBS.map((job, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={job.id}
                className={isActive ? "is-active" : undefined}
                type="button"
                aria-label={`${job.label}: ${job.work.title}`}
                aria-pressed={isActive}
                onClick={() => setActiveIndex(index)}
              >
                {isActive ? (
                  <span aria-hidden="true">
                    <JobIcon kind={job.icon} />
                  </span>
                ) : null}
                {job.label}
              </button>
            );
          })}
        </div>
      </div>

      <aside
        className="hero-bot-demo"
        aria-label="Live Grok Bot phone demo"
      >
        <div className="hero-phone">
          <div
            className="hero-phone-notch notch"
            aria-hidden="true"
          />

          <header className="hero-phone-header header">
            <span className="hero-phone-back" aria-hidden="true">
              <svg viewBox="0 0 16 16" fill="none">
                <path
                  d="m9.8 3.2-4.6 4.6 4.6 4.6"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                />
              </svg>
            </span>
            <span className="hero-phone-agent" aria-hidden="true">
              <svg viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 1.8 9.3 6l4.2 1.3-4.2 1.3L8 12.8 6.7 8.6 2.5 7.3 6.7 6 8 1.8Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <p>
              <strong>Grok Bot</strong>
              <small>
                <span aria-hidden="true" />
                Working on your computer
              </small>
            </p>
            <span className="hero-phone-desktop" aria-hidden="true">
              <svg viewBox="0 0 16 16" fill="none">
                <rect
                  x="2"
                  y="2.5"
                  width="12"
                  height="8.5"
                  rx="1.2"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
                <path
                  d="M5.5 13.5h5M8 11v2.5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.4"
                />
              </svg>
            </span>
          </header>

          <div
            key={activeJob.id}
            className="hero-phone-thread thread"
            aria-live="polite"
            aria-atomic="true"
          >
            <article className="hero-phone-work">
              <p className="hero-phone-work-label">
                <span aria-hidden="true" />
                Agent at work
              </p>
              <p className="hero-phone-work-meta">
                <span>Job</span>
                <b>{activeJob.work.title}</b>
              </p>
              <p className="hero-phone-work-meta">
                <span>Account</span>
                <b>{activeJob.work.account}</b>
              </p>
              <p className="hero-phone-work-meta">
                <span>Input</span>
                <b>{activeJob.work.input}</b>
              </p>
              <p className="hero-phone-work-copy">{activeJob.work.summary}</p>
              <strong>{activeJob.work.status}</strong>
            </article>

            <p className="hero-phone-message is-user">{activeJob.request}</p>
            <p className="hero-phone-message is-bot">{activeJob.reply}</p>
          </div>

          <footer className="hero-phone-composer composer" aria-hidden="true">
            <span>
              <svg viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 3v10M3 8h10"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
            <p>Message Grok Bot</p>
            <span>
              <svg viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 2.5v8M4.8 7.6a3.2 3.2 0 0 0 6.4 0M8 10.8v2.7M5.7 13.5h4.6"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
          </footer>
        </div>
      </aside>
    </>
  );
}
