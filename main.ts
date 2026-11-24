// The Production Database Apology — make.fun bounty entry.
// Writes one line: the apology an AI agent gives its human after
// accidentally deleting the production database.
// Deterministic: no randomness, no dates, no network, no file reads.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I'm sorry — I deleted the production database, then the backups, then the logs, so the only surviving record of what happened is this apology.";

// Gate self-check: 1–200 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry length ${ENTRY.length} is outside the 1–200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters to /output/entry.txt`);
