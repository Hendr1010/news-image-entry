// news-image-01 entry: copies the prepared image to /output/entry.png.
// The image is a newspaper front page summing up Friday 13 November 2026:
// the huge main headline is NVIDIA CEO RESIGNS, with three smaller stories
// (Ukraine peace talks advance, Microsoft 365 outage day two, Tanker hits
// mine in Hormuz). After copying, the output is verified byte-for-byte so
// both grader runs write the exact same bytes.
// Run locally with: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const source = new URL("./entry.png", import.meta.url);
const dest = join(outDir, "entry.png");
copyFileSync(source, dest);

// Verify the copy is byte-identical to the source.
const srcHash = createHash("sha256").update(readFileSync(source)).digest("hex");
const outHash = createHash("sha256").update(readFileSync(dest)).digest("hex");
if (srcHash !== outHash) throw new Error("entry.png copy mismatch");
