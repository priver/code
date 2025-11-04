import { styleText } from 'node:util';

import type { ESLint, Linter, Rule } from 'eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import { builtinRules } from 'eslint/use-at-your-own-risk';

import { base } from '../src/rules/base.ts';
import { browser } from '../src/rules/browser.ts';
import { node } from '../src/rules/node.ts';
import { react } from '../src/rules/react.ts';
import { typescript } from '../src/rules/typescript.ts';

type Config = {
  plugins: Record<string, ESLint.Plugin>;
  rules: Record<string, Linter.RuleEntry>;
};

const CONFIGS: Config[] = [base, browser, node, react, typescript];
const PLUGINS = CONFIGS.map((module) => module.plugins);
const RULES = CONFIGS.map((module) => module.rules);

const OMIT_PRETTIER_RULE_NAMES = new Set(['curly']);

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

function printRules(title: string, ruleNames: string[], rules: Map<string, Rule.RuleModule>) {
  console.log(styleText(['red', 'bold'], title));

  for (const ruleName of ruleNames.toSorted(compareRuleNames)) {
    const parts = [styleText(['dim'], '*'), ruleName];
    const docsURL = rules.get(ruleName)?.meta?.docs?.url;
    if (docsURL) {
      parts.push(styleText(['dim', 'underline'], docsURL));
    }
    console.log(parts.join(' '));
  }

  console.log(); // Empty line
}

function collectAvailableRules() {
  const availableRules = new Map(builtinRules);

  for (const plugins of PLUGINS) {
    for (const [pluginName, plugin] of Object.entries(plugins)) {
      if (plugin.rules) {
        for (const [ruleName, rule] of Object.entries(plugin.rules)) {
          availableRules.set(`${pluginName}/${ruleName}`, rule);
        }
      }
    }
  }

  return availableRules;
}

function collectPrettierRules(): Set<string> {
  return new Set(
    Object.keys(eslintConfigPrettier.rules).filter(
      (ruleName) => !OMIT_PRETTIER_RULE_NAMES.has(ruleName),
    ),
  );
}

function main() {
  const availableRules = collectAvailableRules();
  const prettierRules = collectPrettierRules();

  const usedRuleNames = new Set(RULES.flatMap((rules) => Object.keys(rules)));
  const availableRuleNames = new Set(availableRules.keys());
  const notDeprecatedRulesNames = new Set(
    [...availableRules]
      .filter(([, ruleDefinition]) => !ruleDefinition.meta?.deprecated)
      .map(([ruleName]) => ruleName),
  );

  const unknownRuleNames = [...usedRuleNames].filter((name) => !availableRuleNames.has(name));
  const unusedRuleNames = [...notDeprecatedRulesNames].filter((name) => !usedRuleNames.has(name));
  const deprecatedRuleNames = [...usedRuleNames].filter(
    (ruleName) => availableRuleNames.has(ruleName) && !notDeprecatedRulesNames.has(ruleName),
  );

  const notDisabledPrettierRuleNames = new Set<string>();
  for (const rules of RULES) {
    for (const [ruleName, ruleValue] of Object.entries<Linter.RuleEntry>(rules)) {
      if (prettierRules.has(ruleName) && ruleValue !== 'off') {
        notDisabledPrettierRuleNames.add(ruleName);
      }
    }
  }

  let hasErrors = false;

  if (unknownRuleNames.length > 0) {
    printRules('Unknown rules:', unknownRuleNames, availableRules);
    hasErrors = true;
  }

  if (unusedRuleNames.length > 0) {
    printRules('Unused rules:', unusedRuleNames, availableRules);
    hasErrors = true;
  }

  if (deprecatedRuleNames.length > 0) {
    printRules('Deprecated rules:', deprecatedRuleNames, availableRules);
    hasErrors = true;
  }

  if (notDisabledPrettierRuleNames.size > 0) {
    printRules('Should be disabled:', [...notDisabledPrettierRuleNames], availableRules);
    hasErrors = true;
  }

  if (hasErrors) {
    process.exitCode = 1;
  } else {
    console.log(`All rules are up to date.`);
  }
}

main();
