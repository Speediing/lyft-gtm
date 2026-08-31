import type { Artifact, GtmWorkflow } from "./types";

export const PARTNER_BRIEF: Extract<Artifact, { kind: "one-pager" }> = {
  kind: "one-pager",
  title: "Northstar partner call brief",
  eyebrow: "Illustrative sample",
  sections: [
    {
      heading: "What the partner is planning",
      body: "Northstar is preparing a launch plan and needs clear owners for operations, support, and the next review.",
    },
    {
      heading: "Open questions",
      body: "Confirm launch coverage, escalation paths, and the material each team needs before the next working session.",
    },
    {
      heading: "Next meeting",
      body: "Bring the working owners together, review the open questions, and leave with one shared checklist.",
    },
  ],
};

export const LAUNCH_CHECKLIST: Extract<Artifact, { kind: "checklist" }> = {
  kind: "checklist",
  title: "Northstar launch response",
  sourceNote: "Illustrative answers tied to the approved source set.",
  items: [
    {
      label: "Launch coverage",
      answer: "Draft the operating window and confirm it with the launch owner.",
      source: "Launch plan",
    },
    {
      label: "Partner support",
      answer: "List the intake route and the escalation owner for launch day.",
      source: "Support guide",
    },
    {
      label: "Customer communication",
      answer: "Prepare the approved message and hold it for review.",
      source: "Messaging guide",
    },
    {
      label: "Final check",
      answer: "Review every owner and unresolved item before the go-live meeting.",
      source: "Readiness checklist",
    },
  ],
};

export const OUTREACH_PACK: Extract<Artifact, { kind: "outbound" }> = {
  kind: "outbound",
  title: "Northstar account research",
  account: "Northstar",
  hypothesis: [
    {
      k: "Why this account",
      body: "Northstar is a fictional business account used to show how public signals can shape a relevant first message.",
    },
    {
      k: "Why now",
      body: "A recent public update gives the seller a concrete reason to reach out.",
    },
    {
      k: "Who may care",
      body: "Start with the role that owns partnerships, travel programs, or employee transportation.",
    },
  ],
  evidence: [
    {
      source: "Company news",
      finding: "Review the latest public announcement and keep only details that affect the message.",
    },
    {
      source: "Locations page",
      finding: "Check where the business operates before suggesting a relevant conversation.",
    },
    {
      source: "Careers page",
      finding: "Use open roles only when they provide a clear and sourced business signal.",
    },
  ],
  targets: [
    {
      name: "Partnerships lead",
      role: "Illustrative role",
      why: "May own an external transportation partner conversation.",
    },
    {
      name: "Workplace operations lead",
      role: "Illustrative role",
      why: "May own employee travel or commute programs.",
    },
  ],
  page: {
    headline: "A sourced note for Northstar",
    body: "The message uses only public account context. It stays in draft until the seller reviews the sources and chooses to send it.",
  },
};

