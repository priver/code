import chalk from 'chalk';
import { Linter } from 'eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

import * as configModules from '../index.js';

const OMIT_PRETTIER_RULE_NAMES = new Set(['curly']);

const isCoreRuleName = (ruleName) => !ruleName.includes('/');
const isDeprecated = (ruleName, rules) => rules.get(ruleName)?.meta?.deprecated;

const compareRuleNames = (a, b) => {
  const aIsCore = isCoreRuleName(a);
  const bIsCore = isCoreRuleName(b);

  if (aIsCore === bIsCore) {
    return a.localeCompare(b);
  }

  return aIsCore ? -1 : 1;
};

const printRules = (title, ruleNames, rules) => {
  console.log(chalk.red.bold(title));

  for (const ruleName of ruleNames.sort(compareRuleNames)) {
    const parts = [chalk.dim('*'), ruleName];

    const docsURL = rules.get(ruleName)?.meta?.docs?.url;
    if (docsURL) {
      parts.push(chalk.dim.underline(docsURL));
    }

    console.log(parts.join(' '));
  }

  console.log(); // Empty line
};

const configs = Object.values(configModules).filter((config) => Boolean(config.rules));
const plugins = Object.assign({}, ...configs.map((config) => config.plugins));
const availableRules = new Linter().getRules();
for (const [pluginName, plugin] of Object.entries(plugins)) {
  for (const [ruleName, rule] of Object.entries(plugin.rules)) {
    availableRules.set(`${pluginName}/${ruleName}`, rule);
  }
}
const prettierRules = new Set(
  Object.keys(eslintConfigPrettier.rules).filter(
    (ruleName) => !OMIT_PRETTIER_RULE_NAMES.has(ruleName),
  ),
);

const usedRuleNames = new Set(
  Object.keys(Object.assign({}, ...configs.map((config) => config.rules))),
);
const availableRuleNames = new Set(availableRules.keys());
const notDeprecatedRulesNames = new Set(
  [...availableRuleNames].filter((ruleName) => !isDeprecated(ruleName, availableRules)),
);

const unknownRuleNames = [...usedRuleNames].filter((name) => !availableRuleNames.has(name));
const unusedRuleNames = [...notDeprecatedRulesNames].filter((name) => !usedRuleNames.has(name));
const deprecatedRuleNames = [...usedRuleNames].filter(
  (ruleName) => availableRuleNames.has(ruleName) && !notDeprecatedRulesNames.has(ruleName),
);

const notDisabledPrettierRuleNames = new Set();
for (const config of configs) {
  for (const [ruleName, ruleVaue] of Object.entries(config.rules)) {
    if (prettierRules.has(ruleName) && ruleVaue !== 'off') {
      notDisabledPrettierRuleNames.add(ruleName);
    }
  }
}

if (unknownRuleNames.length > 0) {
  printRules('Unknown rules:', unknownRuleNames, availableRules);
  process.exitCode = 1;
}

if (unusedRuleNames.length > 0) {
  printRules('Unused rules:', unusedRuleNames, availableRules);
  process.exitCode = 1;
}

if (deprecatedRuleNames.length > 0) {
  printRules('Deprected rules:', deprecatedRuleNames, availableRules);
  process.exitCode = 1;
}

if (notDisabledPrettierRuleNames.size > 0) {
  printRules('Should be disabled:', [...notDisabledPrettierRuleNames], availableRules);
  process.exitCode = 1;
}
