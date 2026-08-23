import { defineConfig } from 'oxlint';

import { eslintRules } from './rules/eslint.ts';
import { importRules } from './rules/import.ts';
import { jsdocRules } from './rules/jsdoc.ts';
import { jsxA11yRules } from './rules/jsx-a11y.ts';
import { nodeRules } from './rules/node.ts';
import { oxcRules } from './rules/oxc.ts';
import { promiseRules } from './rules/promise.ts';
import { reactPerfRules } from './rules/react-perf.ts';
import { reactRules } from './rules/react.ts';
import { typescriptRules } from './rules/typescript.ts';
import { unicornRules } from './rules/unicorn.ts';

export const reactConfig = defineConfig({
  plugins: [
    'import',
    'jsdoc',
    'jsx-a11y',
    'oxc',
    'promise',
    'react',
    'react-perf',
    'typescript',
    'unicorn',
  ],
  rules: {
    ...eslintRules,
    ...importRules,
    ...jsdocRules,
    ...jsxA11yRules,
    ...oxcRules,
    ...promiseRules,
    ...reactPerfRules,
    ...reactRules,
    ...typescriptRules,
    ...unicornRules,
  },
  overrides: [
    {
      files: ['**/*.config.{ts,mts}'],
      plugins: ['import', 'jsdoc', 'node', 'oxc', 'promise', 'typescript', 'unicorn'],
      rules: {
        ...eslintRules,
        ...importRules,
        ...jsdocRules,
        ...nodeRules,
        ...oxcRules,
        ...promiseRules,
        ...typescriptRules,
        ...unicornRules,
      },
    },
  ],
});

export const nodeConfig = defineConfig({
  plugins: ['import', 'jsdoc', 'node', 'oxc', 'promise', 'typescript', 'unicorn'],
  rules: {
    ...eslintRules,
    ...importRules,
    ...jsdocRules,
    ...nodeRules,
    ...oxcRules,
    ...promiseRules,
    ...typescriptRules,
    ...unicornRules,

    'no-console': 'off',
  },
});
