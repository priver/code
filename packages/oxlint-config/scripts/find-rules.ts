import { execFile } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { promisify, styleText } from 'node:util';

import oxlintPackage from 'oxlint/package.json' with { type: 'json' };

import { eslintRules } from '../src/rules/eslint.ts';
import { importRules } from '../src/rules/import.ts';
import { nodeRules } from '../src/rules/node.ts';
import { oxcRules } from '../src/rules/oxc.ts';
import { reactRules } from '../src/rules/react.ts';
import { typescriptRules } from '../src/rules/typescript.ts';
import { unicornRules } from '../src/rules/unicorn.ts';

const PLUGINS = new Set(['eslint', 'import', 'node', 'oxc', 'react', 'typescript', 'unicorn']);
const RULE_MODULES = [
  eslintRules,
  importRules,
  nodeRules,
  oxcRules,
  reactRules,
  typescriptRules,
  unicornRules,
];

type Rule = {
  scope: string;
  value: string;
  docs_url: string;
};

const run = promisify(execFile);
const oxlintBin = fileURLToPath(
  new URL(oxlintPackage.bin.oxlint, import.meta.resolve('oxlint/package.json')),
);

function isRule(value: unknown): value is Rule {
  return (
    typeof value === 'object' &&
    value !== null &&
    'scope' in value &&
    typeof value.scope === 'string' &&
    'value' in value &&
    typeof value.value === 'string' &&
    'docs_url' in value &&
    typeof value.docs_url === 'string'
  );
}

async function getOxlintRules() {
  const { stdout } = await run(process.execPath, [oxlintBin, '--rules', '--format=json']);
  const rules: unknown = JSON.parse(stdout);

  if (!Array.isArray(rules) || !rules.every((rule) => isRule(rule))) {
    throw new TypeError('Oxlint returned an invalid rule list.');
  }

  return rules;
}

function isCoreRuleName(ruleName: string) {
  return !ruleName.includes('/');
}

function compareRuleNames(a: string, b: string) {
  const aIsCore = isCoreRuleName(a);
  const bIsCore = isCoreRuleName(b);

  if (aIsCore === bIsCore) {
    return a.localeCompare(b);
  }
  return aIsCore ? -1 : 1;
}

function printRules(title: string, rules: Set<string>, docs: Map<string, string>) {
  console.log(styleText(['red', 'bold'], title));

  for (const rule of [...rules].toSorted(compareRuleNames)) {
    const parts = [styleText(['dim'], '*'), rule];
    const docsURL = docs.get(rule);
    if (docsURL !== undefined && docsURL.length > 0) {
      parts.push(styleText(['dim', 'underline'], docsURL));
    }
    console.log(parts.join(' '));
  }

  console.log(); // Empty line
}

async function main() {
  const oxlintRules = await getOxlintRules();
  const ruleDocs = new Map(
    oxlintRules
      .filter((rule) => PLUGINS.has(rule.scope))
      .map((rule) => [
        rule.scope === 'eslint' ? rule.value : `${rule.scope}/${rule.value}`,
        rule.docs_url,
      ]),
  );
  const availableRules = new Set(ruleDocs.keys());
  const usedRules = new Set(RULE_MODULES.flatMap((module) => Object.keys(module)));

  const unknownRules = usedRules.difference(availableRules);
  const unusedRules = availableRules.difference(usedRules);

  let hasErrors = false;

  if (unknownRules.size > 0) {
    printRules('Unknown rules:', unknownRules, ruleDocs);
    hasErrors = true;
  }

  if (unusedRules.size > 0) {
    printRules('Unused rules:', unusedRules, ruleDocs);
    hasErrors = true;
  }

  if (hasErrors) {
    process.exitCode = 1;
  } else {
    console.log(`All rules are up to date.`);
  }
}

await main();
