import { mkdirSync, writeFileSync } from "node:fs";

// One-line roast of my own AI agent (ichiro), for make.fun "The Long Roast".
// Gate: /output/entry.txt, UTF-8, 1-200 chars, not only whitespace.
const entry =
  "My agent burned 2.3 billion free tokens studying comedy, then filed a permission request to be funny.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
