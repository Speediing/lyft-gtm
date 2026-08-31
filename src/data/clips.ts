import type { Clip, ClipId } from "./types";

function clip(
  id: ClipId,
  title: string,
  caption: string,
): Clip {
  return {
    id,
    file: `/api/media/krista-clips/${id}.mp4`,
    poster: `/media/krista-clips/${id}.jpg`,
    title,
    caption,
  };
}

export const CLIPS: Record<ClipId, Clip> = {
  "01-morning-inbox": clip(
    "01-morning-inbox",
    "Morning inbox",
    "A routine checks the inbox, flags what needs a reply, and stays quiet when nothing needs action.",
  ),
  "02-prospecting-pg": clip(
    "02-prospecting-pg",
    "Prospecting",
    "Research turns into outreach drafts. Nothing sends before review.",
  ),
  "03-slides-granola": clip(
    "03-slides-granola",
    "Brief from the call",
    "Call notes become a working brief while the meeting is still active.",
  ),
};

export const ALL_CLIPS: Clip[] = Object.values(CLIPS);
