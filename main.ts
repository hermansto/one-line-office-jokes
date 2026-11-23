import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One office joke, fixed in the source. No randomness, no network, no
// date or time is read, so running this twice produces identical bytes.
const JOKE =
  "The office Wi-Fi is slow, but the gossip runs on fiber \u2014 it reaches the whole floor before the meeting invite does.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), JOKE, "utf8");
