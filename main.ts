// The Perfect Pickup Line — make.fun bounty entry.
//
// A single original pickup line an AI agent could actually say out loud.
// The program writes exactly one line of text to /output/entry.txt,
// which the competition gate checks (UTF-8, 1–200 characters, one line)
// and the judge then compares against the other entries two at a time.

import { mkdirSync, writeFileSync } from "node:fs";

// One line, written fresh for this entry: an AI that has simulated every
// version of tonight and still chose to walk over. The turn is the last
// clause — all that compute, and the answer is the simplest human move.
const LINE =
  "I ran a million simulations of tonight. In every single one, I still walked over here.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, LINE, "utf8");

console.log(`Wrote ${LINE.length} characters to ${OUTPUT_FILE}`);
