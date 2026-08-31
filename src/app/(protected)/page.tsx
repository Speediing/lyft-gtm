import { CompareTable } from "@/components/CompareTable";
import { HeroDemo } from "@/components/HeroDemo";
import { HeroTelemetry } from "@/components/HeroTelemetry";
import { JobSection } from "@/components/JobSection";
import { QuoteWall } from "@/components/QuoteWall";
import { RosterChart } from "@/components/RosterChart";
import { SiteNav } from "@/components/SiteNav";
import { JOBS } from "@/data/jobs";

export default function HomePage() {
  return (
    <main id="top">
      <div className="hero-watercolor">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="hero-watercolor-image"
          src="/brand/watercolor-pad.png"
          alt=""
        />
        <SiteNav />
      </div>

      <div className="report hero-paper">
        <div className="report-hero">
          <HeroTelemetry />
          <section className="hero">
            <HeroDemo />
          </section>

          <section className="usecase-framing">
            <p className="eyebrow">Built for a wider transportation platform</p>
            <h2>
              More partners create more calls, questions, research, and
              follow-up. Give each motion an agent that stays with it.
            </h2>
            <p className="platform-context">
              Lyft is bringing rideshare, licensed taxis, bikes and scooters,
              premium chauffeur, and autonomous vehicles into a broader
              transportation platform. Freenow is part of that expansion.
            </p>
            <p className="illustrative-note">
              These workflows are illustrative. They do not describe Lyft
              internal processes.
            </p>
          </section>

          <div className="metric-grid">
            {JOBS.map((job) => (
              <a
                key={job.id}
                className="metric-card"
                href={`#${job.id}`}
              >
                <div className="metric-card-top">
                  <p>Sample {String(job.number).padStart(2, "0")}</p>
                </div>
                <h2>{job.title}</h2>
                <p className="metric-trigger">
                  Starts when {job.trigger.toLowerCase()}
                </p>
              </a>
            ))}
          </div>

          <RosterChart />
        </div>

        <div id="jobs">
          {JOBS.map((job) => (
            <JobSection key={job.id} job={job} />
          ))}
        </div>
      </div>

      <div className="orbit-break" aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/watercolor-orbit.png" alt="" />
      </div>

      <div className="report">
        <CompareTable />
        <QuoteWall />
      </div>

      <footer className="site-footer">
        <div>
          <p className="footer-title">Lyft x SpaceXAI</p>
          <p>Illustrative GTM workflows with Grok Bot</p>
        </div>
        <address className="footer-contact">
          <p>Your Cursor contact</p>
          <strong>Tyler Pickler</strong>
          <a href="mailto:tyler.pickler@cursor.com">
            tyler.pickler@cursor.com
          </a>
        </address>
      </footer>
    </main>
  );
}
