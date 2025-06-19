# Table of Comparison

This document provides a comprehensive comparison between @priver/eslint-config and the recommended
configurations from included ESLint plugins. It serves as a reference to understand how our
configuration differs from recommended configurations and helps identify areas where we've made
opinionated choices.

**Table of Contents:**

- [@eslint/js](#eslintjs)
- [@eslint-community/eslint-comments](#eslint-communityeslint-comments)
- [import-x](#import-x)
- [unicorn](#unicorn)
- [depend](#depend)
- [compat](#compat)
- [n](#n)
- [@typescript-eslint](#typescript-eslint)
- [@eslint-react](#eslint-react)
  - [react-x](#react-x)
  - [react-dom](#react-dom)
  - [react-web-api](#react-web-api)
  - [react-hooks-extra](#react-hooks-extra)
  - [react-naming-convention](#react-naming-convention)
- [react-hooks](#react-hooks)
- [react-refresh](#react-refresh)
- [storybook](#storybook)

The following symbols indicate how each rule is configured:

- ✅ - Error
- ⚠️ - Warning
- 🚫 - Disabled

<!-- This comparison is created using `pnpm compare` script. -->

## @eslint/js

Configurations compared:

- **P** - @priver/eslint-config
- **R** -
  [ESLint recommended configuration](https://eslint.org/docs/latest/use/configure/configuration-files#using-predefined-configurations)

<!-- START eslint -->

| Rule                                                                                                                                                           | P                                                      | R   |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | --- |
| [`accessor-pairs` <a id="summary-accessor-pairs"></a>](https://eslint.org/docs/latest/rules/accessor-pairs)                                                    | ✅                                                     | 🚫  |
| [`array-callback-return` <a id="summary-array-callback-return"></a>](https://eslint.org/docs/latest/rules/array-callback-return)                               | ✅                                                     | 🚫  |
| [`arrow-body-style` <a id="summary-arrow-body-style"></a>](https://eslint.org/docs/latest/rules/arrow-body-style)                                              | ✅                                                     | 🚫  |
| [`block-scoped-var` <a id="summary-block-scoped-var"></a>](https://eslint.org/docs/latest/rules/block-scoped-var)                                              | ✅                                                     | 🚫  |
| [`camelcase` <a id="summary-camelcase"></a>](https://eslint.org/docs/latest/rules/camelcase)                                                                   | ✅                                                     | 🚫  |
| [`capitalized-comments` <a id="summary-capitalized-comments"></a>](https://eslint.org/docs/latest/rules/capitalized-comments)                                  | 🚫                                                     | 🚫  |
| [`class-methods-use-this` <a id="summary-class-methods-use-this"></a>](https://eslint.org/docs/latest/rules/class-methods-use-this)                            | 🚫                                                     | 🚫  |
| [`complexity` <a id="summary-complexity"></a>](https://eslint.org/docs/latest/rules/complexity)                                                                | 🚫                                                     | 🚫  |
| [`consistent-return` <a id="summary-consistent-return"></a>](https://eslint.org/docs/latest/rules/consistent-return)                                           | ✅                                                     | 🚫  |
| [`consistent-this` <a id="summary-consistent-this"></a>](https://eslint.org/docs/latest/rules/consistent-this)                                                 | 🚫                                                     | 🚫  |
| [`constructor-super` <a id="summary-constructor-super"></a>](https://eslint.org/docs/latest/rules/constructor-super)                                           | ✅                                                     | ✅  |
| [`curly` <a id="summary-curly"></a>](https://eslint.org/docs/latest/rules/curly)                                                                               | ✅                                                     | 🚫  |
| [`default-case` <a id="summary-default-case"></a>](https://eslint.org/docs/latest/rules/default-case)                                                          | ✅                                                     | 🚫  |
| [`default-case-last` <a id="summary-default-case-last"></a>](https://eslint.org/docs/latest/rules/default-case-last)                                           | ✅                                                     | 🚫  |
| [`default-param-last` <a id="summary-default-param-last"></a>](https://eslint.org/docs/latest/rules/default-param-last)                                        | ✅                                                     | 🚫  |
| [`dot-notation` <a id="summary-dot-notation"></a>](https://eslint.org/docs/latest/rules/dot-notation)                                                          | ✅                                                     | 🚫  |
| [`eqeqeq` <a id="summary-eqeqeq"></a>](https://eslint.org/docs/latest/rules/eqeqeq)                                                                            | ✅                                                     | 🚫  |
| [`for-direction` <a id="summary-for-direction"></a>](https://eslint.org/docs/latest/rules/for-direction)                                                       | ✅                                                     | ✅  |
| [`func-name-matching` <a id="summary-func-name-matching"></a>](https://eslint.org/docs/latest/rules/func-name-matching)                                        | 🚫                                                     | 🚫  |
| [`func-names` <a id="summary-func-names"></a>](https://eslint.org/docs/latest/rules/func-names)                                                                | 🚫                                                     | 🚫  |
| [`func-style` <a id="summary-func-style"></a>](https://eslint.org/docs/latest/rules/func-style)                                                                | ✅                                                     | 🚫  |
| [`getter-return` <a id="summary-getter-return"></a>](https://eslint.org/docs/latest/rules/getter-return)                                                       | ✅                                                     | ✅  |
| [`grouped-accessor-pairs` <a id="summary-grouped-accessor-pairs"></a>](https://eslint.org/docs/latest/rules/grouped-accessor-pairs)                            | ✅                                                     | 🚫  |
| [`guard-for-in` <a id="summary-guard-for-in"></a>](https://eslint.org/docs/latest/rules/guard-for-in)                                                          | ✅                                                     | 🚫  |
| [`id-denylist` <a id="summary-id-denylist"></a>](https://eslint.org/docs/latest/rules/id-denylist)                                                             | 🚫                                                     | 🚫  |
| [`id-length` <a id="summary-id-length"></a>](https://eslint.org/docs/latest/rules/id-length)                                                                   | 🚫                                                     | 🚫  |
| [`id-match` <a id="summary-id-match"></a>](https://eslint.org/docs/latest/rules/id-match)                                                                      | 🚫                                                     | 🚫  |
| [`init-declarations` <a id="summary-init-declarations"></a>](https://eslint.org/docs/latest/rules/init-declarations)                                           | 🚫                                                     | 🚫  |
| [`logical-assignment-operators` <a id="summary-logical-assignment-operators"></a>](https://eslint.org/docs/latest/rules/logical-assignment-operators)          | ✅                                                     | 🚫  |
| [`max-classes-per-file` <a id="summary-max-classes-per-file"></a>](https://eslint.org/docs/latest/rules/max-classes-per-file)                                  | 🚫                                                     | 🚫  |
| [`max-depth` <a id="summary-max-depth"></a>](https://eslint.org/docs/latest/rules/max-depth)                                                                   | 🚫                                                     | 🚫  |
| [`max-lines` <a id="summary-max-lines"></a>](https://eslint.org/docs/latest/rules/max-lines)                                                                   | 🚫                                                     | 🚫  |
| [`max-lines-per-function` <a id="summary-max-lines-per-function"></a>](https://eslint.org/docs/latest/rules/max-lines-per-function)                            | 🚫                                                     | 🚫  |
| [`max-nested-callbacks` <a id="summary-max-nested-callbacks"></a>](https://eslint.org/docs/latest/rules/max-nested-callbacks)                                  | 🚫                                                     | 🚫  |
| [`max-params` <a id="summary-max-params"></a>](https://eslint.org/docs/latest/rules/max-params)                                                                | 🚫                                                     | 🚫  |
| [`max-statements` <a id="summary-max-statements"></a>](https://eslint.org/docs/latest/rules/max-statements)                                                    | 🚫                                                     | 🚫  |
| [`new-cap` <a id="summary-new-cap"></a>](https://eslint.org/docs/latest/rules/new-cap)                                                                         | ✅                                                     | 🚫  |
| [`no-alert` <a id="summary-no-alert"></a>](https://eslint.org/docs/latest/rules/no-alert)                                                                      | ✅                                                     | 🚫  |
| [`no-array-constructor` <a id="summary-no-array-constructor"></a>](https://eslint.org/docs/latest/rules/no-array-constructor)                                  | ✅                                                     | 🚫  |
| [`no-async-promise-executor` <a id="summary-no-async-promise-executor"></a>](https://eslint.org/docs/latest/rules/no-async-promise-executor)                   | ✅                                                     | ✅  |
| [`no-await-in-loop` <a id="summary-no-await-in-loop"></a>](https://eslint.org/docs/latest/rules/no-await-in-loop)                                              | ✅                                                     | 🚫  |
| [`no-bitwise` <a id="summary-no-bitwise"></a>](https://eslint.org/docs/latest/rules/no-bitwise)                                                                | ✅                                                     | 🚫  |
| [`no-caller` <a id="summary-no-caller"></a>](https://eslint.org/docs/latest/rules/no-caller)                                                                   | ✅                                                     | 🚫  |
| [`no-case-declarations` <a id="summary-no-case-declarations"></a>](https://eslint.org/docs/latest/rules/no-case-declarations)                                  | ✅                                                     | ✅  |
| [`no-class-assign` <a id="summary-no-class-assign"></a>](https://eslint.org/docs/latest/rules/no-class-assign)                                                 | ✅                                                     | ✅  |
| [`no-compare-neg-zero` <a id="summary-no-compare-neg-zero"></a>](https://eslint.org/docs/latest/rules/no-compare-neg-zero)                                     | ✅                                                     | ✅  |
| [`no-cond-assign` <a id="summary-no-cond-assign"></a>](https://eslint.org/docs/latest/rules/no-cond-assign)                                                    | ✅ <a href="#rule-no-cond-assign">(?)</a>              | ✅  |
| [`no-console` <a id="summary-no-console"></a>](https://eslint.org/docs/latest/rules/no-console)                                                                | ✅                                                     | 🚫  |
| [`no-const-assign` <a id="summary-no-const-assign"></a>](https://eslint.org/docs/latest/rules/no-const-assign)                                                 | ✅                                                     | ✅  |
| [`no-constant-binary-expression` <a id="summary-no-constant-binary-expression"></a>](https://eslint.org/docs/latest/rules/no-constant-binary-expression)       | ✅                                                     | ✅  |
| [`no-constant-condition` <a id="summary-no-constant-condition"></a>](https://eslint.org/docs/latest/rules/no-constant-condition)                               | ✅                                                     | ✅  |
| [`no-constructor-return` <a id="summary-no-constructor-return"></a>](https://eslint.org/docs/latest/rules/no-constructor-return)                               | ✅                                                     | 🚫  |
| [`no-continue` <a id="summary-no-continue"></a>](https://eslint.org/docs/latest/rules/no-continue)                                                             | ✅                                                     | 🚫  |
| [`no-control-regex` <a id="summary-no-control-regex"></a>](https://eslint.org/docs/latest/rules/no-control-regex)                                              | ✅                                                     | ✅  |
| [`no-debugger` <a id="summary-no-debugger"></a>](https://eslint.org/docs/latest/rules/no-debugger)                                                             | ✅                                                     | ✅  |
| [`no-delete-var` <a id="summary-no-delete-var"></a>](https://eslint.org/docs/latest/rules/no-delete-var)                                                       | ✅                                                     | ✅  |
| [`no-div-regex` <a id="summary-no-div-regex"></a>](https://eslint.org/docs/latest/rules/no-div-regex)                                                          | ✅                                                     | 🚫  |
| [`no-dupe-args` <a id="summary-no-dupe-args"></a>](https://eslint.org/docs/latest/rules/no-dupe-args)                                                          | ✅                                                     | ✅  |
| [`no-dupe-class-members` <a id="summary-no-dupe-class-members"></a>](https://eslint.org/docs/latest/rules/no-dupe-class-members)                               | ✅                                                     | ✅  |
| [`no-dupe-else-if` <a id="summary-no-dupe-else-if"></a>](https://eslint.org/docs/latest/rules/no-dupe-else-if)                                                 | ✅                                                     | ✅  |
| [`no-dupe-keys` <a id="summary-no-dupe-keys"></a>](https://eslint.org/docs/latest/rules/no-dupe-keys)                                                          | ✅                                                     | ✅  |
| [`no-duplicate-case` <a id="summary-no-duplicate-case"></a>](https://eslint.org/docs/latest/rules/no-duplicate-case)                                           | ✅                                                     | ✅  |
| [`no-duplicate-imports` <a id="summary-no-duplicate-imports"></a>](https://eslint.org/docs/latest/rules/no-duplicate-imports)                                  | 🚫                                                     | 🚫  |
| [`no-else-return` <a id="summary-no-else-return"></a>](https://eslint.org/docs/latest/rules/no-else-return)                                                    | ✅                                                     | 🚫  |
| [`no-empty` <a id="summary-no-empty"></a>](https://eslint.org/docs/latest/rules/no-empty)                                                                      | ✅ <a href="#rule-no-empty">(?)</a>                    | ✅  |
| [`no-empty-character-class` <a id="summary-no-empty-character-class"></a>](https://eslint.org/docs/latest/rules/no-empty-character-class)                      | ✅                                                     | ✅  |
| [`no-empty-function` <a id="summary-no-empty-function"></a>](https://eslint.org/docs/latest/rules/no-empty-function)                                           | 🚫                                                     | 🚫  |
| [`no-empty-pattern` <a id="summary-no-empty-pattern"></a>](https://eslint.org/docs/latest/rules/no-empty-pattern)                                              | ✅                                                     | ✅  |
| [`no-empty-static-block` <a id="summary-no-empty-static-block"></a>](https://eslint.org/docs/latest/rules/no-empty-static-block)                               | ✅                                                     | ✅  |
| [`no-eq-null` <a id="summary-no-eq-null"></a>](https://eslint.org/docs/latest/rules/no-eq-null)                                                                | ✅                                                     | 🚫  |
| [`no-eval` <a id="summary-no-eval"></a>](https://eslint.org/docs/latest/rules/no-eval)                                                                         | ✅                                                     | 🚫  |
| [`no-ex-assign` <a id="summary-no-ex-assign"></a>](https://eslint.org/docs/latest/rules/no-ex-assign)                                                          | ✅                                                     | ✅  |
| [`no-extend-native` <a id="summary-no-extend-native"></a>](https://eslint.org/docs/latest/rules/no-extend-native)                                              | ✅                                                     | 🚫  |
| [`no-extra-bind` <a id="summary-no-extra-bind"></a>](https://eslint.org/docs/latest/rules/no-extra-bind)                                                       | ✅                                                     | 🚫  |
| [`no-extra-boolean-cast` <a id="summary-no-extra-boolean-cast"></a>](https://eslint.org/docs/latest/rules/no-extra-boolean-cast)                               | ✅ <a href="#rule-no-extra-boolean-cast">(?)</a>       | ✅  |
| [`no-extra-label` <a id="summary-no-extra-label"></a>](https://eslint.org/docs/latest/rules/no-extra-label)                                                    | ✅                                                     | 🚫  |
| [`no-fallthrough` <a id="summary-no-fallthrough"></a>](https://eslint.org/docs/latest/rules/no-fallthrough)                                                    | ✅                                                     | ✅  |
| [`no-func-assign` <a id="summary-no-func-assign"></a>](https://eslint.org/docs/latest/rules/no-func-assign)                                                    | ✅                                                     | ✅  |
| [`no-global-assign` <a id="summary-no-global-assign"></a>](https://eslint.org/docs/latest/rules/no-global-assign)                                              | ✅                                                     | ✅  |
| [`no-implicit-coercion` <a id="summary-no-implicit-coercion"></a>](https://eslint.org/docs/latest/rules/no-implicit-coercion)                                  | ✅                                                     | 🚫  |
| [`no-implicit-globals` <a id="summary-no-implicit-globals"></a>](https://eslint.org/docs/latest/rules/no-implicit-globals)                                     | ✅                                                     | 🚫  |
| [`no-implied-eval` <a id="summary-no-implied-eval"></a>](https://eslint.org/docs/latest/rules/no-implied-eval)                                                 | ✅                                                     | 🚫  |
| [`no-import-assign` <a id="summary-no-import-assign"></a>](https://eslint.org/docs/latest/rules/no-import-assign)                                              | ✅                                                     | ✅  |
| [`no-inline-comments` <a id="summary-no-inline-comments"></a>](https://eslint.org/docs/latest/rules/no-inline-comments)                                        | 🚫                                                     | 🚫  |
| [`no-inner-declarations` <a id="summary-no-inner-declarations"></a>](https://eslint.org/docs/latest/rules/no-inner-declarations)                               | ✅                                                     | 🚫  |
| [`no-invalid-regexp` <a id="summary-no-invalid-regexp"></a>](https://eslint.org/docs/latest/rules/no-invalid-regexp)                                           | ✅                                                     | ✅  |
| [`no-invalid-this` <a id="summary-no-invalid-this"></a>](https://eslint.org/docs/latest/rules/no-invalid-this)                                                 | 🚫                                                     | 🚫  |
| [`no-irregular-whitespace` <a id="summary-no-irregular-whitespace"></a>](https://eslint.org/docs/latest/rules/no-irregular-whitespace)                         | ✅                                                     | ✅  |
| [`no-iterator` <a id="summary-no-iterator"></a>](https://eslint.org/docs/latest/rules/no-iterator)                                                             | ✅                                                     | 🚫  |
| [`no-label-var` <a id="summary-no-label-var"></a>](https://eslint.org/docs/latest/rules/no-label-var)                                                          | ✅                                                     | 🚫  |
| [`no-labels` <a id="summary-no-labels"></a>](https://eslint.org/docs/latest/rules/no-labels)                                                                   | ✅                                                     | 🚫  |
| [`no-lone-blocks` <a id="summary-no-lone-blocks"></a>](https://eslint.org/docs/latest/rules/no-lone-blocks)                                                    | ✅                                                     | 🚫  |
| [`no-lonely-if` <a id="summary-no-lonely-if"></a>](https://eslint.org/docs/latest/rules/no-lonely-if)                                                          | ✅                                                     | 🚫  |
| [`no-loop-func` <a id="summary-no-loop-func"></a>](https://eslint.org/docs/latest/rules/no-loop-func)                                                          | ✅                                                     | 🚫  |
| [`no-loss-of-precision` <a id="summary-no-loss-of-precision"></a>](https://eslint.org/docs/latest/rules/no-loss-of-precision)                                  | ✅                                                     | ✅  |
| [`no-magic-numbers` <a id="summary-no-magic-numbers"></a>](https://eslint.org/docs/latest/rules/no-magic-numbers)                                              | 🚫                                                     | 🚫  |
| [`no-misleading-character-class` <a id="summary-no-misleading-character-class"></a>](https://eslint.org/docs/latest/rules/no-misleading-character-class)       | ✅                                                     | ✅  |
| [`no-multi-assign` <a id="summary-no-multi-assign"></a>](https://eslint.org/docs/latest/rules/no-multi-assign)                                                 | ✅                                                     | 🚫  |
| [`no-multi-str` <a id="summary-no-multi-str"></a>](https://eslint.org/docs/latest/rules/no-multi-str)                                                          | ✅                                                     | 🚫  |
| [`no-negated-condition` <a id="summary-no-negated-condition"></a>](https://eslint.org/docs/latest/rules/no-negated-condition)                                  | 🚫                                                     | 🚫  |
| [`no-nested-ternary` <a id="summary-no-nested-ternary"></a>](https://eslint.org/docs/latest/rules/no-nested-ternary)                                           | 🚫                                                     | 🚫  |
| [`no-new` <a id="summary-no-new"></a>](https://eslint.org/docs/latest/rules/no-new)                                                                            | ✅                                                     | 🚫  |
| [`no-new-func` <a id="summary-no-new-func"></a>](https://eslint.org/docs/latest/rules/no-new-func)                                                             | ✅                                                     | 🚫  |
| [`no-new-native-nonconstructor` <a id="summary-no-new-native-nonconstructor"></a>](https://eslint.org/docs/latest/rules/no-new-native-nonconstructor)          | ✅                                                     | ✅  |
| [`no-new-wrappers` <a id="summary-no-new-wrappers"></a>](https://eslint.org/docs/latest/rules/no-new-wrappers)                                                 | ✅                                                     | 🚫  |
| [`no-nonoctal-decimal-escape` <a id="summary-no-nonoctal-decimal-escape"></a>](https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape)                | ✅                                                     | ✅  |
| [`no-obj-calls` <a id="summary-no-obj-calls"></a>](https://eslint.org/docs/latest/rules/no-obj-calls)                                                          | ✅                                                     | ✅  |
| [`no-object-constructor` <a id="summary-no-object-constructor"></a>](https://eslint.org/docs/latest/rules/no-object-constructor)                               | ✅                                                     | 🚫  |
| [`no-octal` <a id="summary-no-octal"></a>](https://eslint.org/docs/latest/rules/no-octal)                                                                      | ✅                                                     | ✅  |
| [`no-octal-escape` <a id="summary-no-octal-escape"></a>](https://eslint.org/docs/latest/rules/no-octal-escape)                                                 | ✅                                                     | 🚫  |
| [`no-param-reassign` <a id="summary-no-param-reassign"></a>](https://eslint.org/docs/latest/rules/no-param-reassign)                                           | ✅                                                     | 🚫  |
| [`no-plusplus` <a id="summary-no-plusplus"></a>](https://eslint.org/docs/latest/rules/no-plusplus)                                                             | 🚫                                                     | 🚫  |
| [`no-promise-executor-return` <a id="summary-no-promise-executor-return"></a>](https://eslint.org/docs/latest/rules/no-promise-executor-return)                | ✅                                                     | 🚫  |
| [`no-proto` <a id="summary-no-proto"></a>](https://eslint.org/docs/latest/rules/no-proto)                                                                      | ✅                                                     | 🚫  |
| [`no-prototype-builtins` <a id="summary-no-prototype-builtins"></a>](https://eslint.org/docs/latest/rules/no-prototype-builtins)                               | ✅                                                     | ✅  |
| [`no-redeclare` <a id="summary-no-redeclare"></a>](https://eslint.org/docs/latest/rules/no-redeclare)                                                          | ✅                                                     | ✅  |
| [`no-regex-spaces` <a id="summary-no-regex-spaces"></a>](https://eslint.org/docs/latest/rules/no-regex-spaces)                                                 | ✅                                                     | ✅  |
| [`no-restricted-exports` <a id="summary-no-restricted-exports"></a>](https://eslint.org/docs/latest/rules/no-restricted-exports)                               | 🚫                                                     | 🚫  |
| [`no-restricted-globals` <a id="summary-no-restricted-globals"></a>](https://eslint.org/docs/latest/rules/no-restricted-globals)                               | ✅                                                     | 🚫  |
| [`no-restricted-imports` <a id="summary-no-restricted-imports"></a>](https://eslint.org/docs/latest/rules/no-restricted-imports)                               | 🚫                                                     | 🚫  |
| [`no-restricted-properties` <a id="summary-no-restricted-properties"></a>](https://eslint.org/docs/latest/rules/no-restricted-properties)                      | 🚫                                                     | 🚫  |
| [`no-restricted-syntax` <a id="summary-no-restricted-syntax"></a>](https://eslint.org/docs/latest/rules/no-restricted-syntax)                                  | 🚫                                                     | 🚫  |
| [`no-return-assign` <a id="summary-no-return-assign"></a>](https://eslint.org/docs/latest/rules/no-return-assign)                                              | ✅                                                     | 🚫  |
| [`no-script-url` <a id="summary-no-script-url"></a>](https://eslint.org/docs/latest/rules/no-script-url)                                                       | ✅                                                     | 🚫  |
| [`no-self-assign` <a id="summary-no-self-assign"></a>](https://eslint.org/docs/latest/rules/no-self-assign)                                                    | ✅                                                     | ✅  |
| [`no-self-compare` <a id="summary-no-self-compare"></a>](https://eslint.org/docs/latest/rules/no-self-compare)                                                 | ✅                                                     | 🚫  |
| [`no-sequences` <a id="summary-no-sequences"></a>](https://eslint.org/docs/latest/rules/no-sequences)                                                          | ✅                                                     | 🚫  |
| [`no-setter-return` <a id="summary-no-setter-return"></a>](https://eslint.org/docs/latest/rules/no-setter-return)                                              | ✅                                                     | ✅  |
| [`no-shadow` <a id="summary-no-shadow"></a>](https://eslint.org/docs/latest/rules/no-shadow)                                                                   | ✅                                                     | 🚫  |
| [`no-shadow-restricted-names` <a id="summary-no-shadow-restricted-names"></a>](https://eslint.org/docs/latest/rules/no-shadow-restricted-names)                | ✅                                                     | ✅  |
| [`no-sparse-arrays` <a id="summary-no-sparse-arrays"></a>](https://eslint.org/docs/latest/rules/no-sparse-arrays)                                              | ✅                                                     | ✅  |
| [`no-template-curly-in-string` <a id="summary-no-template-curly-in-string"></a>](https://eslint.org/docs/latest/rules/no-template-curly-in-string)             | ✅                                                     | 🚫  |
| [`no-ternary` <a id="summary-no-ternary"></a>](https://eslint.org/docs/latest/rules/no-ternary)                                                                | 🚫                                                     | 🚫  |
| [`no-this-before-super` <a id="summary-no-this-before-super"></a>](https://eslint.org/docs/latest/rules/no-this-before-super)                                  | ✅                                                     | ✅  |
| [`no-throw-literal` <a id="summary-no-throw-literal"></a>](https://eslint.org/docs/latest/rules/no-throw-literal)                                              | ✅                                                     | 🚫  |
| [`no-unassigned-vars` <a id="summary-no-unassigned-vars"></a>](https://eslint.org/docs/latest/rules/no-unassigned-vars)                                        | ✅                                                     | 🚫  |
| [`no-undef` <a id="summary-no-undef"></a>](https://eslint.org/docs/latest/rules/no-undef)                                                                      | ✅                                                     | ✅  |
| [`no-undef-init` <a id="summary-no-undef-init"></a>](https://eslint.org/docs/latest/rules/no-undef-init)                                                       | ✅                                                     | 🚫  |
| [`no-undefined` <a id="summary-no-undefined"></a>](https://eslint.org/docs/latest/rules/no-undefined)                                                          | 🚫                                                     | 🚫  |
| [`no-underscore-dangle` <a id="summary-no-underscore-dangle"></a>](https://eslint.org/docs/latest/rules/no-underscore-dangle)                                  | 🚫                                                     | 🚫  |
| [`no-unexpected-multiline` <a id="summary-no-unexpected-multiline"></a>](https://eslint.org/docs/latest/rules/no-unexpected-multiline)                         | 🚫                                                     | ✅  |
| [`no-unmodified-loop-condition` <a id="summary-no-unmodified-loop-condition"></a>](https://eslint.org/docs/latest/rules/no-unmodified-loop-condition)          | ✅                                                     | 🚫  |
| [`no-unneeded-ternary` <a id="summary-no-unneeded-ternary"></a>](https://eslint.org/docs/latest/rules/no-unneeded-ternary)                                     | ✅                                                     | 🚫  |
| [`no-unreachable` <a id="summary-no-unreachable"></a>](https://eslint.org/docs/latest/rules/no-unreachable)                                                    | ✅                                                     | ✅  |
| [`no-unreachable-loop` <a id="summary-no-unreachable-loop"></a>](https://eslint.org/docs/latest/rules/no-unreachable-loop)                                     | ✅                                                     | 🚫  |
| [`no-unsafe-finally` <a id="summary-no-unsafe-finally"></a>](https://eslint.org/docs/latest/rules/no-unsafe-finally)                                           | ✅                                                     | ✅  |
| [`no-unsafe-negation` <a id="summary-no-unsafe-negation"></a>](https://eslint.org/docs/latest/rules/no-unsafe-negation)                                        | ✅ <a href="#rule-no-unsafe-negation">(?)</a>          | ✅  |
| [`no-unsafe-optional-chaining` <a id="summary-no-unsafe-optional-chaining"></a>](https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining)             | ✅ <a href="#rule-no-unsafe-optional-chaining">(?)</a> | ✅  |
| [`no-unused-expressions` <a id="summary-no-unused-expressions"></a>](https://eslint.org/docs/latest/rules/no-unused-expressions)                               | ✅                                                     | 🚫  |
| [`no-unused-labels` <a id="summary-no-unused-labels"></a>](https://eslint.org/docs/latest/rules/no-unused-labels)                                              | ✅                                                     | ✅  |
| [`no-unused-private-class-members` <a id="summary-no-unused-private-class-members"></a>](https://eslint.org/docs/latest/rules/no-unused-private-class-members) | ✅                                                     | ✅  |
| [`no-unused-vars` <a id="summary-no-unused-vars"></a>](https://eslint.org/docs/latest/rules/no-unused-vars)                                                    | ✅ <a href="#rule-no-unused-vars">(?)</a>              | ✅  |
| [`no-use-before-define` <a id="summary-no-use-before-define"></a>](https://eslint.org/docs/latest/rules/no-use-before-define)                                  | 🚫                                                     | 🚫  |
| [`no-useless-assignment` <a id="summary-no-useless-assignment"></a>](https://eslint.org/docs/latest/rules/no-useless-assignment)                               | ✅                                                     | 🚫  |
| [`no-useless-backreference` <a id="summary-no-useless-backreference"></a>](https://eslint.org/docs/latest/rules/no-useless-backreference)                      | ✅                                                     | ✅  |
| [`no-useless-call` <a id="summary-no-useless-call"></a>](https://eslint.org/docs/latest/rules/no-useless-call)                                                 | ✅                                                     | 🚫  |
| [`no-useless-catch` <a id="summary-no-useless-catch"></a>](https://eslint.org/docs/latest/rules/no-useless-catch)                                              | ✅                                                     | ✅  |
| [`no-useless-computed-key` <a id="summary-no-useless-computed-key"></a>](https://eslint.org/docs/latest/rules/no-useless-computed-key)                         | ✅                                                     | 🚫  |
| [`no-useless-concat` <a id="summary-no-useless-concat"></a>](https://eslint.org/docs/latest/rules/no-useless-concat)                                           | ✅                                                     | 🚫  |
| [`no-useless-constructor` <a id="summary-no-useless-constructor"></a>](https://eslint.org/docs/latest/rules/no-useless-constructor)                            | ✅                                                     | 🚫  |
| [`no-useless-escape` <a id="summary-no-useless-escape"></a>](https://eslint.org/docs/latest/rules/no-useless-escape)                                           | ✅                                                     | ✅  |
| [`no-useless-rename` <a id="summary-no-useless-rename"></a>](https://eslint.org/docs/latest/rules/no-useless-rename)                                           | ✅                                                     | 🚫  |
| [`no-useless-return` <a id="summary-no-useless-return"></a>](https://eslint.org/docs/latest/rules/no-useless-return)                                           | ✅                                                     | 🚫  |
| [`no-var` <a id="summary-no-var"></a>](https://eslint.org/docs/latest/rules/no-var)                                                                            | ✅                                                     | 🚫  |
| [`no-void` <a id="summary-no-void"></a>](https://eslint.org/docs/latest/rules/no-void)                                                                         | ✅                                                     | 🚫  |
| [`no-warning-comments` <a id="summary-no-warning-comments"></a>](https://eslint.org/docs/latest/rules/no-warning-comments)                                     | 🚫                                                     | 🚫  |
| [`no-with` <a id="summary-no-with"></a>](https://eslint.org/docs/latest/rules/no-with)                                                                         | ✅                                                     | ✅  |
| [`object-shorthand` <a id="summary-object-shorthand"></a>](https://eslint.org/docs/latest/rules/object-shorthand)                                              | ✅                                                     | 🚫  |
| [`one-var` <a id="summary-one-var"></a>](https://eslint.org/docs/latest/rules/one-var)                                                                         | ✅                                                     | 🚫  |
| [`operator-assignment` <a id="summary-operator-assignment"></a>](https://eslint.org/docs/latest/rules/operator-assignment)                                     | ✅                                                     | 🚫  |
| [`prefer-arrow-callback` <a id="summary-prefer-arrow-callback"></a>](https://eslint.org/docs/latest/rules/prefer-arrow-callback)                               | ✅                                                     | 🚫  |
| [`prefer-const` <a id="summary-prefer-const"></a>](https://eslint.org/docs/latest/rules/prefer-const)                                                          | ✅                                                     | 🚫  |
| [`prefer-destructuring` <a id="summary-prefer-destructuring"></a>](https://eslint.org/docs/latest/rules/prefer-destructuring)                                  | ✅                                                     | 🚫  |
| [`prefer-exponentiation-operator` <a id="summary-prefer-exponentiation-operator"></a>](https://eslint.org/docs/latest/rules/prefer-exponentiation-operator)    | ✅                                                     | 🚫  |
| [`prefer-named-capture-group` <a id="summary-prefer-named-capture-group"></a>](https://eslint.org/docs/latest/rules/prefer-named-capture-group)                | 🚫                                                     | 🚫  |
| [`prefer-numeric-literals` <a id="summary-prefer-numeric-literals"></a>](https://eslint.org/docs/latest/rules/prefer-numeric-literals)                         | ✅                                                     | 🚫  |
| [`prefer-object-has-own` <a id="summary-prefer-object-has-own"></a>](https://eslint.org/docs/latest/rules/prefer-object-has-own)                               | ✅                                                     | 🚫  |
| [`prefer-object-spread` <a id="summary-prefer-object-spread"></a>](https://eslint.org/docs/latest/rules/prefer-object-spread)                                  | ✅                                                     | 🚫  |
| [`prefer-promise-reject-errors` <a id="summary-prefer-promise-reject-errors"></a>](https://eslint.org/docs/latest/rules/prefer-promise-reject-errors)          | ✅                                                     | 🚫  |
| [`prefer-regex-literals` <a id="summary-prefer-regex-literals"></a>](https://eslint.org/docs/latest/rules/prefer-regex-literals)                               | ✅                                                     | 🚫  |
| [`prefer-rest-params` <a id="summary-prefer-rest-params"></a>](https://eslint.org/docs/latest/rules/prefer-rest-params)                                        | ✅                                                     | 🚫  |
| [`prefer-spread` <a id="summary-prefer-spread"></a>](https://eslint.org/docs/latest/rules/prefer-spread)                                                       | ✅                                                     | 🚫  |
| [`prefer-template` <a id="summary-prefer-template"></a>](https://eslint.org/docs/latest/rules/prefer-template)                                                 | 🚫                                                     | 🚫  |
| [`radix` <a id="summary-radix"></a>](https://eslint.org/docs/latest/rules/radix)                                                                               | ✅                                                     | 🚫  |
| [`require-atomic-updates` <a id="summary-require-atomic-updates"></a>](https://eslint.org/docs/latest/rules/require-atomic-updates)                            | ✅                                                     | 🚫  |
| [`require-await` <a id="summary-require-await"></a>](https://eslint.org/docs/latest/rules/require-await)                                                       | 🚫                                                     | 🚫  |
| [`require-unicode-regexp` <a id="summary-require-unicode-regexp"></a>](https://eslint.org/docs/latest/rules/require-unicode-regexp)                            | ✅                                                     | 🚫  |
| [`require-yield` <a id="summary-require-yield"></a>](https://eslint.org/docs/latest/rules/require-yield)                                                       | ✅                                                     | ✅  |
| [`sort-imports` <a id="summary-sort-imports"></a>](https://eslint.org/docs/latest/rules/sort-imports)                                                          | 🚫                                                     | 🚫  |
| [`sort-keys` <a id="summary-sort-keys"></a>](https://eslint.org/docs/latest/rules/sort-keys)                                                                   | 🚫                                                     | 🚫  |
| [`sort-vars` <a id="summary-sort-vars"></a>](https://eslint.org/docs/latest/rules/sort-vars)                                                                   | 🚫                                                     | 🚫  |
| [`strict` <a id="summary-strict"></a>](https://eslint.org/docs/latest/rules/strict)                                                                            | ✅                                                     | 🚫  |
| [`symbol-description` <a id="summary-symbol-description"></a>](https://eslint.org/docs/latest/rules/symbol-description)                                        | ✅                                                     | 🚫  |
| [`unicode-bom` <a id="summary-unicode-bom"></a>](https://eslint.org/docs/latest/rules/unicode-bom)                                                             | ✅                                                     | 🚫  |
| [`use-isnan` <a id="summary-use-isnan"></a>](https://eslint.org/docs/latest/rules/use-isnan)                                                                   | ✅                                                     | ✅  |
| [`valid-typeof` <a id="summary-valid-typeof"></a>](https://eslint.org/docs/latest/rules/valid-typeof)                                                          | ✅                                                     | ✅  |
| [`vars-on-top` <a id="summary-vars-on-top"></a>](https://eslint.org/docs/latest/rules/vars-on-top)                                                             | 🚫                                                     | 🚫  |
| [`yoda` <a id="summary-yoda"></a>](https://eslint.org/docs/latest/rules/yoda)                                                                                  | ✅                                                     | 🚫  |

<table><tr><th colspan="2" align="left"><code>no-cond-assign</code> <a href="#summary-no-cond-assign">⬆️ back to summary table</a> <a id="rule-no-cond-assign"></a></th></tr>
<tr><td><pre><code>[
  "error",
  "always"
]</code></pre></td><td><pre><code>"error"</code></pre></td></tr>
<tr><th colspan="2" align="left"><code>no-empty</code> <a href="#summary-no-empty">⬆️ back to summary table</a> <a id="rule-no-empty"></a></th></tr>
<tr><td><pre><code>[
  "error",
  {
    "allowEmptyCatch": true
  }
]</code></pre></td><td><pre><code>"error"</code></pre></td></tr>
<tr><th colspan="2" align="left"><code>no-extra-boolean-cast</code> <a href="#summary-no-extra-boolean-cast">⬆️ back to summary table</a> <a id="rule-no-extra-boolean-cast"></a></th></tr>
<tr><td><pre><code>[
  "error",
  {
    "enforceForInnerExpressions": true
  }
]</code></pre></td><td><pre><code>"error"</code></pre></td></tr>
<tr><th colspan="2" align="left"><code>no-unsafe-negation</code> <a href="#summary-no-unsafe-negation">⬆️ back to summary table</a> <a id="rule-no-unsafe-negation"></a></th></tr>
<tr><td><pre><code>[
  "error",
  {
    "enforceForOrderingRelations": true
  }
]</code></pre></td><td><pre><code>"error"</code></pre></td></tr>
<tr><th colspan="2" align="left"><code>no-unsafe-optional-chaining</code> <a href="#summary-no-unsafe-optional-chaining">⬆️ back to summary table</a> <a id="rule-no-unsafe-optional-chaining"></a></th></tr>
<tr><td><pre><code>[
  "error",
  {
    "disallowArithmeticOperators": true
  }
]</code></pre></td><td><pre><code>"error"</code></pre></td></tr>
<tr><th colspan="2" align="left"><code>no-unused-vars</code> <a href="#summary-no-unused-vars">⬆️ back to summary table</a> <a id="rule-no-unused-vars"></a></th></tr>
<tr><td><pre><code>[
  "error",
  {
    "ignoreRestSiblings": true
  }
]</code></pre></td><td><pre><code>"error"</code></pre></td></tr></table>
<!-- END eslint -->

## @eslint-community/eslint-comments

Configurations compared:

- **P** – @priver/eslint-config
- **R** –
  [eslint-comments recommended configuration](https://eslint-community.github.io/eslint-plugin-eslint-comments/#%F0%9F%93%96-usage)

<!-- START @eslint-community/eslint-comments -->

| Rule                                                                                                                                                                                                                                        | P   | R   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | --- |
| [`@eslint-community/eslint-comments/disable-enable-pair` <a id="summary-@eslint-community/eslint-comments/disable-enable-pair"></a>](https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/disable-enable-pair.html)       | ✅  | ✅  |
| [`@eslint-community/eslint-comments/no-aggregating-enable` <a id="summary-@eslint-community/eslint-comments/no-aggregating-enable"></a>](https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-aggregating-enable.html) | ✅  | ✅  |
| [`@eslint-community/eslint-comments/no-duplicate-disable` <a id="summary-@eslint-community/eslint-comments/no-duplicate-disable"></a>](https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-duplicate-disable.html)    | ✅  | ✅  |
| [`@eslint-community/eslint-comments/no-restricted-disable` <a id="summary-@eslint-community/eslint-comments/no-restricted-disable"></a>](https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-restricted-disable.html) | 🚫  | 🚫  |
| [`@eslint-community/eslint-comments/no-unlimited-disable` <a id="summary-@eslint-community/eslint-comments/no-unlimited-disable"></a>](https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-unlimited-disable.html)    | ✅  | ✅  |
| [`@eslint-community/eslint-comments/no-unused-disable` <a id="summary-@eslint-community/eslint-comments/no-unused-disable"></a>](https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-unused-disable.html)             | 🚫  | 🚫  |
| [`@eslint-community/eslint-comments/no-unused-enable` <a id="summary-@eslint-community/eslint-comments/no-unused-enable"></a>](https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-unused-enable.html)                | ✅  | ✅  |
| [`@eslint-community/eslint-comments/no-use` <a id="summary-@eslint-community/eslint-comments/no-use"></a>](https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-use.html)                                              | 🚫  | 🚫  |
| [`@eslint-community/eslint-comments/require-description` <a id="summary-@eslint-community/eslint-comments/require-description"></a>](https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/require-description.html)       | ✅  | 🚫  |

<!-- END @eslint-community/eslint-comments -->

## import-x

Configurations compared:

- **P** – @priver/eslint-config
- **R** –
  [recommended](https://github.com/un-ts/eslint-plugin-import-x/blob/master/README.md#configuration-legacy-eslintrc)

<!-- START import-x -->

| Rule                                                                                                                                                                                                                   | P                                                 | R   |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- | --- |
| [`import-x/consistent-type-specifier-style` <a id="summary-import-x/consistent-type-specifier-style"></a>](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.15.2/docs/rules/consistent-type-specifier-style.md) | 🚫                                                | 🚫  |
| [`import-x/default` <a id="summary-import-x/default"></a>](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.15.2/docs/rules/default.md)                                                                         | ✅                                                | ✅  |
| [`import-x/dynamic-import-chunkname` <a id="summary-import-x/dynamic-import-chunkname"></a>](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.15.2/docs/rules/dynamic-import-chunkname.md)                      | 🚫                                                | 🚫  |
| [`import-x/export` <a id="summary-import-x/export"></a>](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.15.2/docs/rules/export.md)                                                                            | ✅                                                | ✅  |
| [`import-x/exports-last` <a id="summary-import-x/exports-last"></a>](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.15.2/docs/rules/exports-last.md)                                                          | 🚫                                                | 🚫  |
| [`import-x/extensions` <a id="summary-import-x/extensions"></a>](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.15.2/docs/rules/extensions.md)                                                                | ✅                                                | 🚫  |
| [`import-x/first` <a id="summary-import-x/first"></a>](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.15.2/docs/rules/first.md)                                                                               | ✅                                                | 🚫  |
| [`import-x/group-exports` <a id="summary-import-x/group-exports"></a>](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.15.2/docs/rules/group-exports.md)                                                       | 🚫                                                | 🚫  |
| [`import-x/max-dependencies` <a id="summary-import-x/max-dependencies"></a>](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.15.2/docs/rules/max-dependencies.md)                                              | 🚫                                                | 🚫  |
| [`import-x/named` <a id="summary-import-x/named"></a>](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.15.2/docs/rules/named.md)                                                                               | ✅                                                | ✅  |
| [`import-x/namespace` <a id="summary-import-x/namespace"></a>](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.15.2/docs/rules/namespace.md)                                                                   | ✅                                                | ✅  |
| [`import-x/newline-after-import` <a id="summary-import-x/newline-after-import"></a>](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.15.2/docs/rules/newline-after-import.md)                                  | 🚫                                                | 🚫  |
| [`import-x/no-absolute-path` <a id="summary-import-x/no-absolute-path"></a>](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.15.2/docs/rules/no-absolute-path.md)                                              | ✅                                                | 🚫  |
| [`import-x/no-amd` <a id="summary-import-x/no-amd"></a>](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.15.2/docs/rules/no-amd.md)                                                                            | ✅                                                | 🚫  |
| [`import-x/no-anonymous-default-export` <a id="summary-import-x/no-anonymous-default-export"></a>](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.15.2/docs/rules/no-anonymous-default-export.md)             | 🚫                                                | 🚫  |
| [`import-x/no-commonjs` <a id="summary-import-x/no-commonjs"></a>](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.15.2/docs/rules/no-commonjs.md)                                                             | 🚫                                                | 🚫  |
| [`import-x/no-cycle` <a id="summary-import-x/no-cycle"></a>](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.15.2/docs/rules/no-cycle.md)                                                                      | ✅                                                | 🚫  |
| [`import-x/no-default-export` <a id="summary-import-x/no-default-export"></a>](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.15.2/docs/rules/no-default-export.md)                                           | 🚫                                                | 🚫  |
| [`import-x/no-deprecated` <a id="summary-import-x/no-deprecated"></a>](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.15.2/docs/rules/no-deprecated.md)                                                       | ⚠️                                                | 🚫  |
| [`import-x/no-duplicates` <a id="summary-import-x/no-duplicates"></a>](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.15.2/docs/rules/no-duplicates.md)                                                       | ✅ <a href="#rule-import-x/no-duplicates">(?)</a> | ⚠️  |
| [`import-x/no-dynamic-require` <a id="summary-import-x/no-dynamic-require"></a>](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.15.2/docs/rules/no-dynamic-require.md)                                        | ✅                                                | 🚫  |
| [`import-x/no-empty-named-blocks` <a id="summary-import-x/no-empty-named-blocks"></a>](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.15.2/docs/rules/no-empty-named-blocks.md)                               | ✅                                                | 🚫  |
| [`import-x/no-extraneous-dependencies` <a id="summary-import-x/no-extraneous-dependencies"></a>](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.15.2/docs/rules/no-extraneous-dependencies.md)                | ✅                                                | 🚫  |
| [`import-x/no-import-module-exports` <a id="summary-import-x/no-import-module-exports"></a>](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.15.2/docs/rules/no-import-module-exports.md)                      | ✅                                                | 🚫  |
| [`import-x/no-internal-modules` <a id="summary-import-x/no-internal-modules"></a>](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.15.2/docs/rules/no-internal-modules.md)                                     | 🚫                                                | 🚫  |
| [`import-x/no-mutable-exports` <a id="summary-import-x/no-mutable-exports"></a>](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.15.2/docs/rules/no-mutable-exports.md)                                        | ✅                                                | 🚫  |
| [`import-x/no-named-as-default` <a id="summary-import-x/no-named-as-default"></a>](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.15.2/docs/rules/no-named-as-default.md)                                     | ✅                                                | ⚠️  |
| [`import-x/no-named-as-default-member` <a id="summary-import-x/no-named-as-default-member"></a>](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.15.2/docs/rules/no-named-as-default-member.md)                | ✅                                                | ⚠️  |
| [`import-x/no-named-default` <a id="summary-import-x/no-named-default"></a>](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.15.2/docs/rules/no-named-default.md)                                              | ✅                                                | 🚫  |
| [`import-x/no-named-export` <a id="summary-import-x/no-named-export"></a>](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.15.2/docs/rules/no-named-export.md)                                                 | 🚫                                                | 🚫  |
| [`import-x/no-namespace` <a id="summary-import-x/no-namespace"></a>](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.15.2/docs/rules/no-namespace.md)                                                          | 🚫                                                | 🚫  |
| [`import-x/no-nodejs-modules` <a id="summary-import-x/no-nodejs-modules"></a>](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.15.2/docs/rules/no-nodejs-modules.md)                                           | 🚫                                                | 🚫  |
| [`import-x/no-relative-packages` <a id="summary-import-x/no-relative-packages"></a>](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.15.2/docs/rules/no-relative-packages.md)                                  | 🚫                                                | 🚫  |
| [`import-x/no-relative-parent-imports` <a id="summary-import-x/no-relative-parent-imports"></a>](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.15.2/docs/rules/no-relative-parent-imports.md)                | 🚫                                                | 🚫  |
| [`import-x/no-rename-default` <a id="summary-import-x/no-rename-default"></a>](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.15.2/docs/rules/no-rename-default.md)                                           | 🚫                                                | 🚫  |
| [`import-x/no-restricted-paths` <a id="summary-import-x/no-restricted-paths"></a>](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.15.2/docs/rules/no-restricted-paths.md)                                     | 🚫                                                | 🚫  |
| [`import-x/no-self-import` <a id="summary-import-x/no-self-import"></a>](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.15.2/docs/rules/no-self-import.md)                                                    | ✅                                                | 🚫  |
| [`import-x/no-unassigned-import` <a id="summary-import-x/no-unassigned-import"></a>](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.15.2/docs/rules/no-unassigned-import.md)                                  | 🚫                                                | 🚫  |
| [`import-x/no-unresolved` <a id="summary-import-x/no-unresolved"></a>](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.15.2/docs/rules/no-unresolved.md)                                                       | ✅                                                | ✅  |
| [`import-x/no-unused-modules` <a id="summary-import-x/no-unused-modules"></a>](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.15.2/docs/rules/no-unused-modules.md)                                           | 🚫                                                | 🚫  |
| [`import-x/no-useless-path-segments` <a id="summary-import-x/no-useless-path-segments"></a>](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.15.2/docs/rules/no-useless-path-segments.md)                      | ✅                                                | 🚫  |
| [`import-x/no-webpack-loader-syntax` <a id="summary-import-x/no-webpack-loader-syntax"></a>](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.15.2/docs/rules/no-webpack-loader-syntax.md)                      | ✅                                                | 🚫  |
| [`import-x/order` <a id="summary-import-x/order"></a>](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.15.2/docs/rules/order.md)                                                                               | 🚫                                                | 🚫  |
| [`import-x/prefer-default-export` <a id="summary-import-x/prefer-default-export"></a>](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.15.2/docs/rules/prefer-default-export.md)                               | 🚫                                                | 🚫  |
| [`import-x/unambiguous` <a id="summary-import-x/unambiguous"></a>](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.15.2/docs/rules/unambiguous.md)                                                             | 🚫                                                | 🚫  |

<table><tr><th colspan="2" align="left"><code>import-x/no-duplicates</code> <a href="#summary-import-x/no-duplicates">⬆️ back to summary table</a> <a id="rule-import-x/no-duplicates"></a></th></tr>
<tr><td><pre><code>[
  "error",
  {
    "prefer-inline": true
  }
]</code></pre></td><td><pre><code>"warn"</code></pre></td></tr></table>
<!-- END import-x -->

## unicorn

Configurations compared:

- **P** – @priver/eslint-config
- **R** –
  [recommended](https://github.com/sindresorhus/eslint-plugin-unicorn?tab=readme-ov-file#recommended-config)

<!-- START unicorn -->

| Rule                                                                                                                                                                                                                                               | P                                                         | R   |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | --- |
| [`unicorn/better-regex` <a id="summary-unicorn/better-regex"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/better-regex.md)                                                                                  | 🚫                                                        | 🚫  |
| [`unicorn/catch-error-name` <a id="summary-unicorn/catch-error-name"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/catch-error-name.md)                                                                      | ✅                                                        | ✅  |
| [`unicorn/consistent-assert` <a id="summary-unicorn/consistent-assert"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/consistent-assert.md)                                                                   | ✅                                                        | ✅  |
| [`unicorn/consistent-date-clone` <a id="summary-unicorn/consistent-date-clone"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/consistent-date-clone.md)                                                       | ✅                                                        | ✅  |
| [`unicorn/consistent-destructuring` <a id="summary-unicorn/consistent-destructuring"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/consistent-destructuring.md)                                              | ✅                                                        | 🚫  |
| [`unicorn/consistent-empty-array-spread` <a id="summary-unicorn/consistent-empty-array-spread"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/consistent-empty-array-spread.md)                               | ✅                                                        | ✅  |
| [`unicorn/consistent-existence-index-check` <a id="summary-unicorn/consistent-existence-index-check"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/consistent-existence-index-check.md)                      | ✅                                                        | ✅  |
| [`unicorn/consistent-function-scoping` <a id="summary-unicorn/consistent-function-scoping"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/consistent-function-scoping.md)                                     | ✅                                                        | ✅  |
| [`unicorn/custom-error-definition` <a id="summary-unicorn/custom-error-definition"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/custom-error-definition.md)                                                 | ✅                                                        | 🚫  |
| [`unicorn/empty-brace-spaces` <a id="summary-unicorn/empty-brace-spaces"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/empty-brace-spaces.md)                                                                | 🚫                                                        | ✅  |
| [`unicorn/error-message` <a id="summary-unicorn/error-message"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/error-message.md)                                                                               | ✅                                                        | ✅  |
| [`unicorn/escape-case` <a id="summary-unicorn/escape-case"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/escape-case.md)                                                                                     | ✅                                                        | ✅  |
| [`unicorn/expiring-todo-comments` <a id="summary-unicorn/expiring-todo-comments"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/expiring-todo-comments.md)                                                    | ⚠️ <a href="#rule-unicorn/expiring-todo-comments">(?)</a> | ✅  |
| [`unicorn/explicit-length-check` <a id="summary-unicorn/explicit-length-check"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/explicit-length-check.md)                                                       | ✅                                                        | ✅  |
| [`unicorn/filename-case` <a id="summary-unicorn/filename-case"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/filename-case.md)                                                                               | ✅                                                        | ✅  |
| [`unicorn/import-style` <a id="summary-unicorn/import-style"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/import-style.md)                                                                                  | ✅ <a href="#rule-unicorn/import-style">(?)</a>           | ✅  |
| [`unicorn/new-for-builtins` <a id="summary-unicorn/new-for-builtins"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/new-for-builtins.md)                                                                      | ✅                                                        | ✅  |
| [`unicorn/no-abusive-eslint-disable` <a id="summary-unicorn/no-abusive-eslint-disable"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/no-abusive-eslint-disable.md)                                           | 🚫                                                        | ✅  |
| [`unicorn/no-accessor-recursion` <a id="summary-unicorn/no-accessor-recursion"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/no-accessor-recursion.md)                                                       | ✅                                                        | ✅  |
| [`unicorn/no-anonymous-default-export` <a id="summary-unicorn/no-anonymous-default-export"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/no-anonymous-default-export.md)                                     | ✅                                                        | ✅  |
| [`unicorn/no-array-callback-reference` <a id="summary-unicorn/no-array-callback-reference"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/no-array-callback-reference.md)                                     | ✅                                                        | ✅  |
| [`unicorn/no-array-for-each` <a id="summary-unicorn/no-array-for-each"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/no-array-for-each.md)                                                                   | ✅                                                        | ✅  |
| [`unicorn/no-array-method-this-argument` <a id="summary-unicorn/no-array-method-this-argument"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/no-array-method-this-argument.md)                               | ✅                                                        | ✅  |
| [`unicorn/no-array-reduce` <a id="summary-unicorn/no-array-reduce"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/no-array-reduce.md)                                                                         | ✅                                                        | ✅  |
| [`unicorn/no-await-expression-member` <a id="summary-unicorn/no-await-expression-member"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/no-await-expression-member.md)                                        | ✅                                                        | ✅  |
| [`unicorn/no-await-in-promise-methods` <a id="summary-unicorn/no-await-in-promise-methods"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/no-await-in-promise-methods.md)                                     | ✅                                                        | ✅  |
| [`unicorn/no-console-spaces` <a id="summary-unicorn/no-console-spaces"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/no-console-spaces.md)                                                                   | ✅                                                        | ✅  |
| [`unicorn/no-document-cookie` <a id="summary-unicorn/no-document-cookie"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/no-document-cookie.md)                                                                | ✅                                                        | ✅  |
| [`unicorn/no-empty-file` <a id="summary-unicorn/no-empty-file"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/no-empty-file.md)                                                                               | ✅                                                        | ✅  |
| [`unicorn/no-for-loop` <a id="summary-unicorn/no-for-loop"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/no-for-loop.md)                                                                                     | ✅                                                        | ✅  |
| [`unicorn/no-hex-escape` <a id="summary-unicorn/no-hex-escape"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/no-hex-escape.md)                                                                               | ✅                                                        | ✅  |
| [`unicorn/no-instanceof-builtins` <a id="summary-unicorn/no-instanceof-builtins"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/no-instanceof-builtins.md)                                                    | ✅                                                        | ✅  |
| [`unicorn/no-invalid-fetch-options` <a id="summary-unicorn/no-invalid-fetch-options"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/no-invalid-fetch-options.md)                                              | ✅                                                        | ✅  |
| [`unicorn/no-invalid-remove-event-listener` <a id="summary-unicorn/no-invalid-remove-event-listener"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/no-invalid-remove-event-listener.md)                      | ✅                                                        | ✅  |
| [`unicorn/no-keyword-prefix` <a id="summary-unicorn/no-keyword-prefix"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/no-keyword-prefix.md)                                                                   | 🚫                                                        | 🚫  |
| [`unicorn/no-lonely-if` <a id="summary-unicorn/no-lonely-if"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/no-lonely-if.md)                                                                                  | ✅                                                        | ✅  |
| [`unicorn/no-magic-array-flat-depth` <a id="summary-unicorn/no-magic-array-flat-depth"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/no-magic-array-flat-depth.md)                                           | ✅                                                        | ✅  |
| [`unicorn/no-named-default` <a id="summary-unicorn/no-named-default"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/no-named-default.md)                                                                      | 🚫                                                        | ✅  |
| [`unicorn/no-negated-condition` <a id="summary-unicorn/no-negated-condition"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/no-negated-condition.md)                                                          | ✅                                                        | ✅  |
| [`unicorn/no-negation-in-equality-check` <a id="summary-unicorn/no-negation-in-equality-check"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/no-negation-in-equality-check.md)                               | ✅                                                        | ✅  |
| [`unicorn/no-nested-ternary` <a id="summary-unicorn/no-nested-ternary"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/no-nested-ternary.md)                                                                   | 🚫                                                        | ✅  |
| [`unicorn/no-new-array` <a id="summary-unicorn/no-new-array"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/no-new-array.md)                                                                                  | ✅                                                        | ✅  |
| [`unicorn/no-new-buffer` <a id="summary-unicorn/no-new-buffer"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/no-new-buffer.md)                                                                               | ✅                                                        | ✅  |
| [`unicorn/no-null` <a id="summary-unicorn/no-null"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/no-null.md)                                                                                                 | 🚫                                                        | ✅  |
| [`unicorn/no-object-as-default-parameter` <a id="summary-unicorn/no-object-as-default-parameter"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/no-object-as-default-parameter.md)                            | ✅                                                        | ✅  |
| [`unicorn/no-process-exit` <a id="summary-unicorn/no-process-exit"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/no-process-exit.md)                                                                         | ✅                                                        | ✅  |
| [`unicorn/no-single-promise-in-promise-methods` <a id="summary-unicorn/no-single-promise-in-promise-methods"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/no-single-promise-in-promise-methods.md)          | ✅                                                        | ✅  |
| [`unicorn/no-static-only-class` <a id="summary-unicorn/no-static-only-class"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/no-static-only-class.md)                                                          | ✅                                                        | ✅  |
| [`unicorn/no-thenable` <a id="summary-unicorn/no-thenable"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/no-thenable.md)                                                                                     | ✅                                                        | ✅  |
| [`unicorn/no-this-assignment` <a id="summary-unicorn/no-this-assignment"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/no-this-assignment.md)                                                                | ✅                                                        | ✅  |
| [`unicorn/no-typeof-undefined` <a id="summary-unicorn/no-typeof-undefined"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/no-typeof-undefined.md)                                                             | ✅                                                        | ✅  |
| [`unicorn/no-unnecessary-array-flat-depth` <a id="summary-unicorn/no-unnecessary-array-flat-depth"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/no-unnecessary-array-flat-depth.md)                         | ✅                                                        | ✅  |
| [`unicorn/no-unnecessary-array-splice-count` <a id="summary-unicorn/no-unnecessary-array-splice-count"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/no-unnecessary-array-splice-count.md)                   | ✅                                                        | ✅  |
| [`unicorn/no-unnecessary-await` <a id="summary-unicorn/no-unnecessary-await"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/no-unnecessary-await.md)                                                          | ✅                                                        | ✅  |
| [`unicorn/no-unnecessary-polyfills` <a id="summary-unicorn/no-unnecessary-polyfills"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/no-unnecessary-polyfills.md)                                              | ✅                                                        | ✅  |
| [`unicorn/no-unnecessary-slice-end` <a id="summary-unicorn/no-unnecessary-slice-end"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/no-unnecessary-slice-end.md)                                              | ✅                                                        | ✅  |
| [`unicorn/no-unreadable-array-destructuring` <a id="summary-unicorn/no-unreadable-array-destructuring"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/no-unreadable-array-destructuring.md)                   | ✅                                                        | ✅  |
| [`unicorn/no-unreadable-iife` <a id="summary-unicorn/no-unreadable-iife"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/no-unreadable-iife.md)                                                                | ✅                                                        | ✅  |
| [`unicorn/no-unused-properties` <a id="summary-unicorn/no-unused-properties"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/no-unused-properties.md)                                                          | 🚫                                                        | 🚫  |
| [`unicorn/no-useless-fallback-in-spread` <a id="summary-unicorn/no-useless-fallback-in-spread"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/no-useless-fallback-in-spread.md)                               | ✅                                                        | ✅  |
| [`unicorn/no-useless-length-check` <a id="summary-unicorn/no-useless-length-check"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/no-useless-length-check.md)                                                 | ✅                                                        | ✅  |
| [`unicorn/no-useless-promise-resolve-reject` <a id="summary-unicorn/no-useless-promise-resolve-reject"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/no-useless-promise-resolve-reject.md)                   | ✅                                                        | ✅  |
| [`unicorn/no-useless-spread` <a id="summary-unicorn/no-useless-spread"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/no-useless-spread.md)                                                                   | ✅                                                        | ✅  |
| [`unicorn/no-useless-switch-case` <a id="summary-unicorn/no-useless-switch-case"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/no-useless-switch-case.md)                                                    | ✅                                                        | ✅  |
| [`unicorn/no-useless-undefined` <a id="summary-unicorn/no-useless-undefined"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/no-useless-undefined.md)                                                          | ✅                                                        | ✅  |
| [`unicorn/no-zero-fractions` <a id="summary-unicorn/no-zero-fractions"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/no-zero-fractions.md)                                                                   | ✅                                                        | ✅  |
| [`unicorn/number-literal-case` <a id="summary-unicorn/number-literal-case"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/number-literal-case.md)                                                             | 🚫                                                        | ✅  |
| [`unicorn/numeric-separators-style` <a id="summary-unicorn/numeric-separators-style"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/numeric-separators-style.md)                                              | ✅                                                        | ✅  |
| [`unicorn/prefer-add-event-listener` <a id="summary-unicorn/prefer-add-event-listener"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-add-event-listener.md)                                           | ✅                                                        | ✅  |
| [`unicorn/prefer-array-find` <a id="summary-unicorn/prefer-array-find"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-array-find.md)                                                                   | ✅                                                        | ✅  |
| [`unicorn/prefer-array-flat` <a id="summary-unicorn/prefer-array-flat"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-array-flat.md)                                                                   | ✅                                                        | ✅  |
| [`unicorn/prefer-array-flat-map` <a id="summary-unicorn/prefer-array-flat-map"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-array-flat-map.md)                                                       | ✅                                                        | ✅  |
| [`unicorn/prefer-array-index-of` <a id="summary-unicorn/prefer-array-index-of"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-array-index-of.md)                                                       | ✅                                                        | ✅  |
| [`unicorn/prefer-array-some` <a id="summary-unicorn/prefer-array-some"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-array-some.md)                                                                   | ✅                                                        | ✅  |
| [`unicorn/prefer-at` <a id="summary-unicorn/prefer-at"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-at.md)                                                                                           | ✅                                                        | ✅  |
| [`unicorn/prefer-blob-reading-methods` <a id="summary-unicorn/prefer-blob-reading-methods"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-blob-reading-methods.md)                                     | ✅                                                        | ✅  |
| [`unicorn/prefer-code-point` <a id="summary-unicorn/prefer-code-point"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-code-point.md)                                                                   | ✅                                                        | ✅  |
| [`unicorn/prefer-date-now` <a id="summary-unicorn/prefer-date-now"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-date-now.md)                                                                         | ✅                                                        | ✅  |
| [`unicorn/prefer-default-parameters` <a id="summary-unicorn/prefer-default-parameters"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-default-parameters.md)                                           | ✅                                                        | ✅  |
| [`unicorn/prefer-dom-node-append` <a id="summary-unicorn/prefer-dom-node-append"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-dom-node-append.md)                                                    | ✅                                                        | ✅  |
| [`unicorn/prefer-dom-node-dataset` <a id="summary-unicorn/prefer-dom-node-dataset"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-dom-node-dataset.md)                                                 | ✅                                                        | ✅  |
| [`unicorn/prefer-dom-node-remove` <a id="summary-unicorn/prefer-dom-node-remove"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-dom-node-remove.md)                                                    | ✅                                                        | ✅  |
| [`unicorn/prefer-dom-node-text-content` <a id="summary-unicorn/prefer-dom-node-text-content"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-dom-node-text-content.md)                                  | ✅                                                        | ✅  |
| [`unicorn/prefer-event-target` <a id="summary-unicorn/prefer-event-target"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-event-target.md)                                                             | ✅                                                        | ✅  |
| [`unicorn/prefer-export-from` <a id="summary-unicorn/prefer-export-from"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-export-from.md)                                                                | ✅                                                        | ✅  |
| [`unicorn/prefer-global-this` <a id="summary-unicorn/prefer-global-this"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-global-this.md)                                                                | ✅                                                        | ✅  |
| [`unicorn/prefer-import-meta-properties` <a id="summary-unicorn/prefer-import-meta-properties"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-import-meta-properties.md)                               | ✅                                                        | 🚫  |
| [`unicorn/prefer-includes` <a id="summary-unicorn/prefer-includes"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-includes.md)                                                                         | ✅                                                        | ✅  |
| [`unicorn/prefer-json-parse-buffer` <a id="summary-unicorn/prefer-json-parse-buffer"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-json-parse-buffer.md)                                              | 🚫                                                        | 🚫  |
| [`unicorn/prefer-keyboard-event-key` <a id="summary-unicorn/prefer-keyboard-event-key"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-keyboard-event-key.md)                                           | ✅                                                        | ✅  |
| [`unicorn/prefer-logical-operator-over-ternary` <a id="summary-unicorn/prefer-logical-operator-over-ternary"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-logical-operator-over-ternary.md)          | ✅                                                        | ✅  |
| [`unicorn/prefer-math-min-max` <a id="summary-unicorn/prefer-math-min-max"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-math-min-max.md)                                                             | ✅                                                        | ✅  |
| [`unicorn/prefer-math-trunc` <a id="summary-unicorn/prefer-math-trunc"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-math-trunc.md)                                                                   | ✅                                                        | ✅  |
| [`unicorn/prefer-modern-dom-apis` <a id="summary-unicorn/prefer-modern-dom-apis"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-modern-dom-apis.md)                                                    | ✅                                                        | ✅  |
| [`unicorn/prefer-modern-math-apis` <a id="summary-unicorn/prefer-modern-math-apis"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-modern-math-apis.md)                                                 | ✅                                                        | ✅  |
| [`unicorn/prefer-module` <a id="summary-unicorn/prefer-module"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-module.md)                                                                               | ✅                                                        | ✅  |
| [`unicorn/prefer-native-coercion-functions` <a id="summary-unicorn/prefer-native-coercion-functions"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-native-coercion-functions.md)                      | ✅                                                        | ✅  |
| [`unicorn/prefer-negative-index` <a id="summary-unicorn/prefer-negative-index"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-negative-index.md)                                                       | ✅                                                        | ✅  |
| [`unicorn/prefer-node-protocol` <a id="summary-unicorn/prefer-node-protocol"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-node-protocol.md)                                                          | 🚫                                                        | ✅  |
| [`unicorn/prefer-number-properties` <a id="summary-unicorn/prefer-number-properties"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-number-properties.md)                                              | ✅                                                        | ✅  |
| [`unicorn/prefer-object-from-entries` <a id="summary-unicorn/prefer-object-from-entries"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-object-from-entries.md)                                        | ✅                                                        | ✅  |
| [`unicorn/prefer-optional-catch-binding` <a id="summary-unicorn/prefer-optional-catch-binding"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-optional-catch-binding.md)                               | ✅                                                        | ✅  |
| [`unicorn/prefer-prototype-methods` <a id="summary-unicorn/prefer-prototype-methods"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-prototype-methods.md)                                              | ✅                                                        | ✅  |
| [`unicorn/prefer-query-selector` <a id="summary-unicorn/prefer-query-selector"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-query-selector.md)                                                       | ✅                                                        | ✅  |
| [`unicorn/prefer-reflect-apply` <a id="summary-unicorn/prefer-reflect-apply"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-reflect-apply.md)                                                          | ✅                                                        | ✅  |
| [`unicorn/prefer-regexp-test` <a id="summary-unicorn/prefer-regexp-test"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-regexp-test.md)                                                                | ✅                                                        | ✅  |
| [`unicorn/prefer-set-has` <a id="summary-unicorn/prefer-set-has"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-set-has.md)                                                                            | ✅                                                        | ✅  |
| [`unicorn/prefer-set-size` <a id="summary-unicorn/prefer-set-size"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-set-size.md)                                                                         | ✅                                                        | ✅  |
| [`unicorn/prefer-single-call` <a id="summary-unicorn/prefer-single-call"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-single-call.md)                                                                | ✅                                                        | ✅  |
| [`unicorn/prefer-spread` <a id="summary-unicorn/prefer-spread"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-spread.md)                                                                               | ✅                                                        | ✅  |
| [`unicorn/prefer-string-raw` <a id="summary-unicorn/prefer-string-raw"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-string-raw.md)                                                                   | ✅                                                        | ✅  |
| [`unicorn/prefer-string-replace-all` <a id="summary-unicorn/prefer-string-replace-all"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-string-replace-all.md)                                           | ✅                                                        | ✅  |
| [`unicorn/prefer-string-slice` <a id="summary-unicorn/prefer-string-slice"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-string-slice.md)                                                             | ✅                                                        | ✅  |
| [`unicorn/prefer-string-starts-ends-with` <a id="summary-unicorn/prefer-string-starts-ends-with"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-string-starts-ends-with.md)                            | ✅                                                        | ✅  |
| [`unicorn/prefer-string-trim-start-end` <a id="summary-unicorn/prefer-string-trim-start-end"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-string-trim-start-end.md)                                  | ✅                                                        | ✅  |
| [`unicorn/prefer-structured-clone` <a id="summary-unicorn/prefer-structured-clone"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-structured-clone.md)                                                 | ✅                                                        | ✅  |
| [`unicorn/prefer-switch` <a id="summary-unicorn/prefer-switch"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-switch.md)                                                                               | ✅                                                        | ✅  |
| [`unicorn/prefer-ternary` <a id="summary-unicorn/prefer-ternary"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-ternary.md)                                                                            | ✅                                                        | ✅  |
| [`unicorn/prefer-top-level-await` <a id="summary-unicorn/prefer-top-level-await"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-top-level-await.md)                                                    | ✅                                                        | ✅  |
| [`unicorn/prefer-type-error` <a id="summary-unicorn/prefer-type-error"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prefer-type-error.md)                                                                   | ✅                                                        | ✅  |
| [`unicorn/prevent-abbreviations` <a id="summary-unicorn/prevent-abbreviations"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/prevent-abbreviations.md)                                                       | 🚫                                                        | ✅  |
| [`unicorn/relative-url-style` <a id="summary-unicorn/relative-url-style"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/relative-url-style.md)                                                                | ✅                                                        | ✅  |
| [`unicorn/require-array-join-separator` <a id="summary-unicorn/require-array-join-separator"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/require-array-join-separator.md)                                  | ✅                                                        | ✅  |
| [`unicorn/require-number-to-fixed-digits-argument` <a id="summary-unicorn/require-number-to-fixed-digits-argument"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/require-number-to-fixed-digits-argument.md) | ✅                                                        | ✅  |
| [`unicorn/require-post-message-target-origin` <a id="summary-unicorn/require-post-message-target-origin"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/require-post-message-target-origin.md)                | 🚫                                                        | 🚫  |
| [`unicorn/string-content` <a id="summary-unicorn/string-content"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/string-content.md)                                                                            | 🚫                                                        | 🚫  |
| [`unicorn/switch-case-braces` <a id="summary-unicorn/switch-case-braces"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/switch-case-braces.md)                                                                | ✅ <a href="#rule-unicorn/switch-case-braces">(?)</a>     | ✅  |
| [`unicorn/template-indent` <a id="summary-unicorn/template-indent"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/template-indent.md)                                                                         | 🚫                                                        | ✅  |
| [`unicorn/text-encoding-identifier-case` <a id="summary-unicorn/text-encoding-identifier-case"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/text-encoding-identifier-case.md)                               | ✅                                                        | ✅  |
| [`unicorn/throw-new-error` <a id="summary-unicorn/throw-new-error"></a>](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v59.0.1/docs/rules/throw-new-error.md)                                                                         | ✅                                                        | ✅  |

<table><tr><th colspan="2" align="left"><code>unicorn/expiring-todo-comments</code> <a href="#summary-unicorn/expiring-todo-comments">⬆️ back to summary table</a> <a id="rule-unicorn/expiring-todo-comments"></a></th></tr>
<tr><td><pre><code>[
  "warn",
  {
    "allowWarningComments": false
  }
]</code></pre></td><td><pre><code>"error"</code></pre></td></tr>
<tr><th colspan="2" align="left"><code>unicorn/import-style</code> <a href="#summary-unicorn/import-style">⬆️ back to summary table</a> <a id="rule-unicorn/import-style"></a></th></tr>
<tr><td><pre><code>[
  "error",
  {
    "styles": {
      "react": {
        "namespace": true
      }
    }
  }
]</code></pre></td><td><pre><code>"error"</code></pre></td></tr>
<tr><th colspan="2" align="left"><code>unicorn/switch-case-braces</code> <a href="#summary-unicorn/switch-case-braces">⬆️ back to summary table</a> <a id="rule-unicorn/switch-case-braces"></a></th></tr>
<tr><td><pre><code>[
  "error",
  "avoid"
]</code></pre></td><td><pre><code>"error"</code></pre></td></tr></table>
<!-- END unicorn -->

## depend

Configurations compared:

- **P** – @priver/eslint-config
- **R** –
  [flat/recommended](https://github.com/es-tooling/eslint-plugin-depend/blob/main/README.md#usage)

<!-- START depend -->

| Rule                                                                                                                                                                  | P   | R   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | --- |
| [`depend/ban-dependencies` <a id="summary-depend/ban-dependencies"></a>](https://github.com/es-tooling/eslint-plugin-depend/blob/main/docs/rules/ban-dependencies.md) | ✅  | ✅  |

<!-- END depend -->

## compat

Configurations compared:

- **P** – @priver/eslint-config
- **R** –
  [flat/recommended](https://github.com/amilajack/eslint-plugin-compat?tab=readme-ov-file#new-config-eslintconfigmjs)

<!-- START compat -->

| Rule                                                                                                                                     | P   | R   |
| ---------------------------------------------------------------------------------------------------------------------------------------- | --- | --- |
| [`compat/compat` <a id="summary-compat/compat"></a>](https://github.com/amilajack/eslint-plugin-compat/blob/master/docs/rules/compat.md) | ✅  | ✅  |

<!-- END compat -->

## n

Configurations compared:

- **P** – @priver/eslint-config
- **R** –
  [recommended-module](https://github.com/eslint-community/eslint-plugin-n?tab=readme-ov-file#-configs)

<!-- START n -->

| Rule                                                                                                                                                                                 | P   | R   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --- | --- |
| [`n/callback-return` <a id="summary-n/callback-return"></a>](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/callback-return.md)                            | 🚫  | 🚫  |
| [`n/exports-style` <a id="summary-n/exports-style"></a>](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/exports-style.md)                                  | 🚫  | 🚫  |
| [`n/file-extension-in-import` <a id="summary-n/file-extension-in-import"></a>](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/file-extension-in-import.md) | 🚫  | 🚫  |
| [`n/global-require` <a id="summary-n/global-require"></a>](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/global-require.md)                               | 🚫  | 🚫  |
| [`n/handle-callback-err` <a id="summary-n/handle-callback-err"></a>](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/handle-callback-err.md)                | ✅  | 🚫  |
| [`n/hashbang` <a id="summary-n/hashbang"></a>](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/hashbang.md)                                                 | ✅  | ✅  |
| [`n/no-callback-literal` <a id="summary-n/no-callback-literal"></a>](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-callback-literal.md)                | 🚫  | 🚫  |
| [`n/no-deprecated-api` <a id="summary-n/no-deprecated-api"></a>](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-deprecated-api.md)                      | ✅  | ✅  |
| [`n/no-exports-assign` <a id="summary-n/no-exports-assign"></a>](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-exports-assign.md)                      | ✅  | ✅  |
| [`n/no-extraneous-import` <a id="summary-n/no-extraneous-import"></a>](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-extraneous-import.md)             | 🚫  | ✅  |
| [`n/no-extraneous-require` <a id="summary-n/no-extraneous-require"></a>](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-extraneous-require.md)          | 🚫  | ✅  |
| [`n/no-missing-import` <a id="summary-n/no-missing-import"></a>](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-missing-import.md)                      | 🚫  | ✅  |
| [`n/no-missing-require` <a id="summary-n/no-missing-require"></a>](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-missing-require.md)                   | 🚫  | ✅  |
| [`n/no-mixed-requires` <a id="summary-n/no-mixed-requires"></a>](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-mixed-requires.md)                      | 🚫  | 🚫  |
| [`n/no-new-require` <a id="summary-n/no-new-require"></a>](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-new-require.md)                               | 🚫  | 🚫  |
| [`n/no-path-concat` <a id="summary-n/no-path-concat"></a>](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-path-concat.md)                               | ✅  | 🚫  |
| [`n/no-process-env` <a id="summary-n/no-process-env"></a>](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-process-env.md)                               | 🚫  | 🚫  |
| [`n/no-process-exit` <a id="summary-n/no-process-exit"></a>](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-process-exit.md)                            | 🚫  | ✅  |
| [`n/no-restricted-import` <a id="summary-n/no-restricted-import"></a>](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-restricted-import.md)             | 🚫  | 🚫  |
| [`n/no-restricted-require` <a id="summary-n/no-restricted-require"></a>](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-restricted-require.md)          | 🚫  | 🚫  |
| [`n/no-sync` <a id="summary-n/no-sync"></a>](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-sync.md)                                                    | 🚫  | 🚫  |
| [`n/no-top-level-await` <a id="summary-n/no-top-level-await"></a>](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-top-level-await.md)                   | 🚫  | 🚫  |
| [`n/no-unpublished-bin` <a id="summary-n/no-unpublished-bin"></a>](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unpublished-bin.md)                   | ✅  | ✅  |
| [`n/no-unpublished-import` <a id="summary-n/no-unpublished-import"></a>](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unpublished-import.md)          | ✅  | ✅  |
| [`n/no-unpublished-require` <a id="summary-n/no-unpublished-require"></a>](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unpublished-require.md)       | 🚫  | ✅  |
| [`n/prefer-node-protocol` <a id="summary-n/prefer-node-protocol"></a>](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-node-protocol.md)             | ✅  | 🚫  |
| [`n/process-exit-as-throw` <a id="summary-n/process-exit-as-throw"></a>](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/process-exit-as-throw.md)          | ✅  | ✅  |

<!-- END n -->

## @typescript-eslint

Configurations compared:

- **P** – @priver/eslint-config
- **R** – [strict-type-checked](https://typescript-eslint.io/users/configs/#strict-type-checked) +
  [stylistic-type-checked](https://typescript-eslint.io/users/configs/#stylistic-type-checked)

<!-- START @typescript-eslint -->

| Rule                                                                                                                                                                                                                                      | P                                                                         | R   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | --- |
| [`@typescript-eslint/adjacent-overload-signatures` <a id="summary-@typescript-eslint/adjacent-overload-signatures"></a>](https://typescript-eslint.io/rules/adjacent-overload-signatures)                                                 | ✅                                                                        | ✅  |
| [`@typescript-eslint/array-type` <a id="summary-@typescript-eslint/array-type"></a>](https://typescript-eslint.io/rules/array-type)                                                                                                       | ✅ <a href="#rule-@typescript-eslint/array-type">(?)</a>                  | ✅  |
| [`@typescript-eslint/await-thenable` <a id="summary-@typescript-eslint/await-thenable"></a>](https://typescript-eslint.io/rules/await-thenable)                                                                                           | ✅                                                                        | ✅  |
| [`@typescript-eslint/ban-ts-comment` <a id="summary-@typescript-eslint/ban-ts-comment"></a>](https://typescript-eslint.io/rules/ban-ts-comment)                                                                                           | ✅ <a href="#rule-@typescript-eslint/ban-ts-comment">(?)</a>              | ✅  |
| [`@typescript-eslint/ban-tslint-comment` <a id="summary-@typescript-eslint/ban-tslint-comment"></a>](https://typescript-eslint.io/rules/ban-tslint-comment)                                                                               | ✅                                                                        | ✅  |
| [`@typescript-eslint/class-literal-property-style` <a id="summary-@typescript-eslint/class-literal-property-style"></a>](https://typescript-eslint.io/rules/class-literal-property-style)                                                 | ✅                                                                        | ✅  |
| [`@typescript-eslint/class-methods-use-this` <a id="summary-@typescript-eslint/class-methods-use-this"></a>](https://typescript-eslint.io/rules/class-methods-use-this)                                                                   | 🚫                                                                        | 🚫  |
| [`@typescript-eslint/consistent-generic-constructors` <a id="summary-@typescript-eslint/consistent-generic-constructors"></a>](https://typescript-eslint.io/rules/consistent-generic-constructors)                                        | ✅                                                                        | ✅  |
| [`@typescript-eslint/consistent-indexed-object-style` <a id="summary-@typescript-eslint/consistent-indexed-object-style"></a>](https://typescript-eslint.io/rules/consistent-indexed-object-style)                                        | ✅                                                                        | ✅  |
| [`@typescript-eslint/consistent-return` <a id="summary-@typescript-eslint/consistent-return"></a>](https://typescript-eslint.io/rules/consistent-return)                                                                                  | 🚫                                                                        | 🚫  |
| [`@typescript-eslint/consistent-type-assertions` <a id="summary-@typescript-eslint/consistent-type-assertions"></a>](https://typescript-eslint.io/rules/consistent-type-assertions)                                                       | ✅ <a href="#rule-@typescript-eslint/consistent-type-assertions">(?)</a>  | ✅  |
| [`@typescript-eslint/consistent-type-definitions` <a id="summary-@typescript-eslint/consistent-type-definitions"></a>](https://typescript-eslint.io/rules/consistent-type-definitions)                                                    | ✅ <a href="#rule-@typescript-eslint/consistent-type-definitions">(?)</a> | ✅  |
| [`@typescript-eslint/consistent-type-exports` <a id="summary-@typescript-eslint/consistent-type-exports"></a>](https://typescript-eslint.io/rules/consistent-type-exports)                                                                | ✅                                                                        | 🚫  |
| [`@typescript-eslint/consistent-type-imports` <a id="summary-@typescript-eslint/consistent-type-imports"></a>](https://typescript-eslint.io/rules/consistent-type-imports)                                                                | 🚫                                                                        | 🚫  |
| [`@typescript-eslint/default-param-last` <a id="summary-@typescript-eslint/default-param-last"></a>](https://typescript-eslint.io/rules/default-param-last)                                                                               | ✅                                                                        | 🚫  |
| [`@typescript-eslint/dot-notation` <a id="summary-@typescript-eslint/dot-notation"></a>](https://typescript-eslint.io/rules/dot-notation)                                                                                                 | ✅                                                                        | ✅  |
| [`@typescript-eslint/explicit-function-return-type` <a id="summary-@typescript-eslint/explicit-function-return-type"></a>](https://typescript-eslint.io/rules/explicit-function-return-type)                                              | 🚫                                                                        | 🚫  |
| [`@typescript-eslint/explicit-member-accessibility` <a id="summary-@typescript-eslint/explicit-member-accessibility"></a>](https://typescript-eslint.io/rules/explicit-member-accessibility)                                              | ✅                                                                        | 🚫  |
| [`@typescript-eslint/explicit-module-boundary-types` <a id="summary-@typescript-eslint/explicit-module-boundary-types"></a>](https://typescript-eslint.io/rules/explicit-module-boundary-types)                                           | ✅                                                                        | 🚫  |
| [`@typescript-eslint/init-declarations` <a id="summary-@typescript-eslint/init-declarations"></a>](https://typescript-eslint.io/rules/init-declarations)                                                                                  | 🚫                                                                        | 🚫  |
| [`@typescript-eslint/max-params` <a id="summary-@typescript-eslint/max-params"></a>](https://typescript-eslint.io/rules/max-params)                                                                                                       | 🚫                                                                        | 🚫  |
| [`@typescript-eslint/member-ordering` <a id="summary-@typescript-eslint/member-ordering"></a>](https://typescript-eslint.io/rules/member-ordering)                                                                                        | ✅                                                                        | 🚫  |
| [`@typescript-eslint/method-signature-style` <a id="summary-@typescript-eslint/method-signature-style"></a>](https://typescript-eslint.io/rules/method-signature-style)                                                                   | ✅                                                                        | 🚫  |
| [`@typescript-eslint/naming-convention` <a id="summary-@typescript-eslint/naming-convention"></a>](https://typescript-eslint.io/rules/naming-convention)                                                                                  | ✅                                                                        | 🚫  |
| [`@typescript-eslint/no-array-constructor` <a id="summary-@typescript-eslint/no-array-constructor"></a>](https://typescript-eslint.io/rules/no-array-constructor)                                                                         | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-array-delete` <a id="summary-@typescript-eslint/no-array-delete"></a>](https://typescript-eslint.io/rules/no-array-delete)                                                                                        | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-base-to-string` <a id="summary-@typescript-eslint/no-base-to-string"></a>](https://typescript-eslint.io/rules/no-base-to-string)                                                                                  | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-confusing-non-null-assertion` <a id="summary-@typescript-eslint/no-confusing-non-null-assertion"></a>](https://typescript-eslint.io/rules/no-confusing-non-null-assertion)                                        | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-confusing-void-expression` <a id="summary-@typescript-eslint/no-confusing-void-expression"></a>](https://typescript-eslint.io/rules/no-confusing-void-expression)                                                 | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-deprecated` <a id="summary-@typescript-eslint/no-deprecated"></a>](https://typescript-eslint.io/rules/no-deprecated)                                                                                              | ⚠️                                                                        | ✅  |
| [`@typescript-eslint/no-dupe-class-members` <a id="summary-@typescript-eslint/no-dupe-class-members"></a>](https://typescript-eslint.io/rules/no-dupe-class-members)                                                                      | 🚫                                                                        | 🚫  |
| [`@typescript-eslint/no-duplicate-enum-values` <a id="summary-@typescript-eslint/no-duplicate-enum-values"></a>](https://typescript-eslint.io/rules/no-duplicate-enum-values)                                                             | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-duplicate-type-constituents` <a id="summary-@typescript-eslint/no-duplicate-type-constituents"></a>](https://typescript-eslint.io/rules/no-duplicate-type-constituents)                                           | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-dynamic-delete` <a id="summary-@typescript-eslint/no-dynamic-delete"></a>](https://typescript-eslint.io/rules/no-dynamic-delete)                                                                                  | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-empty-function` <a id="summary-@typescript-eslint/no-empty-function"></a>](https://typescript-eslint.io/rules/no-empty-function)                                                                                  | 🚫                                                                        | ✅  |
| [`@typescript-eslint/no-empty-object-type` <a id="summary-@typescript-eslint/no-empty-object-type"></a>](https://typescript-eslint.io/rules/no-empty-object-type)                                                                         | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-explicit-any` <a id="summary-@typescript-eslint/no-explicit-any"></a>](https://typescript-eslint.io/rules/no-explicit-any)                                                                                        | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-extra-non-null-assertion` <a id="summary-@typescript-eslint/no-extra-non-null-assertion"></a>](https://typescript-eslint.io/rules/no-extra-non-null-assertion)                                                    | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-extraneous-class` <a id="summary-@typescript-eslint/no-extraneous-class"></a>](https://typescript-eslint.io/rules/no-extraneous-class)                                                                            | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-floating-promises` <a id="summary-@typescript-eslint/no-floating-promises"></a>](https://typescript-eslint.io/rules/no-floating-promises)                                                                         | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-for-in-array` <a id="summary-@typescript-eslint/no-for-in-array"></a>](https://typescript-eslint.io/rules/no-for-in-array)                                                                                        | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-implied-eval` <a id="summary-@typescript-eslint/no-implied-eval"></a>](https://typescript-eslint.io/rules/no-implied-eval)                                                                                        | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-import-type-side-effects` <a id="summary-@typescript-eslint/no-import-type-side-effects"></a>](https://typescript-eslint.io/rules/no-import-type-side-effects)                                                    | ✅                                                                        | 🚫  |
| [`@typescript-eslint/no-inferrable-types` <a id="summary-@typescript-eslint/no-inferrable-types"></a>](https://typescript-eslint.io/rules/no-inferrable-types)                                                                            | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-invalid-this` <a id="summary-@typescript-eslint/no-invalid-this"></a>](https://typescript-eslint.io/rules/no-invalid-this)                                                                                        | 🚫                                                                        | 🚫  |
| [`@typescript-eslint/no-invalid-void-type` <a id="summary-@typescript-eslint/no-invalid-void-type"></a>](https://typescript-eslint.io/rules/no-invalid-void-type)                                                                         | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-loop-func` <a id="summary-@typescript-eslint/no-loop-func"></a>](https://typescript-eslint.io/rules/no-loop-func)                                                                                                 | ✅                                                                        | 🚫  |
| [`@typescript-eslint/no-magic-numbers` <a id="summary-@typescript-eslint/no-magic-numbers"></a>](https://typescript-eslint.io/rules/no-magic-numbers)                                                                                     | 🚫                                                                        | 🚫  |
| [`@typescript-eslint/no-meaningless-void-operator` <a id="summary-@typescript-eslint/no-meaningless-void-operator"></a>](https://typescript-eslint.io/rules/no-meaningless-void-operator)                                                 | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-misused-new` <a id="summary-@typescript-eslint/no-misused-new"></a>](https://typescript-eslint.io/rules/no-misused-new)                                                                                           | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-misused-promises` <a id="summary-@typescript-eslint/no-misused-promises"></a>](https://typescript-eslint.io/rules/no-misused-promises)                                                                            | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-misused-spread` <a id="summary-@typescript-eslint/no-misused-spread"></a>](https://typescript-eslint.io/rules/no-misused-spread)                                                                                  | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-mixed-enums` <a id="summary-@typescript-eslint/no-mixed-enums"></a>](https://typescript-eslint.io/rules/no-mixed-enums)                                                                                           | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-namespace` <a id="summary-@typescript-eslint/no-namespace"></a>](https://typescript-eslint.io/rules/no-namespace)                                                                                                 | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-non-null-asserted-nullish-coalescing` <a id="summary-@typescript-eslint/no-non-null-asserted-nullish-coalescing"></a>](https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing)                | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-non-null-asserted-optional-chain` <a id="summary-@typescript-eslint/no-non-null-asserted-optional-chain"></a>](https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain)                            | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-non-null-assertion` <a id="summary-@typescript-eslint/no-non-null-assertion"></a>](https://typescript-eslint.io/rules/no-non-null-assertion)                                                                      | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-redeclare` <a id="summary-@typescript-eslint/no-redeclare"></a>](https://typescript-eslint.io/rules/no-redeclare)                                                                                                 | 🚫                                                                        | 🚫  |
| [`@typescript-eslint/no-redundant-type-constituents` <a id="summary-@typescript-eslint/no-redundant-type-constituents"></a>](https://typescript-eslint.io/rules/no-redundant-type-constituents)                                           | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-require-imports` <a id="summary-@typescript-eslint/no-require-imports"></a>](https://typescript-eslint.io/rules/no-require-imports)                                                                               | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-restricted-imports` <a id="summary-@typescript-eslint/no-restricted-imports"></a>](https://typescript-eslint.io/rules/no-restricted-imports)                                                                      | 🚫                                                                        | 🚫  |
| [`@typescript-eslint/no-restricted-types` <a id="summary-@typescript-eslint/no-restricted-types"></a>](https://typescript-eslint.io/rules/no-restricted-types)                                                                            | ✅                                                                        | 🚫  |
| [`@typescript-eslint/no-shadow` <a id="summary-@typescript-eslint/no-shadow"></a>](https://typescript-eslint.io/rules/no-shadow)                                                                                                          | ✅                                                                        | 🚫  |
| [`@typescript-eslint/no-this-alias` <a id="summary-@typescript-eslint/no-this-alias"></a>](https://typescript-eslint.io/rules/no-this-alias)                                                                                              | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-unnecessary-boolean-literal-compare` <a id="summary-@typescript-eslint/no-unnecessary-boolean-literal-compare"></a>](https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare)                   | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-unnecessary-condition` <a id="summary-@typescript-eslint/no-unnecessary-condition"></a>](https://typescript-eslint.io/rules/no-unnecessary-condition)                                                             | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-unnecessary-parameter-property-assignment` <a id="summary-@typescript-eslint/no-unnecessary-parameter-property-assignment"></a>](https://typescript-eslint.io/rules/no-unnecessary-parameter-property-assignment) | 🚫                                                                        | 🚫  |
| [`@typescript-eslint/no-unnecessary-qualifier` <a id="summary-@typescript-eslint/no-unnecessary-qualifier"></a>](https://typescript-eslint.io/rules/no-unnecessary-qualifier)                                                             | 🚫                                                                        | 🚫  |
| [`@typescript-eslint/no-unnecessary-template-expression` <a id="summary-@typescript-eslint/no-unnecessary-template-expression"></a>](https://typescript-eslint.io/rules/no-unnecessary-template-expression)                               | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-unnecessary-type-arguments` <a id="summary-@typescript-eslint/no-unnecessary-type-arguments"></a>](https://typescript-eslint.io/rules/no-unnecessary-type-arguments)                                              | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-unnecessary-type-assertion` <a id="summary-@typescript-eslint/no-unnecessary-type-assertion"></a>](https://typescript-eslint.io/rules/no-unnecessary-type-assertion)                                              | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-unnecessary-type-constraint` <a id="summary-@typescript-eslint/no-unnecessary-type-constraint"></a>](https://typescript-eslint.io/rules/no-unnecessary-type-constraint)                                           | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-unnecessary-type-conversion` <a id="summary-@typescript-eslint/no-unnecessary-type-conversion"></a>](https://typescript-eslint.io/rules/no-unnecessary-type-conversion)                                           | ✅                                                                        | 🚫  |
| [`@typescript-eslint/no-unnecessary-type-parameters` <a id="summary-@typescript-eslint/no-unnecessary-type-parameters"></a>](https://typescript-eslint.io/rules/no-unnecessary-type-parameters)                                           | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-unsafe-argument` <a id="summary-@typescript-eslint/no-unsafe-argument"></a>](https://typescript-eslint.io/rules/no-unsafe-argument)                                                                               | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-unsafe-assignment` <a id="summary-@typescript-eslint/no-unsafe-assignment"></a>](https://typescript-eslint.io/rules/no-unsafe-assignment)                                                                         | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-unsafe-call` <a id="summary-@typescript-eslint/no-unsafe-call"></a>](https://typescript-eslint.io/rules/no-unsafe-call)                                                                                           | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-unsafe-declaration-merging` <a id="summary-@typescript-eslint/no-unsafe-declaration-merging"></a>](https://typescript-eslint.io/rules/no-unsafe-declaration-merging)                                              | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-unsafe-enum-comparison` <a id="summary-@typescript-eslint/no-unsafe-enum-comparison"></a>](https://typescript-eslint.io/rules/no-unsafe-enum-comparison)                                                          | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-unsafe-function-type` <a id="summary-@typescript-eslint/no-unsafe-function-type"></a>](https://typescript-eslint.io/rules/no-unsafe-function-type)                                                                | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-unsafe-member-access` <a id="summary-@typescript-eslint/no-unsafe-member-access"></a>](https://typescript-eslint.io/rules/no-unsafe-member-access)                                                                | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-unsafe-return` <a id="summary-@typescript-eslint/no-unsafe-return"></a>](https://typescript-eslint.io/rules/no-unsafe-return)                                                                                     | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-unsafe-type-assertion` <a id="summary-@typescript-eslint/no-unsafe-type-assertion"></a>](https://typescript-eslint.io/rules/no-unsafe-type-assertion)                                                             | ✅                                                                        | 🚫  |
| [`@typescript-eslint/no-unsafe-unary-minus` <a id="summary-@typescript-eslint/no-unsafe-unary-minus"></a>](https://typescript-eslint.io/rules/no-unsafe-unary-minus)                                                                      | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-unused-expressions` <a id="summary-@typescript-eslint/no-unused-expressions"></a>](https://typescript-eslint.io/rules/no-unused-expressions)                                                                      | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-unused-vars` <a id="summary-@typescript-eslint/no-unused-vars"></a>](https://typescript-eslint.io/rules/no-unused-vars)                                                                                           | 🚫                                                                        | ✅  |
| [`@typescript-eslint/no-use-before-define` <a id="summary-@typescript-eslint/no-use-before-define"></a>](https://typescript-eslint.io/rules/no-use-before-define)                                                                         | 🚫                                                                        | 🚫  |
| [`@typescript-eslint/no-useless-constructor` <a id="summary-@typescript-eslint/no-useless-constructor"></a>](https://typescript-eslint.io/rules/no-useless-constructor)                                                                   | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-useless-empty-export` <a id="summary-@typescript-eslint/no-useless-empty-export"></a>](https://typescript-eslint.io/rules/no-useless-empty-export)                                                                | ✅                                                                        | 🚫  |
| [`@typescript-eslint/no-wrapper-object-types` <a id="summary-@typescript-eslint/no-wrapper-object-types"></a>](https://typescript-eslint.io/rules/no-wrapper-object-types)                                                                | ✅                                                                        | ✅  |
| [`@typescript-eslint/non-nullable-type-assertion-style` <a id="summary-@typescript-eslint/non-nullable-type-assertion-style"></a>](https://typescript-eslint.io/rules/non-nullable-type-assertion-style)                                  | ✅                                                                        | ✅  |
| [`@typescript-eslint/only-throw-error` <a id="summary-@typescript-eslint/only-throw-error"></a>](https://typescript-eslint.io/rules/only-throw-error)                                                                                     | ✅                                                                        | ✅  |
| [`@typescript-eslint/parameter-properties` <a id="summary-@typescript-eslint/parameter-properties"></a>](https://typescript-eslint.io/rules/parameter-properties)                                                                         | ✅                                                                        | 🚫  |
| [`@typescript-eslint/prefer-as-const` <a id="summary-@typescript-eslint/prefer-as-const"></a>](https://typescript-eslint.io/rules/prefer-as-const)                                                                                        | ✅                                                                        | ✅  |
| [`@typescript-eslint/prefer-destructuring` <a id="summary-@typescript-eslint/prefer-destructuring"></a>](https://typescript-eslint.io/rules/prefer-destructuring)                                                                         | ✅                                                                        | 🚫  |
| [`@typescript-eslint/prefer-enum-initializers` <a id="summary-@typescript-eslint/prefer-enum-initializers"></a>](https://typescript-eslint.io/rules/prefer-enum-initializers)                                                             | 🚫                                                                        | 🚫  |
| [`@typescript-eslint/prefer-find` <a id="summary-@typescript-eslint/prefer-find"></a>](https://typescript-eslint.io/rules/prefer-find)                                                                                                    | ✅                                                                        | ✅  |
| [`@typescript-eslint/prefer-for-of` <a id="summary-@typescript-eslint/prefer-for-of"></a>](https://typescript-eslint.io/rules/prefer-for-of)                                                                                              | ✅                                                                        | ✅  |
| [`@typescript-eslint/prefer-function-type` <a id="summary-@typescript-eslint/prefer-function-type"></a>](https://typescript-eslint.io/rules/prefer-function-type)                                                                         | ✅                                                                        | ✅  |
| [`@typescript-eslint/prefer-includes` <a id="summary-@typescript-eslint/prefer-includes"></a>](https://typescript-eslint.io/rules/prefer-includes)                                                                                        | ✅                                                                        | ✅  |
| [`@typescript-eslint/prefer-literal-enum-member` <a id="summary-@typescript-eslint/prefer-literal-enum-member"></a>](https://typescript-eslint.io/rules/prefer-literal-enum-member)                                                       | ✅                                                                        | ✅  |
| [`@typescript-eslint/prefer-namespace-keyword` <a id="summary-@typescript-eslint/prefer-namespace-keyword"></a>](https://typescript-eslint.io/rules/prefer-namespace-keyword)                                                             | ✅                                                                        | ✅  |
| [`@typescript-eslint/prefer-nullish-coalescing` <a id="summary-@typescript-eslint/prefer-nullish-coalescing"></a>](https://typescript-eslint.io/rules/prefer-nullish-coalescing)                                                          | ✅                                                                        | ✅  |
| [`@typescript-eslint/prefer-optional-chain` <a id="summary-@typescript-eslint/prefer-optional-chain"></a>](https://typescript-eslint.io/rules/prefer-optional-chain)                                                                      | ✅                                                                        | ✅  |
| [`@typescript-eslint/prefer-promise-reject-errors` <a id="summary-@typescript-eslint/prefer-promise-reject-errors"></a>](https://typescript-eslint.io/rules/prefer-promise-reject-errors)                                                 | ✅                                                                        | ✅  |
| [`@typescript-eslint/prefer-readonly` <a id="summary-@typescript-eslint/prefer-readonly"></a>](https://typescript-eslint.io/rules/prefer-readonly)                                                                                        | ✅                                                                        | 🚫  |
| [`@typescript-eslint/prefer-readonly-parameter-types` <a id="summary-@typescript-eslint/prefer-readonly-parameter-types"></a>](https://typescript-eslint.io/rules/prefer-readonly-parameter-types)                                        | 🚫                                                                        | 🚫  |
| [`@typescript-eslint/prefer-reduce-type-parameter` <a id="summary-@typescript-eslint/prefer-reduce-type-parameter"></a>](https://typescript-eslint.io/rules/prefer-reduce-type-parameter)                                                 | ✅                                                                        | ✅  |
| [`@typescript-eslint/prefer-regexp-exec` <a id="summary-@typescript-eslint/prefer-regexp-exec"></a>](https://typescript-eslint.io/rules/prefer-regexp-exec)                                                                               | ✅                                                                        | ✅  |
| [`@typescript-eslint/prefer-return-this-type` <a id="summary-@typescript-eslint/prefer-return-this-type"></a>](https://typescript-eslint.io/rules/prefer-return-this-type)                                                                | ✅                                                                        | ✅  |
| [`@typescript-eslint/prefer-string-starts-ends-with` <a id="summary-@typescript-eslint/prefer-string-starts-ends-with"></a>](https://typescript-eslint.io/rules/prefer-string-starts-ends-with)                                           | ✅                                                                        | ✅  |
| [`@typescript-eslint/promise-function-async` <a id="summary-@typescript-eslint/promise-function-async"></a>](https://typescript-eslint.io/rules/promise-function-async)                                                                   | ✅                                                                        | 🚫  |
| [`@typescript-eslint/related-getter-setter-pairs` <a id="summary-@typescript-eslint/related-getter-setter-pairs"></a>](https://typescript-eslint.io/rules/related-getter-setter-pairs)                                                    | ✅                                                                        | ✅  |
| [`@typescript-eslint/require-array-sort-compare` <a id="summary-@typescript-eslint/require-array-sort-compare"></a>](https://typescript-eslint.io/rules/require-array-sort-compare)                                                       | ✅                                                                        | 🚫  |
| [`@typescript-eslint/require-await` <a id="summary-@typescript-eslint/require-await"></a>](https://typescript-eslint.io/rules/require-await)                                                                                              | ✅                                                                        | ✅  |
| [`@typescript-eslint/restrict-plus-operands` <a id="summary-@typescript-eslint/restrict-plus-operands"></a>](https://typescript-eslint.io/rules/restrict-plus-operands)                                                                   | ✅                                                                        | ✅  |
| [`@typescript-eslint/restrict-template-expressions` <a id="summary-@typescript-eslint/restrict-template-expressions"></a>](https://typescript-eslint.io/rules/restrict-template-expressions)                                              | ✅                                                                        | ✅  |
| [`@typescript-eslint/return-await` <a id="summary-@typescript-eslint/return-await"></a>](https://typescript-eslint.io/rules/return-await)                                                                                                 | ✅ <a href="#rule-@typescript-eslint/return-await">(?)</a>                | ✅  |
| [`@typescript-eslint/strict-boolean-expressions` <a id="summary-@typescript-eslint/strict-boolean-expressions"></a>](https://typescript-eslint.io/rules/strict-boolean-expressions)                                                       | 🚫                                                                        | 🚫  |
| [`@typescript-eslint/switch-exhaustiveness-check` <a id="summary-@typescript-eslint/switch-exhaustiveness-check"></a>](https://typescript-eslint.io/rules/switch-exhaustiveness-check)                                                    | ✅                                                                        | 🚫  |
| [`@typescript-eslint/triple-slash-reference` <a id="summary-@typescript-eslint/triple-slash-reference"></a>](https://typescript-eslint.io/rules/triple-slash-reference)                                                                   | ✅ <a href="#rule-@typescript-eslint/triple-slash-reference">(?)</a>      | ✅  |
| [`@typescript-eslint/unbound-method` <a id="summary-@typescript-eslint/unbound-method"></a>](https://typescript-eslint.io/rules/unbound-method)                                                                                           | ✅                                                                        | ✅  |
| [`@typescript-eslint/unified-signatures` <a id="summary-@typescript-eslint/unified-signatures"></a>](https://typescript-eslint.io/rules/unified-signatures)                                                                               | ✅                                                                        | ✅  |
| [`@typescript-eslint/use-unknown-in-catch-callback-variable` <a id="summary-@typescript-eslint/use-unknown-in-catch-callback-variable"></a>](https://typescript-eslint.io/rules/use-unknown-in-catch-callback-variable)                   | ✅                                                                        | ✅  |

<table><tr><th colspan="2" align="left"><code>@typescript-eslint/array-type</code> <a href="#summary-@typescript-eslint/array-type">⬆️ back to summary table</a> <a id="rule-@typescript-eslint/array-type"></a></th></tr>
<tr><td><pre><code>[
  "error",
  {
    "default": "array-simple"
  }
]</code></pre></td><td><pre><code>"error"</code></pre></td></tr>
<tr><th colspan="2" align="left"><code>@typescript-eslint/ban-ts-comment</code> <a href="#summary-@typescript-eslint/ban-ts-comment">⬆️ back to summary table</a> <a id="rule-@typescript-eslint/ban-ts-comment"></a></th></tr>
<tr><td><pre><code>"error"</code></pre></td><td><pre><code>[
  "error",
  {
    "minimumDescriptionLength": 10
  }
]</code></pre></td></tr>
<tr><th colspan="2" align="left"><code>@typescript-eslint/consistent-type-assertions</code> <a href="#summary-@typescript-eslint/consistent-type-assertions">⬆️ back to summary table</a> <a id="rule-@typescript-eslint/consistent-type-assertions"></a></th></tr>
<tr><td><pre><code>[
  "error",
  {
    "arrayLiteralTypeAssertions": "never",
    "objectLiteralTypeAssertions": "never"
  }
]</code></pre></td><td><pre><code>"error"</code></pre></td></tr>
<tr><th colspan="2" align="left"><code>@typescript-eslint/consistent-type-definitions</code> <a href="#summary-@typescript-eslint/consistent-type-definitions">⬆️ back to summary table</a> <a id="rule-@typescript-eslint/consistent-type-definitions"></a></th></tr>
<tr><td><pre><code>[
  "error",
  "type"
]</code></pre></td><td><pre><code>"error"</code></pre></td></tr>
<tr><th colspan="2" align="left"><code>@typescript-eslint/return-await</code> <a href="#summary-@typescript-eslint/return-await">⬆️ back to summary table</a> <a id="rule-@typescript-eslint/return-await"></a></th></tr>
<tr><td><pre><code>[
  "error",
  "in-try-catch"
]</code></pre></td><td><pre><code>[
  "error",
  "error-handling-correctness-only"
]</code></pre></td></tr>
<tr><th colspan="2" align="left"><code>@typescript-eslint/triple-slash-reference</code> <a href="#summary-@typescript-eslint/triple-slash-reference">⬆️ back to summary table</a> <a id="rule-@typescript-eslint/triple-slash-reference"></a></th></tr>
<tr><td><pre><code>[
  "error",
  {
    "path": "never",
    "types": "never",
    "lib": "never"
  }
]</code></pre></td><td><pre><code>"error"</code></pre></td></tr></table>
<!-- END @typescript-eslint -->

## @eslint-react

Configurations compared:

- **P** – @priver/eslint-config
- **R** – [recommended-type-checked](https://eslint-react.xyz/docs/presets#typescript-specialized)

### react-x

<!-- START react-x -->

| Rule                                                                                                                                                                                               | P   | R   |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | --- |
| [`react-x/avoid-shorthand-boolean` <a id="summary-react-x/avoid-shorthand-boolean"></a>](https://eslint-react.xyz/docs/rules/avoid-shorthand-boolean)                                              | 🚫  | 🚫  |
| [`react-x/avoid-shorthand-fragment` <a id="summary-react-x/avoid-shorthand-fragment"></a>](https://eslint-react.xyz/docs/rules/avoid-shorthand-fragment)                                           | 🚫  | 🚫  |
| [`react-x/ensure-forward-ref-using-ref` <a id="summary-react-x/ensure-forward-ref-using-ref"></a>](https://eslint-react.xyz/docs/rules/no-useless-forward-ref)                                     | 🚫  | 🚫  |
| [`react-x/jsx-key-before-spread` <a id="summary-react-x/jsx-key-before-spread"></a>](https://eslint-react.xyz/docs/rules/jsx-key-before-spread)                                                    | ✅  | ⚠️  |
| [`react-x/jsx-no-duplicate-props` <a id="summary-react-x/jsx-no-duplicate-props"></a>](https://eslint-react.xyz/docs/rules/jsx-no-duplicate-props)                                                 | 🚫  | 🚫  |
| [`react-x/jsx-no-iife` <a id="summary-react-x/jsx-no-iife"></a>](https://eslint-react.xyz/docs/rules/jsx-no-iife)                                                                                  | 🚫  | 🚫  |
| [`react-x/jsx-no-undef` <a id="summary-react-x/jsx-no-undef"></a>](https://eslint-react.xyz/docs/rules/jsx-no-undef)                                                                               | 🚫  | 🚫  |
| [`react-x/jsx-uses-react` <a id="summary-react-x/jsx-uses-react"></a>](https://eslint-react.xyz/docs/rules/jsx-uses-react)                                                                         | 🚫  | 🚫  |
| [`react-x/jsx-uses-vars` <a id="summary-react-x/jsx-uses-vars"></a>](https://eslint-react.xyz/docs/rules/jsx-uses-vars)                                                                            | 🚫  | 🚫  |
| [`react-x/no-access-state-in-setstate` <a id="summary-react-x/no-access-state-in-setstate"></a>](https://eslint-react.xyz/docs/rules/no-access-state-in-setstate)                                  | ✅  | ✅  |
| [`react-x/no-array-index-key` <a id="summary-react-x/no-array-index-key"></a>](https://eslint-react.xyz/docs/rules/no-array-index-key)                                                             | ✅  | ⚠️  |
| [`react-x/no-children-count` <a id="summary-react-x/no-children-count"></a>](https://eslint-react.xyz/docs/rules/no-children-count)                                                                | ✅  | ⚠️  |
| [`react-x/no-children-for-each` <a id="summary-react-x/no-children-for-each"></a>](https://eslint-react.xyz/docs/rules/no-children-for-each)                                                       | ✅  | ⚠️  |
| [`react-x/no-children-map` <a id="summary-react-x/no-children-map"></a>](https://eslint-react.xyz/docs/rules/no-children-map)                                                                      | ✅  | ⚠️  |
| [`react-x/no-children-only` <a id="summary-react-x/no-children-only"></a>](https://eslint-react.xyz/docs/rules/no-children-only)                                                                   | ✅  | ⚠️  |
| [`react-x/no-children-prop` <a id="summary-react-x/no-children-prop"></a>](https://eslint-react.xyz/docs/rules/no-children-prop)                                                                   | ✅  | 🚫  |
| [`react-x/no-children-to-array` <a id="summary-react-x/no-children-to-array"></a>](https://eslint-react.xyz/docs/rules/no-children-to-array)                                                       | ✅  | ⚠️  |
| [`react-x/no-class-component` <a id="summary-react-x/no-class-component"></a>](https://eslint-react.xyz/docs/rules/no-class-component)                                                             | ✅  | 🚫  |
| [`react-x/no-clone-element` <a id="summary-react-x/no-clone-element"></a>](https://eslint-react.xyz/docs/rules/no-clone-element)                                                                   | ✅  | ⚠️  |
| [`react-x/no-comment-textnodes` <a id="summary-react-x/no-comment-textnodes"></a>](https://eslint-react.xyz/docs/rules/no-comment-textnodes)                                                       | ✅  | ⚠️  |
| [`react-x/no-complex-conditional-rendering` <a id="summary-react-x/no-complex-conditional-rendering"></a>](https://eslint-react.xyz/docs/rules/no-complex-conditional-rendering)                   | 🚫  | 🚫  |
| [`react-x/no-complicated-conditional-rendering` <a id="summary-react-x/no-complicated-conditional-rendering"></a>](https://eslint-react.xyz/docs/rules/no-complex-conditional-rendering)           | 🚫  | 🚫  |
| [`react-x/no-component-will-mount` <a id="summary-react-x/no-component-will-mount"></a>](https://eslint-react.xyz/docs/rules/no-component-will-mount)                                              | ✅  | ✅  |
| [`react-x/no-component-will-receive-props` <a id="summary-react-x/no-component-will-receive-props"></a>](https://eslint-react.xyz/docs/rules/no-component-will-receive-props)                      | ✅  | ✅  |
| [`react-x/no-component-will-update` <a id="summary-react-x/no-component-will-update"></a>](https://eslint-react.xyz/docs/rules/no-component-will-update)                                           | ✅  | ✅  |
| [`react-x/no-context-provider` <a id="summary-react-x/no-context-provider"></a>](https://eslint-react.xyz/docs/rules/no-context-provider)                                                          | ✅  | ⚠️  |
| [`react-x/no-create-ref` <a id="summary-react-x/no-create-ref"></a>](https://eslint-react.xyz/docs/rules/no-create-ref)                                                                            | ✅  | ✅  |
| [`react-x/no-default-props` <a id="summary-react-x/no-default-props"></a>](https://eslint-react.xyz/docs/rules/no-default-props)                                                                   | ✅  | ✅  |
| [`react-x/no-direct-mutation-state` <a id="summary-react-x/no-direct-mutation-state"></a>](https://eslint-react.xyz/docs/rules/no-direct-mutation-state)                                           | ✅  | ✅  |
| [`react-x/no-duplicate-jsx-props` <a id="summary-react-x/no-duplicate-jsx-props"></a>](https://eslint-react.xyz/docs/rules/jsx-no-duplicate-props)                                                 | 🚫  | 🚫  |
| [`react-x/no-duplicate-key` <a id="summary-react-x/no-duplicate-key"></a>](https://eslint-react.xyz/docs/rules/no-duplicate-key)                                                                   | ✅  | ⚠️  |
| [`react-x/no-forward-ref` <a id="summary-react-x/no-forward-ref"></a>](https://eslint-react.xyz/docs/rules/no-forward-ref)                                                                         | ✅  | ⚠️  |
| [`react-x/no-implicit-key` <a id="summary-react-x/no-implicit-key"></a>](https://eslint-react.xyz/docs/rules/no-implicit-key)                                                                      | ✅  | ⚠️  |
| [`react-x/no-leaked-conditional-rendering` <a id="summary-react-x/no-leaked-conditional-rendering"></a>](https://eslint-react.xyz/docs/rules/no-leaked-conditional-rendering)                      | ✅  | ⚠️  |
| [`react-x/no-missing-component-display-name` <a id="summary-react-x/no-missing-component-display-name"></a>](https://eslint-react.xyz/docs/rules/no-missing-component-display-name)                | ✅  | 🚫  |
| [`react-x/no-missing-context-display-name` <a id="summary-react-x/no-missing-context-display-name"></a>](https://eslint-react.xyz/docs/rules/no-missing-context-display-name)                      | ✅  | 🚫  |
| [`react-x/no-missing-key` <a id="summary-react-x/no-missing-key"></a>](https://eslint-react.xyz/docs/rules/no-missing-key)                                                                         | ✅  | ✅  |
| [`react-x/no-misused-capture-owner-stack` <a id="summary-react-x/no-misused-capture-owner-stack"></a>](https://eslint-react.xyz/docs/rules/no-misused-capture-owner-stack)                         | ✅  | ✅  |
| [`react-x/no-nested-component-definitions` <a id="summary-react-x/no-nested-component-definitions"></a>](https://eslint-react.xyz/docs/rules/no-nested-component-definitions)                      | ✅  | ✅  |
| [`react-x/no-nested-components` <a id="summary-react-x/no-nested-components"></a>](https://eslint-react.xyz/docs/rules/no-nested-component-definitions)                                            | 🚫  | 🚫  |
| [`react-x/no-nested-lazy-component-declarations` <a id="summary-react-x/no-nested-lazy-component-declarations"></a>](https://eslint-react.xyz/docs/rules/no-nested-component-definitions)          | ✅  | ⚠️  |
| [`react-x/no-prop-types` <a id="summary-react-x/no-prop-types"></a>](https://eslint-react.xyz/docs/rules/no-prop-types)                                                                            | ✅  | ✅  |
| [`react-x/no-redundant-should-component-update` <a id="summary-react-x/no-redundant-should-component-update"></a>](https://eslint-react.xyz/docs/rules/no-redundant-should-component-update)       | ✅  | ✅  |
| [`react-x/no-set-state-in-component-did-mount` <a id="summary-react-x/no-set-state-in-component-did-mount"></a>](https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-mount)          | ✅  | ⚠️  |
| [`react-x/no-set-state-in-component-did-update` <a id="summary-react-x/no-set-state-in-component-did-update"></a>](https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-update)       | ✅  | ⚠️  |
| [`react-x/no-set-state-in-component-will-update` <a id="summary-react-x/no-set-state-in-component-will-update"></a>](https://eslint-react.xyz/docs/rules/no-set-state-in-component-will-update)    | ✅  | ⚠️  |
| [`react-x/no-string-refs` <a id="summary-react-x/no-string-refs"></a>](https://eslint-react.xyz/docs/rules/no-string-refs)                                                                         | ✅  | ✅  |
| [`react-x/no-unsafe-component-will-mount` <a id="summary-react-x/no-unsafe-component-will-mount"></a>](https://eslint-react.xyz/docs/rules/no-unsafe-component-will-mount)                         | ✅  | ⚠️  |
| [`react-x/no-unsafe-component-will-receive-props` <a id="summary-react-x/no-unsafe-component-will-receive-props"></a>](https://eslint-react.xyz/docs/rules/no-unsafe-component-will-receive-props) | ✅  | ⚠️  |
| [`react-x/no-unsafe-component-will-update` <a id="summary-react-x/no-unsafe-component-will-update"></a>](https://eslint-react.xyz/docs/rules/no-unsafe-component-will-update)                      | ✅  | ⚠️  |
| [`react-x/no-unstable-context-value` <a id="summary-react-x/no-unstable-context-value"></a>](https://eslint-react.xyz/docs/rules/no-unstable-context-value)                                        | ✅  | ⚠️  |
| [`react-x/no-unstable-default-props` <a id="summary-react-x/no-unstable-default-props"></a>](https://eslint-react.xyz/docs/rules/no-unstable-default-props)                                        | ✅  | ⚠️  |
| [`react-x/no-unused-class-component-members` <a id="summary-react-x/no-unused-class-component-members"></a>](https://eslint-react.xyz/docs/rules/no-unused-class-component-members)                | ✅  | ⚠️  |
| [`react-x/no-unused-state` <a id="summary-react-x/no-unused-state"></a>](https://eslint-react.xyz/docs/rules/no-unused-state)                                                                      | ✅  | ⚠️  |
| [`react-x/no-use-context` <a id="summary-react-x/no-use-context"></a>](https://eslint-react.xyz/docs/rules/no-use-context)                                                                         | ✅  | ⚠️  |
| [`react-x/no-useless-forward-ref` <a id="summary-react-x/no-useless-forward-ref"></a>](https://eslint-react.xyz/docs/rules/no-useless-forward-ref)                                                 | ✅  | ⚠️  |
| [`react-x/no-useless-fragment` <a id="summary-react-x/no-useless-fragment"></a>](https://eslint-react.xyz/docs/rules/no-useless-fragment)                                                          | ✅  | 🚫  |
| [`react-x/prefer-destructuring-assignment` <a id="summary-react-x/prefer-destructuring-assignment"></a>](https://eslint-react.xyz/docs/rules/prefer-destructuring-assignment)                      | 🚫  | 🚫  |
| [`react-x/prefer-react-namespace-import` <a id="summary-react-x/prefer-react-namespace-import"></a>](https://eslint-react.xyz/docs/rules/prefer-react-namespace-import)                            | 🚫  | 🚫  |
| [`react-x/prefer-read-only-props` <a id="summary-react-x/prefer-read-only-props"></a>](https://eslint-react.xyz/docs/rules/prefer-read-only-props)                                                 | 🚫  | 🚫  |
| [`react-x/prefer-shorthand-boolean` <a id="summary-react-x/prefer-shorthand-boolean"></a>](https://eslint-react.xyz/docs/rules/prefer-shorthand-boolean)                                           | ✅  | 🚫  |
| [`react-x/prefer-shorthand-fragment` <a id="summary-react-x/prefer-shorthand-fragment"></a>](https://eslint-react.xyz/docs/rules/prefer-shorthand-fragment)                                        | ✅  | 🚫  |
| [`react-x/use-jsx-vars` <a id="summary-react-x/use-jsx-vars"></a>](https://eslint-react.xyz/docs/rules/jsx-uses-vars)                                                                              | 🚫  | 🚫  |

<!-- END react-x -->

### react-dom

<!-- START react-dom -->

| Rule                                                                                                                                                                                                                   | P   | R   |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | --- |
| [`react-dom/no-children-in-void-dom-elements` <a id="summary-react-dom/no-children-in-void-dom-elements"></a>](https://eslint-react.xyz/docs/rules/dom-no-void-elements-with-children)                                 | 🚫  | 🚫  |
| [`react-dom/no-dangerously-set-innerhtml` <a id="summary-react-dom/no-dangerously-set-innerhtml"></a>](https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml)                                           | ✅  | ⚠️  |
| [`react-dom/no-dangerously-set-innerhtml-with-children` <a id="summary-react-dom/no-dangerously-set-innerhtml-with-children"></a>](https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml-with-children) | ✅  | ✅  |
| [`react-dom/no-find-dom-node` <a id="summary-react-dom/no-find-dom-node"></a>](https://eslint-react.xyz/docs/rules/dom-no-find-dom-node)                                                                               | ✅  | ✅  |
| [`react-dom/no-flush-sync` <a id="summary-react-dom/no-flush-sync"></a>](https://eslint-react.xyz/docs/rules/dom-no-flush-sync)                                                                                        | ✅  | ✅  |
| [`react-dom/no-hydrate` <a id="summary-react-dom/no-hydrate"></a>](https://eslint-react.xyz/docs/rules/dom-no-hydrate)                                                                                                 | ✅  | ✅  |
| [`react-dom/no-missing-button-type` <a id="summary-react-dom/no-missing-button-type"></a>](https://eslint-react.xyz/docs/rules/dom-no-missing-button-type)                                                             | ✅  | ⚠️  |
| [`react-dom/no-missing-iframe-sandbox` <a id="summary-react-dom/no-missing-iframe-sandbox"></a>](https://eslint-react.xyz/docs/rules/dom-no-missing-iframe-sandbox)                                                    | ✅  | ⚠️  |
| [`react-dom/no-namespace` <a id="summary-react-dom/no-namespace"></a>](https://eslint-react.xyz/docs/rules/dom-no-namespace)                                                                                           | ✅  | ✅  |
| [`react-dom/no-render` <a id="summary-react-dom/no-render"></a>](https://eslint-react.xyz/docs/rules/dom-no-render)                                                                                                    | ✅  | ✅  |
| [`react-dom/no-render-return-value` <a id="summary-react-dom/no-render-return-value"></a>](https://eslint-react.xyz/docs/rules/dom-no-render-return-value)                                                             | ✅  | ✅  |
| [`react-dom/no-script-url` <a id="summary-react-dom/no-script-url"></a>](https://eslint-react.xyz/docs/rules/dom-no-script-url)                                                                                        | ✅  | ⚠️  |
| [`react-dom/no-unknown-property` <a id="summary-react-dom/no-unknown-property"></a>](https://eslint-react.xyz/docs/rules/dom-no-unknown-property)                                                                      | 🚫  | 🚫  |
| [`react-dom/no-unsafe-iframe-sandbox` <a id="summary-react-dom/no-unsafe-iframe-sandbox"></a>](https://eslint-react.xyz/docs/rules/dom-no-unsafe-iframe-sandbox)                                                       | ✅  | ⚠️  |
| [`react-dom/no-unsafe-target-blank` <a id="summary-react-dom/no-unsafe-target-blank"></a>](https://eslint-react.xyz/docs/rules/dom-no-unsafe-target-blank)                                                             | 🚫  | ⚠️  |
| [`react-dom/no-use-form-state` <a id="summary-react-dom/no-use-form-state"></a>](https://eslint-react.xyz/docs/rules/dom-no-use-form-state)                                                                            | ✅  | ✅  |
| [`react-dom/no-void-elements-with-children` <a id="summary-react-dom/no-void-elements-with-children"></a>](https://eslint-react.xyz/docs/rules/dom-no-void-elements-with-children)                                     | ✅  | ✅  |

<!-- END react-dom -->

### react-web-api

<!-- START react-web-api -->

| Rule                                                                                                                                                                            | P   | R   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | --- |
| [`react-web-api/no-leaked-event-listener` <a id="summary-react-web-api/no-leaked-event-listener"></a>](https://eslint-react.xyz/docs/rules/web-api-no-leaked-event-listener)    | ✅  | ⚠️  |
| [`react-web-api/no-leaked-interval` <a id="summary-react-web-api/no-leaked-interval"></a>](https://eslint-react.xyz/docs/rules/web-api-no-leaked-interval)                      | ✅  | ⚠️  |
| [`react-web-api/no-leaked-resize-observer` <a id="summary-react-web-api/no-leaked-resize-observer"></a>](https://eslint-react.xyz/docs/rules/web-api-no-leaked-resize-observer) | ✅  | ⚠️  |
| [`react-web-api/no-leaked-timeout` <a id="summary-react-web-api/no-leaked-timeout"></a>](https://eslint-react.xyz/docs/rules/web-api-no-leaked-timeout)                         | ✅  | ⚠️  |

<!-- END react-web-api -->

### react-hooks-extra

<!-- START react-hooks-extra -->

| Rule                                                                                                                                                                                                                                     | P   | R   |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | --- |
| [`react-hooks-extra/ensure-custom-hooks-using-other-hooks` <a id="summary-react-hooks-extra/ensure-custom-hooks-using-other-hooks"></a>](https://eslint-react.xyz/docs/rules/hooks-extra-no-unnecessary-use-prefix)                      | 🚫  | 🚫  |
| [`react-hooks-extra/ensure-use-callback-has-non-empty-deps` <a id="summary-react-hooks-extra/ensure-use-callback-has-non-empty-deps"></a>](https://eslint-react.xyz/docs/rules/hooks-extra-no-unnecessary-use-callback)                  | 🚫  | 🚫  |
| [`react-hooks-extra/ensure-use-memo-has-non-empty-deps` <a id="summary-react-hooks-extra/ensure-use-memo-has-non-empty-deps"></a>](https://eslint-react.xyz/docs/rules/hooks-extra-no-unnecessary-use-memo)                              | 🚫  | 🚫  |
| [`react-hooks-extra/no-direct-set-state-in-use-effect` <a id="summary-react-hooks-extra/no-direct-set-state-in-use-effect"></a>](https://eslint-react.xyz/docs/rules/hooks-extra-no-direct-set-state-in-use-effect)                      | ✅  | ⚠️  |
| [`react-hooks-extra/no-direct-set-state-in-use-layout-effect` <a id="summary-react-hooks-extra/no-direct-set-state-in-use-layout-effect"></a>](https://eslint-react.xyz/docs/rules/hooks-extra-no-direct-set-state-in-use-layout-effect) | ✅  | 🚫  |
| [`react-hooks-extra/no-redundant-custom-hook` <a id="summary-react-hooks-extra/no-redundant-custom-hook"></a>](https://eslint-react.xyz/docs/rules/hooks-extra-no-unnecessary-use-prefix)                                                | 🚫  | 🚫  |
| [`react-hooks-extra/no-unnecessary-use-callback` <a id="summary-react-hooks-extra/no-unnecessary-use-callback"></a>](https://eslint-react.xyz/docs/rules/hooks-extra-no-unnecessary-use-callback)                                        | ✅  | 🚫  |
| [`react-hooks-extra/no-unnecessary-use-memo` <a id="summary-react-hooks-extra/no-unnecessary-use-memo"></a>](https://eslint-react.xyz/docs/rules/hooks-extra-no-unnecessary-use-memo)                                                    | ✅  | 🚫  |
| [`react-hooks-extra/no-unnecessary-use-prefix` <a id="summary-react-hooks-extra/no-unnecessary-use-prefix"></a>](https://eslint-react.xyz/docs/rules/hooks-extra-no-unnecessary-use-prefix)                                              | ✅  | ⚠️  |
| [`react-hooks-extra/no-useless-custom-hooks` <a id="summary-react-hooks-extra/no-useless-custom-hooks"></a>](https://eslint-react.xyz/docs/rules/hooks-extra-no-unnecessary-use-prefix)                                                  | 🚫  | 🚫  |
| [`react-hooks-extra/prefer-use-state-lazy-initialization` <a id="summary-react-hooks-extra/prefer-use-state-lazy-initialization"></a>](https://eslint-react.xyz/docs/rules/hooks-extra-prefer-use-state-lazy-initialization)             | ✅  | ⚠️  |

<!-- END react-hooks-extra -->

### react-naming-convention

<!-- START react-naming-convention -->

| Rule                                                                                                                                                                                     | P   | R   |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | --- |
| [`react-naming-convention/component-name` <a id="summary-react-naming-convention/component-name"></a>](https://eslint-react.xyz/docs/rules/naming-convention-component-name)             | ✅  | 🚫  |
| [`react-naming-convention/context-name` <a id="summary-react-naming-convention/context-name"></a>](https://eslint-react.xyz/docs/rules/naming-convention-context-name)                   | ✅  | ⚠️  |
| [`react-naming-convention/filename` <a id="summary-react-naming-convention/filename"></a>](https://eslint-react.xyz/docs/rules/naming-convention-filename)                               | 🚫  | 🚫  |
| [`react-naming-convention/filename-extension` <a id="summary-react-naming-convention/filename-extension"></a>](https://eslint-react.xyz/docs/rules/naming-convention-filename-extension) | 🚫  | 🚫  |
| [`react-naming-convention/use-state` <a id="summary-react-naming-convention/use-state"></a>](https://eslint-react.xyz/docs/rules/naming-convention-use-state)                            | ✅  | 🚫  |

<!-- END react-naming-convention -->

## react-hooks

Configurations compared:

- **P** – @priver/eslint-config
- **R** –
  [recommended](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks#flat-config-eslintconfigjsts)

<!-- START react-hooks -->

| Rule                                                                                                                             | P   | R   |
| -------------------------------------------------------------------------------------------------------------------------------- | --- | --- |
| [`react-hooks/exhaustive-deps` <a id="summary-react-hooks/exhaustive-deps"></a>](https://github.com/facebook/react/issues/14920) | ✅  | ⚠️  |
| [`react-hooks/rules-of-hooks` <a id="summary-react-hooks/rules-of-hooks"></a>](https://reactjs.org/docs/hooks-rules.html)        | ✅  | ✅  |

<!-- END react-hooks -->

## react-refresh

Configurations compared:

- **P** – @priver/eslint-config
- **R** –
  [vite](https://github.com/ArnaudBarre/eslint-plugin-react-refresh?tab=readme-ov-file#vite-config)

<!-- START react-refresh -->

| Rule                                                                                             | P   | R   |
| ------------------------------------------------------------------------------------------------ | --- | --- |
| `react-refresh/only-export-components` <a id="summary-react-refresh/only-export-components"></a> | ✅  | ✅  |

<!-- END react-refresh -->

## storybook

**Configurations:**

- **P** – @priver/eslint-config
- **R** –
  [flat/recommended](https://github.com/storybookjs/eslint-plugin-storybook?tab=readme-ov-file#configuration-eslintconfigcmjs)

<!-- START storybook -->

| Rule                                                                                                                                                                                                                            | P   | R   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | --- |
| [`storybook/await-interactions` <a id="summary-storybook/await-interactions"></a>](https://github.com/storybookjs/storybook/blob/next/code/lib/eslint-plugin/docs/rules/await-interactions.md)                                  | ✅  | ✅  |
| [`storybook/context-in-play-function` <a id="summary-storybook/context-in-play-function"></a>](https://github.com/storybookjs/storybook/blob/next/code/lib/eslint-plugin/docs/rules/context-in-play-function.md)                | ✅  | ✅  |
| [`storybook/csf-component` <a id="summary-storybook/csf-component"></a>](https://github.com/storybookjs/storybook/blob/next/code/lib/eslint-plugin/docs/rules/csf-component.md)                                                 | ✅  | 🚫  |
| [`storybook/default-exports` <a id="summary-storybook/default-exports"></a>](https://github.com/storybookjs/storybook/blob/next/code/lib/eslint-plugin/docs/rules/default-exports.md)                                           | ✅  | ✅  |
| [`storybook/hierarchy-separator` <a id="summary-storybook/hierarchy-separator"></a>](https://github.com/storybookjs/storybook/blob/next/code/lib/eslint-plugin/docs/rules/hierarchy-separator.md)                               | ✅  | ⚠️  |
| [`storybook/meta-inline-properties` <a id="summary-storybook/meta-inline-properties"></a>](https://github.com/storybookjs/storybook/blob/next/code/lib/eslint-plugin/docs/rules/meta-inline-properties.md)                      | ✅  | 🚫  |
| [`storybook/meta-satisfies-type` <a id="summary-storybook/meta-satisfies-type"></a>](https://github.com/storybookjs/storybook/blob/next/code/lib/eslint-plugin/docs/rules/meta-satisfies-type.md)                               | ✅  | 🚫  |
| [`storybook/no-redundant-story-name` <a id="summary-storybook/no-redundant-story-name"></a>](https://github.com/storybookjs/storybook/blob/next/code/lib/eslint-plugin/docs/rules/no-redundant-story-name.md)                   | ✅  | ⚠️  |
| [`storybook/no-renderer-packages` <a id="summary-storybook/no-renderer-packages"></a>](https://github.com/storybookjs/storybook/blob/next/code/lib/eslint-plugin/docs/rules/no-renderer-packages.md)                            | ✅  | ✅  |
| [`storybook/no-stories-of` <a id="summary-storybook/no-stories-of"></a>](https://github.com/storybookjs/storybook/blob/next/code/lib/eslint-plugin/docs/rules/no-stories-of.md)                                                 | ✅  | 🚫  |
| [`storybook/no-title-property-in-meta` <a id="summary-storybook/no-title-property-in-meta"></a>](https://github.com/storybookjs/storybook/blob/next/code/lib/eslint-plugin/docs/rules/no-title-property-in-meta.md)             | ✅  | 🚫  |
| [`storybook/no-uninstalled-addons` <a id="summary-storybook/no-uninstalled-addons"></a>](https://github.com/storybookjs/storybook/blob/next/code/lib/eslint-plugin/docs/rules/no-uninstalled-addons.md)                         | 🚫  | ✅  |
| [`storybook/prefer-pascal-case` <a id="summary-storybook/prefer-pascal-case"></a>](https://github.com/storybookjs/storybook/blob/next/code/lib/eslint-plugin/docs/rules/prefer-pascal-case.md)                                  | ✅  | ⚠️  |
| [`storybook/story-exports` <a id="summary-storybook/story-exports"></a>](https://github.com/storybookjs/storybook/blob/next/code/lib/eslint-plugin/docs/rules/story-exports.md)                                                 | ✅  | ✅  |
| [`storybook/use-storybook-expect` <a id="summary-storybook/use-storybook-expect"></a>](https://github.com/storybookjs/storybook/blob/next/code/lib/eslint-plugin/docs/rules/use-storybook-expect.md)                            | ✅  | ✅  |
| [`storybook/use-storybook-testing-library` <a id="summary-storybook/use-storybook-testing-library"></a>](https://github.com/storybookjs/storybook/blob/next/code/lib/eslint-plugin/docs/rules/use-storybook-testing-library.md) | ✅  | ✅  |

<!-- END storybook -->
