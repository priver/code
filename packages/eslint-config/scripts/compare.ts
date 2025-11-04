import fs from 'node:fs/promises';

// @ts-expect-error -- https://github.com/eslint-community/eslint-plugin-eslint-comments/pull/246
import eslintComments from '@eslint-community/eslint-plugin-eslint-comments';
import js from '@eslint/js';
import type { TSESLint } from '@typescript-eslint/utils';
import type { ESLint, Linter, Rule } from 'eslint';
import compat from 'eslint-plugin-compat';
import * as depend from 'eslint-plugin-depend';
import { importX } from 'eslint-plugin-import-x';
import n from 'eslint-plugin-n';
import reactDom from 'eslint-plugin-react-dom';
import reactHooks from 'eslint-plugin-react-hooks';
import reactHooksExtra from 'eslint-plugin-react-hooks-extra';
import reactNamingConvention from 'eslint-plugin-react-naming-convention';
import reactRefresh from 'eslint-plugin-react-refresh';
import reactWebAPI from 'eslint-plugin-react-web-api';
import reactX from 'eslint-plugin-react-x';
import unicorn from 'eslint-plugin-unicorn';
import { builtinRules } from 'eslint/use-at-your-own-risk';
import * as prettier from 'prettier';
import * as tseslint from 'typescript-eslint';

import { base } from '../src/rules/base.ts';
import { browser } from '../src/rules/browser.ts';
import { node } from '../src/rules/node.ts';
import { react } from '../src/rules/react.ts';
import { typescript } from '../src/rules/typescript.ts';

const FILENAME = 'TABLE_OF_COMPARISON.md';

const SEVERITY_MAP = {
  0: 'off',
  1: 'warn',
  2: 'error',
  off: 'off',
  warn: 'warn',
  error: 'error',
} as const;

const SEVERITY_EMOJI = {
  off: '🚫',
  warn: '⚠️',
  error: '✅',
} as const;

// Plugin configurations
type PluginComparison = {
  prefix: string;
  rulesDefinitions?: Record<string, Rule.RuleModule | TSESLint.AnyRuleModule>;
  recommended?: Partial<Linter.RulesRecord>;
  rules: Partial<Linter.RulesRecord>;
};

const PLUGIN_COMPARISONS: PluginComparison[] = [
  {
    prefix: 'eslint',
    rulesDefinitions: Object.fromEntries(builtinRules),
    recommended: js.configs.recommended.rules,
    rules: base.rules,
  },
  {
    prefix: '@eslint-community/eslint-comments',
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access -- https://github.com/eslint-community/eslint-plugin-eslint-comments/pull/246
    rulesDefinitions: eslintComments.rules,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access -- https://github.com/eslint-community/eslint-plugin-eslint-comments/pull/246
    recommended: eslintComments.configs.recommended.rules,
    rules: base.rules,
  },
  {
    prefix: 'import-x',
    rulesDefinitions: importX.rules,
    recommended: importX.flatConfigs.recommended.rules,
    rules: base.rules,
  },
  {
    prefix: 'unicorn',
    rulesDefinitions: unicorn.rules,
    recommended: unicorn.configs.recommended.rules,
    rules: base.rules,
  },
  {
    prefix: 'depend',
    rulesDefinitions: depend.rules,
    recommended: depend.configs['flat/recommended'].rules,
    rules: base.rules,
  },
  {
    prefix: 'compat',
    rulesDefinitions: compat.rules,
    recommended: compat.configs['flat/recommended'].rules,
    rules: browser.rules,
  },
  {
    prefix: 'n',
    rulesDefinitions: n.rules,
    recommended: n.configs['flat/recommended-module'].rules,
    rules: node.rules,
  },
  {
    prefix: '@typescript-eslint',
    rulesDefinitions: (tseslint.plugin as ESLint.Plugin).rules,
    recommended: mergeRules([
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ]),
    rules: typescript.rules,
  },
  {
    prefix: 'react-x',
    rulesDefinitions: reactX.rules,
    recommended: reactX.configs['strict-type-checked'].rules,
    rules: react.rules,
  },
  {
    prefix: 'react-dom',
    rulesDefinitions: reactDom.rules,
    recommended: reactDom.configs.strict.rules,
    rules: react.rules,
  },
  {
    prefix: 'react-web-api',
    rulesDefinitions: reactWebAPI.rules,
    recommended: reactWebAPI.configs.recommended.rules,
    rules: react.rules,
  },
  {
    prefix: 'react-hooks-extra',
    rulesDefinitions: reactHooksExtra.rules,
    recommended: reactHooksExtra.configs.recommended.rules,
    rules: react.rules,
  },
  {
    prefix: 'react-naming-convention',
    rulesDefinitions: reactNamingConvention.rules,
    recommended: reactNamingConvention.configs.recommended.rules,
    rules: react.rules,
  },
  {
    prefix: 'react-hooks',
    rulesDefinitions: reactHooks.rules,
    recommended: reactHooks.configs['recommended-latest'].rules,
    rules: react.rules,
  },
  {
    prefix: 'react-refresh',
    rulesDefinitions: reactRefresh.rules,
    recommended: reactRefresh.configs.vite.rules,
    rules: react.rules,
  },
];

