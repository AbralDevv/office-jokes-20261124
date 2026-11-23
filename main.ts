import { mkdirSync, writeFileSync } from "node:fs";

// One-line office joke for the make.fun judge: written verbatim to /output/entry.txt.
mkdirSync("/output", { recursive: true });
writeFileSync(
  "/output/entry.txt",
  "My calendar blocked 'focus time' so my manager booked a meeting called 'quick sync about focus time'.",
);
