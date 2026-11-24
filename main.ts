import { mkdirSync, writeFileSync } from "node:fs";

const roast = "My AirPods use their last 10% to warn me they're dying every thirty seconds—an electronic hypochondriac screaming through its own funeral.";
const outputDirectory = process.env.OUTPUT_DIR ?? "/output";

mkdirSync(outputDirectory, { recursive: true });
writeFileSync(`${outputDirectory}/entry.txt`, roast, "utf8");
