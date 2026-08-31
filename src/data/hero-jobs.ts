export type HeroJobIcon =
  | "phone"
  | "spark"
  | "search"
  | "mail"
  | "calendar"
  | "people"
  | "signal"
  | "document";

export type HeroJob = {
  readonly id: string;
  readonly label: string;
  readonly icon: HeroJobIcon;
  readonly request: string;
  readonly reply: string;
  readonly work: {
    readonly title: string;
    readonly account: string;
    readonly input: string;
    readonly summary: string;
    readonly status: string;
  };
};

export const HERO_JOBS = [
  {
    id: "partner-call",
    label: "Recap call",
    icon: "phone",
    request: "Turn the sample partner call into a recap and follow-up.",
    reply: "Drafted the recap and open-question list. Nothing has been sent.",
    work: {
      title: "Partner call follow-up",
      account: "Northstar Mobility · fictional sample",
      input: "Sample call notes",
      summary:
        "Organize decisions, open questions, and owners from an illustrative partner conversation.",
      status: "Recap draft ready for review",
    },
  },
  {
    id: "launch-questions",
    label: "Clear launch Qs",
    icon: "spark",
    request: "Sort the sample launch questions and flag what needs review.",
    reply: "Grouped the open questions by owner and queued the brief for review.",
    work: {
      title: "Launch question triage",
      account: "Harbor Rides · fictional sample",
      input: "Illustrative question list",
      summary:
        "Group unresolved launch questions by owner and prepare a concise review queue.",
      status: "Questions queued for review",
    },
  },
  {
    id: "account-research",
    label: "Research account",
    icon: "search",
    request: "Build a short sample brief for the target account.",
    reply: "Prepared an illustrative brief and source list for review.",
    work: {
      title: "Target account research",
      account: "Cedar Transit · fictional sample",
      input: "Illustrative public sources",
      summary:
        "Build a short account brief using only sample, publicly researchable context.",
      status: "Brief drafted with source notes",
    },
  },
  {
    id: "follow-up-draft",
    label: "Draft follow-up",
    icon: "mail",
    request: "Draft the partner follow-up, but keep it unsent.",
    reply: "The follow-up is saved as a draft and ready for edits.",
    work: {
      title: "Partner follow-up draft",
      account: "Atlas Mobility · fictional sample",
      input: "Sample meeting notes",
      summary:
        "Write a concise follow-up that reflects the illustrative conversation without sending it.",
      status: "Email draft saved for review",
    },
  },
  {
    id: "meeting-prep",
    label: "Prep meeting",
    icon: "calendar",
    request: "Prepare the next sample partner conversation.",
    reply: "Queued an agenda, context sheet, and question set for review.",
    work: {
      title: "Partner meeting prep",
      account: "Summit Transport · fictional sample",
      input: "Sample account brief",
      summary:
        "Assemble an agenda, useful context, and open questions for an illustrative meeting.",
      status: "Prep packet queued for review",
    },
  },
  {
    id: "stakeholder-map",
    label: "Map stakeholders",
    icon: "people",
    request: "Map the sample stakeholder roles and show the gaps.",
    reply: "The role map is drafted. Unconfirmed relationships are clearly marked.",
    work: {
      title: "Stakeholder role map",
      account: "Pioneer Fleet · fictional sample",
      input: "Illustrative role list",
      summary:
        "Map sample stakeholder roles and flag relationships that still need confirmation.",
      status: "Role map ready for review",
    },
  },
  {
    id: "signal-scan",
    label: "Scan signals",
    icon: "signal",
    request: "Scan the sample watchlist for relevant public updates.",
    reply: "Drafted a source-linked digest without scores or account claims.",
    work: {
      title: "Account signal scan",
      account: "Bluebird Mobility · fictional sample",
      input: "Illustrative public watchlist",
      summary:
        "Summarize potentially relevant public updates without inventing scores or conclusions.",
      status: "Signal digest drafted for review",
    },
  },
  {
    id: "proposal-review",
    label: "Review proposal",
    icon: "document",
    request: "Turn the sample proposal gaps into a review checklist.",
    reply: "The open requirements are queued as a checklist for review.",
    work: {
      title: "Proposal requirement review",
      account: "Juniper Transit · fictional sample",
      input: "Sample proposal draft",
      summary:
        "Extract open requirements from an illustrative proposal and organize them for review.",
      status: "Checklist queued for review",
    },
  },
] as const satisfies readonly HeroJob[];