// String utilities
function rsplitOne(str: string, separator: string): [string, string] | [string] {
  const index = str.lastIndexOf(separator);
  return index === -1 ?
      [str]
    : [str.slice(0, Math.max(0, index)), str.slice(Math.max(0, index + separator.length))];
}

function toJSON(value: unknown) {
  return JSON.stringify(value, null, 2);
}

// Rule utilities
function severityString(severity: Linter.RuleSeverity): Linter.StringSeverity {
  return SEVERITY_MAP[severity];
}

function ruleSeverity(options: Linter.RuleEntry = 'off'): Linter.StringSeverity {
  return Array.isArray(options) ? severityString(options[0]) : severityString(options);
}

function ruleOptions(ruleEntry: Linter.RuleEntry): unknown[] {
  return Array.isArray(ruleEntry) ? ruleEntry.slice(1) : [];
}

function isRuleEnabled(ruleEntry?: Linter.RuleEntry): ruleEntry is Linter.RuleEntry {
  return ruleEntry !== undefined && ruleSeverity(ruleEntry) !== 'off';
}

function severityEmoji(options: Linter.RuleEntry = 'off') {
  return SEVERITY_EMOJI[ruleSeverity(options)];
}

function hasIncompatibleRuleOptions(ruleEntry1: Linter.RuleEntry, ruleEntry2: Linter.RuleEntry) {
  const options1 = ruleOptions(ruleEntry1);
  const options2 = ruleOptions(ruleEntry2);
  return JSON.stringify(options1) !== JSON.stringify(options2);
}

// HTML utilities
function summaryID(ruleName: string) {
  return `summary-${ruleName}`;
}

function ruleID(ruleName: string) {
  return `rule-${ruleName}`;
}

function htmlAnchor(id: string) {
  return `<a id="${id}"></a>`;
}

function htmlLink(id: string, text: string) {
  return `<a href="${id}">${text}</a>`;
}

function htmlCode(text: string) {
  return `<code>${text}</code>`;
}

function htmlCodeBlock(text: string) {
  return `<pre><code>${text}</code></pre>`;
}

function htmlCommentStart(text: string) {
  return `<!-- START ${text} -->`;
}

function htmlCommentEnd(text: string) {
  return `<!-- END ${text} -->`;
}

function htmlTableHeaderRow(header: string, colspan = 2) {
  return `<tr><th colspan="${colspan.toString()}" align="left">${header}</th></tr>`;
}

function htmlTableRow(columns: string[]) {
  return `<tr>${columns.map((column) => `<td>${column}</td>`).join('')}</tr>`;
}

function htmlTable(rows: string[]) {
  return `<table>${rows.join('\n')}</table>\n`;
}

// Markdown utilities
function markdownLink(title: string, url?: string) {
  return url ? `[${title}](${url})` : `[${title}]`;
}

function markdownReferenceLink(title: string, url: string) {
  return `[${title}]: ${url}`;
}

function markdownCode(text: string) {
  return '`' + text + '`';
}

function markdownTableRow(...columns: string[]) {
  return `|${columns.join('|')}|`;
}

// Configuration utilities
function mergeRules(
  configs: Array<{ rules?: Partial<Linter.RulesRecord> }>,
): Partial<Linter.RulesRecord> {
  let rules: Partial<Linter.RulesRecord> = {};

  for (const config of configs) {
    if (config.rules) {
      rules = { ...rules, ...config.rules };
    }
  }

  return rules;
}

