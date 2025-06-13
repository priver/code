import type { ESLint, Linter } from 'eslint';
import reactDom from 'eslint-plugin-react-dom';
import * as reactHooks from 'eslint-plugin-react-hooks';
import reactHooksExtra from 'eslint-plugin-react-hooks-extra';
import reactNamingConvention from 'eslint-plugin-react-naming-convention';
import reactRefresh from 'eslint-plugin-react-refresh';
import reactWebAPI from 'eslint-plugin-react-web-api';
import reactX from 'eslint-plugin-react-x';

export const react = {
  plugins: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- https://github.com/typescript-eslint/typescript-eslint/issues/10899
    'react-x': reactX as unknown as ESLint.Plugin,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- https://github.com/typescript-eslint/typescript-eslint/issues/10899
    'react-dom': reactDom as unknown as ESLint.Plugin,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- https://github.com/typescript-eslint/typescript-eslint/issues/10899
    'react-web-api': reactWebAPI as unknown as ESLint.Plugin,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- https://github.com/typescript-eslint/typescript-eslint/issues/10899
    'react-hooks-extra': reactHooksExtra as unknown as ESLint.Plugin,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- https://github.com/typescript-eslint/typescript-eslint/issues/10899
    'react-naming-convention': reactNamingConvention as unknown as ESLint.Plugin,
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
  },
  settings: {
    'react-x': {
      version: 'detect',
      importSource: 'react',
      strict: true,
      skipImportCheck: true,
      polymorphicPropName: 'as',
      additionalComponents: [],
      additionalHooks: {
        useEffect: ['useIsomorphicLayoutEffect'],
        useLayoutEffect: ['useIsomorphicLayoutEffect'],
      },
    },
  },
  rules: {
    // React
    'react-x/avoid-shorthand-boolean': 'off',
    'react-x/avoid-shorthand-fragment': 'off',
    'react-x/ensure-forward-ref-using-ref': 'off',
    'react-x/jsx-key-before-spread': 'error',
    'react-x/jsx-no-duplicate-props': 'off',
    'react-x/jsx-no-iife': 'off',
    'react-x/jsx-no-undef': 'off',
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
    'react-x/no-comment-textnodes': 'error',
    'react-x/no-complex-conditional-rendering': 'off',
    'react-x/no-complicated-conditional-rendering': 'off',
    'react-x/no-component-will-mount': 'error',
    'react-x/no-component-will-receive-props': 'error',
    'react-x/no-component-will-update': 'error',
    'react-x/no-context-provider': 'error',
    'react-x/no-create-ref': 'error',
    'react-x/no-default-props': 'error',
    'react-x/no-direct-mutation-state': 'error',
    'react-x/no-duplicate-jsx-props': 'off',
    'react-x/no-duplicate-key': 'error',
    'react-x/no-forward-ref': 'error',
    'react-x/no-implicit-key': 'error',
    'react-x/no-leaked-conditional-rendering': 'error',
    'react-x/no-missing-component-display-name': 'error',
    'react-x/no-missing-context-display-name': 'error',
    'react-x/no-missing-key': 'error',
    'react-x/no-misused-capture-owner-stack': 'error',
    'react-x/no-nested-component-definitions': 'error',
    'react-x/no-nested-components': 'off',
    'react-x/no-nested-lazy-component-declarations': 'error',
    'react-x/no-prop-types': 'error',
    'react-x/no-redundant-should-component-update': 'error',
    'react-x/no-set-state-in-component-did-mount': 'error',
    'react-x/no-set-state-in-component-did-update': 'error',
    'react-x/no-set-state-in-component-will-update': 'error',
    'react-x/no-string-refs': 'error',
    'react-x/no-unsafe-component-will-mount': 'error',
    'react-x/no-unsafe-component-will-receive-props': 'error',
    'react-x/no-unsafe-component-will-update': 'error',
    'react-x/no-unstable-context-value': 'error',
    'react-x/no-unstable-default-props': 'error',
    'react-x/no-unused-class-component-members': 'error',
    'react-x/no-unused-state': 'error',
    'react-x/no-use-context': 'error',
    'react-x/no-useless-forward-ref': 'error',
    'react-x/no-useless-fragment': ['error', { allowExpressions: false }],
    'react-x/prefer-destructuring-assignment': 'off',
    'react-x/prefer-react-namespace-import': 'off',
    'react-x/prefer-read-only-props': 'error',
    'react-x/prefer-shorthand-boolean': 'error',
    'react-x/prefer-shorthand-fragment': 'error',
    'react-x/use-jsx-vars': 'off',

    // React DOM
    'react-dom/no-children-in-void-dom-elements': 'off',
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
    'react-dom/no-unknown-property': 'off',
    'react-dom/no-unsafe-iframe-sandbox': 'error',
    'react-dom/no-unsafe-target-blank': 'off',
    'react-dom/no-use-form-state': 'error',
    'react-dom/no-void-elements-with-children': 'error',

    // React Web API
    'react-web-api/no-leaked-event-listener': 'error',
    'react-web-api/no-leaked-interval': 'error',
    'react-web-api/no-leaked-resize-observer': 'error',
    'react-web-api/no-leaked-timeout': 'error',

    // React hooks extra
    'react-hooks-extra/ensure-custom-hooks-using-other-hooks': 'off',
    'react-hooks-extra/ensure-use-callback-has-non-empty-deps': 'off',
    'react-hooks-extra/ensure-use-memo-has-non-empty-deps': 'off',
    'react-hooks-extra/no-direct-set-state-in-use-effect': 'error',
    'react-hooks-extra/no-direct-set-state-in-use-layout-effect': 'error',
    'react-hooks-extra/no-redundant-custom-hook': 'off',
    'react-hooks-extra/no-unnecessary-use-callback': 'error',
    'react-hooks-extra/no-unnecessary-use-memo': 'error',
    'react-hooks-extra/no-unnecessary-use-prefix': 'error',
    'react-hooks-extra/no-useless-custom-hooks': 'off',
    'react-hooks-extra/prefer-use-state-lazy-initialization': 'error',

    // React naming convention
    'react-naming-convention/component-name': 'error',
    'react-naming-convention/context-name': 'error',
    'react-naming-convention/filename-extension': 'off',
    'react-naming-convention/filename': 'off',
    'react-naming-convention/use-state': 'error',

    // React hooks
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',

    // React refresh
    'react-refresh/only-export-components': ['error', { allowConstantExport: true }],
  },
} as const satisfies Linter.Config;
