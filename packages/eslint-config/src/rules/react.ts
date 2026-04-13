import type { Linter } from 'eslint';
import reactDOM from 'eslint-plugin-react-dom';
import reactJSX from 'eslint-plugin-react-jsx';
import reactNamingConvention from 'eslint-plugin-react-naming-convention';
import { reactRefresh } from 'eslint-plugin-react-refresh';
import reactRSC from 'eslint-plugin-react-rsc';
import reactWebAPI from 'eslint-plugin-react-web-api';
import reactX from 'eslint-plugin-react-x';

export const react = {
  name: 'priver/react',
  plugins: {
    'react-x': reactX,
    'react-jsx': reactJSX,
    'react-rsc': reactRSC,
    'react-dom': reactDOM,
    'react-web-api': reactWebAPI,
    'react-naming-convention': reactNamingConvention,
    'react-refresh': reactRefresh.plugin,
  },
  rules: {
    // React
    'react-x/component-hook-factories': 'error',
    'react-x/error-boundaries': 'error',
    'react-x/exhaustive-deps': 'error',
    'react-x/immutability': 'off', // experimental
    'react-x/no-access-state-in-setstate': 'error',
    'react-x/no-array-index-key': 'error',
    'react-x/no-children-count': 'error',
    'react-x/no-children-for-each': 'error',
    'react-x/no-children-map': 'error',
    'react-x/no-children-only': 'error',
    'react-x/no-children-to-array': 'error',
    'react-x/no-class-component': 'error',
    'react-x/no-clone-element': 'error',
    'react-x/no-component-will-mount': 'error',
    'react-x/no-component-will-receive-props': 'error',
    'react-x/no-component-will-update': 'error',
    'react-x/no-context-provider': 'error',
    'react-x/no-create-ref': 'error',
    'react-x/no-direct-mutation-state': 'error',
    'react-x/no-duplicate-key': 'off', // experimental
    'react-x/no-forward-ref': 'error',
    'react-x/no-implicit-children': 'off', // experimental
    'react-x/no-implicit-key': 'off', // experimental
    'react-x/no-implicit-ref': 'off', // experimental
    'react-x/no-leaked-conditional-rendering': 'error',
    'react-x/no-missing-component-display-name': 'error',
    'react-x/no-missing-context-display-name': 'error',
    'react-x/no-missing-key': 'error',
    'react-x/no-misused-capture-owner-stack': 'error', // experimental
    'react-x/no-nested-component-definitions': 'error',
    'react-x/no-nested-lazy-component-declarations': 'error',
    'react-x/no-redundant-should-component-update': 'error',
    'react-x/no-set-state-in-component-did-mount': 'error',
    'react-x/no-set-state-in-component-did-update': 'error',
    'react-x/no-set-state-in-component-will-update': 'error',
    'react-x/no-unnecessary-use-callback': 'off', // experimental
    'react-x/no-unnecessary-use-memo': 'off', // experimental
    'react-x/no-unnecessary-use-prefix': 'error',
    'react-x/no-unsafe-component-will-mount': 'error',
    'react-x/no-unsafe-component-will-receive-props': 'error',
    'react-x/no-unsafe-component-will-update': 'error',
    'react-x/no-unstable-context-value': 'error',
    'react-x/no-unstable-default-props': 'error',
    'react-x/no-unused-class-component-members': 'error',
    'react-x/no-unused-props': 'error', // experimental
    'react-x/no-unused-state': 'error',
    'react-x/no-use-context': 'error',
    'react-x/prefer-destructuring-assignment': 'error',
    'react-x/prefer-namespace-import': 'off',
    'react-x/purity': 'error',
    'react-x/refs': 'off', // experimental
    'react-x/rules-of-hooks': 'error',
    'react-x/set-state-in-effect': 'error',
    'react-x/set-state-in-render': 'error', // experimental
    'react-x/unsupported-syntax': 'error',
    'react-x/use-memo': 'error',
    'react-x/use-state': 'error',

    // React JSX
    'react-jsx/no-children-prop': 'error',
    'react-jsx/no-children-prop-with-children': 'error',
    'react-jsx/no-comment-textnodes': 'error',
    'react-jsx/no-key-after-spread': 'error',
    'react-jsx/no-leaked-dollar': 'off',
    'react-jsx/no-leaked-semicolon': 'error',
    'react-jsx/no-namespace': 'error',
    'react-jsx/no-useless-fragment': 'error',

    // React RSC
    'react-rsc/function-definition': 'error', // experimental

    // React DOM
    'react-dom/no-dangerously-set-innerhtml-with-children': 'error',
    'react-dom/no-dangerously-set-innerhtml': 'error',
    'react-dom/no-find-dom-node': 'error',
    'react-dom/no-flush-sync': 'error',
    'react-dom/no-hydrate': 'error',
    'react-dom/no-missing-button-type': 'error',
    'react-dom/no-missing-iframe-sandbox': 'error',
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

    // React naming convention
    'react-naming-convention/context-name': 'error',
    'react-naming-convention/id-name': 'error',
    'react-naming-convention/ref-name': 'error',

    // React refresh
    'react-refresh/only-export-components': ['error', { allowConstantExport: true }],
  },
} as const satisfies Linter.Config;
