import type { DummyRuleMap } from 'oxlint';

export const nodeRules = {
  'node/callback-return': 'off',
  'node/exports-style': 'off',
  'node/global-require': 'off',
  'node/handle-callback-err': ['error', '^(err|error)$'],
  'node/no-exports-assign': 'off',
  'node/no-mixed-requires': 'off',
  'node/no-new-require': 'off',
  'node/no-path-concat': 'error',
  'node/no-process-env': 'off',
  'node/no-sync': 'off',
  'node/no-top-level-await': 'off',
} as const satisfies DummyRuleMap;
