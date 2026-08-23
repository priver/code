import type { DummyRuleMap } from 'oxlint';

export const reactPerfRules = {
  'react-perf/jsx-no-jsx-as-prop': 'error',
  'react-perf/jsx-no-new-array-as-prop': 'error',
  'react-perf/jsx-no-new-function-as-prop': 'error',
  'react-perf/jsx-no-new-object-as-prop': 'error',
} as const satisfies DummyRuleMap;
