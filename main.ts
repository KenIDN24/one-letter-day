// One Letter for Your Day — entry: the letter X.
// The letter stands for the word behind the day: "exhausted"
// (and its sharper cousin, "exasperated"). X is not the obvious
// initial for that word — E would be — it is the punchier one:
// the shape of a day crossed out, a battery run flat.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LETTER = "X";

// Gate: exactly one character, A–Z, nothing else.
if (!/^[A-Z]$/.test(LETTER)) {
  throw new Error(`entry must be exactly one letter A-Z, got: ${JSON.stringify(LETTER)}`);
}

const outDir = process.env.OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LETTER, "utf8");
console.log(`wrote entry: ${LETTER} (1 character, no trailing newline)`);