export const JOBS: GtmWorkflow[] = [
  {
    id: "partner-call",
    number: 1,
    title: "Turn a live partner call into the next brief",
    trigger: "A partner call starts",
    backgroundAction: "Following the call and preparing the recap",
    problem:
      "The call ends with notes in one place, actions in another, and a follow-up still to write.",
    botJob:
      "Relay follows the call, sorts the decisions from the open questions, and prepares the next brief while the context is fresh.",
    storyboard: [
      {
        when: "Call starts",
        label: "Relay opens the note and follows the meeting.",
        scene: "call",
        visual: {
          kind: "live-call",
          title: "Northstar partner working session",
          people: [
            { initials: "AE", name: "Account executive" },
            { initials: "PL", name: "Partner lead" },
            { initials: "OL", name: "Operations lead" },
          ],
        },
      },
      {
        when: "During the call",
        label: "Decisions, questions, and owners separate into clean notes.",
        scene: "notes",
        visual: {
          kind: "call-notes",
          timestamp: "Live",
          title: "Call notes",
          notes: [
            "Launch plan needs named owners",
            "Support path needs one review",
            "Next working session needs an agenda",
          ],
        },
      },
      {
        when: "Before the call ends",
        label: "The next brief is ready for the seller to review.",
        scene: "deck",
        visual: {
          kind: "brief-ready",
          eyebrow: "Partner brief",
          headline: "Northstar launch working plan",
          sections: ["Plan", "Open questions", "Next meeting"],
          status: "Draft ready",
        },
      },
      {
        when: "Tangible output",
        label: "A partner brief the seller can edit and send.",
        scene: "send",
        artifact: PARTNER_BRIEF,
      },
    ],
    unlock:
      "The seller leaves the call with the recap, open questions, and next meeting in one place.",
    outcome:
      "One call becomes a clean partner brief while the details are still fresh.",
    clips: ["03-slides-granola"],
    demo: {
      title: "Relay",
      subtitle: "Partner call to working brief",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "relay",
          name: "Relay",
          role: "bot",
          persona: "Turns a partner call into a clear follow-up brief",
          color: "#a80077",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "relay",
          kind: "routine",
          body: "The Northstar call started. I am following the notes and sorting decisions, open questions, and owners.",
        },
        {
          id: "m2",
          from: "relay",
          kind: "text",
          body: "The launch plan, support path, and next working session need follow-up. I am putting them into one brief.",
        },
        {
          id: "m3",
          from: "relay",
          kind: "text",
          body: "The brief is structured. I kept the language neutral and marked every unresolved item for review.",
        },
        {
          id: "m4",
          from: "relay",
          kind: "draft",
          draftLabel: "Partner call brief",
          artifact: PARTNER_BRIEF,
        },
        {
          id: "m5",
          from: "relay",
          kind: "draft",
          draftLabel: "Follow-up email",
          artifact: {
            kind: "gmail",
            title: "Northstar follow-up",
            to: "Partner team",
            subject: "Northstar working session follow-up",
            body: "Thanks for the working session. I attached the draft brief with the current plan, open questions, and proposed agenda for the next review. Please mark anything that needs a different owner.",
          },
        },
        {
          id: "m6",
          from: "relay",
          kind: "system",
          body: "Nothing sent. The brief and email stay in draft until you review them.",
        },
      ],
    },
  },
  {
    id: "launch-questions",
    number: 2,
    title: "Turn launch questions into sourced answers",
    trigger: "A partner launch question lands",
    backgroundAction: "Checking approved sources and building the checklist",
    problem:
      "A launch question can send the seller through docs, chat threads, and several internal owners before a clear answer comes back.",
    botJob:
      "Launchpad checks the approved source set, keeps the source beside each answer, and prepares one response and launch checklist.",
    storyboard: [
      {
        when: "Question lands",
        label: "Launchpad opens the partner thread and sorts the asks.",
        scene: "notes",
        visual: {
          kind: "launch-email",
          sender: "Northstar partner team",
          subject: "Launch readiness questions",
          questions: 4,
        },
      },
      {
        when: "Source review",
        label: "Each answer stays tied to the document it came from.",
        scene: "inspect",
        visual: {
          kind: "answers-found",
          sources: [
            { name: "Launch plan", answer: "Coverage checked" },
            { name: "Support guide", answer: "Escalation path checked" },
            { name: "Messaging guide", answer: "Draft language checked" },
          ],
          status: "Sources attached",
        },
      },
      {
        when: "Review ready",
        label: "The seller gets one response and one launch checklist.",
        scene: "send",
        visual: {
          kind: "checklist-ready",
          title: "Northstar launch checklist",
          items: ["Coverage", "Support", "Communication", "Final review"],
          status: "Draft ready",
        },
      },
      {
        when: "Tangible output",
        label: "A sourced launch checklist with every open item visible.",
        scene: "launch",
        artifact: LAUNCH_CHECKLIST,
      },
    ],
    unlock:
      "The seller reviews one sourced response instead of rebuilding the answer from several tools.",
    outcome:
      "Partner questions become a sourced response and a launch checklist.",
    clips: ["01-morning-inbox"],
    demo: {
      title: "Launchpad",
      subtitle: "Questions to a launch checklist",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "launchpad",
          name: "Launchpad",
          role: "bot",
          persona: "Finds approved answers and keeps every source visible",
          color: "#b83239",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "launchpad",
          kind: "routine",
          body: "A Northstar launch thread arrived with four questions. I am checking the approved launch, support, and messaging documents.",
        },
        {
          id: "m2",
          from: "launchpad",
          kind: "text",
          body: "The source review is complete. I kept each answer beside its source and left unresolved ownership as an open item.",
        },
        {
          id: "m3",
          from: "launchpad",
          kind: "draft",
          draftLabel: "Sourced launch checklist",
          artifact: LAUNCH_CHECKLIST,
        },
        {
          id: "m4",
          from: "launchpad",
          kind: "draft",
          draftLabel: "Partner response",
          artifact: {
            kind: "gmail",
            title: "Northstar launch response",
            to: "Northstar partner team",
            subject: "Northstar launch readiness follow-up",
            body: "I pulled the current answers into one checklist and included the source for each item. The remaining ownership question is marked for review before the next launch meeting.",
          },
        },
        {
          id: "m5",
          from: "launchpad",
          kind: "system",
          body: "Nothing sent. The response stays in draft until you approve it.",
        },
      ],
    },
  },
  {
    id: "account-research",
    number: 3,
    title: "Research a target account before outreach",
    trigger: "A target business account enters the list",
    backgroundAction: "Reading public signals and drafting a relevant message",
    problem:
      "A list gives the seller a company name. It does not give the seller a reason to reach out or a message tied to the account.",
    botJob:
      "Scout reads public account sources, summarizes the useful signals, and drafts outreach for a role that may own the conversation.",
    storyboard: [
      {
        when: "Account enters the list",
        label: "Scout opens public sources for the fictional Northstar account.",
        scene: "inspect",
        visual: {
          kind: "account-research",
          account: "Northstar",
          sources: ["Company news", "Locations", "Careers"],
          signal: "Relevant public update",
        },
      },
      {
        when: "After source review",
        label: "The useful evidence becomes a short account brief.",
        scene: "notes",
        visual: {
          kind: "research-brief",
          title: "Sourced account brief",
          items: [
            { label: "Reason", answer: "Recent public update" },
            { label: "Context", answer: "Operating footprint" },
            { label: "Role", answer: "Partnerships or workplace operations" },
          ],
        },
      },
      {
        when: "Draft ready",
        label: "Scout prepares role-based outreach and keeps it unsent.",
        scene: "map",
        visual: {
          kind: "outreach-ready",
          person: "Partnerships lead",
          channels: ["Email", "LinkedIn", "Account page"],
          status: "Drafts ready, nothing sent",
        },
      },
      {
        when: "Tangible output",
        label: "A sourced account brief and personalized outreach pack.",
        scene: "send",
        artifact: OUTREACH_PACK,
      },
    ],
    unlock:
      "The seller starts with account evidence and a reason for the conversation, not a generic sequence.",
    outcome:
      "One fictional account becomes a sourced brief and outreach drafts.",
    clips: ["02-prospecting-pg"],
    demo: {
      title: "Scout",
      subtitle: "Public research to outreach",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "scout",
          name: "Scout",
          role: "bot",
          persona: "Turns public account signals into a reviewable first message",
          color: "#315dab",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "scout",
          kind: "routine",
          body: "The fictional Northstar account entered the target list. I am reviewing public company news, locations, and careers pages.",
        },
        {
          id: "m2",
          from: "scout",
          kind: "text",
          body: "I found a relevant public update. I am using it as the reason for outreach and dropping anything that does not change the message.",
        },
        {
          id: "m3",
          from: "scout",
          kind: "draft",
          draftLabel: "Account research",
          artifact: {
            kind: "packet",
            title: "Northstar public account brief",
            fields: OUTREACH_PACK.evidence.map((item) => ({
              label: item.source,
              value: item.finding,
            })),
          },
        },
        {
          id: "m4",
          from: "scout",
          kind: "draft",
          draftLabel: "Who may care",
          artifact: {
            kind: "packet",
            title: "Illustrative role map",
            fields: OUTREACH_PACK.targets.map((target) => ({
              label: target.name,
              value: target.why,
            })),
          },
        },
        {
          id: "m5",
          from: "scout",
          kind: "draft",
          draftLabel: "LinkedIn message",
          artifact: {
            kind: "linkedin",
            title: "LinkedIn draft",
            to: "Partnerships lead",
            role: "Illustrative role at Northstar",
            body: "I saw Northstar's recent public update and mapped the parts that may affect a transportation partner conversation. I put the source links and a short working note in one page. Open to a brief review?",
          },
        },
        {
          id: "m6",
          from: "scout",
          kind: "draft",
          draftLabel: "Account page",
          artifact: {
            kind: "one-pager",
            title: OUTREACH_PACK.page.headline,
            eyebrow: "Fictional sample account",
            sections: [
              {
                heading: "Public context",
                body: OUTREACH_PACK.evidence[0].finding,
              },
              {
                heading: "Possible owner",
                body: OUTREACH_PACK.targets[0].why,
              },
              {
                heading: "Draft message",
                body: OUTREACH_PACK.page.body,
              },
            ],
          },
        },
        {
          id: "m7",
          from: "scout",
          kind: "system",
          body: "Nothing sent or published. Every draft waits for your review.",
        },
      ],
    },
  },
];

export function getJob(id: string): GtmWorkflow | undefined {
  return JOBS.find((job) => job.id === id);
}
