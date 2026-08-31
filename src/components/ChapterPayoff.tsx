import type { Artifact, StoryBeat } from "@/data/types";
import { ArtifactCard } from "./ArtifactCard";

export function ChapterPayoff({
  beat,
  wash,
}: {
  beat: StoryBeat;
  wash?: string;
  value?: string;
}) {
  const artifact: Artifact | undefined =
    beat.artifact ||
    (beat.slides?.length
      ? {
          kind: "slides",
          title: "Working deck",
          cards: beat.slides,
        }
      : undefined);

  if (!artifact) return null;

  return (
    <div className="chapter-payoff">
      <p className="payoff-label">
        {beat.when ? <span>{beat.when}</span> : null}
        {beat.label}
      </p>
      <div className="payoff-artifact">
        {wash ? (
          <span className="payoff-wash" aria-hidden>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={wash} alt="" />
          </span>
        ) : null}
        <ArtifactCard artifact={artifact} />
      </div>
    </div>
  );
}
