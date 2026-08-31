import type { Artifact, DemoMessage } from "@/data/types";
import type { ComputerBeat } from "@/data/screens";
import { CLIPS } from "@/data/clips";

function asGmail(artifact?: Artifact) {
  return artifact?.kind === "gmail" ? artifact : null;
}

function asLinkedin(artifact?: Artifact) {
  return artifact?.kind === "linkedin" ? artifact : null;
}

function asOnePager(artifact?: Artifact) {
  return artifact?.kind === "one-pager" ? artifact : null;
}

function asPacket(artifact?: Artifact) {
  return artifact?.kind === "packet" ? artifact : null;
}

function asChecklist(artifact?: Artifact) {
  return artifact?.kind === "checklist" ? artifact : null;
}

export function SiteScreen({
  beat,
  message,
  account,
  sent,
}: {
  beat: ComputerBeat;
  message?: DemoMessage;
  account: string;
  sent: boolean;
}) {
  const artifact = message?.artifact;

  if (beat.site === "clip" && beat.clip) {
    const clip = CLIPS[beat.clip];
    return (
      <div className="site-clip">
        <video
          src={clip.file}
          controls
          playsInline
          controlsList="nodownload"
          aria-label={clip.title}
        />
      </div>
    );
  }

  switch (beat.site) {
    case "granola":
      return <CallNotesScreen account={account} />;
    case "gdoc":
      return <DocumentScreen account={account} artifact={artifact} />;
    case "gmail":
      return (
        <GmailScreen account={account} artifact={asGmail(artifact)} sent={sent} />
      );
    case "linkedin":
      return (
        <LinkedInScreen
          account={account}
          artifact={asLinkedin(artifact)}
          sent={sent}
        />
      );
    case "research":
      return <ResearchScreen account={account} />;
    case "page":
      return <PageScreen account={account} onePager={asOnePager(artifact)} />;
    case "clip":
      return null;
  }
}

function CallNotesScreen({ account }: { account: string }) {
  return (
    <div className="site site-granola">
      <header>
        <strong>Call notes</strong>
        <span>Live</span>
      </header>
      <p className="site-time">{account} partner working session</p>
      <ul>
        <li>
          <span>Plan</span> Launch plan needs named owners.
        </li>
        <li>
          <span>Support</span> Escalation path needs one review.
        </li>
        <li>
          <span>Open</span> Customer communication needs approved language.
        </li>
        <li>
          <span>Next</span> Build the agenda for the next working session.
        </li>
      </ul>
    </div>
  );
}

function DocumentScreen({
  account,
  artifact,
}: {
  account: string;
  artifact?: Artifact;
}) {
  const checklist = asChecklist(artifact);
  const onePager = asOnePager(artifact);
  const packet = asPacket(artifact);

  return (
    <div className="site site-gdoc">
      <header>
        <strong>Docs</strong>
        <span>
          {checklist?.title ||
            onePager?.title ||
            packet?.title ||
            `${account} working brief`}
        </span>
      </header>
      <article>
        {checklist
          ? checklist.items.map((item) => (
              <p key={item.label}>
                <b>{item.label}.</b> {item.answer}
                <small>{item.source}</small>
              </p>
            ))
          : onePager
            ? onePager.sections.map((section) => (
                <p key={section.heading}>
                  <b>{section.heading}.</b> {section.body}
                </p>
              ))
            : packet
              ? packet.fields.map((field) => (
                  <p key={field.label}>
                    <b>{field.label}.</b> {field.value}
                  </p>
                ))
              : [
                  "Plan",
                  "Open questions",
                  "Owners",
                  "Next working session",
                ].map((item) => <p key={item}>{item}</p>)}
      </article>
    </div>
  );
}

function GmailScreen({
  account,
  artifact,
  sent,
}: {
  account: string;
  artifact: ReturnType<typeof asGmail>;
  sent: boolean;
}) {
  return (
    <div className="site site-gmail">
      <header>
        <strong>Gmail</strong>
        <em>{sent ? "Sent" : "Draft, not sent"}</em>
      </header>
      <p>
        <span>To</span>
        {artifact?.to || `${account} partner team`}
      </p>
      <p>
        <span>Subject</span>
        {artifact?.subject || `${account} follow-up`}
      </p>
      <div>
        {artifact?.body ||
          "The response is parked here until the seller reviews it."}
      </div>
    </div>
  );
}

function LinkedInScreen({
  account,
  artifact,
  sent,
}: {
  account: string;
  artifact: ReturnType<typeof asLinkedin>;
  sent: boolean;
}) {
  return (
    <div className="site site-linkedin">
      <header>
        <strong>LinkedIn</strong>
        <em>{sent ? "Sent" : "Draft, not sent"}</em>
      </header>
      <p>
        <span>To</span>
        {artifact?.to || `${account} partnerships lead`}
        {artifact?.role ? ` · ${artifact.role}` : ""}
      </p>
      <div>
        {artifact?.body ||
          "The message stays in draft until the seller checks the sources."}
      </div>
    </div>
  );
}

function ResearchScreen({ account }: { account: string }) {
  return (
    <div className="site site-research">
      <header>
        <strong>{account}</strong>
        <span>Fictional sample account</span>
      </header>
      <p className="site-time">Reviewing public sources</p>
      <ul>
        <li>
          <span>Company news</span> Keep the latest relevant public update.
        </li>
        <li>
          <span>Locations</span> Check the operating footprint before drafting.
        </li>
        <li>
          <span>Careers</span> Use a role only when it changes the message.
        </li>
        <li>
          <span>Source check</span> Drop any detail that cannot be traced.
        </li>
      </ul>
    </div>
  );
}

function PageScreen({
  account,
  onePager,
}: {
  account: string;
  onePager: ReturnType<typeof asOnePager>;
}) {
  return (
    <div className="site site-page">
      <header>
        <strong>Account page</strong>
        <em>Not published</em>
      </header>
      <h4>{onePager?.title || `A sourced note for ${account}`}</h4>
      {onePager ? (
        onePager.sections.map((section) => (
          <p key={section.heading}>
            <b>{section.heading}.</b> {section.body}
          </p>
        ))
      ) : (
        <p>
          Public context, a possible owner, and a first message are ready for
          review.
        </p>
      )}
    </div>
  );
}
