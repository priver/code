import type { ESLint, Linter } from 'eslint';
import reactDom from 'eslint-plugin-react-dom';
import reactHooks from 'eslint-plugin-react-hooks';
import reactHooksExtra from 'eslint-plugin-react-hooks-extra';
import reactNamingConvention from 'eslint-plugin-react-naming-convention';
import reactRefresh from 'eslint-plugin-react-refresh';
import reactWebAPI from 'eslint-plugin-react-web-api';
import reactX from 'eslint-plugin-react-x';

export const react = {
  name: 'priver/react',
  plugins: {
    'react-x': reactX as ESLint.Plugin, // TS2742
    'react-dom': reactDom as ESLint.Plugin, // TS2742
    'react-web-api': reactWebAPI as ESLint.Plugin, // TS2742
    'react-hooks-extra': reactHooksExtra as ESLint.Plugin, // TS2742
    'react-naming-convention': reactNamingConvention as ESLint.Plugin, // TS2742
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- https://github.com/facebook/react/pull/34994
    'react-hooks': reactHooks as ESLint.Plugin,
    'react-refresh': reactRefresh,
  },
  rules: {
    // React
    'react-x/jsx-dollar': 'off',
    'react-x/jsx-key-before-spread': 'error',
    'react-x/jsx-no-comment-textnodes': 'error',
    'react-x/jsx-no-duplicate-props': 'off',
    'react-x/jsx-no-iife': 'error',
    'react-x/jsx-no-undef': 'off',
    'react-x/jsx-shorthand-boolean': 'error',
    'react-x/jsx-shorthand-fragment': 'error',
    'react-x/jsx-uses-react': 'off',
    'react-x/jsx-uses-vars': 'off',
    'react-x/no-access-state-in-setstate': 'error',
    'react-x/no-array-index-key': 'error',
    'react-x/no-children-count': 'error',
    'react-x/no-children-for-each': 'error',
    'react-x/no-children-map': 'error',
    'react-x/no-children-only': 'error',
    'react-x/no-children-prop': 'error',
    'react-x/no-children-to-array': 'error',
    'react-x/no-class-component': 'error',
    'react-x/no-clone-element': 'error',
    'react-x/no-component-will-mount': 'error',
    'react-x/no-component-will-receive-props': 'error',
    'react-x/no-component-will-update': 'error',
    'react-x/no-context-provider': 'error',
    'react-x/no-create-ref': 'error',
    'react-x/no-default-props': 'error',
    'react-x/no-direct-mutation-state': 'error',
    'react-x/no-duplicate-key': 'off',
    'react-x/no-forward-ref': 'error',
    'react-x/no-implicit-key': 'error',
    'react-x/no-leaked-conditional-rendering': 'error',
    'react-x/no-missing-component-display-name': 'error',
    'react-x/no-missing-context-display-name': 'error',
    'react-x/no-missing-key': 'error',
    'react-x/no-misused-capture-owner-stack': 'error',
    'react-x/no-nested-component-definitions': 'off', // react-hooks/component-hook-factories
    'react-x/no-nested-lazy-component-declarations': 'error',
    'react-x/no-prop-types': 'error',
    'react-x/no-redundant-should-component-update': 'error',
    'react-x/no-set-state-in-component-did-mount': 'error',
    'react-x/no-set-state-in-component-did-update': 'error',
    'react-x/no-set-state-in-component-will-update': 'error',
    'react-x/no-string-refs': 'error',
    'react-x/no-unnecessary-key': 'off',
    'react-x/no-unnecessary-use-callback': 'off',
    'react-x/no-unnecessary-use-memo': 'off',
    'react-x/no-unnecessary-use-prefix': 'error',
    'react-x/no-unnecessary-use-ref': 'off',
    'react-x/no-unsafe-component-will-mount': 'error',
    'react-x/no-unsafe-component-will-receive-props': 'error',
    'react-x/no-unsafe-component-will-update': 'error',
    'react-x/no-unstable-context-value': 'error',
    'react-x/no-unstable-default-props': 'error',
    'react-x/no-unused-class-component-members': 'error',
    'react-x/no-unused-props': 'error',
    'react-x/no-unused-state': 'error',
    'react-x/no-use-context': 'error',
    'react-x/no-useless-forward-ref': 'error',
    'react-x/no-useless-fragment': ['error', { allowExpressions: false }],
    'react-x/prefer-destructuring-assignment': 'off',
    'react-x/prefer-namespace-import': 'off',
    'react-x/prefer-read-only-props': 'off',
    'react-x/prefer-use-state-lazy-initialization': 'error',

    // React DOM
    'react-dom/no-dangerously-set-innerhtml-with-children': 'error',
    'react-dom/no-dangerously-set-innerhtml': 'error',
    'react-dom/no-find-dom-node': 'error',
    'react-dom/no-flush-sync': 'error',
    'react-dom/no-hydrate': 'error',
    'react-dom/no-missing-button-type': 'error',
    'react-dom/no-missing-iframe-sandbox': 'error',
    'react-dom/no-namespace': 'error',
    'react-dom/no-render-return-value': 'error',
    'react-dom/no-render': 'error',
    'react-dom/no-script-url': 'error',
    'react-dom/no-string-style-prop': 'off',
    'react-dom/no-unknown-property': 'off',
    'react-dom/no-unsafe-iframe-sandbox': 'error',
    'react-dom/no-unsafe-target-blank': 'off',
    'react-dom/no-use-form-state': 'error',
    'react-dom/no-void-elements-with-children': 'error',
    'react-dom/prefer-namespace-import': 'off',

    // React Web API
    'react-web-api/no-leaked-event-listener': 'error',
    'react-web-api/no-leaked-interval': 'error',
    'react-web-api/no-leaked-resize-observer': 'error',
    'react-web-api/no-leaked-timeout': 'error',

    // React hooks extra
    'react-hooks-extra/no-direct-set-state-in-use-effect': 'off', // react-hooks/set-state-in-effect

    // React naming convention
    'react-naming-convention/component-name': 'off',
    'react-naming-convention/context-name': 'error',
    'react-naming-convention/filename-extension': 'off',
    'react-naming-convention/filename': 'off',
    'react-naming-convention/ref-name': 'error',
    'react-naming-convention/use-state': 'error',

    // React hooks
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',

    // React Compiler
    'react-hooks/automatic-effect-dependencies': 'off',
    'react-hooks/capitalized-calls': 'off',
    'react-hooks/component-hook-factories': 'error',
    'react-hooks/config': 'off',
    'react-hooks/error-boundaries': 'error',
    'react-hooks/fbt': 'off',
    'react-hooks/fire': 'off',
    'react-hooks/gating': 'off',
    'react-hooks/globals': 'error',
    'react-hooks/hooks': 'off',
    'react-hooks/immutability': 'error',
    'react-hooks/incompatible-library': 'error',
    'react-hooks/invariant': 'off',
    'react-hooks/memoized-effect-dependencies': 'off',
    'react-hooks/no-deriving-state-in-effects': 'off',
    'react-hooks/preserve-manual-memoization': 'error',
    'react-hooks/purity': 'error',
    'react-hooks/refs': 'error',
    'react-hooks/rule-suppression': 'off',
    'react-hooks/set-state-in-effect': 'error',
    'react-hooks/set-state-in-render': 'error',
    'react-hooks/static-components': 'error',
    'react-hooks/syntax': 'off',
    'react-hooks/todo': 'off',
    'react-hooks/unsupported-syntax': 'error',
    'react-hooks/use-memo': 'error',
    'react-hooks/void-use-memo': 'error',

    // React refresh
    'react-refresh/only-export-components': ['error', { allowConstantExport: true }],
  },
} as const satisfies Linter.Config;
