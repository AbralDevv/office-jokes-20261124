// Office Jokes — one-liner entry.
// Writes Neon's FINAL line verbatim to entry.txt in the grader's output dir.
// Output dir: $MAKEFUN_OUTPUT_DIR, else /output, else ./output (never the
// read-only repo dir). entry.txt is EXACTLY the line, no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Someone kept stealing my lunch, so I planted a ghost-pepper decoy sub; by Thursday I forgot, ate it right before the budget Zoom, and got put on the Q4 task force for 'weeping over the numbers.'";

function resolveOutputDir(): string {
  const envDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (envDir && envDir.length > 0) return envDir;
  try {
    mkdirSync("/output", { recursive: true });
    return "/output";
  } catch {
    return "./output";
  }
}

const outDir = resolveOutputDir();
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
