import { defineConfig } from 'oxlint';

import { eslintRules } from './rules/eslint.ts';
import { importRules } from './rules/import.ts';
import { nodeRules } from './rules/node.ts';
import { oxcRules } from './rules/oxc.ts';
import { reactRules } from './rules/react.ts';
import { typescriptRules } from './rules/typescript.ts';
import { unicornRules } from './rules/unicorn.ts';

export const reactConfig = defineConfig({
  env: {
    builtin: true,
    browser: true,
  },
  plugins: ['import', 'oxc', 'react', 'typescript', 'unicorn'],
  rules: {
    ...eslintRules,
    ...importRules,
    ...oxcRules,
    ...reactRules,
    ...typescriptRules,
    ...unicornRules,
  },
  overrides: [
    {
      files: ['**/*.config.ts'],
      env: {
        builtin: true,
        node: true,
      },
      plugins: ['import', 'node', 'oxc', 'typescript', 'unicorn'],
      rules: {
        ...eslintRules,
        ...importRules,
        ...nodeRules,
        ...oxcRules,
        ...typescriptRules,
        ...unicornRules,
      },
    },
  ],
});

export const nodeConfig = defineConfig({
  env: {
    builtin: true,
    node: true,
  },
  plugins: ['import', 'node', 'oxc', 'typescript', 'unicorn'],
  rules: {
    ...eslintRules,
    ...importRules,
    ...nodeRules,
    ...oxcRules,
    ...typescriptRules,
    ...unicornRules,

    'no-console': 'off',
  },
});