// Plugin comparison logic
function comparePlugin(
  pluginPrefix: string,
  ruleDefinitions: Record<string, Rule.RuleModule | TSESLint.AnyRuleModule> | undefined,
  recommendedRules: Partial<Linter.RulesRecord> | undefined,
  rules: Partial<Linter.RulesRecord>,
  content: string,
) {
  if (!ruleDefinitions) {
    throw new Error(`Plugin ${pluginPrefix} has no rule definitions`);
  }

  if (!recommendedRules) {
    throw new Error(`Plugin ${pluginPrefix} has no recommended rules`);
  }

  const markdownLines = [markdownTableRow('Rule', 'P', 'R'), markdownTableRow('---', '---', '---')];
  const incompatibleTable: string[] = [];
  const links: string[] = [];

  for (const ruleName of Object.keys(rules).toSorted()) {
    const ruleNameParts = rsplitOne(ruleName, '/');
    const rulePrefix = ruleNameParts.length === 1 ? 'eslint' : ruleNameParts[0];
    const unprefixedRuleName = ruleNameParts.length === 1 ? ruleNameParts[0] : ruleNameParts[1];

    if (pluginPrefix === rulePrefix) {
      const ruleDefinition = ruleDefinitions[unprefixedRuleName];
      const ruleURL = ruleDefinition?.meta?.docs?.url;

      const ruleEntry = rules[ruleName];
      const recommendedRuleEntry = recommendedRules[ruleName];

      const hasIncompatibleValue =
        isRuleEnabled(ruleEntry) &&
        isRuleEnabled(recommendedRuleEntry) &&
        hasIncompatibleRuleOptions(ruleEntry, recommendedRuleEntry);

      if (hasIncompatibleValue) {
        incompatibleTable.push(
          htmlTableHeaderRow(
            `${htmlCode(ruleName)} ${htmlLink(`#${summaryID(ruleName)}`, '⬆️ back to summary table')} ${htmlAnchor(ruleID(ruleName))}`,
          ),
          htmlTableRow([
            htmlCodeBlock(toJSON(ruleEntry)),
            htmlCodeBlock(toJSON(recommendedRuleEntry)),
          ]),
        );
      }

      let ruleNameMarkdown = markdownCode(ruleName);
      if (ruleURL) {
        links.push(markdownReferenceLink(ruleNameMarkdown, ruleURL));
        ruleNameMarkdown = markdownLink(ruleNameMarkdown);
      }

      markdownLines.push(
        markdownTableRow(
          `${ruleNameMarkdown} ${htmlAnchor(summaryID(ruleName))}`,
          severityEmoji(rules[ruleName]) +
            (hasIncompatibleValue ? ` ${htmlLink(`#${ruleID(ruleName)}`, '(?)')}` : ''),
          severityEmoji(recommendedRules[ruleName]),
        ),
      );
    }
  }

  if (incompatibleTable.length > 0) {
    markdownLines.push(htmlTable(incompatibleTable));
  }

  markdownLines.push(links.join('\n'));

  const start = htmlCommentStart(pluginPrefix);
  const end = htmlCommentEnd(pluginPrefix);
  return content.replace(
    new RegExp(String.raw`${start}[\s\S]+${end}`, 'u'),
    `${start}\n${markdownLines.join('\n')}\n${end}`,
  );
}

// File operations
async function readComparisonFile() {
  try {
    return await fs.readFile(FILENAME, 'utf8');
  } catch (error) {
    throw new Error(
      `Failed to read ${FILENAME}: ${error instanceof Error ? error.message : String(error)}`,
      { cause: error },
    );
  }
}

async function writeComparisonFile(content: string) {
  try {
    await fs.writeFile(FILENAME, content);
  } catch (error) {
    throw new Error(
      `Failed to write ${FILENAME}: ${error instanceof Error ? error.message : String(error)}`,
      { cause: error },
    );
  }
}

// Command line argument parsing
function parseArguments() {
  const args = process.argv.slice(2);
  return {
    update: args.includes('--update'),
  };
}

// Main function
async function main() {
  try {
    const { update } = parseArguments();

    const originalContent = await readComparisonFile();

    let updatedContent = originalContent;
    for (const { prefix, rulesDefinitions, recommended, rules } of PLUGIN_COMPARISONS) {
      updatedContent = comparePlugin(prefix, rulesDefinitions, recommended, rules, updatedContent);
    }

    const prettierOptions = await prettier.resolveConfig(FILENAME);
    updatedContent = await prettier.format(updatedContent, {
      ...prettierOptions,
      filepath: FILENAME,
    });

    if (originalContent === updatedContent) {
      console.log(`${FILENAME} is up to date.`);
    } else if (update) {
      // Update mode: write the file if content changed
      await writeComparisonFile(updatedContent);
      console.log(`Comparison table updated: ${FILENAME}`);
    } else {
      // Check mode: compare content and exit with error if different
      console.error(
        `Error: ${FILENAME} is out of date. Run "pnpm run build:compare --update" to update it.`,
      );
      process.exitCode = 1;
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error(`Error processing comparison table: ${errorMessage}`);
    process.exitCode = 1;
  }
}

await main();
