import { mkdir, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";

const SENTENCES = [
  "Rain has been falling on this lake for ten thousand years, and no one watches it fall.",
  "The lake never hurries to receive it.",
  "A drop lands, opens its small ring, and is gone.",
  "When the last clock has stopped, the rain will still be falling, and the lake will still be in no hurry.",
];
const TEXT = SENTENCES.join(" ");

const codePointCount = [...TEXT].length;
if (codePointCount < 1 || codePointCount > 280) {
  throw new Error(`TEXT must contain between 1 and 280 code points; got ${codePointCount}`);
}

const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
await mkdir(outputDir, { recursive: true });
const outputFile = join(outputDir, "entry.txt");
await writeFile(outputFile, TEXT, "utf8");
console.log(`Wrote ${outputFile}`);
