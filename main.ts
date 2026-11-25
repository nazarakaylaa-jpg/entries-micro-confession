// Unsent: The Micro-Confession Sprint
// Writes one two-part micro-confession to /output/entry.txt:
// a "To:" line naming who it was meant for, then the unsent line itself,
// exactly as typed, with no explanation after it.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = [
  "To: my first love",
  "I married a woman who laughs like you, and I never told her why.",
].join("\n");

// The gate wants 1-260 UTF-8 characters; the brief wants the entry tight.
if ([...entry].length < 1 || [...entry].length > 100) {
  throw new Error(`entry is ${[...entry].length} characters, expected 1-100`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
