#!/usr/bin/env node
// Repository checks: relative links resolve, referenced agents exist, size budgets hold.
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, dirname, resolve, relative } from "node:path";

const root = resolve(dirname(new URL(import.meta.url).pathname), "..");
const skip = new Set([".git", "node_modules", "docs"]);
const budgets = [
  [/\/SKILL\.md$/, 7_000],
  [/^agents\//, 6_000],
  [/\/(references|assets)\//, 9_000],
  [/^README\.md$/, 9_000],
];

const files = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    if (skip.has(name)) continue;
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path);
    else if (name.endsWith(".md")) files.push(path);
  }
})(root);

const agents = new Set(
  readdirSync(join(root, "agents/opencode")).map((f) => f.replace(/\.md$/, "")),
);
const errors = [];
// Mentioned only in the README's upgrade notes.
const removedAgents = new Set(["morovid-scribe"]);

for (const file of files) {
  const rel = relative(root, file);
  const text = readFileSync(file, "utf8");
  const prose = text.replace(/```[\s\S]*?```/g, "");

  for (const [, target] of prose.matchAll(/\]\(([^)\s]+)\)/g)) {
    if (/^(https?:|mailto:|#)/.test(target) || target.includes("<")) continue;
    const path = target.split("#")[0];
    if (path && !existsSync(resolve(dirname(file), path))) errors.push(`${rel}: broken link ${target}`);
  }

  for (const [name] of text.matchAll(/morovid-[a-z]+/g)) {
    if (rel === "README.md" && removedAgents.has(name)) continue;
    if (!agents.has(name)) errors.push(`${rel}: unknown agent ${name}`);
  }

  if (rel.endsWith("/SKILL.md") && !/^---\nname: [a-z-]+\ndescription: .+\n---/m.test(text)) {
    errors.push(`${rel}: missing name or description frontmatter`);
  }

  const size = Buffer.byteLength(text);
  for (const [pattern, max] of budgets) {
    if (pattern.test(rel) && size > max) errors.push(`${rel}: ${size} bytes exceeds budget ${max}`);
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`ok: ${files.length} files`);
