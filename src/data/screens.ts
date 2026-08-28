import type { ClipId, JobId } from "./types";

export type SiteKind =
  | "granola"
  | "gdoc"
  | "gmail"
  | "linkedin"
  | "research"
  | "page"
  | "clip";

export type ChromeTab = {
  id: string;
  host: string;
  label: string;
};

export type ComputerBeat = {
  pill: string;
  host: string;
  path?: string;
  title: string;
  site: SiteKind;
  activeTabId?: string;
  clip?: ClipId;
  tabs: ChromeTab[];
};

const notes = { id: "notes", host: "granola.app", label: "Call notes" };
const docs = { id: "docs", host: "docs.google.com", label: "Docs" };
const mail = { id: "mail", host: "mail.google.com", label: "Gmail" };
const linkedin = {
  id: "linkedin",
  host: "www.linkedin.com",
  label: "LinkedIn",
};
const research = {
  id: "research",
  host: "northstar.example",
  label: "Public sources",
};
const page = {
  id: "page",
  host: "northstar.example",
  label: "Account page",
};

export const SCREENS: Record<JobId, Record<string, ComputerBeat>> = {
  "partner-call": {
    m1: {
      pill: "Following the partner call",
      host: "granola.app",
      path: "/notes/northstar-partner-call",
      title: "Northstar partner call",
      site: "granola",
      tabs: [notes, docs, mail],
    },
    m2: {
      pill: "Sorting the live notes",
      host: "granola.app",
      path: "/notes/northstar-partner-call",
      title: "Northstar partner call",
      site: "clip",
      clip: "03-slides-granola",
      tabs: [notes, docs, mail],
    },
    m3: {
      pill: "Building the partner brief",
      host: "docs.google.com",
      path: "/document/d/northstar-partner-brief",
      title: "Northstar partner brief",
      site: "gdoc",
      tabs: [notes, docs, mail],
    },
    m4: {
      pill: "Reviewing the brief",
      host: "docs.google.com",
      path: "/document/d/northstar-partner-brief",
      title: "Northstar partner brief",
      site: "gdoc",
      tabs: [notes, docs, mail],
    },
    m5: {
      pill: "Drafting the follow-up",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [notes, docs, mail],
    },
    m6: {
      pill: "Drafts parked",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [notes, docs, mail],
    },
  },
  "launch-questions": {
    m1: {
      pill: "Opening the launch questions",
      host: "mail.google.com",
      path: "/mail/u/0/#inbox",
      title: "Inbox",
      site: "gmail",
      tabs: [mail, docs],
    },
    m2: {
      pill: "Checking approved sources",
      host: "docs.google.com",
      path: "/document/d/launch-source-set",
      title: "Launch source set",
      site: "clip",
      clip: "01-morning-inbox",
      tabs: [mail, docs],
    },
    m3: {
      pill: "Building the sourced checklist",
      host: "docs.google.com",
      path: "/document/d/northstar-launch-checklist",
      title: "Northstar launch checklist",
      site: "gdoc",
      tabs: [mail, docs],
    },
    m4: {
      pill: "Drafting the partner response",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [mail, docs],
    },
    m5: {
      pill: "Drafts parked",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [mail, docs],
    },
  },
  "account-research": {
    m1: {
      pill: "Reading public account sources",
      host: "northstar.example",
      path: "/public-updates",
      title: "Northstar public updates",
      site: "research",
      tabs: [research, docs, linkedin, mail],
    },
    m2: {
      pill: "Keeping only useful evidence",
      host: "northstar.example",
      path: "/public-updates",
      title: "Northstar public updates",
      site: "clip",
      clip: "02-prospecting-pg",
      tabs: [research, docs, linkedin, mail],
    },
    m3: {
      pill: "Writing the account brief",
      host: "docs.google.com",
      path: "/document/d/northstar-account-brief",
      title: "Northstar account brief",
      site: "gdoc",
      tabs: [research, docs, linkedin, mail],
    },
    m4: {
      pill: "Mapping the possible owner",
      host: "docs.google.com",
      path: "/document/d/northstar-role-map",
      title: "Northstar role map",
      site: "gdoc",
      tabs: [research, docs, linkedin, mail],
    },
    m5: {
      pill: "Drafting the first message",
      host: "www.linkedin.com",
      path: "/messaging/compose",
      title: "Message",
      site: "linkedin",
      tabs: [research, docs, linkedin, mail],
    },
    m6: {
      pill: "Building the account page",
      host: "northstar.example",
      path: "/account-note",
      title: "Northstar account note",
      site: "page",
      activeTabId: "page",
      tabs: [research, docs, linkedin, mail, page],
    },
    m7: {
      pill: "Drafts parked",
      host: "northstar.example",
      path: "/account-note",
      title: "Northstar account note",
      site: "page",
      activeTabId: "page",
      tabs: [research, docs, linkedin, mail, page],
    },
  },
};

export function beatFor(
  jobId: JobId,
  messageId: string | undefined,
): ComputerBeat | undefined {
  if (!messageId) return undefined;
  return SCREENS[jobId]?.[messageId];
}
