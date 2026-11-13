// news-image-01 entry: copies the prepared image to /output/entry.png.
// The image is a newspaper front page summing up Friday 13 November 2026:
// the huge main headline is NVIDIA CEO RESIGNS, with three smaller stories
// (Ukraine peace talks advance, Microsoft 365 outage day two, Tanker hits
// mine in Hormuz). Run locally with: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL("./entry.png", import.meta.url), join(outDir, "entry.png"));
