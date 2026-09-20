#!/usr/bin/env node
/**
 * Zloží messages/<jazyk>.json z čiastkových súborov <priečinok>/<menný-priestor>.json.
 * Prekladateľ tak píše po menných priestoroch (menšie súbory, menšie riziko
 * orezania) a výsledok sa skladá v poradí kľúčov z en.json.
 *
 *   node scripts/merge-intl-messages.mjs pl /cesta/k/castiam
 */
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const [locale, dir] = process.argv.slice(2);
if (!locale || !dir) throw new Error("použitie: merge-intl-messages.mjs <jazyk> <priečinok>");
const en = JSON.parse(readFileSync(new URL("../messages/en.json", import.meta.url), "utf8"));
const parts = Object.fromEntries(
  readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => [f.replace(/\.json$/, ""), JSON.parse(readFileSync(join(dir, f), "utf8"))])
);
const out = {};
for (const ns of Object.keys(en)) if (ns in parts) out[ns] = parts[ns];
for (const ns of Object.keys(parts)) if (!(ns in en)) throw new Error(`neznámy menný priestor: ${ns}`);
writeFileSync(new URL(`../messages/${locale}.json`, import.meta.url), JSON.stringify(out, null, 2) + "\n");
console.log(`messages/${locale}.json ← ${Object.keys(out).join(", ")}`);
