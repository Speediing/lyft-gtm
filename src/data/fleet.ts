import type { JobId } from "./types";

export type FleetBot = {
  id: string;
  name: string;
  blurb: string;
  color: string;
  status: string;
  app: string;
  task: string;
  jobId: JobId;
};

export const FLEET: FleetBot[] = [
  {
    id: "relay",
    name: "Relay",
    blurb: "Follows a live partner call and turns the notes into a brief.",
    color: "#a80077",
    status: "Listening now",
    app: "Call notes",
    task: "Partner brief open",
    jobId: "partner-call",
  },
  {
    id: "launchpad",
    name: "Launchpad",
    blurb: "Checks launch questions against approved sources and prepares the response.",
    color: "#b83239",
    status: "Checking sources",
    app: "Knowledge base",
    task: "Launch checklist open",
    jobId: "launch-questions",
  },
  {
    id: "scout",
    name: "Scout",
    blurb: "Reads public account signals and drafts a relevant first message.",
    color: "#315dab",
    status: "Researching",
    app: "Browser",
    task: "Outreach draft open",
    jobId: "account-research",
  },
];
