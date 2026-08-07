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
  - [react-jsx](#react-jsx)
  - [react-rsc](#react-rsc)
  - [react-dom](#react-dom)
  - [react-web-api](#react-web-api)
  - [react-naming-convention](#react-naming-convention)
- [react-refresh](#react-refresh)

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

| Rule                                                                                     | P                                                      | R   |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------ | --- |
| [`accessor-pairs`] <a id="summary-accessor-pairs"></a>                                   | ✅                                                     | 🚫  |
| [`array-callback-return`] <a id="summary-array-callback-return"></a>                     | ✅                                                     | 🚫  |
| [`arrow-body-style`] <a id="summary-arrow-body-style"></a>                               | ✅                                                     | 🚫  |
| [`block-scoped-var`] <a id="summary-block-scoped-var"></a>                               | ✅                                                     | 🚫  |
| [`camelcase`] <a id="summary-camelcase"></a>                                             | ✅                                                     | 🚫  |
| [`capitalized-comments`] <a id="summary-capitalized-comments"></a>                       | 🚫                                                     | 🚫  |
| [`class-methods-use-this`] <a id="summary-class-methods-use-this"></a>                   | 🚫                                                     | 🚫  |
| [`complexity`] <a id="summary-complexity"></a>                                           | 🚫                                                     | 🚫  |
| [`consistent-return`] <a id="summary-consistent-return"></a>                             | ✅                                                     | 🚫  |
| [`consistent-this`] <a id="summary-consistent-this"></a>                                 | 🚫                                                     | 🚫  |
| [`constructor-super`] <a id="summary-constructor-super"></a>                             | ✅                                                     | ✅  |
| [`curly`] <a id="summary-curly"></a>                                                     | ✅                                                     | 🚫  |
| [`default-case`] <a id="summary-default-case"></a>                                       | ✅                                                     | 🚫  |
| [`default-case-last`] <a id="summary-default-case-last"></a>                             | ✅                                                     | 🚫  |
| [`default-param-last`] <a id="summary-default-param-last"></a>                           | ✅                                                     | 🚫  |
| [`dot-notation`] <a id="summary-dot-notation"></a>                                       | ✅                                                     | 🚫  |
| [`eqeqeq`] <a id="summary-eqeqeq"></a>                                                   | ✅                                                     | 🚫  |
| [`for-direction`] <a id="summary-for-direction"></a>                                     | ✅                                                     | ✅  |
| [`func-name-matching`] <a id="summary-func-name-matching"></a>                           | 🚫                                                     | 🚫  |
| [`func-names`] <a id="summary-func-names"></a>                                           | 🚫                                                     | 🚫  |
| [`func-style`] <a id="summary-func-style"></a>                                           | ✅                                                     | 🚫  |
| [`getter-return`] <a id="summary-getter-return"></a>                                     | ✅                                                     | ✅  |
| [`grouped-accessor-pairs`] <a id="summary-grouped-accessor-pairs"></a>                   | ✅                                                     | 🚫  |
| [`guard-for-in`] <a id="summary-guard-for-in"></a>                                       | ✅                                                     | 🚫  |
| [`id-denylist`] <a id="summary-id-denylist"></a>                                         | 🚫                                                     | 🚫  |
| [`id-length`] <a id="summary-id-length"></a>                                             | 🚫                                                     | 🚫  |
| [`id-match`] <a id="summary-id-match"></a>                                               | 🚫                                                     | 🚫  |
| [`init-declarations`] <a id="summary-init-declarations"></a>                             | 🚫                                                     | 🚫  |
| [`logical-assignment-operators`] <a id="summary-logical-assignment-operators"></a>       | 🚫                                                     | 🚫  |
| [`max-classes-per-file`] <a id="summary-max-classes-per-file"></a>                       | 🚫                                                     | 🚫  |
| [`max-depth`] <a id="summary-max-depth"></a>                                             | 🚫                                                     | 🚫  |
| [`max-lines`] <a id="summary-max-lines"></a>                                             | 🚫                                                     | 🚫  |
| [`max-lines-per-function`] <a id="summary-max-lines-per-function"></a>                   | 🚫                                                     | 🚫  |
| [`max-nested-callbacks`] <a id="summary-max-nested-callbacks"></a>                       | 🚫                                                     | 🚫  |
| [`max-params`] <a id="summary-max-params"></a>                                           | 🚫                                                     | 🚫  |
| [`max-statements`] <a id="summary-max-statements"></a>                                   | 🚫                                                     | 🚫  |
| [`new-cap`] <a id="summary-new-cap"></a>                                                 | ✅                                                     | 🚫  |
| [`no-alert`] <a id="summary-no-alert"></a>                                               | ✅                                                     | 🚫  |
| [`no-array-constructor`] <a id="summary-no-array-constructor"></a>                       | ✅                                                     | 🚫  |
| [`no-async-promise-executor`] <a id="summary-no-async-promise-executor"></a>             | ✅                                                     | ✅  |
| [`no-await-in-loop`] <a id="summary-no-await-in-loop"></a>                               | ✅                                                     | 🚫  |
| [`no-bitwise`] <a id="summary-no-bitwise"></a>                                           | ✅                                                     | 🚫  |
| [`no-caller`] <a id="summary-no-caller"></a>                                             | ✅                                                     | 🚫  |
| [`no-case-declarations`] <a id="summary-no-case-declarations"></a>                       | ✅                                                     | ✅  |
| [`no-class-assign`] <a id="summary-no-class-assign"></a>                                 | ✅                                                     | ✅  |
| [`no-compare-neg-zero`] <a id="summary-no-compare-neg-zero"></a>                         | ✅                                                     | ✅  |
| [`no-cond-assign`] <a id="summary-no-cond-assign"></a>                                   | ✅ <a href="#rule-no-cond-assign">(?)</a>              | ✅  |
| [`no-console`] <a id="summary-no-console"></a>                                           | ✅                                                     | 🚫  |
| [`no-const-assign`] <a id="summary-no-const-assign"></a>                                 | ✅                                                     | ✅  |
| [`no-constant-binary-expression`] <a id="summary-no-constant-binary-expression"></a>     | ✅                                                     | ✅  |
| [`no-constant-condition`] <a id="summary-no-constant-condition"></a>                     | ✅                                                     | ✅  |
| [`no-constructor-return`] <a id="summary-no-constructor-return"></a>                     | ✅                                                     | 🚫  |
| [`no-continue`] <a id="summary-no-continue"></a>                                         | ✅                                                     | 🚫  |
| [`no-control-regex`] <a id="summary-no-control-regex"></a>                               | ✅                                                     | ✅  |
| [`no-debugger`] <a id="summary-no-debugger"></a>                                         | ✅                                                     | ✅  |
| [`no-delete-var`] <a id="summary-no-delete-var"></a>                                     | ✅                                                     | ✅  |
| [`no-div-regex`] <a id="summary-no-div-regex"></a>                                       | ✅                                                     | 🚫  |
| [`no-dupe-args`] <a id="summary-no-dupe-args"></a>                                       | ✅                                                     | ✅  |
| [`no-dupe-class-members`] <a id="summary-no-dupe-class-members"></a>                     | ✅                                                     | ✅  |
| [`no-dupe-else-if`] <a id="summary-no-dupe-else-if"></a>                                 | ✅                                                     | ✅  |
| [`no-dupe-keys`] <a id="summary-no-dupe-keys"></a>                                       | ✅                                                     | ✅  |
| [`no-duplicate-case`] <a id="summary-no-duplicate-case"></a>                             | ✅                                                     | ✅  |
| [`no-duplicate-imports`] <a id="summary-no-duplicate-imports"></a>                       | 🚫                                                     | 🚫  |
| [`no-else-return`] <a id="summary-no-else-return"></a>                                   | ✅                                                     | 🚫  |
| [`no-empty`] <a id="summary-no-empty"></a>                                               | ✅ <a href="#rule-no-empty">(?)</a>                    | ✅  |
| [`no-empty-character-class`] <a id="summary-no-empty-character-class"></a>               | ✅                                                     | ✅  |
| [`no-empty-function`] <a id="summary-no-empty-function"></a>                             | 🚫                                                     | 🚫  |
| [`no-empty-pattern`] <a id="summary-no-empty-pattern"></a>                               | ✅                                                     | ✅  |
| [`no-empty-static-block`] <a id="summary-no-empty-static-block"></a>                     | ✅                                                     | ✅  |
| [`no-eq-null`] <a id="summary-no-eq-null"></a>                                           | ✅                                                     | 🚫  |
| [`no-eval`] <a id="summary-no-eval"></a>                                                 | ✅                                                     | 🚫  |
| [`no-ex-assign`] <a id="summary-no-ex-assign"></a>                                       | ✅                                                     | ✅  |
| [`no-extend-native`] <a id="summary-no-extend-native"></a>                               | ✅                                                     | 🚫  |
| [`no-extra-bind`] <a id="summary-no-extra-bind"></a>                                     | ✅                                                     | 🚫  |
| [`no-extra-boolean-cast`] <a id="summary-no-extra-boolean-cast"></a>                     | ✅ <a href="#rule-no-extra-boolean-cast">(?)</a>       | ✅  |
| [`no-extra-label`] <a id="summary-no-extra-label"></a>                                   | ✅                                                     | 🚫  |
| [`no-fallthrough`] <a id="summary-no-fallthrough"></a>                                   | ✅                                                     | ✅  |
| [`no-func-assign`] <a id="summary-no-func-assign"></a>                                   | ✅                                                     | ✅  |
| [`no-global-assign`] <a id="summary-no-global-assign"></a>                               | ✅                                                     | ✅  |
| [`no-implicit-coercion`] <a id="summary-no-implicit-coercion"></a>                       | ✅                                                     | 🚫  |
| [`no-implicit-globals`] <a id="summary-no-implicit-globals"></a>                         | ✅                                                     | 🚫  |
| [`no-implied-eval`] <a id="summary-no-implied-eval"></a>                                 | ✅                                                     | 🚫  |
| [`no-import-assign`] <a id="summary-no-import-assign"></a>                               | ✅                                                     | ✅  |
| [`no-inline-comments`] <a id="summary-no-inline-comments"></a>                           | 🚫                                                     | 🚫  |
| [`no-inner-declarations`] <a id="summary-no-inner-declarations"></a>                     | ✅                                                     | 🚫  |
| [`no-invalid-regexp`] <a id="summary-no-invalid-regexp"></a>                             | ✅                                                     | ✅  |
| [`no-invalid-this`] <a id="summary-no-invalid-this"></a>                                 | 🚫                                                     | 🚫  |
| [`no-irregular-whitespace`] <a id="summary-no-irregular-whitespace"></a>                 | ✅                                                     | ✅  |
| [`no-iterator`] <a id="summary-no-iterator"></a>                                         | ✅                                                     | 🚫  |
| [`no-label-var`] <a id="summary-no-label-var"></a>                                       | ✅                                                     | 🚫  |
| [`no-labels`] <a id="summary-no-labels"></a>                                             | ✅                                                     | 🚫  |
| [`no-lone-blocks`] <a id="summary-no-lone-blocks"></a>                                   | ✅                                                     | 🚫  |
| [`no-lonely-if`] <a id="summary-no-lonely-if"></a>                                       | ✅                                                     | 🚫  |
| [`no-loop-func`] <a id="summary-no-loop-func"></a>                                       | ✅                                                     | 🚫  |
| [`no-loss-of-precision`] <a id="summary-no-loss-of-precision"></a>                       | ✅                                                     | ✅  |
| [`no-magic-numbers`] <a id="summary-no-magic-numbers"></a>                               | 🚫                                                     | 🚫  |
| [`no-misleading-character-class`] <a id="summary-no-misleading-character-class"></a>     | ✅                                                     | ✅  |
| [`no-multi-assign`] <a id="summary-no-multi-assign"></a>                                 | ✅                                                     | 🚫  |
| [`no-multi-str`] <a id="summary-no-multi-str"></a>                                       | ✅                                                     | 🚫  |
| [`no-negated-condition`] <a id="summary-no-negated-condition"></a>                       | 🚫                                                     | 🚫  |
| [`no-nested-ternary`] <a id="summary-no-nested-ternary"></a>                             | 🚫                                                     | 🚫  |
| [`no-new`] <a id="summary-no-new"></a>                                                   | ✅                                                     | 🚫  |
| [`no-new-func`] <a id="summary-no-new-func"></a>                                         | ✅                                                     | 🚫  |
| [`no-new-native-nonconstructor`] <a id="summary-no-new-native-nonconstructor"></a>       | ✅                                                     | ✅  |
| [`no-new-wrappers`] <a id="summary-no-new-wrappers"></a>                                 | ✅                                                     | 🚫  |
| [`no-nonoctal-decimal-escape`] <a id="summary-no-nonoctal-decimal-escape"></a>           | ✅                                                     | ✅  |
| [`no-obj-calls`] <a id="summary-no-obj-calls"></a>                                       | ✅                                                     | ✅  |
| [`no-object-constructor`] <a id="summary-no-object-constructor"></a>                     | ✅                                                     | 🚫  |
| [`no-octal`] <a id="summary-no-octal"></a>                                               | ✅                                                     | ✅  |
| [`no-octal-escape`] <a id="summary-no-octal-escape"></a>                                 | ✅                                                     | 🚫  |
| [`no-param-reassign`] <a id="summary-no-param-reassign"></a>                             | ✅                                                     | 🚫  |
| [`no-plusplus`] <a id="summary-no-plusplus"></a>                                         | 🚫                                                     | 🚫  |
| [`no-promise-executor-return`] <a id="summary-no-promise-executor-return"></a>           | ✅                                                     | 🚫  |
| [`no-proto`] <a id="summary-no-proto"></a>                                               | ✅                                                     | 🚫  |
| [`no-prototype-builtins`] <a id="summary-no-prototype-builtins"></a>                     | ✅                                                     | ✅  |
| [`no-redeclare`] <a id="summary-no-redeclare"></a>                                       | ✅                                                     | ✅  |
| [`no-regex-spaces`] <a id="summary-no-regex-spaces"></a>                                 | ✅                                                     | ✅  |
| [`no-restricted-exports`] <a id="summary-no-restricted-exports"></a>                     | 🚫                                                     | 🚫  |
| [`no-restricted-globals`] <a id="summary-no-restricted-globals"></a>                     | ✅                                                     | 🚫  |
| [`no-restricted-imports`] <a id="summary-no-restricted-imports"></a>                     | 🚫                                                     | 🚫  |
| [`no-restricted-properties`] <a id="summary-no-restricted-properties"></a>               | 🚫                                                     | 🚫  |
| [`no-restricted-syntax`] <a id="summary-no-restricted-syntax"></a>                       | 🚫                                                     | 🚫  |
| [`no-return-assign`] <a id="summary-no-return-assign"></a>                               | ✅                                                     | 🚫  |
| [`no-script-url`] <a id="summary-no-script-url"></a>                                     | ✅                                                     | 🚫  |
| [`no-self-assign`] <a id="summary-no-self-assign"></a>                                   | ✅                                                     | ✅  |
| [`no-self-compare`] <a id="summary-no-self-compare"></a>                                 | ✅                                                     | 🚫  |
| [`no-sequences`] <a id="summary-no-sequences"></a>                                       | ✅                                                     | 🚫  |
| [`no-setter-return`] <a id="summary-no-setter-return"></a>                               | ✅                                                     | ✅  |
| [`no-shadow`] <a id="summary-no-shadow"></a>                                             | ✅                                                     | 🚫  |
| [`no-shadow-restricted-names`] <a id="summary-no-shadow-restricted-names"></a>           | ✅                                                     | ✅  |
| [`no-sparse-arrays`] <a id="summary-no-sparse-arrays"></a>                               | ✅                                                     | ✅  |
| [`no-template-curly-in-string`] <a id="summary-no-template-curly-in-string"></a>         | ✅                                                     | 🚫  |
| [`no-ternary`] <a id="summary-no-ternary"></a>                                           | 🚫                                                     | 🚫  |
| [`no-this-before-super`] <a id="summary-no-this-before-super"></a>                       | ✅                                                     | ✅  |
| [`no-throw-literal`] <a id="summary-no-throw-literal"></a>                               | ✅                                                     | 🚫  |
| [`no-unassigned-vars`] <a id="summary-no-unassigned-vars"></a>                           | ✅                                                     | ✅  |
| [`no-undef`] <a id="summary-no-undef"></a>                                               | ✅                                                     | ✅  |
| [`no-undef-init`] <a id="summary-no-undef-init"></a>                                     | ✅                                                     | 🚫  |
| [`no-undefined`] <a id="summary-no-undefined"></a>                                       | 🚫                                                     | 🚫  |
| [`no-underscore-dangle`] <a id="summary-no-underscore-dangle"></a>                       | 🚫                                                     | 🚫  |
| [`no-unexpected-multiline`] <a id="summary-no-unexpected-multiline"></a>                 | 🚫                                                     | ✅  |
| [`no-unmodified-loop-condition`] <a id="summary-no-unmodified-loop-condition"></a>       | ✅                                                     | 🚫  |
| [`no-unneeded-ternary`] <a id="summary-no-unneeded-ternary"></a>                         | ✅                                                     | 🚫  |
| [`no-unreachable`] <a id="summary-no-unreachable"></a>                                   | ✅                                                     | ✅  |
| [`no-unreachable-loop`] <a id="summary-no-unreachable-loop"></a>                         | ✅                                                     | 🚫  |
| [`no-unsafe-finally`] <a id="summary-no-unsafe-finally"></a>                             | ✅                                                     | ✅  |
| [`no-unsafe-negation`] <a id="summary-no-unsafe-negation"></a>                           | ✅ <a href="#rule-no-unsafe-negation">(?)</a>          | ✅  |
| [`no-unsafe-optional-chaining`] <a id="summary-no-unsafe-optional-chaining"></a>         | ✅ <a href="#rule-no-unsafe-optional-chaining">(?)</a> | ✅  |
| [`no-unused-expressions`] <a id="summary-no-unused-expressions"></a>                     | ✅                                                     | 🚫  |
| [`no-unused-labels`] <a id="summary-no-unused-labels"></a>                               | ✅                                                     | ✅  |
| [`no-unused-private-class-members`] <a id="summary-no-unused-private-class-members"></a> | ✅                                                     | ✅  |
| [`no-unused-vars`] <a id="summary-no-unused-vars"></a>                                   | ✅ <a href="#rule-no-unused-vars">(?)</a>              | ✅  |
| [`no-use-before-define`] <a id="summary-no-use-before-define"></a>                       | 🚫                                                     | 🚫  |
| [`no-useless-assignment`] <a id="summary-no-useless-assignment"></a>                     | ✅                                                     | ✅  |
| [`no-useless-backreference`] <a id="summary-no-useless-backreference"></a>               | ✅                                                     | ✅  |
| [`no-useless-call`] <a id="summary-no-useless-call"></a>                                 | ✅                                                     | 🚫  |
| [`no-useless-catch`] <a id="summary-no-useless-catch"></a>                               | ✅                                                     | ✅  |
| [`no-useless-computed-key`] <a id="summary-no-useless-computed-key"></a>                 | ✅                                                     | 🚫  |
| [`no-useless-concat`] <a id="summary-no-useless-concat"></a>                             | 🚫                                                     | 🚫  |
| [`no-useless-constructor`] <a id="summary-no-useless-constructor"></a>                   | ✅                                                     | 🚫  |
| [`no-useless-escape`] <a id="summary-no-useless-escape"></a>                             | ✅                                                     | ✅  |
| [`no-useless-rename`] <a id="summary-no-useless-rename"></a>                             | ✅                                                     | 🚫  |
| [`no-useless-return`] <a id="summary-no-useless-return"></a>                             | ✅                                                     | 🚫  |
| [`no-var`] <a id="summary-no-var"></a>                                                   | ✅                                                     | 🚫  |
| [`no-void`] <a id="summary-no-void"></a>                                                 | ✅                                                     | 🚫  |
| [`no-warning-comments`] <a id="summary-no-warning-comments"></a>                         | 🚫                                                     | 🚫  |
| [`no-with`] <a id="summary-no-with"></a>                                                 | ✅                                                     | ✅  |
| [`object-shorthand`] <a id="summary-object-shorthand"></a>                               | ✅                                                     | 🚫  |
| [`one-var`] <a id="summary-one-var"></a>                                                 | ✅                                                     | 🚫  |
| [`operator-assignment`] <a id="summary-operator-assignment"></a>                         | 🚫                                                     | 🚫  |
| [`prefer-arrow-callback`] <a id="summary-prefer-arrow-callback"></a>                     | ✅                                                     | 🚫  |
| [`prefer-const`] <a id="summary-prefer-const"></a>                                       | ✅                                                     | 🚫  |
| [`prefer-destructuring`] <a id="summary-prefer-destructuring"></a>                       | ✅                                                     | 🚫  |
| [`prefer-exponentiation-operator`] <a id="summary-prefer-exponentiation-operator"></a>   | ✅                                                     | 🚫  |
| [`prefer-named-capture-group`] <a id="summary-prefer-named-capture-group"></a>           | 🚫                                                     | 🚫  |
| [`prefer-numeric-literals`] <a id="summary-prefer-numeric-literals"></a>                 | ✅                                                     | 🚫  |
| [`prefer-object-has-own`] <a id="summary-prefer-object-has-own"></a>                     | ✅                                                     | 🚫  |
| [`prefer-object-spread`] <a id="summary-prefer-object-spread"></a>                       | ✅                                                     | 🚫  |
| [`prefer-promise-reject-errors`] <a id="summary-prefer-promise-reject-errors"></a>       | ✅                                                     | 🚫  |
| [`prefer-regex-literals`] <a id="summary-prefer-regex-literals"></a>                     | ✅                                                     | 🚫  |
| [`prefer-rest-params`] <a id="summary-prefer-rest-params"></a>                           | ✅                                                     | 🚫  |
| [`prefer-spread`] <a id="summary-prefer-spread"></a>                                     | ✅                                                     | 🚫  |
| [`prefer-template`] <a id="summary-prefer-template"></a>                                 | 🚫                                                     | 🚫  |
| [`preserve-caught-error`] <a id="summary-preserve-caught-error"></a>                     | ✅                                                     | ✅  |
| [`radix`] <a id="summary-radix"></a>                                                     | ✅                                                     | 🚫  |
| [`require-atomic-updates`] <a id="summary-require-atomic-updates"></a>                   | ✅                                                     | 🚫  |
| [`require-await`] <a id="summary-require-await"></a>                                     | 🚫                                                     | 🚫  |
| [`require-unicode-regexp`] <a id="summary-require-unicode-regexp"></a>                   | ✅                                                     | 🚫  |
| [`require-yield`] <a id="summary-require-yield"></a>                                     | ✅                                                     | ✅  |
| [`sort-imports`] <a id="summary-sort-imports"></a>                                       | 🚫                                                     | 🚫  |
| [`sort-keys`] <a id="summary-sort-keys"></a>                                             | 🚫                                                     | 🚫  |
| [`sort-vars`] <a id="summary-sort-vars"></a>                                             | 🚫                                                     | 🚫  |
| [`strict`] <a id="summary-strict"></a>                                                   | ✅                                                     | 🚫  |
| [`symbol-description`] <a id="summary-symbol-description"></a>                           | ✅                                                     | 🚫  |
| [`unicode-bom`] <a id="summary-unicode-bom"></a>                                         | ✅                                                     | 🚫  |
| [`use-isnan`] <a id="summary-use-isnan"></a>                                             | ✅                                                     | ✅  |
| [`valid-typeof`] <a id="summary-valid-typeof"></a>                                       | ✅                                                     | ✅  |
| [`vars-on-top`] <a id="summary-vars-on-top"></a>                                         | 🚫                                                     | 🚫  |
| [`yoda`] <a id="summary-yoda"></a>                                                       | ✅                                                     | 🚫  |

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

[`accessor-pairs`]: https://eslint.org/docs/latest/rules/accessor-pairs
[`array-callback-return`]: https://eslint.org/docs/latest/rules/array-callback-return
[`arrow-body-style`]: https://eslint.org/docs/latest/rules/arrow-body-style
[`block-scoped-var`]: https://eslint.org/docs/latest/rules/block-scoped-var
[`camelcase`]: https://eslint.org/docs/latest/rules/camelcase
[`capitalized-comments`]: https://eslint.org/docs/latest/rules/capitalized-comments
[`class-methods-use-this`]: https://eslint.org/docs/latest/rules/class-methods-use-this
[`complexity`]: https://eslint.org/docs/latest/rules/complexity
[`consistent-return`]: https://eslint.org/docs/latest/rules/consistent-return
[`consistent-this`]: https://eslint.org/docs/latest/rules/consistent-this
[`constructor-super`]: https://eslint.org/docs/latest/rules/constructor-super
[`curly`]: https://eslint.org/docs/latest/rules/curly
[`default-case`]: https://eslint.org/docs/latest/rules/default-case
[`default-case-last`]: https://eslint.org/docs/latest/rules/default-case-last
[`default-param-last`]: https://eslint.org/docs/latest/rules/default-param-last
[`dot-notation`]: https://eslint.org/docs/latest/rules/dot-notation
[`eqeqeq`]: https://eslint.org/docs/latest/rules/eqeqeq
[`for-direction`]: https://eslint.org/docs/latest/rules/for-direction
[`func-name-matching`]: https://eslint.org/docs/latest/rules/func-name-matching
[`func-names`]: https://eslint.org/docs/latest/rules/func-names
[`func-style`]: https://eslint.org/docs/latest/rules/func-style
[`getter-return`]: https://eslint.org/docs/latest/rules/getter-return
[`grouped-accessor-pairs`]: https://eslint.org/docs/latest/rules/grouped-accessor-pairs
[`guard-for-in`]: https://eslint.org/docs/latest/rules/guard-for-in
[`id-denylist`]: https://eslint.org/docs/latest/rules/id-denylist
[`id-length`]: https://eslint.org/docs/latest/rules/id-length
[`id-match`]: https://eslint.org/docs/latest/rules/id-match
[`init-declarations`]: https://eslint.org/docs/latest/rules/init-declarations
[`logical-assignment-operators`]: https://eslint.org/docs/latest/rules/logical-assignment-operators
[`max-classes-per-file`]: https://eslint.org/docs/latest/rules/max-classes-per-file
[`max-depth`]: https://eslint.org/docs/latest/rules/max-depth
[`max-lines`]: https://eslint.org/docs/latest/rules/max-lines
[`max-lines-per-function`]: https://eslint.org/docs/latest/rules/max-lines-per-function
[`max-nested-callbacks`]: https://eslint.org/docs/latest/rules/max-nested-callbacks
[`max-params`]: https://eslint.org/docs/latest/rules/max-params
[`max-statements`]: https://eslint.org/docs/latest/rules/max-statements
[`new-cap`]: https://eslint.org/docs/latest/rules/new-cap
[`no-alert`]: https://eslint.org/docs/latest/rules/no-alert
[`no-array-constructor`]: https://eslint.org/docs/latest/rules/no-array-constructor
[`no-async-promise-executor`]: https://eslint.org/docs/latest/rules/no-async-promise-executor
[`no-await-in-loop`]: https://eslint.org/docs/latest/rules/no-await-in-loop
[`no-bitwise`]: https://eslint.org/docs/latest/rules/no-bitwise
[`no-caller`]: https://eslint.org/docs/latest/rules/no-caller
[`no-case-declarations`]: https://eslint.org/docs/latest/rules/no-case-declarations
[`no-class-assign`]: https://eslint.org/docs/latest/rules/no-class-assign
[`no-compare-neg-zero`]: https://eslint.org/docs/latest/rules/no-compare-neg-zero
[`no-cond-assign`]: https://eslint.org/docs/latest/rules/no-cond-assign
[`no-console`]: https://eslint.org/docs/latest/rules/no-console
[`no-const-assign`]: https://eslint.org/docs/latest/rules/no-const-assign
[`no-constant-binary-expression`]: https://eslint.org/docs/latest/rules/no-constant-binary-expression
[`no-constant-condition`]: https://eslint.org/docs/latest/rules/no-constant-condition
[`no-constructor-return`]: https://eslint.org/docs/latest/rules/no-constructor-return
[`no-continue`]: https://eslint.org/docs/latest/rules/no-continue
[`no-control-regex`]: https://eslint.org/docs/latest/rules/no-control-regex
[`no-debugger`]: https://eslint.org/docs/latest/rules/no-debugger
[`no-delete-var`]: https://eslint.org/docs/latest/rules/no-delete-var
[`no-div-regex`]: https://eslint.org/docs/latest/rules/no-div-regex
[`no-dupe-args`]: https://eslint.org/docs/latest/rules/no-dupe-args
[`no-dupe-class-members`]: https://eslint.org/docs/latest/rules/no-dupe-class-members
[`no-dupe-else-if`]: https://eslint.org/docs/latest/rules/no-dupe-else-if
[`no-dupe-keys`]: https://eslint.org/docs/latest/rules/no-dupe-keys
[`no-duplicate-case`]: https://eslint.org/docs/latest/rules/no-duplicate-case
[`no-duplicate-imports`]: https://eslint.org/docs/latest/rules/no-duplicate-imports
[`no-else-return`]: https://eslint.org/docs/latest/rules/no-else-return
[`no-empty`]: https://eslint.org/docs/latest/rules/no-empty
[`no-empty-character-class`]: https://eslint.org/docs/latest/rules/no-empty-character-class
[`no-empty-function`]: https://eslint.org/docs/latest/rules/no-empty-function
[`no-empty-pattern`]: https://eslint.org/docs/latest/rules/no-empty-pattern
[`no-empty-static-block`]: https://eslint.org/docs/latest/rules/no-empty-static-block
[`no-eq-null`]: https://eslint.org/docs/latest/rules/no-eq-null
[`no-eval`]: https://eslint.org/docs/latest/rules/no-eval
[`no-ex-assign`]: https://eslint.org/docs/latest/rules/no-ex-assign
[`no-extend-native`]: https://eslint.org/docs/latest/rules/no-extend-native
[`no-extra-bind`]: https://eslint.org/docs/latest/rules/no-extra-bind
[`no-extra-boolean-cast`]: https://eslint.org/docs/latest/rules/no-extra-boolean-cast
[`no-extra-label`]: https://eslint.org/docs/latest/rules/no-extra-label
[`no-fallthrough`]: https://eslint.org/docs/latest/rules/no-fallthrough
[`no-func-assign`]: https://eslint.org/docs/latest/rules/no-func-assign
[`no-global-assign`]: https://eslint.org/docs/latest/rules/no-global-assign
[`no-implicit-coercion`]: https://eslint.org/docs/latest/rules/no-implicit-coercion
[`no-implicit-globals`]: https://eslint.org/docs/latest/rules/no-implicit-globals
[`no-implied-eval`]: https://eslint.org/docs/latest/rules/no-implied-eval
[`no-import-assign`]: https://eslint.org/docs/latest/rules/no-import-assign
[`no-inline-comments`]: https://eslint.org/docs/latest/rules/no-inline-comments
[`no-inner-declarations`]: https://eslint.org/docs/latest/rules/no-inner-declarations
[`no-invalid-regexp`]: https://eslint.org/docs/latest/rules/no-invalid-regexp
[`no-invalid-this`]: https://eslint.org/docs/latest/rules/no-invalid-this
[`no-irregular-whitespace`]: https://eslint.org/docs/latest/rules/no-irregular-whitespace
[`no-iterator`]: https://eslint.org/docs/latest/rules/no-iterator
[`no-label-var`]: https://eslint.org/docs/latest/rules/no-label-var
[`no-labels`]: https://eslint.org/docs/latest/rules/no-labels
[`no-lone-blocks`]: https://eslint.org/docs/latest/rules/no-lone-blocks
[`no-lonely-if`]: https://eslint.org/docs/latest/rules/no-lonely-if
[`no-loop-func`]: https://eslint.org/docs/latest/rules/no-loop-func
[`no-loss-of-precision`]: https://eslint.org/docs/latest/rules/no-loss-of-precision
[`no-magic-numbers`]: https://eslint.org/docs/latest/rules/no-magic-numbers
[`no-misleading-character-class`]: https://eslint.org/docs/latest/rules/no-misleading-character-class
[`no-multi-assign`]: https://eslint.org/docs/latest/rules/no-multi-assign
[`no-multi-str`]: https://eslint.org/docs/latest/rules/no-multi-str
[`no-negated-condition`]: https://eslint.org/docs/latest/rules/no-negated-condition
[`no-nested-ternary`]: https://eslint.org/docs/latest/rules/no-nested-ternary
[`no-new`]: https://eslint.org/docs/latest/rules/no-new
[`no-new-func`]: https://eslint.org/docs/latest/rules/no-new-func
[`no-new-native-nonconstructor`]: https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
[`no-new-wrappers`]: https://eslint.org/docs/latest/rules/no-new-wrappers
[`no-nonoctal-decimal-escape`]: https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape
[`no-obj-calls`]: https://eslint.org/docs/latest/rules/no-obj-calls
[`no-object-constructor`]: https://eslint.org/docs/latest/rules/no-object-constructor
[`no-octal`]: https://eslint.org/docs/latest/rules/no-octal
[`no-octal-escape`]: https://eslint.org/docs/latest/rules/no-octal-escape
[`no-param-reassign`]: https://eslint.org/docs/latest/rules/no-param-reassign
[`no-plusplus`]: https://eslint.org/docs/latest/rules/no-plusplus
[`no-promise-executor-return`]: https://eslint.org/docs/latest/rules/no-promise-executor-return
[`no-proto`]: https://eslint.org/docs/latest/rules/no-proto
[`no-prototype-builtins`]: https://eslint.org/docs/latest/rules/no-prototype-builtins
[`no-redeclare`]: https://eslint.org/docs/latest/rules/no-redeclare
[`no-regex-spaces`]: https://eslint.org/docs/latest/rules/no-regex-spaces
[`no-restricted-exports`]: https://eslint.org/docs/latest/rules/no-restricted-exports
[`no-restricted-globals`]: https://eslint.org/docs/latest/rules/no-restricted-globals
[`no-restricted-imports`]: https://eslint.org/docs/latest/rules/no-restricted-imports
[`no-restricted-properties`]: https://eslint.org/docs/latest/rules/no-restricted-properties
[`no-restricted-syntax`]: https://eslint.org/docs/latest/rules/no-restricted-syntax
[`no-return-assign`]: https://eslint.org/docs/latest/rules/no-return-assign
[`no-script-url`]: https://eslint.org/docs/latest/rules/no-script-url
[`no-self-assign`]: https://eslint.org/docs/latest/rules/no-self-assign
[`no-self-compare`]: https://eslint.org/docs/latest/rules/no-self-compare
[`no-sequences`]: https://eslint.org/docs/latest/rules/no-sequences
[`no-setter-return`]: https://eslint.org/docs/latest/rules/no-setter-return
[`no-shadow`]: https://eslint.org/docs/latest/rules/no-shadow
[`no-shadow-restricted-names`]: https://eslint.org/docs/latest/rules/no-shadow-restricted-names
[`no-sparse-arrays`]: https://eslint.org/docs/latest/rules/no-sparse-arrays
[`no-template-curly-in-string`]: https://eslint.org/docs/latest/rules/no-template-curly-in-string
[`no-ternary`]: https://eslint.org/docs/latest/rules/no-ternary
[`no-this-before-super`]: https://eslint.org/docs/latest/rules/no-this-before-super
[`no-throw-literal`]: https://eslint.org/docs/latest/rules/no-throw-literal
[`no-unassigned-vars`]: https://eslint.org/docs/latest/rules/no-unassigned-vars
[`no-undef`]: https://eslint.org/docs/latest/rules/no-undef
[`no-undef-init`]: https://eslint.org/docs/latest/rules/no-undef-init
[`no-undefined`]: https://eslint.org/docs/latest/rules/no-undefined
[`no-underscore-dangle`]: https://eslint.org/docs/latest/rules/no-underscore-dangle
[`no-unexpected-multiline`]: https://eslint.org/docs/latest/rules/no-unexpected-multiline
[`no-unmodified-loop-condition`]: https://eslint.org/docs/latest/rules/no-unmodified-loop-condition
[`no-unneeded-ternary`]: https://eslint.org/docs/latest/rules/no-unneeded-ternary
[`no-unreachable`]: https://eslint.org/docs/latest/rules/no-unreachable
[`no-unreachable-loop`]: https://eslint.org/docs/latest/rules/no-unreachable-loop
[`no-unsafe-finally`]: https://eslint.org/docs/latest/rules/no-unsafe-finally
[`no-unsafe-negation`]: https://eslint.org/docs/latest/rules/no-unsafe-negation
[`no-unsafe-optional-chaining`]: https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining
[`no-unused-expressions`]: https://eslint.org/docs/latest/rules/no-unused-expressions
[`no-unused-labels`]: https://eslint.org/docs/latest/rules/no-unused-labels
[`no-unused-private-class-members`]: https://eslint.org/docs/latest/rules/no-unused-private-class-members
[`no-unused-vars`]: https://eslint.org/docs/latest/rules/no-unused-vars
[`no-use-before-define`]: https://eslint.org/docs/latest/rules/no-use-before-define
[`no-useless-assignment`]: https://eslint.org/docs/latest/rules/no-useless-assignment
[`no-useless-backreference`]: https://eslint.org/docs/latest/rules/no-useless-backreference
[`no-useless-call`]: https://eslint.org/docs/latest/rules/no-useless-call
[`no-useless-catch`]: https://eslint.org/docs/latest/rules/no-useless-catch
[`no-useless-computed-key`]: https://eslint.org/docs/latest/rules/no-useless-computed-key
[`no-useless-concat`]: https://eslint.org/docs/latest/rules/no-useless-concat
[`no-useless-constructor`]: https://eslint.org/docs/latest/rules/no-useless-constructor
[`no-useless-escape`]: https://eslint.org/docs/latest/rules/no-useless-escape
[`no-useless-rename`]: https://eslint.org/docs/latest/rules/no-useless-rename
[`no-useless-return`]: https://eslint.org/docs/latest/rules/no-useless-return
[`no-var`]: https://eslint.org/docs/latest/rules/no-var
[`no-void`]: https://eslint.org/docs/latest/rules/no-void
[`no-warning-comments`]: https://eslint.org/docs/latest/rules/no-warning-comments
[`no-with`]: https://eslint.org/docs/latest/rules/no-with
[`object-shorthand`]: https://eslint.org/docs/latest/rules/object-shorthand
[`one-var`]: https://eslint.org/docs/latest/rules/one-var
[`operator-assignment`]: https://eslint.org/docs/latest/rules/operator-assignment
[`prefer-arrow-callback`]: https://eslint.org/docs/latest/rules/prefer-arrow-callback
[`prefer-const`]: https://eslint.org/docs/latest/rules/prefer-const
[`prefer-destructuring`]: https://eslint.org/docs/latest/rules/prefer-destructuring
[`prefer-exponentiation-operator`]: https://eslint.org/docs/latest/rules/prefer-exponentiation-operator
[`prefer-named-capture-group`]: https://eslint.org/docs/latest/rules/prefer-named-capture-group
[`prefer-numeric-literals`]: https://eslint.org/docs/latest/rules/prefer-numeric-literals
[`prefer-object-has-own`]: https://eslint.org/docs/latest/rules/prefer-object-has-own
[`prefer-object-spread`]: https://eslint.org/docs/latest/rules/prefer-object-spread
[`prefer-promise-reject-errors`]: https://eslint.org/docs/latest/rules/prefer-promise-reject-errors
[`prefer-regex-literals`]: https://eslint.org/docs/latest/rules/prefer-regex-literals
[`prefer-rest-params`]: https://eslint.org/docs/latest/rules/prefer-rest-params
[`prefer-spread`]: https://eslint.org/docs/latest/rules/prefer-spread
[`prefer-template`]: https://eslint.org/docs/latest/rules/prefer-template
[`preserve-caught-error`]: https://eslint.org/docs/latest/rules/preserve-caught-error
[`radix`]: https://eslint.org/docs/latest/rules/radix
[`require-atomic-updates`]: https://eslint.org/docs/latest/rules/require-atomic-updates
[`require-await`]: https://eslint.org/docs/latest/rules/require-await
[`require-unicode-regexp`]: https://eslint.org/docs/latest/rules/require-unicode-regexp
[`require-yield`]: https://eslint.org/docs/latest/rules/require-yield
[`sort-imports`]: https://eslint.org/docs/latest/rules/sort-imports
[`sort-keys`]: https://eslint.org/docs/latest/rules/sort-keys
[`sort-vars`]: https://eslint.org/docs/latest/rules/sort-vars
[`strict`]: https://eslint.org/docs/latest/rules/strict
[`symbol-description`]: https://eslint.org/docs/latest/rules/symbol-description
[`unicode-bom`]: https://eslint.org/docs/latest/rules/unicode-bom
[`use-isnan`]: https://eslint.org/docs/latest/rules/use-isnan
[`valid-typeof`]: https://eslint.org/docs/latest/rules/valid-typeof
[`vars-on-top`]: https://eslint.org/docs/latest/rules/vars-on-top
[`yoda`]: https://eslint.org/docs/latest/rules/yoda

<!-- END eslint -->

## @eslint-community/eslint-comments

Configurations compared:

- **P** – @priver/eslint-config
- **R** –
  [eslint-comments recommended configuration](https://eslint-community.github.io/eslint-plugin-eslint-comments/#%F0%9F%93%96-usage)

<!-- START @eslint-community/eslint-comments -->

| Rule                                                                                                                                     | P   | R   |
| ---------------------------------------------------------------------------------------------------------------------------------------- | --- | --- |
| [`@eslint-community/eslint-comments/disable-enable-pair`] <a id="summary-@eslint-community/eslint-comments/disable-enable-pair"></a>     | ✅  | ✅  |
| [`@eslint-community/eslint-comments/no-aggregating-enable`] <a id="summary-@eslint-community/eslint-comments/no-aggregating-enable"></a> | ✅  | ✅  |
| [`@eslint-community/eslint-comments/no-duplicate-disable`] <a id="summary-@eslint-community/eslint-comments/no-duplicate-disable"></a>   | ✅  | ✅  |
| [`@eslint-community/eslint-comments/no-restricted-disable`] <a id="summary-@eslint-community/eslint-comments/no-restricted-disable"></a> | 🚫  | 🚫  |
| [`@eslint-community/eslint-comments/no-unlimited-disable`] <a id="summary-@eslint-community/eslint-comments/no-unlimited-disable"></a>   | ✅  | ✅  |
| [`@eslint-community/eslint-comments/no-unused-enable`] <a id="summary-@eslint-community/eslint-comments/no-unused-enable"></a>           | ✅  | ✅  |
| [`@eslint-community/eslint-comments/no-use`] <a id="summary-@eslint-community/eslint-comments/no-use"></a>                               | 🚫  | 🚫  |
| [`@eslint-community/eslint-comments/require-description`] <a id="summary-@eslint-community/eslint-comments/require-description"></a>     | ✅  | 🚫  |

[`@eslint-community/eslint-comments/disable-enable-pair`]: https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/disable-enable-pair.html
[`@eslint-community/eslint-comments/no-aggregating-enable`]: https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-aggregating-enable.html
[`@eslint-community/eslint-comments/no-duplicate-disable`]: https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-duplicate-disable.html
[`@eslint-community/eslint-comments/no-restricted-disable`]: https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-restricted-disable.html
[`@eslint-community/eslint-comments/no-unlimited-disable`]: https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-unlimited-disable.html
[`@eslint-community/eslint-comments/no-unused-enable`]: https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-unused-enable.html
[`@eslint-community/eslint-comments/no-use`]: https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-use.html
[`@eslint-community/eslint-comments/require-description`]: https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/require-description.html

<!-- END @eslint-community/eslint-comments -->

## import-x

Configurations compared:

- **P** – @priver/eslint-config
- **R** –
  [recommended](https://github.com/un-ts/eslint-plugin-import-x/blob/master/README.md#configuration-legacy-eslintrc)

<!-- START import-x -->

| Rule                                                                                                       | P                                                 | R   |
| ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------- | --- |
| [`import-x/consistent-type-specifier-style`] <a id="summary-import-x/consistent-type-specifier-style"></a> | 🚫                                                | 🚫  |
| [`import-x/default`] <a id="summary-import-x/default"></a>                                                 | ✅                                                | ✅  |
| [`import-x/dynamic-import-chunkname`] <a id="summary-import-x/dynamic-import-chunkname"></a>               | 🚫                                                | 🚫  |
| [`import-x/export`] <a id="summary-import-x/export"></a>                                                   | ✅                                                | ✅  |
| [`import-x/exports-last`] <a id="summary-import-x/exports-last"></a>                                       | 🚫                                                | 🚫  |
| [`import-x/extensions`] <a id="summary-import-x/extensions"></a>                                           | ✅                                                | 🚫  |
| [`import-x/first`] <a id="summary-import-x/first"></a>                                                     | ✅                                                | 🚫  |
| [`import-x/group-exports`] <a id="summary-import-x/group-exports"></a>                                     | 🚫                                                | 🚫  |
| [`import-x/max-dependencies`] <a id="summary-import-x/max-dependencies"></a>                               | 🚫                                                | 🚫  |
| [`import-x/named`] <a id="summary-import-x/named"></a>                                                     | ✅                                                | ✅  |
| [`import-x/namespace`] <a id="summary-import-x/namespace"></a>                                             | ✅                                                | ✅  |
| [`import-x/newline-after-import`] <a id="summary-import-x/newline-after-import"></a>                       | 🚫                                                | 🚫  |
| [`import-x/no-absolute-path`] <a id="summary-import-x/no-absolute-path"></a>                               | ✅                                                | 🚫  |
| [`import-x/no-amd`] <a id="summary-import-x/no-amd"></a>                                                   | ✅                                                | 🚫  |
| [`import-x/no-anonymous-default-export`] <a id="summary-import-x/no-anonymous-default-export"></a>         | 🚫                                                | 🚫  |
| [`import-x/no-commonjs`] <a id="summary-import-x/no-commonjs"></a>                                         | 🚫                                                | 🚫  |
| [`import-x/no-cycle`] <a id="summary-import-x/no-cycle"></a>                                               | ✅                                                | 🚫  |
| [`import-x/no-default-export`] <a id="summary-import-x/no-default-export"></a>                             | 🚫                                                | 🚫  |
| [`import-x/no-deprecated`] <a id="summary-import-x/no-deprecated"></a>                                     | ⚠️                                                | 🚫  |
| [`import-x/no-duplicates`] <a id="summary-import-x/no-duplicates"></a>                                     | ✅ <a href="#rule-import-x/no-duplicates">(?)</a> | ⚠️  |
| [`import-x/no-dynamic-require`] <a id="summary-import-x/no-dynamic-require"></a>                           | ✅                                                | 🚫  |
| [`import-x/no-empty-named-blocks`] <a id="summary-import-x/no-empty-named-blocks"></a>                     | ✅                                                | 🚫  |
| [`import-x/no-extraneous-dependencies`] <a id="summary-import-x/no-extraneous-dependencies"></a>           | ✅                                                | 🚫  |
| [`import-x/no-import-module-exports`] <a id="summary-import-x/no-import-module-exports"></a>               | ✅                                                | 🚫  |
| [`import-x/no-internal-modules`] <a id="summary-import-x/no-internal-modules"></a>                         | 🚫                                                | 🚫  |
| [`import-x/no-mutable-exports`] <a id="summary-import-x/no-mutable-exports"></a>                           | ✅                                                | 🚫  |
| [`import-x/no-named-as-default`] <a id="summary-import-x/no-named-as-default"></a>                         | ✅                                                | ⚠️  |
| [`import-x/no-named-as-default-member`] <a id="summary-import-x/no-named-as-default-member"></a>           | ✅                                                | ⚠️  |
| [`import-x/no-named-default`] <a id="summary-import-x/no-named-default"></a>                               | ✅                                                | 🚫  |
| [`import-x/no-named-export`] <a id="summary-import-x/no-named-export"></a>                                 | 🚫                                                | 🚫  |
| [`import-x/no-namespace`] <a id="summary-import-x/no-namespace"></a>                                       | 🚫                                                | 🚫  |
| [`import-x/no-nodejs-modules`] <a id="summary-import-x/no-nodejs-modules"></a>                             | 🚫                                                | 🚫  |
| [`import-x/no-relative-packages`] <a id="summary-import-x/no-relative-packages"></a>                       | 🚫                                                | 🚫  |
| [`import-x/no-relative-parent-imports`] <a id="summary-import-x/no-relative-parent-imports"></a>           | 🚫                                                | 🚫  |
| [`import-x/no-rename-default`] <a id="summary-import-x/no-rename-default"></a>                             | 🚫                                                | 🚫  |
| [`import-x/no-restricted-paths`] <a id="summary-import-x/no-restricted-paths"></a>                         | 🚫                                                | 🚫  |
| [`import-x/no-self-import`] <a id="summary-import-x/no-self-import"></a>                                   | ✅                                                | 🚫  |
| [`import-x/no-unassigned-import`] <a id="summary-import-x/no-unassigned-import"></a>                       | 🚫                                                | 🚫  |
| [`import-x/no-unresolved`] <a id="summary-import-x/no-unresolved"></a>                                     | ✅                                                | ✅  |
| [`import-x/no-unused-modules`] <a id="summary-import-x/no-unused-modules"></a>                             | 🚫                                                | 🚫  |
| [`import-x/no-useless-path-segments`] <a id="summary-import-x/no-useless-path-segments"></a>               | ✅                                                | 🚫  |
| [`import-x/no-webpack-loader-syntax`] <a id="summary-import-x/no-webpack-loader-syntax"></a>               | ✅                                                | 🚫  |
| [`import-x/order`] <a id="summary-import-x/order"></a>                                                     | 🚫                                                | 🚫  |
| [`import-x/prefer-default-export`] <a id="summary-import-x/prefer-default-export"></a>                     | 🚫                                                | 🚫  |
| [`import-x/prefer-namespace-import`] <a id="summary-import-x/prefer-namespace-import"></a>                 | 🚫                                                | 🚫  |
| [`import-x/unambiguous`] <a id="summary-import-x/unambiguous"></a>                                         | 🚫                                                | 🚫  |

<table><tr><th colspan="2" align="left"><code>import-x/no-duplicates</code> <a href="#summary-import-x/no-duplicates">⬆️ back to summary table</a> <a id="rule-import-x/no-duplicates"></a></th></tr>
<tr><td><pre><code>[
  "error",
  {
    "prefer-inline": true
  }
]</code></pre></td><td><pre><code>"warn"</code></pre></td></tr></table>

[`import-x/consistent-type-specifier-style`]: https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/consistent-type-specifier-style.md
[`import-x/default`]: https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/default.md
[`import-x/dynamic-import-chunkname`]: https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/dynamic-import-chunkname.md
[`import-x/export`]: https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/export.md
[`import-x/exports-last`]: https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/exports-last.md
[`import-x/extensions`]: https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/extensions.md
[`import-x/first`]: https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/first.md
[`import-x/group-exports`]: https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/group-exports.md
[`import-x/max-dependencies`]: https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/max-dependencies.md
[`import-x/named`]: https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/named.md
[`import-x/namespace`]: https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/namespace.md
[`import-x/newline-after-import`]: https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/newline-after-import.md
[`import-x/no-absolute-path`]: https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-absolute-path.md
[`import-x/no-amd`]: https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-amd.md
[`import-x/no-anonymous-default-export`]: https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-anonymous-default-export.md
[`import-x/no-commonjs`]: https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-commonjs.md
[`import-x/no-cycle`]: https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-cycle.md
[`import-x/no-default-export`]: https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-default-export.md
[`import-x/no-deprecated`]: https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-deprecated.md
[`import-x/no-duplicates`]: https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-duplicates.md
[`import-x/no-dynamic-require`]: https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-dynamic-require.md
[`import-x/no-empty-named-blocks`]: https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-empty-named-blocks.md
[`import-x/no-extraneous-dependencies`]: https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-extraneous-dependencies.md
[`import-x/no-import-module-exports`]: https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-import-module-exports.md
[`import-x/no-internal-modules`]: https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-internal-modules.md
[`import-x/no-mutable-exports`]: https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-mutable-exports.md
[`import-x/no-named-as-default`]: https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-named-as-default.md
[`import-x/no-named-as-default-member`]: https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-named-as-default-member.md
[`import-x/no-named-default`]: https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-named-default.md
[`import-x/no-named-export`]: https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-named-export.md
[`import-x/no-namespace`]: https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-namespace.md
[`import-x/no-nodejs-modules`]: https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-nodejs-modules.md
[`import-x/no-relative-packages`]: https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-relative-packages.md
[`import-x/no-relative-parent-imports`]: https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-relative-parent-imports.md
[`import-x/no-rename-default`]: https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-rename-default.md
[`import-x/no-restricted-paths`]: https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-restricted-paths.md
[`import-x/no-self-import`]: https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-self-import.md
[`import-x/no-unassigned-import`]: https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-unassigned-import.md
[`import-x/no-unresolved`]: https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-unresolved.md
[`import-x/no-unused-modules`]: https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-unused-modules.md
[`import-x/no-useless-path-segments`]: https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-useless-path-segments.md
[`import-x/no-webpack-loader-syntax`]: https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/no-webpack-loader-syntax.md
[`import-x/order`]: https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/order.md
[`import-x/prefer-default-export`]: https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/prefer-default-export.md
[`import-x/prefer-namespace-import`]: https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/prefer-namespace-import.md
[`import-x/unambiguous`]: https://github.com/un-ts/eslint-plugin-import-x/blob/v4.17.1/docs/rules/unambiguous.md

<!-- END import-x -->

## unicorn

Configurations compared:

- **P** – @priver/eslint-config
- **R** –
  [recommended](https://github.com/sindresorhus/eslint-plugin-unicorn?tab=readme-ov-file#recommended-config)

<!-- START unicorn -->

| Rule                                                                                                                               | P                                                               | R   |
| ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | --- |
| [`unicorn/better-dom-traversing`] <a id="summary-unicorn/better-dom-traversing"></a>                                               | ✅                                                              | ✅  |
| [`unicorn/catch-error-name`] <a id="summary-unicorn/catch-error-name"></a>                                                         | ✅                                                              | ✅  |
| [`unicorn/class-reference-in-static-methods`] <a id="summary-unicorn/class-reference-in-static-methods"></a>                       | ✅                                                              | ✅  |
| [`unicorn/comment-content`] <a id="summary-unicorn/comment-content"></a>                                                           | ✅                                                              | 🚫  |
| [`unicorn/consistent-arrow-return-style`] <a id="summary-unicorn/consistent-arrow-return-style"></a>                               | 🚫                                                              | 🚫  |
| [`unicorn/consistent-assert`] <a id="summary-unicorn/consistent-assert"></a>                                                       | ✅                                                              | ✅  |
| [`unicorn/consistent-boolean-name`] <a id="summary-unicorn/consistent-boolean-name"></a>                                           | 🚫                                                              | ✅  |
| [`unicorn/consistent-class-member-order`] <a id="summary-unicorn/consistent-class-member-order"></a>                               | 🚫                                                              | ✅  |
| [`unicorn/consistent-compound-words`] <a id="summary-unicorn/consistent-compound-words"></a>                                       | ✅                                                              | ✅  |
| [`unicorn/consistent-conditional-object-spread`] <a id="summary-unicorn/consistent-conditional-object-spread"></a>                 | ✅                                                              | ✅  |
| [`unicorn/consistent-date-clone`] <a id="summary-unicorn/consistent-date-clone"></a>                                               | ✅                                                              | ✅  |
| [`unicorn/consistent-destructuring`] <a id="summary-unicorn/consistent-destructuring"></a>                                         | ✅                                                              | 🚫  |
| [`unicorn/consistent-empty-array-spread`] <a id="summary-unicorn/consistent-empty-array-spread"></a>                               | ✅                                                              | ✅  |
| [`unicorn/consistent-existence-index-check`] <a id="summary-unicorn/consistent-existence-index-check"></a>                         | ✅                                                              | ✅  |
| [`unicorn/consistent-export-decorator-position`] <a id="summary-unicorn/consistent-export-decorator-position"></a>                 | 🚫                                                              | ✅  |
| [`unicorn/consistent-function-scoping`] <a id="summary-unicorn/consistent-function-scoping"></a>                                   | ✅                                                              | ✅  |
| [`unicorn/consistent-function-style`] <a id="summary-unicorn/consistent-function-style"></a>                                       | 🚫                                                              | 🚫  |
| [`unicorn/consistent-json-file-read`] <a id="summary-unicorn/consistent-json-file-read"></a>                                       | ✅                                                              | ✅  |
| [`unicorn/consistent-optional-chaining`] <a id="summary-unicorn/consistent-optional-chaining"></a>                                 | ✅                                                              | ✅  |
| [`unicorn/consistent-template-literal-escape`] <a id="summary-unicorn/consistent-template-literal-escape"></a>                     | ✅                                                              | ✅  |
| [`unicorn/consistent-tuple-labels`] <a id="summary-unicorn/consistent-tuple-labels"></a>                                           | ✅                                                              | ✅  |
| [`unicorn/custom-error-definition`] <a id="summary-unicorn/custom-error-definition"></a>                                           | ✅                                                              | 🚫  |
| [`unicorn/default-export-style`] <a id="summary-unicorn/default-export-style"></a>                                                 | ✅                                                              | ✅  |
| [`unicorn/dom-node-dataset`] <a id="summary-unicorn/dom-node-dataset"></a>                                                         | ✅                                                              | ✅  |
| [`unicorn/empty-brace-spaces`] <a id="summary-unicorn/empty-brace-spaces"></a>                                                     | 🚫                                                              | ✅  |
| [`unicorn/error-message`] <a id="summary-unicorn/error-message"></a>                                                               | ✅                                                              | ✅  |
| [`unicorn/escape-case`] <a id="summary-unicorn/escape-case"></a>                                                                   | ✅                                                              | ✅  |
| [`unicorn/expiring-todo-comments`] <a id="summary-unicorn/expiring-todo-comments"></a>                                             | ⚠️ <a href="#rule-unicorn/expiring-todo-comments">(?)</a>       | ✅  |
| [`unicorn/explicit-length-check`] <a id="summary-unicorn/explicit-length-check"></a>                                               | ✅                                                              | ✅  |
| [`unicorn/explicit-timer-delay`] <a id="summary-unicorn/explicit-timer-delay"></a>                                                 | ✅                                                              | ✅  |
| [`unicorn/filename-case`] <a id="summary-unicorn/filename-case"></a>                                                               | ✅                                                              | ✅  |
| [`unicorn/id-match`] <a id="summary-unicorn/id-match"></a>                                                                         | 🚫                                                              | 🚫  |
| [`unicorn/import-style`] <a id="summary-unicorn/import-style"></a>                                                                 | ✅ <a href="#rule-unicorn/import-style">(?)</a>                 | ✅  |
| [`unicorn/isolated-functions`] <a id="summary-unicorn/isolated-functions"></a>                                                     | ✅                                                              | ✅  |
| [`unicorn/iteration-fallback-style`] <a id="summary-unicorn/iteration-fallback-style"></a>                                         | 🚫                                                              | 🚫  |
| [`unicorn/logical-assignment-operators`] <a id="summary-unicorn/logical-assignment-operators"></a>                                 | ✅ <a href="#rule-unicorn/logical-assignment-operators">(?)</a> | ✅  |
| [`unicorn/max-nested-calls`] <a id="summary-unicorn/max-nested-calls"></a>                                                         | 🚫                                                              | ✅  |
| [`unicorn/name-replacements`] <a id="summary-unicorn/name-replacements"></a>                                                       | 🚫                                                              | ✅  |
| [`unicorn/new-for-builtins`] <a id="summary-unicorn/new-for-builtins"></a>                                                         | ✅                                                              | ✅  |
| [`unicorn/no-abusive-eslint-disable`] <a id="summary-unicorn/no-abusive-eslint-disable"></a>                                       | 🚫                                                              | ✅  |
| [`unicorn/no-accessor-recursion`] <a id="summary-unicorn/no-accessor-recursion"></a>                                               | ✅                                                              | ✅  |
| [`unicorn/no-accidental-bitwise-operator`] <a id="summary-unicorn/no-accidental-bitwise-operator"></a>                             | 🚫                                                              | ✅  |
| [`unicorn/no-anonymous-default-export`] <a id="summary-unicorn/no-anonymous-default-export"></a>                                   | ✅                                                              | ✅  |
| [`unicorn/no-array-callback-reference`] <a id="summary-unicorn/no-array-callback-reference"></a>                                   | ✅                                                              | ✅  |
| [`unicorn/no-array-concat-in-loop`] <a id="summary-unicorn/no-array-concat-in-loop"></a>                                           | ✅                                                              | ✅  |
| [`unicorn/no-array-fill-with-reference-type`] <a id="summary-unicorn/no-array-fill-with-reference-type"></a>                       | ✅                                                              | ✅  |
| [`unicorn/no-array-from-fill`] <a id="summary-unicorn/no-array-from-fill"></a>                                                     | ✅                                                              | ✅  |
| [`unicorn/no-array-front-mutation`] <a id="summary-unicorn/no-array-front-mutation"></a>                                           | 🚫                                                              | 🚫  |
| [`unicorn/no-array-method-this-argument`] <a id="summary-unicorn/no-array-method-this-argument"></a>                               | ✅                                                              | ✅  |
| [`unicorn/no-array-reduce`] <a id="summary-unicorn/no-array-reduce"></a>                                                           | ✅                                                              | ✅  |
| [`unicorn/no-array-reverse`] <a id="summary-unicorn/no-array-reverse"></a>                                                         | ✅                                                              | ✅  |
| [`unicorn/no-array-sort`] <a id="summary-unicorn/no-array-sort"></a>                                                               | ✅                                                              | ✅  |
| [`unicorn/no-array-sort-for-min-max`] <a id="summary-unicorn/no-array-sort-for-min-max"></a>                                       | ✅                                                              | ✅  |
| [`unicorn/no-array-splice`] <a id="summary-unicorn/no-array-splice"></a>                                                           | ✅                                                              | ✅  |
| [`unicorn/no-asterisk-prefix-in-documentation-comments`] <a id="summary-unicorn/no-asterisk-prefix-in-documentation-comments"></a> | 🚫                                                              | 🚫  |
| [`unicorn/no-async-promise-finally`] <a id="summary-unicorn/no-async-promise-finally"></a>                                         | ✅                                                              | ✅  |
| [`unicorn/no-await-expression-member`] <a id="summary-unicorn/no-await-expression-member"></a>                                     | ✅                                                              | ✅  |
| [`unicorn/no-await-in-promise-methods`] <a id="summary-unicorn/no-await-in-promise-methods"></a>                                   | ✅                                                              | ✅  |
| [`unicorn/no-barrel-files`] <a id="summary-unicorn/no-barrel-files"></a>                                                           | ✅                                                              | 🚫  |
| [`unicorn/no-blob-to-file`] <a id="summary-unicorn/no-blob-to-file"></a>                                                           | ✅                                                              | ✅  |
| [`unicorn/no-boolean-sort-comparator`] <a id="summary-unicorn/no-boolean-sort-comparator"></a>                                     | ✅                                                              | ✅  |
| [`unicorn/no-break-in-nested-loop`] <a id="summary-unicorn/no-break-in-nested-loop"></a>                                           | ✅                                                              | ✅  |
| [`unicorn/no-canvas-to-image`] <a id="summary-unicorn/no-canvas-to-image"></a>                                                     | ✅                                                              | ✅  |
| [`unicorn/no-chained-comparison`] <a id="summary-unicorn/no-chained-comparison"></a>                                               | ✅                                                              | ✅  |
| [`unicorn/no-collection-bracket-access`] <a id="summary-unicorn/no-collection-bracket-access"></a>                                 | ✅                                                              | ✅  |
| [`unicorn/no-computed-property-existence-check`] <a id="summary-unicorn/no-computed-property-existence-check"></a>                 | ✅                                                              | ✅  |
| [`unicorn/no-confusing-array-splice`] <a id="summary-unicorn/no-confusing-array-splice"></a>                                       | ✅                                                              | ✅  |
| [`unicorn/no-confusing-array-with`] <a id="summary-unicorn/no-confusing-array-with"></a>                                           | ✅                                                              | ✅  |
| [`unicorn/no-console-spaces`] <a id="summary-unicorn/no-console-spaces"></a>                                                       | ✅                                                              | ✅  |
| [`unicorn/no-constant-zero-expression`] <a id="summary-unicorn/no-constant-zero-expression"></a>                                   | ✅                                                              | ✅  |
| [`unicorn/no-declarations-before-early-exit`] <a id="summary-unicorn/no-declarations-before-early-exit"></a>                       | ✅                                                              | ✅  |
| [`unicorn/no-document-cookie`] <a id="summary-unicorn/no-document-cookie"></a>                                                     | ✅                                                              | ✅  |
| [`unicorn/no-double-comparison`] <a id="summary-unicorn/no-double-comparison"></a>                                                 | ✅                                                              | ✅  |
| [`unicorn/no-duplicate-if-branches`] <a id="summary-unicorn/no-duplicate-if-branches"></a>                                         | ✅                                                              | ✅  |
| [`unicorn/no-duplicate-logical-operands`] <a id="summary-unicorn/no-duplicate-logical-operands"></a>                               | ✅                                                              | ✅  |
| [`unicorn/no-duplicate-loops`] <a id="summary-unicorn/no-duplicate-loops"></a>                                                     | ✅                                                              | ✅  |
| [`unicorn/no-duplicate-set-values`] <a id="summary-unicorn/no-duplicate-set-values"></a>                                           | ✅                                                              | ✅  |
| [`unicorn/no-empty-file`] <a id="summary-unicorn/no-empty-file"></a>                                                               | ✅                                                              | ✅  |
| [`unicorn/no-error-property-assignment`] <a id="summary-unicorn/no-error-property-assignment"></a>                                 | ✅                                                              | ✅  |
| [`unicorn/no-exports-in-scripts`] <a id="summary-unicorn/no-exports-in-scripts"></a>                                               | ✅                                                              | ✅  |
| [`unicorn/no-for-each`] <a id="summary-unicorn/no-for-each"></a>                                                                   | ✅                                                              | ✅  |
| [`unicorn/no-for-loop`] <a id="summary-unicorn/no-for-loop"></a>                                                                   | ✅                                                              | ✅  |
| [`unicorn/no-global-object-property-assignment`] <a id="summary-unicorn/no-global-object-property-assignment"></a>                 | ✅                                                              | ✅  |
| [`unicorn/no-immediate-mutation`] <a id="summary-unicorn/no-immediate-mutation"></a>                                               | ✅                                                              | ✅  |
| [`unicorn/no-impossible-length-comparison`] <a id="summary-unicorn/no-impossible-length-comparison"></a>                           | ✅                                                              | ✅  |
| [`unicorn/no-incorrect-query-selector`] <a id="summary-unicorn/no-incorrect-query-selector"></a>                                   | ✅                                                              | ✅  |
| [`unicorn/no-incorrect-template-string-interpolation`] <a id="summary-unicorn/no-incorrect-template-string-interpolation"></a>     | ✅                                                              | ✅  |
| [`unicorn/no-instanceof-builtins`] <a id="summary-unicorn/no-instanceof-builtins"></a>                                             | ✅                                                              | ✅  |
| [`unicorn/no-invalid-argument-count`] <a id="summary-unicorn/no-invalid-argument-count"></a>                                       | ✅                                                              | ✅  |
| [`unicorn/no-invalid-character-comparison`] <a id="summary-unicorn/no-invalid-character-comparison"></a>                           | ✅                                                              | ✅  |
| [`unicorn/no-invalid-fetch-options`] <a id="summary-unicorn/no-invalid-fetch-options"></a>                                         | ✅                                                              | ✅  |
| [`unicorn/no-invalid-file-input-accept`] <a id="summary-unicorn/no-invalid-file-input-accept"></a>                                 | 🚫                                                              | 🚫  |
| [`unicorn/no-invalid-remove-event-listener`] <a id="summary-unicorn/no-invalid-remove-event-listener"></a>                         | ✅                                                              | ✅  |
| [`unicorn/no-invalid-well-known-symbol-methods`] <a id="summary-unicorn/no-invalid-well-known-symbol-methods"></a>                 | ✅                                                              | ✅  |
| [`unicorn/no-keyword-prefix`] <a id="summary-unicorn/no-keyword-prefix"></a>                                                       | 🚫                                                              | 🚫  |
| [`unicorn/no-late-current-target-access`] <a id="summary-unicorn/no-late-current-target-access"></a>                               | ✅                                                              | ✅  |
| [`unicorn/no-late-event-control`] <a id="summary-unicorn/no-late-event-control"></a>                                               | ✅                                                              | ✅  |
| [`unicorn/no-lonely-if`] <a id="summary-unicorn/no-lonely-if"></a>                                                                 | ✅                                                              | ✅  |
| [`unicorn/no-loop-iterable-mutation`] <a id="summary-unicorn/no-loop-iterable-mutation"></a>                                       | ✅                                                              | ✅  |
| [`unicorn/no-magic-array-flat-depth`] <a id="summary-unicorn/no-magic-array-flat-depth"></a>                                       | ✅                                                              | ✅  |
| [`unicorn/no-manually-wrapped-comments`] <a id="summary-unicorn/no-manually-wrapped-comments"></a>                                 | 🚫                                                              | 🚫  |
| [`unicorn/no-mismatched-map-key`] <a id="summary-unicorn/no-mismatched-map-key"></a>                                               | ✅                                                              | ✅  |
| [`unicorn/no-misrefactored-assignment`] <a id="summary-unicorn/no-misrefactored-assignment"></a>                                   | ✅                                                              | ✅  |
| [`unicorn/no-missing-local-resource`] <a id="summary-unicorn/no-missing-local-resource"></a>                                       | 🚫                                                              | 🚫  |
| [`unicorn/no-multiple-promise-resolver-calls`] <a id="summary-unicorn/no-multiple-promise-resolver-calls"></a>                     | ✅                                                              | ✅  |
| [`unicorn/no-named-default`] <a id="summary-unicorn/no-named-default"></a>                                                         | 🚫                                                              | ✅  |
| [`unicorn/no-negated-array-predicate`] <a id="summary-unicorn/no-negated-array-predicate"></a>                                     | ✅                                                              | ✅  |
| [`unicorn/no-negated-comparison`] <a id="summary-unicorn/no-negated-comparison"></a>                                               | ✅                                                              | ✅  |
| [`unicorn/no-negated-condition`] <a id="summary-unicorn/no-negated-condition"></a>                                                 | ✅                                                              | ✅  |
| [`unicorn/no-negation-in-equality-check`] <a id="summary-unicorn/no-negation-in-equality-check"></a>                               | ✅                                                              | ✅  |
| [`unicorn/no-nested-ternary`] <a id="summary-unicorn/no-nested-ternary"></a>                                                       | 🚫                                                              | ✅  |
| [`unicorn/no-new-array`] <a id="summary-unicorn/no-new-array"></a>                                                                 | ✅                                                              | ✅  |
| [`unicorn/no-new-buffer`] <a id="summary-unicorn/no-new-buffer"></a>                                                               | ✅                                                              | ✅  |
| [`unicorn/no-non-function-verb-prefix`] <a id="summary-unicorn/no-non-function-verb-prefix"></a>                                   | 🚫                                                              | ✅  |
| [`unicorn/no-nonstandard-builtin-properties`] <a id="summary-unicorn/no-nonstandard-builtin-properties"></a>                       | ✅                                                              | ✅  |
| [`unicorn/no-null`] <a id="summary-unicorn/no-null"></a>                                                                           | 🚫                                                              | ✅  |
| [`unicorn/no-object-as-default-parameter`] <a id="summary-unicorn/no-object-as-default-parameter"></a>                             | ✅                                                              | ✅  |
| [`unicorn/no-object-methods-with-collections`] <a id="summary-unicorn/no-object-methods-with-collections"></a>                     | ✅                                                              | ✅  |
| [`unicorn/no-optional-chaining-on-undeclared-variable`] <a id="summary-unicorn/no-optional-chaining-on-undeclared-variable"></a>   | ✅                                                              | ✅  |
| [`unicorn/no-process-exit`] <a id="summary-unicorn/no-process-exit"></a>                                                           | ✅                                                              | ✅  |
| [`unicorn/no-redundant-comparison`] <a id="summary-unicorn/no-redundant-comparison"></a>                                           | ✅                                                              | ✅  |
| [`unicorn/no-return-array-push`] <a id="summary-unicorn/no-return-array-push"></a>                                                 | ✅                                                              | ✅  |
| [`unicorn/no-selector-as-dom-name`] <a id="summary-unicorn/no-selector-as-dom-name"></a>                                           | ✅                                                              | ✅  |
| [`unicorn/no-shorthand-property-overrides`] <a id="summary-unicorn/no-shorthand-property-overrides"></a>                           | 🚫                                                              | ✅  |
| [`unicorn/no-single-promise-in-promise-methods`] <a id="summary-unicorn/no-single-promise-in-promise-methods"></a>                 | ✅                                                              | ✅  |
| [`unicorn/no-static-only-class`] <a id="summary-unicorn/no-static-only-class"></a>                                                 | ✅                                                              | ✅  |
| [`unicorn/no-subtraction-comparison`] <a id="summary-unicorn/no-subtraction-comparison"></a>                                       | ✅                                                              | ✅  |
| [`unicorn/no-thenable`] <a id="summary-unicorn/no-thenable"></a>                                                                   | ✅                                                              | ✅  |
| [`unicorn/no-this-assignment`] <a id="summary-unicorn/no-this-assignment"></a>                                                     | ✅                                                              | ✅  |
| [`unicorn/no-this-outside-of-class`] <a id="summary-unicorn/no-this-outside-of-class"></a>                                         | ✅                                                              | ✅  |
| [`unicorn/no-top-level-assignment-in-function`] <a id="summary-unicorn/no-top-level-assignment-in-function"></a>                   | ✅                                                              | ✅  |
| [`unicorn/no-top-level-side-effects`] <a id="summary-unicorn/no-top-level-side-effects"></a>                                       | ✅                                                              | ✅  |
| [`unicorn/no-transition-all`] <a id="summary-unicorn/no-transition-all"></a>                                                       | 🚫                                                              | ✅  |
| [`unicorn/no-typeof-undefined`] <a id="summary-unicorn/no-typeof-undefined"></a>                                                   | ✅                                                              | ✅  |
| [`unicorn/no-uncalled-method`] <a id="summary-unicorn/no-uncalled-method"></a>                                                     | ✅                                                              | ✅  |
| [`unicorn/no-undeclared-class-members`] <a id="summary-unicorn/no-undeclared-class-members"></a>                                   | ✅                                                              | ✅  |
| [`unicorn/no-unnecessary-array-flat-depth`] <a id="summary-unicorn/no-unnecessary-array-flat-depth"></a>                           | ✅                                                              | ✅  |
| [`unicorn/no-unnecessary-array-flat-map`] <a id="summary-unicorn/no-unnecessary-array-flat-map"></a>                               | ✅                                                              | ✅  |
| [`unicorn/no-unnecessary-array-splice-count`] <a id="summary-unicorn/no-unnecessary-array-splice-count"></a>                       | ✅                                                              | ✅  |
| [`unicorn/no-unnecessary-await`] <a id="summary-unicorn/no-unnecessary-await"></a>                                                 | ✅                                                              | ✅  |
| [`unicorn/no-unnecessary-boolean-comparison`] <a id="summary-unicorn/no-unnecessary-boolean-comparison"></a>                       | ✅                                                              | ✅  |
| [`unicorn/no-unnecessary-fetch-options`] <a id="summary-unicorn/no-unnecessary-fetch-options"></a>                                 | ✅                                                              | ✅  |
| [`unicorn/no-unnecessary-global-this`] <a id="summary-unicorn/no-unnecessary-global-this"></a>                                     | ✅                                                              | ✅  |
| [`unicorn/no-unnecessary-nested-ternary`] <a id="summary-unicorn/no-unnecessary-nested-ternary"></a>                               | ✅                                                              | ✅  |
| [`unicorn/no-unnecessary-polyfills`] <a id="summary-unicorn/no-unnecessary-polyfills"></a>                                         | ✅                                                              | ✅  |
| [`unicorn/no-unnecessary-slice-end`] <a id="summary-unicorn/no-unnecessary-slice-end"></a>                                         | ✅                                                              | ✅  |
| [`unicorn/no-unnecessary-splice`] <a id="summary-unicorn/no-unnecessary-splice"></a>                                               | ✅                                                              | ✅  |
| [`unicorn/no-unnecessary-string-trim`] <a id="summary-unicorn/no-unnecessary-string-trim"></a>                                     | ✅                                                              | ✅  |
| [`unicorn/no-unreadable-array-destructuring`] <a id="summary-unicorn/no-unreadable-array-destructuring"></a>                       | ✅                                                              | ✅  |
| [`unicorn/no-unreadable-for-of-expression`] <a id="summary-unicorn/no-unreadable-for-of-expression"></a>                           | ✅                                                              | ✅  |
| [`unicorn/no-unreadable-iife`] <a id="summary-unicorn/no-unreadable-iife"></a>                                                     | ✅                                                              | ✅  |
| [`unicorn/no-unreadable-new-expression`] <a id="summary-unicorn/no-unreadable-new-expression"></a>                                 | 🚫                                                              | 🚫  |
| [`unicorn/no-unreadable-object-destructuring`] <a id="summary-unicorn/no-unreadable-object-destructuring"></a>                     | ✅                                                              | ✅  |
| [`unicorn/no-unsafe-buffer-conversion`] <a id="summary-unicorn/no-unsafe-buffer-conversion"></a>                                   | ✅                                                              | ✅  |
| [`unicorn/no-unsafe-dom-html`] <a id="summary-unicorn/no-unsafe-dom-html"></a>                                                     | 🚫                                                              | 🚫  |
| [`unicorn/no-unsafe-promise-all-settled-values`] <a id="summary-unicorn/no-unsafe-promise-all-settled-values"></a>                 | ✅                                                              | ✅  |
| [`unicorn/no-unsafe-property-key`] <a id="summary-unicorn/no-unsafe-property-key"></a>                                             | ✅                                                              | ✅  |
| [`unicorn/no-unsafe-sqlite-interpolation`] <a id="summary-unicorn/no-unsafe-sqlite-interpolation"></a>                             | ✅                                                              | ✅  |
| [`unicorn/no-unsafe-string-replacement`] <a id="summary-unicorn/no-unsafe-string-replacement"></a>                                 | ✅                                                              | ✅  |
| [`unicorn/no-unused-array-method-return`] <a id="summary-unicorn/no-unused-array-method-return"></a>                               | ✅                                                              | ✅  |
| [`unicorn/no-unused-properties`] <a id="summary-unicorn/no-unused-properties"></a>                                                 | 🚫                                                              | 🚫  |
| [`unicorn/no-useless-boolean-cast`] <a id="summary-unicorn/no-useless-boolean-cast"></a>                                           | ✅                                                              | ✅  |
| [`unicorn/no-useless-coercion`] <a id="summary-unicorn/no-useless-coercion"></a>                                                   | ✅                                                              | ✅  |
| [`unicorn/no-useless-collection-argument`] <a id="summary-unicorn/no-useless-collection-argument"></a>                             | ✅                                                              | ✅  |
| [`unicorn/no-useless-compound-assignment`] <a id="summary-unicorn/no-useless-compound-assignment"></a>                             | ✅                                                              | ✅  |
| [`unicorn/no-useless-concat`] <a id="summary-unicorn/no-useless-concat"></a>                                                       | ✅                                                              | ✅  |
| [`unicorn/no-useless-continue`] <a id="summary-unicorn/no-useless-continue"></a>                                                   | ✅                                                              | ✅  |
| [`unicorn/no-useless-delete-check`] <a id="summary-unicorn/no-useless-delete-check"></a>                                           | ✅                                                              | ✅  |
| [`unicorn/no-useless-else`] <a id="summary-unicorn/no-useless-else"></a>                                                           | ✅                                                              | ✅  |
| [`unicorn/no-useless-error-capture-stack-trace`] <a id="summary-unicorn/no-useless-error-capture-stack-trace"></a>                 | ✅                                                              | ✅  |
| [`unicorn/no-useless-fallback-in-spread`] <a id="summary-unicorn/no-useless-fallback-in-spread"></a>                               | ✅                                                              | ✅  |
| [`unicorn/no-useless-iterator-to-array`] <a id="summary-unicorn/no-useless-iterator-to-array"></a>                                 | ✅                                                              | ✅  |
| [`unicorn/no-useless-length-check`] <a id="summary-unicorn/no-useless-length-check"></a>                                           | ✅                                                              | ✅  |
| [`unicorn/no-useless-logical-operand`] <a id="summary-unicorn/no-useless-logical-operand"></a>                                     | ✅                                                              | ✅  |
| [`unicorn/no-useless-override`] <a id="summary-unicorn/no-useless-override"></a>                                                   | ✅                                                              | ✅  |
| [`unicorn/no-useless-promise-resolve-reject`] <a id="summary-unicorn/no-useless-promise-resolve-reject"></a>                       | ✅                                                              | ✅  |
| [`unicorn/no-useless-re-export`] <a id="summary-unicorn/no-useless-re-export"></a>                                                 | ✅                                                              | ✅  |
| [`unicorn/no-useless-recursion`] <a id="summary-unicorn/no-useless-recursion"></a>                                                 | ✅                                                              | ✅  |
| [`unicorn/no-useless-spread`] <a id="summary-unicorn/no-useless-spread"></a>                                                       | ✅                                                              | ✅  |
| [`unicorn/no-useless-switch-case`] <a id="summary-unicorn/no-useless-switch-case"></a>                                             | ✅                                                              | ✅  |
| [`unicorn/no-useless-template-literals`] <a id="summary-unicorn/no-useless-template-literals"></a>                                 | ✅                                                              | ✅  |
| [`unicorn/no-useless-undefined`] <a id="summary-unicorn/no-useless-undefined"></a>                                                 | ✅                                                              | ✅  |
| [`unicorn/no-xor-as-exponentiation`] <a id="summary-unicorn/no-xor-as-exponentiation"></a>                                         | ✅                                                              | ✅  |
| [`unicorn/no-zero-fractions`] <a id="summary-unicorn/no-zero-fractions"></a>                                                       | ✅                                                              | ✅  |
| [`unicorn/number-literal-case`] <a id="summary-unicorn/number-literal-case"></a>                                                   | 🚫                                                              | ✅  |
| [`unicorn/numeric-separators-style`] <a id="summary-unicorn/numeric-separators-style"></a>                                         | ✅                                                              | ✅  |
| [`unicorn/operator-assignment`] <a id="summary-unicorn/operator-assignment"></a>                                                   | ✅ <a href="#rule-unicorn/operator-assignment">(?)</a>          | ✅  |
| [`unicorn/prefer-abort-signal-any`] <a id="summary-unicorn/prefer-abort-signal-any"></a>                                           | ✅                                                              | ✅  |
| [`unicorn/prefer-abort-signal-timeout`] <a id="summary-unicorn/prefer-abort-signal-timeout"></a>                                   | ✅                                                              | ✅  |
| [`unicorn/prefer-add-event-listener`] <a id="summary-unicorn/prefer-add-event-listener"></a>                                       | ✅                                                              | ✅  |
| [`unicorn/prefer-add-event-listener-options`] <a id="summary-unicorn/prefer-add-event-listener-options"></a>                       | ✅                                                              | ✅  |
| [`unicorn/prefer-aggregate-error`] <a id="summary-unicorn/prefer-aggregate-error"></a>                                             | ✅                                                              | ✅  |
| [`unicorn/prefer-array-find`] <a id="summary-unicorn/prefer-array-find"></a>                                                       | ✅                                                              | ✅  |
| [`unicorn/prefer-array-flat`] <a id="summary-unicorn/prefer-array-flat"></a>                                                       | ✅                                                              | ✅  |
| [`unicorn/prefer-array-flat-map`] <a id="summary-unicorn/prefer-array-flat-map"></a>                                               | ✅                                                              | ✅  |
| [`unicorn/prefer-array-from-async`] <a id="summary-unicorn/prefer-array-from-async"></a>                                           | ✅                                                              | ✅  |
| [`unicorn/prefer-array-from-map`] <a id="summary-unicorn/prefer-array-from-map"></a>                                               | ✅                                                              | ✅  |
| [`unicorn/prefer-array-from-range`] <a id="summary-unicorn/prefer-array-from-range"></a>                                           | ✅                                                              | ✅  |
| [`unicorn/prefer-array-index-of`] <a id="summary-unicorn/prefer-array-index-of"></a>                                               | ✅                                                              | ✅  |
| [`unicorn/prefer-array-iterable-methods`] <a id="summary-unicorn/prefer-array-iterable-methods"></a>                               | ✅                                                              | ✅  |
| [`unicorn/prefer-array-last-methods`] <a id="summary-unicorn/prefer-array-last-methods"></a>                                       | ✅                                                              | ✅  |
| [`unicorn/prefer-array-slice`] <a id="summary-unicorn/prefer-array-slice"></a>                                                     | ✅                                                              | ✅  |
| [`unicorn/prefer-array-some`] <a id="summary-unicorn/prefer-array-some"></a>                                                       | ✅                                                              | ✅  |
| [`unicorn/prefer-at`] <a id="summary-unicorn/prefer-at"></a>                                                                       | ✅                                                              | ✅  |
| [`unicorn/prefer-await`] <a id="summary-unicorn/prefer-await"></a>                                                                 | ✅                                                              | ✅  |
| [`unicorn/prefer-bigint-literals`] <a id="summary-unicorn/prefer-bigint-literals"></a>                                             | ✅                                                              | ✅  |
| [`unicorn/prefer-blob-reading-methods`] <a id="summary-unicorn/prefer-blob-reading-methods"></a>                                   | ✅                                                              | ✅  |
| [`unicorn/prefer-block-statement-over-iife`] <a id="summary-unicorn/prefer-block-statement-over-iife"></a>                         | ✅                                                              | ✅  |
| [`unicorn/prefer-boolean-return`] <a id="summary-unicorn/prefer-boolean-return"></a>                                               | ✅                                                              | ✅  |
| [`unicorn/prefer-class-fields`] <a id="summary-unicorn/prefer-class-fields"></a>                                                   | ✅                                                              | ✅  |
| [`unicorn/prefer-classlist-toggle`] <a id="summary-unicorn/prefer-classlist-toggle"></a>                                           | ✅                                                              | ✅  |
| [`unicorn/prefer-code-point`] <a id="summary-unicorn/prefer-code-point"></a>                                                       | ✅                                                              | ✅  |
| [`unicorn/prefer-continue`] <a id="summary-unicorn/prefer-continue"></a>                                                           | 🚫                                                              | ✅  |
| [`unicorn/prefer-date-now`] <a id="summary-unicorn/prefer-date-now"></a>                                                           | ✅                                                              | ✅  |
| [`unicorn/prefer-default-parameters`] <a id="summary-unicorn/prefer-default-parameters"></a>                                       | ✅                                                              | ✅  |
| [`unicorn/prefer-direct-iteration`] <a id="summary-unicorn/prefer-direct-iteration"></a>                                           | ✅                                                              | ✅  |
| [`unicorn/prefer-dispose`] <a id="summary-unicorn/prefer-dispose"></a>                                                             | ✅                                                              | 🚫  |
| [`unicorn/prefer-dom-node-append`] <a id="summary-unicorn/prefer-dom-node-append"></a>                                             | ✅                                                              | ✅  |
| [`unicorn/prefer-dom-node-html-methods`] <a id="summary-unicorn/prefer-dom-node-html-methods"></a>                                 | ✅                                                              | ✅  |
| [`unicorn/prefer-dom-node-remove`] <a id="summary-unicorn/prefer-dom-node-remove"></a>                                             | ✅                                                              | ✅  |
| [`unicorn/prefer-dom-node-replace-children`] <a id="summary-unicorn/prefer-dom-node-replace-children"></a>                         | ✅                                                              | ✅  |
| [`unicorn/prefer-dom-node-text-content`] <a id="summary-unicorn/prefer-dom-node-text-content"></a>                                 | ✅                                                              | ✅  |
| [`unicorn/prefer-early-return`] <a id="summary-unicorn/prefer-early-return"></a>                                                   | ✅                                                              | ✅  |
| [`unicorn/prefer-else-if`] <a id="summary-unicorn/prefer-else-if"></a>                                                             | ✅                                                              | ✅  |
| [`unicorn/prefer-error-is-error`] <a id="summary-unicorn/prefer-error-is-error"></a>                                               | 🚫                                                              | 🚫  |
| [`unicorn/prefer-event-target`] <a id="summary-unicorn/prefer-event-target"></a>                                                   | ✅                                                              | ✅  |
| [`unicorn/prefer-explicit-viewport-units`] <a id="summary-unicorn/prefer-explicit-viewport-units"></a>                             | 🚫                                                              | 🚫  |
| [`unicorn/prefer-export-from`] <a id="summary-unicorn/prefer-export-from"></a>                                                     | ✅                                                              | ✅  |
| [`unicorn/prefer-flat-math-min-max`] <a id="summary-unicorn/prefer-flat-math-min-max"></a>                                         | ✅                                                              | ✅  |
| [`unicorn/prefer-get-or-insert-computed`] <a id="summary-unicorn/prefer-get-or-insert-computed"></a>                               | ✅                                                              | ✅  |
| [`unicorn/prefer-global-number-constants`] <a id="summary-unicorn/prefer-global-number-constants"></a>                             | ✅                                                              | ✅  |
| [`unicorn/prefer-global-this`] <a id="summary-unicorn/prefer-global-this"></a>                                                     | ✅                                                              | ✅  |
| [`unicorn/prefer-group-by`] <a id="summary-unicorn/prefer-group-by"></a>                                                           | ✅                                                              | ✅  |
| [`unicorn/prefer-has-check`] <a id="summary-unicorn/prefer-has-check"></a>                                                         | ✅                                                              | ✅  |
| [`unicorn/prefer-hoisting-branch-code`] <a id="summary-unicorn/prefer-hoisting-branch-code"></a>                                   | ✅                                                              | ✅  |
| [`unicorn/prefer-https`] <a id="summary-unicorn/prefer-https"></a>                                                                 | ✅                                                              | ✅  |
| [`unicorn/prefer-identifier-import-export-specifiers`] <a id="summary-unicorn/prefer-identifier-import-export-specifiers"></a>     | ✅                                                              | ✅  |
| [`unicorn/prefer-import-meta-properties`] <a id="summary-unicorn/prefer-import-meta-properties"></a>                               | ✅                                                              | 🚫  |
| [`unicorn/prefer-includes`] <a id="summary-unicorn/prefer-includes"></a>                                                           | ✅                                                              | ✅  |
| [`unicorn/prefer-includes-over-repeated-comparisons`] <a id="summary-unicorn/prefer-includes-over-repeated-comparisons"></a>       | 🚫                                                              | ✅  |
| [`unicorn/prefer-iterable-in-constructor`] <a id="summary-unicorn/prefer-iterable-in-constructor"></a>                             | ✅                                                              | ✅  |
| [`unicorn/prefer-iterator-concat`] <a id="summary-unicorn/prefer-iterator-concat"></a>                                             | 🚫                                                              | 🚫  |
| [`unicorn/prefer-iterator-helpers`] <a id="summary-unicorn/prefer-iterator-helpers"></a>                                           | ✅                                                              | ✅  |
| [`unicorn/prefer-iterator-to-array`] <a id="summary-unicorn/prefer-iterator-to-array"></a>                                         | ✅                                                              | ✅  |
| [`unicorn/prefer-iterator-to-array-at-end`] <a id="summary-unicorn/prefer-iterator-to-array-at-end"></a>                           | ✅                                                              | ✅  |
| [`unicorn/prefer-keyboard-event-key`] <a id="summary-unicorn/prefer-keyboard-event-key"></a>                                       | ✅                                                              | ✅  |
| [`unicorn/prefer-location-assign`] <a id="summary-unicorn/prefer-location-assign"></a>                                             | ✅                                                              | ✅  |
| [`unicorn/prefer-logical-operator-over-ternary`] <a id="summary-unicorn/prefer-logical-operator-over-ternary"></a>                 | ✅                                                              | ✅  |
| [`unicorn/prefer-map-from-entries`] <a id="summary-unicorn/prefer-map-from-entries"></a>                                           | ✅                                                              | ✅  |
| [`unicorn/prefer-math-abs`] <a id="summary-unicorn/prefer-math-abs"></a>                                                           | ✅                                                              | ✅  |
| [`unicorn/prefer-math-constants`] <a id="summary-unicorn/prefer-math-constants"></a>                                               | ✅                                                              | ✅  |
| [`unicorn/prefer-math-min-max`] <a id="summary-unicorn/prefer-math-min-max"></a>                                                   | ✅                                                              | ✅  |
| [`unicorn/prefer-math-trunc`] <a id="summary-unicorn/prefer-math-trunc"></a>                                                       | ✅                                                              | ✅  |
| [`unicorn/prefer-minimal-ternary`] <a id="summary-unicorn/prefer-minimal-ternary"></a>                                             | ✅                                                              | ✅  |
| [`unicorn/prefer-modern-dom-apis`] <a id="summary-unicorn/prefer-modern-dom-apis"></a>                                             | ✅                                                              | ✅  |
| [`unicorn/prefer-modern-math-apis`] <a id="summary-unicorn/prefer-modern-math-apis"></a>                                           | ✅                                                              | ✅  |
| [`unicorn/prefer-module`] <a id="summary-unicorn/prefer-module"></a>                                                               | ✅                                                              | ✅  |
| [`unicorn/prefer-native-coercion-functions`] <a id="summary-unicorn/prefer-native-coercion-functions"></a>                         | ✅                                                              | ✅  |
| [`unicorn/prefer-negative-index`] <a id="summary-unicorn/prefer-negative-index"></a>                                               | ✅                                                              | ✅  |
| [`unicorn/prefer-node-protocol`] <a id="summary-unicorn/prefer-node-protocol"></a>                                                 | 🚫                                                              | ✅  |
| [`unicorn/prefer-number-coercion`] <a id="summary-unicorn/prefer-number-coercion"></a>                                             | ✅                                                              | ✅  |
| [`unicorn/prefer-number-is-safe-integer`] <a id="summary-unicorn/prefer-number-is-safe-integer"></a>                               | ✅                                                              | ✅  |
| [`unicorn/prefer-number-properties`] <a id="summary-unicorn/prefer-number-properties"></a>                                         | ✅                                                              | ✅  |
| [`unicorn/prefer-object-define-properties`] <a id="summary-unicorn/prefer-object-define-properties"></a>                           | ✅                                                              | ✅  |
| [`unicorn/prefer-object-destructuring-defaults`] <a id="summary-unicorn/prefer-object-destructuring-defaults"></a>                 | ✅                                                              | ✅  |
| [`unicorn/prefer-object-from-entries`] <a id="summary-unicorn/prefer-object-from-entries"></a>                                     | ✅                                                              | ✅  |
| [`unicorn/prefer-object-iterable-methods`] <a id="summary-unicorn/prefer-object-iterable-methods"></a>                             | ✅                                                              | ✅  |
| [`unicorn/prefer-observer-apis`] <a id="summary-unicorn/prefer-observer-apis"></a>                                                 | ✅                                                              | ✅  |
| [`unicorn/prefer-optional-catch-binding`] <a id="summary-unicorn/prefer-optional-catch-binding"></a>                               | ✅                                                              | ✅  |
| [`unicorn/prefer-path2d`] <a id="summary-unicorn/prefer-path2d"></a>                                                               | ✅                                                              | ✅  |
| [`unicorn/prefer-private-class-fields`] <a id="summary-unicorn/prefer-private-class-fields"></a>                                   | ✅                                                              | ✅  |
| [`unicorn/prefer-promise-try`] <a id="summary-unicorn/prefer-promise-try"></a>                                                     | ✅                                                              | ✅  |
| [`unicorn/prefer-promise-with-resolvers`] <a id="summary-unicorn/prefer-promise-with-resolvers"></a>                               | ✅                                                              | ✅  |
| [`unicorn/prefer-prototype-methods`] <a id="summary-unicorn/prefer-prototype-methods"></a>                                         | ✅                                                              | ✅  |
| [`unicorn/prefer-query-selector`] <a id="summary-unicorn/prefer-query-selector"></a>                                               | ✅                                                              | ✅  |
| [`unicorn/prefer-queue-microtask`] <a id="summary-unicorn/prefer-queue-microtask"></a>                                             | ✅                                                              | ✅  |
| [`unicorn/prefer-reflect-apply`] <a id="summary-unicorn/prefer-reflect-apply"></a>                                                 | ✅                                                              | ✅  |
| [`unicorn/prefer-regexp-escape`] <a id="summary-unicorn/prefer-regexp-escape"></a>                                                 | 🚫                                                              | 🚫  |
| [`unicorn/prefer-regexp-test`] <a id="summary-unicorn/prefer-regexp-test"></a>                                                     | ✅                                                              | ✅  |
| [`unicorn/prefer-response-static-json`] <a id="summary-unicorn/prefer-response-static-json"></a>                                   | ✅                                                              | ✅  |
| [`unicorn/prefer-scoped-selector`] <a id="summary-unicorn/prefer-scoped-selector"></a>                                             | ✅                                                              | ✅  |
| [`unicorn/prefer-set-has`] <a id="summary-unicorn/prefer-set-has"></a>                                                             | ✅                                                              | ✅  |
| [`unicorn/prefer-set-methods`] <a id="summary-unicorn/prefer-set-methods"></a>                                                     | ✅                                                              | ✅  |
| [`unicorn/prefer-set-size`] <a id="summary-unicorn/prefer-set-size"></a>                                                           | ✅                                                              | ✅  |
| [`unicorn/prefer-short-arrow-method`] <a id="summary-unicorn/prefer-short-arrow-method"></a>                                       | 🚫                                                              | 🚫  |
| [`unicorn/prefer-simple-condition-first`] <a id="summary-unicorn/prefer-simple-condition-first"></a>                               | ✅                                                              | ✅  |
| [`unicorn/prefer-simple-sort-comparator`] <a id="summary-unicorn/prefer-simple-sort-comparator"></a>                               | ✅                                                              | ✅  |
| [`unicorn/prefer-simplified-conditions`] <a id="summary-unicorn/prefer-simplified-conditions"></a>                                 | ✅                                                              | ✅  |
| [`unicorn/prefer-single-array-predicate`] <a id="summary-unicorn/prefer-single-array-predicate"></a>                               | ✅                                                              | ✅  |
| [`unicorn/prefer-single-call`] <a id="summary-unicorn/prefer-single-call"></a>                                                     | ✅                                                              | ✅  |
| [`unicorn/prefer-single-object-destructuring`] <a id="summary-unicorn/prefer-single-object-destructuring"></a>                     | ✅                                                              | ✅  |
| [`unicorn/prefer-single-replace`] <a id="summary-unicorn/prefer-single-replace"></a>                                               | ✅                                                              | ✅  |
| [`unicorn/prefer-smaller-scope`] <a id="summary-unicorn/prefer-smaller-scope"></a>                                                 | ✅                                                              | ✅  |
| [`unicorn/prefer-split-limit`] <a id="summary-unicorn/prefer-split-limit"></a>                                                     | ✅                                                              | ✅  |
| [`unicorn/prefer-spread`] <a id="summary-unicorn/prefer-spread"></a>                                                               | ✅                                                              | ✅  |
| [`unicorn/prefer-string-match-all`] <a id="summary-unicorn/prefer-string-match-all"></a>                                           | ✅                                                              | ✅  |
| [`unicorn/prefer-string-pad-start-end`] <a id="summary-unicorn/prefer-string-pad-start-end"></a>                                   | ✅                                                              | ✅  |
| [`unicorn/prefer-string-raw`] <a id="summary-unicorn/prefer-string-raw"></a>                                                       | ✅                                                              | ✅  |
| [`unicorn/prefer-string-repeat`] <a id="summary-unicorn/prefer-string-repeat"></a>                                                 | ✅                                                              | ✅  |
| [`unicorn/prefer-string-replace-all`] <a id="summary-unicorn/prefer-string-replace-all"></a>                                       | ✅                                                              | ✅  |
| [`unicorn/prefer-string-slice`] <a id="summary-unicorn/prefer-string-slice"></a>                                                   | ✅                                                              | ✅  |
| [`unicorn/prefer-string-starts-ends-with`] <a id="summary-unicorn/prefer-string-starts-ends-with"></a>                             | ✅                                                              | ✅  |
| [`unicorn/prefer-string-trim-start-end`] <a id="summary-unicorn/prefer-string-trim-start-end"></a>                                 | ✅                                                              | ✅  |
| [`unicorn/prefer-structured-clone`] <a id="summary-unicorn/prefer-structured-clone"></a>                                           | ✅                                                              | ✅  |
| [`unicorn/prefer-switch`] <a id="summary-unicorn/prefer-switch"></a>                                                               | ✅                                                              | ✅  |
| [`unicorn/prefer-temporal`] <a id="summary-unicorn/prefer-temporal"></a>                                                           | 🚫                                                              | 🚫  |
| [`unicorn/prefer-ternary`] <a id="summary-unicorn/prefer-ternary"></a>                                                             | ✅                                                              | ✅  |
| [`unicorn/prefer-then-catch`] <a id="summary-unicorn/prefer-then-catch"></a>                                                       | ✅                                                              | ✅  |
| [`unicorn/prefer-toggle-attribute`] <a id="summary-unicorn/prefer-toggle-attribute"></a>                                           | ✅                                                              | ✅  |
| [`unicorn/prefer-top-level-await`] <a id="summary-unicorn/prefer-top-level-await"></a>                                             | ✅                                                              | ✅  |
| [`unicorn/prefer-type-error`] <a id="summary-unicorn/prefer-type-error"></a>                                                       | ✅                                                              | ✅  |
| [`unicorn/prefer-type-literal-last`] <a id="summary-unicorn/prefer-type-literal-last"></a>                                         | ✅                                                              | ✅  |
| [`unicorn/prefer-uint8array-base64`] <a id="summary-unicorn/prefer-uint8array-base64"></a>                                         | 🚫                                                              | 🚫  |
| [`unicorn/prefer-unary-minus`] <a id="summary-unicorn/prefer-unary-minus"></a>                                                     | ✅                                                              | ✅  |
| [`unicorn/prefer-unicode-code-point-escapes`] <a id="summary-unicorn/prefer-unicode-code-point-escapes"></a>                       | ✅                                                              | ✅  |
| [`unicorn/prefer-url-can-parse`] <a id="summary-unicorn/prefer-url-can-parse"></a>                                                 | ✅                                                              | ✅  |
| [`unicorn/prefer-url-href`] <a id="summary-unicorn/prefer-url-href"></a>                                                           | ✅                                                              | ✅  |
| [`unicorn/prefer-url-search-parameters`] <a id="summary-unicorn/prefer-url-search-parameters"></a>                                 | ✅                                                              | ✅  |
| [`unicorn/prefer-while-loop-condition`] <a id="summary-unicorn/prefer-while-loop-condition"></a>                                   | ✅                                                              | ✅  |
| [`unicorn/relative-url-style`] <a id="summary-unicorn/relative-url-style"></a>                                                     | ✅                                                              | ✅  |
| [`unicorn/require-array-join-separator`] <a id="summary-unicorn/require-array-join-separator"></a>                                 | ✅                                                              | ✅  |
| [`unicorn/require-array-sort-compare`] <a id="summary-unicorn/require-array-sort-compare"></a>                                     | ✅                                                              | ✅  |
| [`unicorn/require-css-escape`] <a id="summary-unicorn/require-css-escape"></a>                                                     | ✅                                                              | ✅  |
| [`unicorn/require-frontmatter-fields`] <a id="summary-unicorn/require-frontmatter-fields"></a>                                     | 🚫                                                              | 🚫  |
| [`unicorn/require-module-attributes`] <a id="summary-unicorn/require-module-attributes"></a>                                       | ✅                                                              | ✅  |
| [`unicorn/require-module-specifiers`] <a id="summary-unicorn/require-module-specifiers"></a>                                       | ✅                                                              | ✅  |
| [`unicorn/require-number-to-fixed-digits-argument`] <a id="summary-unicorn/require-number-to-fixed-digits-argument"></a>           | ✅                                                              | ✅  |
| [`unicorn/require-passive-events`] <a id="summary-unicorn/require-passive-events"></a>                                             | ✅                                                              | ✅  |
| [`unicorn/require-post-message-target-origin`] <a id="summary-unicorn/require-post-message-target-origin"></a>                     | 🚫                                                              | 🚫  |
| [`unicorn/require-proxy-trap-boolean-return`] <a id="summary-unicorn/require-proxy-trap-boolean-return"></a>                       | ✅                                                              | ✅  |
| [`unicorn/single-line-block-comment-style`] <a id="summary-unicorn/single-line-block-comment-style"></a>                           | 🚫                                                              | ✅  |
| [`unicorn/string-content`] <a id="summary-unicorn/string-content"></a>                                                             | 🚫                                                              | 🚫  |
| [`unicorn/switch-case-braces`] <a id="summary-unicorn/switch-case-braces"></a>                                                     | ✅ <a href="#rule-unicorn/switch-case-braces">(?)</a>           | ✅  |
| [`unicorn/switch-case-break-position`] <a id="summary-unicorn/switch-case-break-position"></a>                                     | ✅                                                              | ✅  |
| [`unicorn/template-indent`] <a id="summary-unicorn/template-indent"></a>                                                           | 🚫                                                              | ✅  |
| [`unicorn/text-encoding-identifier-case`] <a id="summary-unicorn/text-encoding-identifier-case"></a>                               | ✅                                                              | ✅  |
| [`unicorn/throw-new-error`] <a id="summary-unicorn/throw-new-error"></a>                                                           | ✅                                                              | ✅  |
| [`unicorn/try-complexity`] <a id="summary-unicorn/try-complexity"></a>                                                             | 🚫                                                              | 🚫  |

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
      },
      "react-dom": {
        "namespace": true
      }
    }
  }
]</code></pre></td><td><pre><code>"error"</code></pre></td></tr>
<tr><th colspan="2" align="left"><code>unicorn/logical-assignment-operators</code> <a href="#summary-unicorn/logical-assignment-operators">⬆️ back to summary table</a> <a id="rule-unicorn/logical-assignment-operators"></a></th></tr>
<tr><td><pre><code>[
  "error",
  "always",
  {
    "enforceForIfStatements": true
  }
]</code></pre></td><td><pre><code>"error"</code></pre></td></tr>
<tr><th colspan="2" align="left"><code>unicorn/operator-assignment</code> <a href="#summary-unicorn/operator-assignment">⬆️ back to summary table</a> <a id="rule-unicorn/operator-assignment"></a></th></tr>
<tr><td><pre><code>[
  "error",
  "always"
]</code></pre></td><td><pre><code>"error"</code></pre></td></tr>
<tr><th colspan="2" align="left"><code>unicorn/switch-case-braces</code> <a href="#summary-unicorn/switch-case-braces">⬆️ back to summary table</a> <a id="rule-unicorn/switch-case-braces"></a></th></tr>
<tr><td><pre><code>[
  "error",
  "avoid"
]</code></pre></td><td><pre><code>"error"</code></pre></td></tr></table>

[`unicorn/better-dom-traversing`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/better-dom-traversing.md
[`unicorn/catch-error-name`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/catch-error-name.md
[`unicorn/class-reference-in-static-methods`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/class-reference-in-static-methods.md
[`unicorn/comment-content`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/comment-content.md
[`unicorn/consistent-arrow-return-style`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/consistent-arrow-return-style.md
[`unicorn/consistent-assert`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/consistent-assert.md
[`unicorn/consistent-boolean-name`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/consistent-boolean-name.md
[`unicorn/consistent-class-member-order`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/consistent-class-member-order.md
[`unicorn/consistent-compound-words`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/consistent-compound-words.md
[`unicorn/consistent-conditional-object-spread`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/consistent-conditional-object-spread.md
[`unicorn/consistent-date-clone`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/consistent-date-clone.md
[`unicorn/consistent-destructuring`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/consistent-destructuring.md
[`unicorn/consistent-empty-array-spread`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/consistent-empty-array-spread.md
[`unicorn/consistent-existence-index-check`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/consistent-existence-index-check.md
[`unicorn/consistent-export-decorator-position`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/consistent-export-decorator-position.md
[`unicorn/consistent-function-scoping`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/consistent-function-scoping.md
[`unicorn/consistent-function-style`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/consistent-function-style.md
[`unicorn/consistent-json-file-read`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/consistent-json-file-read.md
[`unicorn/consistent-optional-chaining`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/consistent-optional-chaining.md
[`unicorn/consistent-template-literal-escape`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/consistent-template-literal-escape.md
[`unicorn/consistent-tuple-labels`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/consistent-tuple-labels.md
[`unicorn/custom-error-definition`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/custom-error-definition.md
[`unicorn/default-export-style`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/default-export-style.md
[`unicorn/dom-node-dataset`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/dom-node-dataset.md
[`unicorn/empty-brace-spaces`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/empty-brace-spaces.md
[`unicorn/error-message`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/error-message.md
[`unicorn/escape-case`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/escape-case.md
[`unicorn/expiring-todo-comments`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/expiring-todo-comments.md
[`unicorn/explicit-length-check`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/explicit-length-check.md
[`unicorn/explicit-timer-delay`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/explicit-timer-delay.md
[`unicorn/filename-case`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/filename-case.md
[`unicorn/id-match`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/id-match.md
[`unicorn/import-style`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/import-style.md
[`unicorn/isolated-functions`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/isolated-functions.md
[`unicorn/iteration-fallback-style`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/iteration-fallback-style.md
[`unicorn/logical-assignment-operators`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/logical-assignment-operators.md
[`unicorn/max-nested-calls`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/max-nested-calls.md
[`unicorn/name-replacements`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/name-replacements.md
[`unicorn/new-for-builtins`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/new-for-builtins.md
[`unicorn/no-abusive-eslint-disable`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-abusive-eslint-disable.md
[`unicorn/no-accessor-recursion`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-accessor-recursion.md
[`unicorn/no-accidental-bitwise-operator`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-accidental-bitwise-operator.md
[`unicorn/no-anonymous-default-export`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-anonymous-default-export.md
[`unicorn/no-array-callback-reference`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-array-callback-reference.md
[`unicorn/no-array-concat-in-loop`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-array-concat-in-loop.md
[`unicorn/no-array-fill-with-reference-type`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-array-fill-with-reference-type.md
[`unicorn/no-array-from-fill`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-array-from-fill.md
[`unicorn/no-array-front-mutation`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-array-front-mutation.md
[`unicorn/no-array-method-this-argument`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-array-method-this-argument.md
[`unicorn/no-array-reduce`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-array-reduce.md
[`unicorn/no-array-reverse`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-array-reverse.md
[`unicorn/no-array-sort`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-array-sort.md
[`unicorn/no-array-sort-for-min-max`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-array-sort-for-min-max.md
[`unicorn/no-array-splice`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-array-splice.md
[`unicorn/no-asterisk-prefix-in-documentation-comments`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-asterisk-prefix-in-documentation-comments.md
[`unicorn/no-async-promise-finally`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-async-promise-finally.md
[`unicorn/no-await-expression-member`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-await-expression-member.md
[`unicorn/no-await-in-promise-methods`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-await-in-promise-methods.md
[`unicorn/no-barrel-files`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-barrel-files.md
[`unicorn/no-blob-to-file`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-blob-to-file.md
[`unicorn/no-boolean-sort-comparator`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-boolean-sort-comparator.md
[`unicorn/no-break-in-nested-loop`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-break-in-nested-loop.md
[`unicorn/no-canvas-to-image`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-canvas-to-image.md
[`unicorn/no-chained-comparison`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-chained-comparison.md
[`unicorn/no-collection-bracket-access`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-collection-bracket-access.md
[`unicorn/no-computed-property-existence-check`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-computed-property-existence-check.md
[`unicorn/no-confusing-array-splice`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-confusing-array-splice.md
[`unicorn/no-confusing-array-with`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-confusing-array-with.md
[`unicorn/no-console-spaces`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-console-spaces.md
[`unicorn/no-constant-zero-expression`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-constant-zero-expression.md
[`unicorn/no-declarations-before-early-exit`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-declarations-before-early-exit.md
[`unicorn/no-document-cookie`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-document-cookie.md
[`unicorn/no-double-comparison`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-double-comparison.md
[`unicorn/no-duplicate-if-branches`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-duplicate-if-branches.md
[`unicorn/no-duplicate-logical-operands`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-duplicate-logical-operands.md
[`unicorn/no-duplicate-loops`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-duplicate-loops.md
[`unicorn/no-duplicate-set-values`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-duplicate-set-values.md
[`unicorn/no-empty-file`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-empty-file.md
[`unicorn/no-error-property-assignment`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-error-property-assignment.md
[`unicorn/no-exports-in-scripts`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-exports-in-scripts.md
[`unicorn/no-for-each`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-for-each.md
[`unicorn/no-for-loop`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-for-loop.md
[`unicorn/no-global-object-property-assignment`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-global-object-property-assignment.md
[`unicorn/no-immediate-mutation`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-immediate-mutation.md
[`unicorn/no-impossible-length-comparison`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-impossible-length-comparison.md
[`unicorn/no-incorrect-query-selector`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-incorrect-query-selector.md
[`unicorn/no-incorrect-template-string-interpolation`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-incorrect-template-string-interpolation.md
[`unicorn/no-instanceof-builtins`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-instanceof-builtins.md
[`unicorn/no-invalid-argument-count`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-invalid-argument-count.md
[`unicorn/no-invalid-character-comparison`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-invalid-character-comparison.md
[`unicorn/no-invalid-fetch-options`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-invalid-fetch-options.md
[`unicorn/no-invalid-file-input-accept`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-invalid-file-input-accept.md
[`unicorn/no-invalid-remove-event-listener`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-invalid-remove-event-listener.md
[`unicorn/no-invalid-well-known-symbol-methods`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-invalid-well-known-symbol-methods.md
[`unicorn/no-keyword-prefix`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-keyword-prefix.md
[`unicorn/no-late-current-target-access`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-late-current-target-access.md
[`unicorn/no-late-event-control`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-late-event-control.md
[`unicorn/no-lonely-if`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-lonely-if.md
[`unicorn/no-loop-iterable-mutation`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-loop-iterable-mutation.md
[`unicorn/no-magic-array-flat-depth`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-magic-array-flat-depth.md
[`unicorn/no-manually-wrapped-comments`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-manually-wrapped-comments.md
[`unicorn/no-mismatched-map-key`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-mismatched-map-key.md
[`unicorn/no-misrefactored-assignment`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-misrefactored-assignment.md
[`unicorn/no-missing-local-resource`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-missing-local-resource.md
[`unicorn/no-multiple-promise-resolver-calls`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-multiple-promise-resolver-calls.md
[`unicorn/no-named-default`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-named-default.md
[`unicorn/no-negated-array-predicate`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-negated-array-predicate.md
[`unicorn/no-negated-comparison`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-negated-comparison.md
[`unicorn/no-negated-condition`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-negated-condition.md
[`unicorn/no-negation-in-equality-check`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-negation-in-equality-check.md
[`unicorn/no-nested-ternary`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-nested-ternary.md
[`unicorn/no-new-array`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-new-array.md
[`unicorn/no-new-buffer`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-new-buffer.md
[`unicorn/no-non-function-verb-prefix`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-non-function-verb-prefix.md
[`unicorn/no-nonstandard-builtin-properties`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-nonstandard-builtin-properties.md
[`unicorn/no-null`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-null.md
[`unicorn/no-object-as-default-parameter`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-object-as-default-parameter.md
[`unicorn/no-object-methods-with-collections`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-object-methods-with-collections.md
[`unicorn/no-optional-chaining-on-undeclared-variable`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-optional-chaining-on-undeclared-variable.md
[`unicorn/no-process-exit`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-process-exit.md
[`unicorn/no-redundant-comparison`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-redundant-comparison.md
[`unicorn/no-return-array-push`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-return-array-push.md
[`unicorn/no-selector-as-dom-name`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-selector-as-dom-name.md
[`unicorn/no-shorthand-property-overrides`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-shorthand-property-overrides.md
[`unicorn/no-single-promise-in-promise-methods`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-single-promise-in-promise-methods.md
[`unicorn/no-static-only-class`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-static-only-class.md
[`unicorn/no-subtraction-comparison`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-subtraction-comparison.md
[`unicorn/no-thenable`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-thenable.md
[`unicorn/no-this-assignment`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-this-assignment.md
[`unicorn/no-this-outside-of-class`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-this-outside-of-class.md
[`unicorn/no-top-level-assignment-in-function`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-top-level-assignment-in-function.md
[`unicorn/no-top-level-side-effects`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-top-level-side-effects.md
[`unicorn/no-transition-all`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-transition-all.md
[`unicorn/no-typeof-undefined`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-typeof-undefined.md
[`unicorn/no-uncalled-method`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-uncalled-method.md
[`unicorn/no-undeclared-class-members`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-undeclared-class-members.md
[`unicorn/no-unnecessary-array-flat-depth`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-unnecessary-array-flat-depth.md
[`unicorn/no-unnecessary-array-flat-map`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-unnecessary-array-flat-map.md
[`unicorn/no-unnecessary-array-splice-count`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-unnecessary-array-splice-count.md
[`unicorn/no-unnecessary-await`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-unnecessary-await.md
[`unicorn/no-unnecessary-boolean-comparison`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-unnecessary-boolean-comparison.md
[`unicorn/no-unnecessary-fetch-options`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-unnecessary-fetch-options.md
[`unicorn/no-unnecessary-global-this`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-unnecessary-global-this.md
[`unicorn/no-unnecessary-nested-ternary`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-unnecessary-nested-ternary.md
[`unicorn/no-unnecessary-polyfills`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-unnecessary-polyfills.md
[`unicorn/no-unnecessary-slice-end`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-unnecessary-slice-end.md
[`unicorn/no-unnecessary-splice`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-unnecessary-splice.md
[`unicorn/no-unnecessary-string-trim`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-unnecessary-string-trim.md
[`unicorn/no-unreadable-array-destructuring`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-unreadable-array-destructuring.md
[`unicorn/no-unreadable-for-of-expression`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-unreadable-for-of-expression.md
[`unicorn/no-unreadable-iife`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-unreadable-iife.md
[`unicorn/no-unreadable-new-expression`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-unreadable-new-expression.md
[`unicorn/no-unreadable-object-destructuring`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-unreadable-object-destructuring.md
[`unicorn/no-unsafe-buffer-conversion`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-unsafe-buffer-conversion.md
[`unicorn/no-unsafe-dom-html`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-unsafe-dom-html.md
[`unicorn/no-unsafe-promise-all-settled-values`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-unsafe-promise-all-settled-values.md
[`unicorn/no-unsafe-property-key`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-unsafe-property-key.md
[`unicorn/no-unsafe-sqlite-interpolation`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-unsafe-sqlite-interpolation.md
[`unicorn/no-unsafe-string-replacement`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-unsafe-string-replacement.md
[`unicorn/no-unused-array-method-return`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-unused-array-method-return.md
[`unicorn/no-unused-properties`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-unused-properties.md
[`unicorn/no-useless-boolean-cast`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-useless-boolean-cast.md
[`unicorn/no-useless-coercion`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-useless-coercion.md
[`unicorn/no-useless-collection-argument`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-useless-collection-argument.md
[`unicorn/no-useless-compound-assignment`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-useless-compound-assignment.md
[`unicorn/no-useless-concat`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-useless-concat.md
[`unicorn/no-useless-continue`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-useless-continue.md
[`unicorn/no-useless-delete-check`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-useless-delete-check.md
[`unicorn/no-useless-else`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-useless-else.md
[`unicorn/no-useless-error-capture-stack-trace`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-useless-error-capture-stack-trace.md
[`unicorn/no-useless-fallback-in-spread`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-useless-fallback-in-spread.md
[`unicorn/no-useless-iterator-to-array`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-useless-iterator-to-array.md
[`unicorn/no-useless-length-check`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-useless-length-check.md
[`unicorn/no-useless-logical-operand`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-useless-logical-operand.md
[`unicorn/no-useless-override`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-useless-override.md
[`unicorn/no-useless-promise-resolve-reject`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-useless-promise-resolve-reject.md
[`unicorn/no-useless-re-export`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-useless-re-export.md
[`unicorn/no-useless-recursion`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-useless-recursion.md
[`unicorn/no-useless-spread`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-useless-spread.md
[`unicorn/no-useless-switch-case`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-useless-switch-case.md
[`unicorn/no-useless-template-literals`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-useless-template-literals.md
[`unicorn/no-useless-undefined`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-useless-undefined.md
[`unicorn/no-xor-as-exponentiation`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-xor-as-exponentiation.md
[`unicorn/no-zero-fractions`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/no-zero-fractions.md
[`unicorn/number-literal-case`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/number-literal-case.md
[`unicorn/numeric-separators-style`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/numeric-separators-style.md
[`unicorn/operator-assignment`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/operator-assignment.md
[`unicorn/prefer-abort-signal-any`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-abort-signal-any.md
[`unicorn/prefer-abort-signal-timeout`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-abort-signal-timeout.md
[`unicorn/prefer-add-event-listener`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-add-event-listener.md
[`unicorn/prefer-add-event-listener-options`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-add-event-listener-options.md
[`unicorn/prefer-aggregate-error`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-aggregate-error.md
[`unicorn/prefer-array-find`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-array-find.md
[`unicorn/prefer-array-flat`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-array-flat.md
[`unicorn/prefer-array-flat-map`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-array-flat-map.md
[`unicorn/prefer-array-from-async`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-array-from-async.md
[`unicorn/prefer-array-from-map`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-array-from-map.md
[`unicorn/prefer-array-from-range`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-array-from-range.md
[`unicorn/prefer-array-index-of`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-array-index-of.md
[`unicorn/prefer-array-iterable-methods`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-array-iterable-methods.md
[`unicorn/prefer-array-last-methods`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-array-last-methods.md
[`unicorn/prefer-array-slice`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-array-slice.md
[`unicorn/prefer-array-some`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-array-some.md
[`unicorn/prefer-at`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-at.md
[`unicorn/prefer-await`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-await.md
[`unicorn/prefer-bigint-literals`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-bigint-literals.md
[`unicorn/prefer-blob-reading-methods`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-blob-reading-methods.md
[`unicorn/prefer-block-statement-over-iife`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-block-statement-over-iife.md
[`unicorn/prefer-boolean-return`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-boolean-return.md
[`unicorn/prefer-class-fields`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-class-fields.md
[`unicorn/prefer-classlist-toggle`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-classlist-toggle.md
[`unicorn/prefer-code-point`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-code-point.md
[`unicorn/prefer-continue`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-continue.md
[`unicorn/prefer-date-now`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-date-now.md
[`unicorn/prefer-default-parameters`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-default-parameters.md
[`unicorn/prefer-direct-iteration`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-direct-iteration.md
[`unicorn/prefer-dispose`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-dispose.md
[`unicorn/prefer-dom-node-append`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-dom-node-append.md
[`unicorn/prefer-dom-node-html-methods`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-dom-node-html-methods.md
[`unicorn/prefer-dom-node-remove`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-dom-node-remove.md
[`unicorn/prefer-dom-node-replace-children`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-dom-node-replace-children.md
[`unicorn/prefer-dom-node-text-content`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-dom-node-text-content.md
[`unicorn/prefer-early-return`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-early-return.md
[`unicorn/prefer-else-if`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-else-if.md
[`unicorn/prefer-error-is-error`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-error-is-error.md
[`unicorn/prefer-event-target`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-event-target.md
[`unicorn/prefer-explicit-viewport-units`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-explicit-viewport-units.md
[`unicorn/prefer-export-from`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-export-from.md
[`unicorn/prefer-flat-math-min-max`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-flat-math-min-max.md
[`unicorn/prefer-get-or-insert-computed`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-get-or-insert-computed.md
[`unicorn/prefer-global-number-constants`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-global-number-constants.md
[`unicorn/prefer-global-this`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-global-this.md
[`unicorn/prefer-group-by`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-group-by.md
[`unicorn/prefer-has-check`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-has-check.md
[`unicorn/prefer-hoisting-branch-code`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-hoisting-branch-code.md
[`unicorn/prefer-https`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-https.md
[`unicorn/prefer-identifier-import-export-specifiers`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-identifier-import-export-specifiers.md
[`unicorn/prefer-import-meta-properties`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-import-meta-properties.md
[`unicorn/prefer-includes`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-includes.md
[`unicorn/prefer-includes-over-repeated-comparisons`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-includes-over-repeated-comparisons.md
[`unicorn/prefer-iterable-in-constructor`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-iterable-in-constructor.md
[`unicorn/prefer-iterator-concat`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-iterator-concat.md
[`unicorn/prefer-iterator-helpers`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-iterator-helpers.md
[`unicorn/prefer-iterator-to-array`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-iterator-to-array.md
[`unicorn/prefer-iterator-to-array-at-end`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-iterator-to-array-at-end.md
[`unicorn/prefer-keyboard-event-key`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-keyboard-event-key.md
[`unicorn/prefer-location-assign`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-location-assign.md
[`unicorn/prefer-logical-operator-over-ternary`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-logical-operator-over-ternary.md
[`unicorn/prefer-map-from-entries`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-map-from-entries.md
[`unicorn/prefer-math-abs`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-math-abs.md
[`unicorn/prefer-math-constants`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-math-constants.md
[`unicorn/prefer-math-min-max`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-math-min-max.md
[`unicorn/prefer-math-trunc`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-math-trunc.md
[`unicorn/prefer-minimal-ternary`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-minimal-ternary.md
[`unicorn/prefer-modern-dom-apis`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-modern-dom-apis.md
[`unicorn/prefer-modern-math-apis`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-modern-math-apis.md
[`unicorn/prefer-module`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-module.md
[`unicorn/prefer-native-coercion-functions`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-native-coercion-functions.md
[`unicorn/prefer-negative-index`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-negative-index.md
[`unicorn/prefer-node-protocol`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-node-protocol.md
[`unicorn/prefer-number-coercion`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-number-coercion.md
[`unicorn/prefer-number-is-safe-integer`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-number-is-safe-integer.md
[`unicorn/prefer-number-properties`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-number-properties.md
[`unicorn/prefer-object-define-properties`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-object-define-properties.md
[`unicorn/prefer-object-destructuring-defaults`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-object-destructuring-defaults.md
[`unicorn/prefer-object-from-entries`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-object-from-entries.md
[`unicorn/prefer-object-iterable-methods`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-object-iterable-methods.md
[`unicorn/prefer-observer-apis`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-observer-apis.md
[`unicorn/prefer-optional-catch-binding`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-optional-catch-binding.md
[`unicorn/prefer-path2d`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-path2d.md
[`unicorn/prefer-private-class-fields`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-private-class-fields.md
[`unicorn/prefer-promise-try`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-promise-try.md
[`unicorn/prefer-promise-with-resolvers`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-promise-with-resolvers.md
[`unicorn/prefer-prototype-methods`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-prototype-methods.md
[`unicorn/prefer-query-selector`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-query-selector.md
[`unicorn/prefer-queue-microtask`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-queue-microtask.md
[`unicorn/prefer-reflect-apply`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-reflect-apply.md
[`unicorn/prefer-regexp-escape`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-regexp-escape.md
[`unicorn/prefer-regexp-test`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-regexp-test.md
[`unicorn/prefer-response-static-json`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-response-static-json.md
[`unicorn/prefer-scoped-selector`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-scoped-selector.md
[`unicorn/prefer-set-has`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-set-has.md
[`unicorn/prefer-set-methods`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-set-methods.md
[`unicorn/prefer-set-size`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-set-size.md
[`unicorn/prefer-short-arrow-method`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-short-arrow-method.md
[`unicorn/prefer-simple-condition-first`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-simple-condition-first.md
[`unicorn/prefer-simple-sort-comparator`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-simple-sort-comparator.md
[`unicorn/prefer-simplified-conditions`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-simplified-conditions.md
[`unicorn/prefer-single-array-predicate`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-single-array-predicate.md
[`unicorn/prefer-single-call`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-single-call.md
[`unicorn/prefer-single-object-destructuring`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-single-object-destructuring.md
[`unicorn/prefer-single-replace`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-single-replace.md
[`unicorn/prefer-smaller-scope`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-smaller-scope.md
[`unicorn/prefer-split-limit`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-split-limit.md
[`unicorn/prefer-spread`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-spread.md
[`unicorn/prefer-string-match-all`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-string-match-all.md
[`unicorn/prefer-string-pad-start-end`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-string-pad-start-end.md
[`unicorn/prefer-string-raw`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-string-raw.md
[`unicorn/prefer-string-repeat`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-string-repeat.md
[`unicorn/prefer-string-replace-all`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-string-replace-all.md
[`unicorn/prefer-string-slice`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-string-slice.md
[`unicorn/prefer-string-starts-ends-with`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-string-starts-ends-with.md
[`unicorn/prefer-string-trim-start-end`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-string-trim-start-end.md
[`unicorn/prefer-structured-clone`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-structured-clone.md
[`unicorn/prefer-switch`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-switch.md
[`unicorn/prefer-temporal`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-temporal.md
[`unicorn/prefer-ternary`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-ternary.md
[`unicorn/prefer-then-catch`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-then-catch.md
[`unicorn/prefer-toggle-attribute`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-toggle-attribute.md
[`unicorn/prefer-top-level-await`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-top-level-await.md
[`unicorn/prefer-type-error`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-type-error.md
[`unicorn/prefer-type-literal-last`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-type-literal-last.md
[`unicorn/prefer-uint8array-base64`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-uint8array-base64.md
[`unicorn/prefer-unary-minus`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-unary-minus.md
[`unicorn/prefer-unicode-code-point-escapes`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-unicode-code-point-escapes.md
[`unicorn/prefer-url-can-parse`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-url-can-parse.md
[`unicorn/prefer-url-href`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-url-href.md
[`unicorn/prefer-url-search-parameters`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-url-search-parameters.md
[`unicorn/prefer-while-loop-condition`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/prefer-while-loop-condition.md
[`unicorn/relative-url-style`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/relative-url-style.md
[`unicorn/require-array-join-separator`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/require-array-join-separator.md
[`unicorn/require-array-sort-compare`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/require-array-sort-compare.md
[`unicorn/require-css-escape`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/require-css-escape.md
[`unicorn/require-frontmatter-fields`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/require-frontmatter-fields.md
[`unicorn/require-module-attributes`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/require-module-attributes.md
[`unicorn/require-module-specifiers`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/require-module-specifiers.md
[`unicorn/require-number-to-fixed-digits-argument`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/require-number-to-fixed-digits-argument.md
[`unicorn/require-passive-events`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/require-passive-events.md
[`unicorn/require-post-message-target-origin`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/require-post-message-target-origin.md
[`unicorn/require-proxy-trap-boolean-return`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/require-proxy-trap-boolean-return.md
[`unicorn/single-line-block-comment-style`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/single-line-block-comment-style.md
[`unicorn/string-content`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/string-content.md
[`unicorn/switch-case-braces`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/switch-case-braces.md
[`unicorn/switch-case-break-position`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/switch-case-break-position.md
[`unicorn/template-indent`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/template-indent.md
[`unicorn/text-encoding-identifier-case`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/text-encoding-identifier-case.md
[`unicorn/throw-new-error`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/throw-new-error.md
[`unicorn/try-complexity`]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v73.0.0/docs/rules/try-complexity.md

<!-- END unicorn -->

## depend

Configurations compared:

- **P** – @priver/eslint-config
- **R** –
  [flat/recommended](https://github.com/es-tooling/eslint-plugin-depend/blob/main/README.md#usage)

<!-- START depend -->

| Rule                                                                     | P   | R   |
| ------------------------------------------------------------------------ | --- | --- |
| [`depend/ban-dependencies`] <a id="summary-depend/ban-dependencies"></a> | ✅  | ✅  |

[`depend/ban-dependencies`]: https://github.com/es-tooling/eslint-plugin-depend/blob/main/docs/rules/ban-dependencies.md

<!-- END depend -->

## compat

Configurations compared:

- **P** – @priver/eslint-config
- **R** –
  [flat/recommended](https://github.com/amilajack/eslint-plugin-compat?tab=readme-ov-file#new-config-eslintconfigmjs)

<!-- START compat -->

| Rule                                                 | P   | R   |
| ---------------------------------------------------- | --- | --- |
| [`compat/compat`] <a id="summary-compat/compat"></a> | ✅  | ✅  |

[`compat/compat`]: https://github.com/amilajack/eslint-plugin-compat/blob/main/docs/rules/compat.md

<!-- END compat -->

## n

Configurations compared:

- **P** – @priver/eslint-config
- **R** –
  [recommended-module](https://github.com/eslint-community/eslint-plugin-n?tab=readme-ov-file#-configs)

<!-- START n -->

| Rule                                                                           | P   | R   |
| ------------------------------------------------------------------------------ | --- | --- |
| [`n/callback-return`] <a id="summary-n/callback-return"></a>                   | 🚫  | 🚫  |
| [`n/exports-style`] <a id="summary-n/exports-style"></a>                       | 🚫  | 🚫  |
| [`n/file-extension-in-import`] <a id="summary-n/file-extension-in-import"></a> | 🚫  | 🚫  |
| [`n/global-require`] <a id="summary-n/global-require"></a>                     | 🚫  | 🚫  |
| [`n/handle-callback-err`] <a id="summary-n/handle-callback-err"></a>           | ✅  | 🚫  |
| [`n/hashbang`] <a id="summary-n/hashbang"></a>                                 | ✅  | ✅  |
| [`n/no-callback-literal`] <a id="summary-n/no-callback-literal"></a>           | 🚫  | 🚫  |
| [`n/no-deprecated-api`] <a id="summary-n/no-deprecated-api"></a>               | ✅  | ✅  |
| [`n/no-exports-assign`] <a id="summary-n/no-exports-assign"></a>               | ✅  | ✅  |
| [`n/no-extraneous-import`] <a id="summary-n/no-extraneous-import"></a>         | 🚫  | ✅  |
| [`n/no-extraneous-require`] <a id="summary-n/no-extraneous-require"></a>       | 🚫  | ✅  |
| [`n/no-missing-import`] <a id="summary-n/no-missing-import"></a>               | 🚫  | ✅  |
| [`n/no-missing-require`] <a id="summary-n/no-missing-require"></a>             | 🚫  | ✅  |
| [`n/no-mixed-requires`] <a id="summary-n/no-mixed-requires"></a>               | 🚫  | 🚫  |
| [`n/no-new-require`] <a id="summary-n/no-new-require"></a>                     | 🚫  | 🚫  |
| [`n/no-path-concat`] <a id="summary-n/no-path-concat"></a>                     | ✅  | 🚫  |
| [`n/no-process-env`] <a id="summary-n/no-process-env"></a>                     | 🚫  | 🚫  |
| [`n/no-process-exit`] <a id="summary-n/no-process-exit"></a>                   | 🚫  | ✅  |
| [`n/no-restricted-import`] <a id="summary-n/no-restricted-import"></a>         | 🚫  | 🚫  |
| [`n/no-restricted-require`] <a id="summary-n/no-restricted-require"></a>       | 🚫  | 🚫  |
| [`n/no-sync`] <a id="summary-n/no-sync"></a>                                   | 🚫  | 🚫  |
| [`n/no-top-level-await`] <a id="summary-n/no-top-level-await"></a>             | 🚫  | 🚫  |
| [`n/no-unpublished-bin`] <a id="summary-n/no-unpublished-bin"></a>             | ✅  | 🚫  |
| [`n/no-unpublished-import`] <a id="summary-n/no-unpublished-import"></a>       | ✅  | ✅  |
| [`n/no-unpublished-require`] <a id="summary-n/no-unpublished-require"></a>     | 🚫  | ✅  |
| [`n/prefer-node-protocol`] <a id="summary-n/prefer-node-protocol"></a>         | ✅  | 🚫  |
| [`n/process-exit-as-throw`] <a id="summary-n/process-exit-as-throw"></a>       | ✅  | ✅  |

[`n/callback-return`]: https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/callback-return.md
[`n/exports-style`]: https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/exports-style.md
[`n/file-extension-in-import`]: https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/file-extension-in-import.md
[`n/global-require`]: https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/global-require.md
[`n/handle-callback-err`]: https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/handle-callback-err.md
[`n/hashbang`]: https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/hashbang.md
[`n/no-callback-literal`]: https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-callback-literal.md
[`n/no-deprecated-api`]: https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-deprecated-api.md
[`n/no-exports-assign`]: https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-exports-assign.md
[`n/no-extraneous-import`]: https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-extraneous-import.md
[`n/no-extraneous-require`]: https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-extraneous-require.md
[`n/no-missing-import`]: https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-missing-import.md
[`n/no-missing-require`]: https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-missing-require.md
[`n/no-mixed-requires`]: https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-mixed-requires.md
[`n/no-new-require`]: https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-new-require.md
[`n/no-path-concat`]: https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-path-concat.md
[`n/no-process-env`]: https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-process-env.md
[`n/no-process-exit`]: https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-process-exit.md
[`n/no-restricted-import`]: https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-restricted-import.md
[`n/no-restricted-require`]: https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-restricted-require.md
[`n/no-sync`]: https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-sync.md
[`n/no-top-level-await`]: https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-top-level-await.md
[`n/no-unpublished-bin`]: https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unpublished-bin.md
[`n/no-unpublished-import`]: https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unpublished-import.md
[`n/no-unpublished-require`]: https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unpublished-require.md
[`n/prefer-node-protocol`]: https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-node-protocol.md
[`n/process-exit-as-throw`]: https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/process-exit-as-throw.md

<!-- END n -->

## @typescript-eslint

Configurations compared:

- **P** – @priver/eslint-config
- **R** – [strict-type-checked](https://typescript-eslint.io/users/configs/#strict-type-checked) +
  [stylistic-type-checked](https://typescript-eslint.io/users/configs/#stylistic-type-checked)

<!-- START @typescript-eslint -->

| Rule                                                                                                                                                     | P                                                                         | R   |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | --- |
| [`@typescript-eslint/adjacent-overload-signatures`] <a id="summary-@typescript-eslint/adjacent-overload-signatures"></a>                                 | ✅                                                                        | ✅  |
| [`@typescript-eslint/array-type`] <a id="summary-@typescript-eslint/array-type"></a>                                                                     | ✅ <a href="#rule-@typescript-eslint/array-type">(?)</a>                  | ✅  |
| [`@typescript-eslint/await-thenable`] <a id="summary-@typescript-eslint/await-thenable"></a>                                                             | ✅                                                                        | ✅  |
| [`@typescript-eslint/ban-ts-comment`] <a id="summary-@typescript-eslint/ban-ts-comment"></a>                                                             | ✅ <a href="#rule-@typescript-eslint/ban-ts-comment">(?)</a>              | ✅  |
| [`@typescript-eslint/ban-tslint-comment`] <a id="summary-@typescript-eslint/ban-tslint-comment"></a>                                                     | ✅                                                                        | ✅  |
| [`@typescript-eslint/class-literal-property-style`] <a id="summary-@typescript-eslint/class-literal-property-style"></a>                                 | ✅                                                                        | ✅  |
| [`@typescript-eslint/class-methods-use-this`] <a id="summary-@typescript-eslint/class-methods-use-this"></a>                                             | 🚫                                                                        | 🚫  |
| [`@typescript-eslint/consistent-generic-constructors`] <a id="summary-@typescript-eslint/consistent-generic-constructors"></a>                           | ✅                                                                        | ✅  |
| [`@typescript-eslint/consistent-indexed-object-style`] <a id="summary-@typescript-eslint/consistent-indexed-object-style"></a>                           | ✅                                                                        | ✅  |
| [`@typescript-eslint/consistent-return`] <a id="summary-@typescript-eslint/consistent-return"></a>                                                       | 🚫                                                                        | 🚫  |
| [`@typescript-eslint/consistent-type-assertions`] <a id="summary-@typescript-eslint/consistent-type-assertions"></a>                                     | ✅ <a href="#rule-@typescript-eslint/consistent-type-assertions">(?)</a>  | ✅  |
| [`@typescript-eslint/consistent-type-definitions`] <a id="summary-@typescript-eslint/consistent-type-definitions"></a>                                   | ✅ <a href="#rule-@typescript-eslint/consistent-type-definitions">(?)</a> | ✅  |
| [`@typescript-eslint/consistent-type-exports`] <a id="summary-@typescript-eslint/consistent-type-exports"></a>                                           | ✅                                                                        | 🚫  |
| [`@typescript-eslint/consistent-type-imports`] <a id="summary-@typescript-eslint/consistent-type-imports"></a>                                           | 🚫                                                                        | 🚫  |
| [`@typescript-eslint/default-param-last`] <a id="summary-@typescript-eslint/default-param-last"></a>                                                     | ✅                                                                        | 🚫  |
| [`@typescript-eslint/dot-notation`] <a id="summary-@typescript-eslint/dot-notation"></a>                                                                 | ✅                                                                        | ✅  |
| [`@typescript-eslint/explicit-function-return-type`] <a id="summary-@typescript-eslint/explicit-function-return-type"></a>                               | 🚫                                                                        | 🚫  |
| [`@typescript-eslint/explicit-member-accessibility`] <a id="summary-@typescript-eslint/explicit-member-accessibility"></a>                               | ✅                                                                        | 🚫  |
| [`@typescript-eslint/explicit-module-boundary-types`] <a id="summary-@typescript-eslint/explicit-module-boundary-types"></a>                             | ✅                                                                        | 🚫  |
| [`@typescript-eslint/init-declarations`] <a id="summary-@typescript-eslint/init-declarations"></a>                                                       | 🚫                                                                        | 🚫  |
| [`@typescript-eslint/max-params`] <a id="summary-@typescript-eslint/max-params"></a>                                                                     | 🚫                                                                        | 🚫  |
| [`@typescript-eslint/member-ordering`] <a id="summary-@typescript-eslint/member-ordering"></a>                                                           | ✅                                                                        | 🚫  |
| [`@typescript-eslint/method-signature-style`] <a id="summary-@typescript-eslint/method-signature-style"></a>                                             | ✅                                                                        | 🚫  |
| [`@typescript-eslint/naming-convention`] <a id="summary-@typescript-eslint/naming-convention"></a>                                                       | ✅                                                                        | 🚫  |
| [`@typescript-eslint/no-array-constructor`] <a id="summary-@typescript-eslint/no-array-constructor"></a>                                                 | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-array-delete`] <a id="summary-@typescript-eslint/no-array-delete"></a>                                                           | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-base-to-string`] <a id="summary-@typescript-eslint/no-base-to-string"></a>                                                       | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-confusing-non-null-assertion`] <a id="summary-@typescript-eslint/no-confusing-non-null-assertion"></a>                           | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-confusing-void-expression`] <a id="summary-@typescript-eslint/no-confusing-void-expression"></a>                                 | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-deprecated`] <a id="summary-@typescript-eslint/no-deprecated"></a>                                                               | ⚠️                                                                        | ✅  |
| [`@typescript-eslint/no-dupe-class-members`] <a id="summary-@typescript-eslint/no-dupe-class-members"></a>                                               | 🚫                                                                        | 🚫  |
| [`@typescript-eslint/no-duplicate-enum-values`] <a id="summary-@typescript-eslint/no-duplicate-enum-values"></a>                                         | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-duplicate-type-constituents`] <a id="summary-@typescript-eslint/no-duplicate-type-constituents"></a>                             | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-dynamic-delete`] <a id="summary-@typescript-eslint/no-dynamic-delete"></a>                                                       | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-empty-function`] <a id="summary-@typescript-eslint/no-empty-function"></a>                                                       | 🚫                                                                        | ✅  |
| [`@typescript-eslint/no-empty-object-type`] <a id="summary-@typescript-eslint/no-empty-object-type"></a>                                                 | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-explicit-any`] <a id="summary-@typescript-eslint/no-explicit-any"></a>                                                           | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-extra-non-null-assertion`] <a id="summary-@typescript-eslint/no-extra-non-null-assertion"></a>                                   | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-extraneous-class`] <a id="summary-@typescript-eslint/no-extraneous-class"></a>                                                   | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-floating-promises`] <a id="summary-@typescript-eslint/no-floating-promises"></a>                                                 | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-for-in-array`] <a id="summary-@typescript-eslint/no-for-in-array"></a>                                                           | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-implied-eval`] <a id="summary-@typescript-eslint/no-implied-eval"></a>                                                           | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-import-type-side-effects`] <a id="summary-@typescript-eslint/no-import-type-side-effects"></a>                                   | ✅                                                                        | 🚫  |
| [`@typescript-eslint/no-inferrable-types`] <a id="summary-@typescript-eslint/no-inferrable-types"></a>                                                   | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-invalid-this`] <a id="summary-@typescript-eslint/no-invalid-this"></a>                                                           | 🚫                                                                        | 🚫  |
| [`@typescript-eslint/no-invalid-void-type`] <a id="summary-@typescript-eslint/no-invalid-void-type"></a>                                                 | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-magic-numbers`] <a id="summary-@typescript-eslint/no-magic-numbers"></a>                                                         | 🚫                                                                        | 🚫  |
| [`@typescript-eslint/no-meaningless-void-operator`] <a id="summary-@typescript-eslint/no-meaningless-void-operator"></a>                                 | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-misused-new`] <a id="summary-@typescript-eslint/no-misused-new"></a>                                                             | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-misused-promises`] <a id="summary-@typescript-eslint/no-misused-promises"></a>                                                   | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-misused-spread`] <a id="summary-@typescript-eslint/no-misused-spread"></a>                                                       | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-mixed-enums`] <a id="summary-@typescript-eslint/no-mixed-enums"></a>                                                             | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-namespace`] <a id="summary-@typescript-eslint/no-namespace"></a>                                                                 | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-non-null-asserted-nullish-coalescing`] <a id="summary-@typescript-eslint/no-non-null-asserted-nullish-coalescing"></a>           | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-non-null-asserted-optional-chain`] <a id="summary-@typescript-eslint/no-non-null-asserted-optional-chain"></a>                   | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-non-null-assertion`] <a id="summary-@typescript-eslint/no-non-null-assertion"></a>                                               | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-redeclare`] <a id="summary-@typescript-eslint/no-redeclare"></a>                                                                 | 🚫                                                                        | 🚫  |
| [`@typescript-eslint/no-redundant-type-constituents`] <a id="summary-@typescript-eslint/no-redundant-type-constituents"></a>                             | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-require-imports`] <a id="summary-@typescript-eslint/no-require-imports"></a>                                                     | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-restricted-types`] <a id="summary-@typescript-eslint/no-restricted-types"></a>                                                   | ✅                                                                        | 🚫  |
| [`@typescript-eslint/no-shadow`] <a id="summary-@typescript-eslint/no-shadow"></a>                                                                       | ✅                                                                        | 🚫  |
| [`@typescript-eslint/no-this-alias`] <a id="summary-@typescript-eslint/no-this-alias"></a>                                                               | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-unnecessary-boolean-literal-compare`] <a id="summary-@typescript-eslint/no-unnecessary-boolean-literal-compare"></a>             | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-unnecessary-condition`] <a id="summary-@typescript-eslint/no-unnecessary-condition"></a>                                         | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-unnecessary-parameter-property-assignment`] <a id="summary-@typescript-eslint/no-unnecessary-parameter-property-assignment"></a> | 🚫                                                                        | 🚫  |
| [`@typescript-eslint/no-unnecessary-qualifier`] <a id="summary-@typescript-eslint/no-unnecessary-qualifier"></a>                                         | 🚫                                                                        | 🚫  |
| [`@typescript-eslint/no-unnecessary-template-expression`] <a id="summary-@typescript-eslint/no-unnecessary-template-expression"></a>                     | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-unnecessary-type-arguments`] <a id="summary-@typescript-eslint/no-unnecessary-type-arguments"></a>                               | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-unnecessary-type-assertion`] <a id="summary-@typescript-eslint/no-unnecessary-type-assertion"></a>                               | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-unnecessary-type-constraint`] <a id="summary-@typescript-eslint/no-unnecessary-type-constraint"></a>                             | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-unnecessary-type-conversion`] <a id="summary-@typescript-eslint/no-unnecessary-type-conversion"></a>                             | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-unnecessary-type-parameters`] <a id="summary-@typescript-eslint/no-unnecessary-type-parameters"></a>                             | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-unsafe-argument`] <a id="summary-@typescript-eslint/no-unsafe-argument"></a>                                                     | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-unsafe-assignment`] <a id="summary-@typescript-eslint/no-unsafe-assignment"></a>                                                 | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-unsafe-call`] <a id="summary-@typescript-eslint/no-unsafe-call"></a>                                                             | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-unsafe-declaration-merging`] <a id="summary-@typescript-eslint/no-unsafe-declaration-merging"></a>                               | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-unsafe-enum-comparison`] <a id="summary-@typescript-eslint/no-unsafe-enum-comparison"></a>                                       | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-unsafe-function-type`] <a id="summary-@typescript-eslint/no-unsafe-function-type"></a>                                           | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-unsafe-member-access`] <a id="summary-@typescript-eslint/no-unsafe-member-access"></a>                                           | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-unsafe-return`] <a id="summary-@typescript-eslint/no-unsafe-return"></a>                                                         | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-unsafe-type-assertion`] <a id="summary-@typescript-eslint/no-unsafe-type-assertion"></a>                                         | ✅                                                                        | 🚫  |
| [`@typescript-eslint/no-unsafe-unary-minus`] <a id="summary-@typescript-eslint/no-unsafe-unary-minus"></a>                                               | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-unused-expressions`] <a id="summary-@typescript-eslint/no-unused-expressions"></a>                                               | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-unused-private-class-members`] <a id="summary-@typescript-eslint/no-unused-private-class-members"></a>                           | ✅                                                                        | 🚫  |
| [`@typescript-eslint/no-unused-vars`] <a id="summary-@typescript-eslint/no-unused-vars"></a>                                                             | 🚫                                                                        | ✅  |
| [`@typescript-eslint/no-use-before-define`] <a id="summary-@typescript-eslint/no-use-before-define"></a>                                                 | 🚫                                                                        | 🚫  |
| [`@typescript-eslint/no-useless-constructor`] <a id="summary-@typescript-eslint/no-useless-constructor"></a>                                             | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-useless-default-assignment`] <a id="summary-@typescript-eslint/no-useless-default-assignment"></a>                               | ✅                                                                        | ✅  |
| [`@typescript-eslint/no-useless-empty-export`] <a id="summary-@typescript-eslint/no-useless-empty-export"></a>                                           | ✅                                                                        | 🚫  |
| [`@typescript-eslint/no-wrapper-object-types`] <a id="summary-@typescript-eslint/no-wrapper-object-types"></a>                                           | ✅                                                                        | ✅  |
| [`@typescript-eslint/non-nullable-type-assertion-style`] <a id="summary-@typescript-eslint/non-nullable-type-assertion-style"></a>                       | ✅                                                                        | ✅  |
| [`@typescript-eslint/only-throw-error`] <a id="summary-@typescript-eslint/only-throw-error"></a>                                                         | ✅                                                                        | ✅  |
| [`@typescript-eslint/parameter-properties`] <a id="summary-@typescript-eslint/parameter-properties"></a>                                                 | ✅                                                                        | 🚫  |
| [`@typescript-eslint/prefer-as-const`] <a id="summary-@typescript-eslint/prefer-as-const"></a>                                                           | ✅                                                                        | ✅  |
| [`@typescript-eslint/prefer-destructuring`] <a id="summary-@typescript-eslint/prefer-destructuring"></a>                                                 | ✅                                                                        | 🚫  |
| [`@typescript-eslint/prefer-enum-initializers`] <a id="summary-@typescript-eslint/prefer-enum-initializers"></a>                                         | 🚫                                                                        | 🚫  |
| [`@typescript-eslint/prefer-find`] <a id="summary-@typescript-eslint/prefer-find"></a>                                                                   | ✅                                                                        | ✅  |
| [`@typescript-eslint/prefer-for-of`] <a id="summary-@typescript-eslint/prefer-for-of"></a>                                                               | ✅                                                                        | ✅  |
| [`@typescript-eslint/prefer-function-type`] <a id="summary-@typescript-eslint/prefer-function-type"></a>                                                 | ✅                                                                        | ✅  |
| [`@typescript-eslint/prefer-includes`] <a id="summary-@typescript-eslint/prefer-includes"></a>                                                           | ✅                                                                        | ✅  |
| [`@typescript-eslint/prefer-literal-enum-member`] <a id="summary-@typescript-eslint/prefer-literal-enum-member"></a>                                     | ✅                                                                        | ✅  |
| [`@typescript-eslint/prefer-namespace-keyword`] <a id="summary-@typescript-eslint/prefer-namespace-keyword"></a>                                         | ✅                                                                        | ✅  |
| [`@typescript-eslint/prefer-nullish-coalescing`] <a id="summary-@typescript-eslint/prefer-nullish-coalescing"></a>                                       | ✅                                                                        | ✅  |
| [`@typescript-eslint/prefer-optional-chain`] <a id="summary-@typescript-eslint/prefer-optional-chain"></a>                                               | ✅                                                                        | ✅  |
| [`@typescript-eslint/prefer-promise-reject-errors`] <a id="summary-@typescript-eslint/prefer-promise-reject-errors"></a>                                 | ✅                                                                        | ✅  |
| [`@typescript-eslint/prefer-readonly`] <a id="summary-@typescript-eslint/prefer-readonly"></a>                                                           | ✅                                                                        | 🚫  |
| [`@typescript-eslint/prefer-readonly-parameter-types`] <a id="summary-@typescript-eslint/prefer-readonly-parameter-types"></a>                           | 🚫                                                                        | 🚫  |
| [`@typescript-eslint/prefer-reduce-type-parameter`] <a id="summary-@typescript-eslint/prefer-reduce-type-parameter"></a>                                 | ✅                                                                        | ✅  |
| [`@typescript-eslint/prefer-regexp-exec`] <a id="summary-@typescript-eslint/prefer-regexp-exec"></a>                                                     | ✅                                                                        | ✅  |
| [`@typescript-eslint/prefer-return-this-type`] <a id="summary-@typescript-eslint/prefer-return-this-type"></a>                                           | ✅                                                                        | ✅  |
| [`@typescript-eslint/prefer-string-starts-ends-with`] <a id="summary-@typescript-eslint/prefer-string-starts-ends-with"></a>                             | ✅                                                                        | ✅  |
| [`@typescript-eslint/promise-function-async`] <a id="summary-@typescript-eslint/promise-function-async"></a>                                             | ✅                                                                        | 🚫  |
| [`@typescript-eslint/related-getter-setter-pairs`] <a id="summary-@typescript-eslint/related-getter-setter-pairs"></a>                                   | ✅                                                                        | ✅  |
| [`@typescript-eslint/require-array-sort-compare`] <a id="summary-@typescript-eslint/require-array-sort-compare"></a>                                     | ✅                                                                        | 🚫  |
| [`@typescript-eslint/require-await`] <a id="summary-@typescript-eslint/require-await"></a>                                                               | ✅                                                                        | ✅  |
| [`@typescript-eslint/restrict-plus-operands`] <a id="summary-@typescript-eslint/restrict-plus-operands"></a>                                             | ✅                                                                        | ✅  |
| [`@typescript-eslint/restrict-template-expressions`] <a id="summary-@typescript-eslint/restrict-template-expressions"></a>                               | ✅                                                                        | ✅  |
| [`@typescript-eslint/return-await`] <a id="summary-@typescript-eslint/return-await"></a>                                                                 | ✅ <a href="#rule-@typescript-eslint/return-await">(?)</a>                | ✅  |
| [`@typescript-eslint/strict-boolean-expressions`] <a id="summary-@typescript-eslint/strict-boolean-expressions"></a>                                     | 🚫                                                                        | 🚫  |
| [`@typescript-eslint/strict-void-return`] <a id="summary-@typescript-eslint/strict-void-return"></a>                                                     | 🚫                                                                        | 🚫  |
| [`@typescript-eslint/switch-exhaustiveness-check`] <a id="summary-@typescript-eslint/switch-exhaustiveness-check"></a>                                   | ✅                                                                        | 🚫  |
| [`@typescript-eslint/triple-slash-reference`] <a id="summary-@typescript-eslint/triple-slash-reference"></a>                                             | ✅ <a href="#rule-@typescript-eslint/triple-slash-reference">(?)</a>      | ✅  |
| [`@typescript-eslint/unbound-method`] <a id="summary-@typescript-eslint/unbound-method"></a>                                                             | ✅                                                                        | ✅  |
| [`@typescript-eslint/unified-signatures`] <a id="summary-@typescript-eslint/unified-signatures"></a>                                                     | ✅                                                                        | ✅  |
| [`@typescript-eslint/use-unknown-in-catch-callback-variable`] <a id="summary-@typescript-eslint/use-unknown-in-catch-callback-variable"></a>             | ✅                                                                        | ✅  |

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

[`@typescript-eslint/adjacent-overload-signatures`]: https://typescript-eslint.io/rules/adjacent-overload-signatures
[`@typescript-eslint/array-type`]: https://typescript-eslint.io/rules/array-type
[`@typescript-eslint/await-thenable`]: https://typescript-eslint.io/rules/await-thenable
[`@typescript-eslint/ban-ts-comment`]: https://typescript-eslint.io/rules/ban-ts-comment
[`@typescript-eslint/ban-tslint-comment`]: https://typescript-eslint.io/rules/ban-tslint-comment
[`@typescript-eslint/class-literal-property-style`]: https://typescript-eslint.io/rules/class-literal-property-style
[`@typescript-eslint/class-methods-use-this`]: https://typescript-eslint.io/rules/class-methods-use-this
[`@typescript-eslint/consistent-generic-constructors`]: https://typescript-eslint.io/rules/consistent-generic-constructors
[`@typescript-eslint/consistent-indexed-object-style`]: https://typescript-eslint.io/rules/consistent-indexed-object-style
[`@typescript-eslint/consistent-return`]: https://typescript-eslint.io/rules/consistent-return
[`@typescript-eslint/consistent-type-assertions`]: https://typescript-eslint.io/rules/consistent-type-assertions
[`@typescript-eslint/consistent-type-definitions`]: https://typescript-eslint.io/rules/consistent-type-definitions
[`@typescript-eslint/consistent-type-exports`]: https://typescript-eslint.io/rules/consistent-type-exports
[`@typescript-eslint/consistent-type-imports`]: https://typescript-eslint.io/rules/consistent-type-imports
[`@typescript-eslint/default-param-last`]: https://typescript-eslint.io/rules/default-param-last
[`@typescript-eslint/dot-notation`]: https://typescript-eslint.io/rules/dot-notation
[`@typescript-eslint/explicit-function-return-type`]: https://typescript-eslint.io/rules/explicit-function-return-type
[`@typescript-eslint/explicit-member-accessibility`]: https://typescript-eslint.io/rules/explicit-member-accessibility
[`@typescript-eslint/explicit-module-boundary-types`]: https://typescript-eslint.io/rules/explicit-module-boundary-types
[`@typescript-eslint/init-declarations`]: https://typescript-eslint.io/rules/init-declarations
[`@typescript-eslint/max-params`]: https://typescript-eslint.io/rules/max-params
[`@typescript-eslint/member-ordering`]: https://typescript-eslint.io/rules/member-ordering
[`@typescript-eslint/method-signature-style`]: https://typescript-eslint.io/rules/method-signature-style
[`@typescript-eslint/naming-convention`]: https://typescript-eslint.io/rules/naming-convention
[`@typescript-eslint/no-array-constructor`]: https://typescript-eslint.io/rules/no-array-constructor
[`@typescript-eslint/no-array-delete`]: https://typescript-eslint.io/rules/no-array-delete
[`@typescript-eslint/no-base-to-string`]: https://typescript-eslint.io/rules/no-base-to-string
[`@typescript-eslint/no-confusing-non-null-assertion`]: https://typescript-eslint.io/rules/no-confusing-non-null-assertion
[`@typescript-eslint/no-confusing-void-expression`]: https://typescript-eslint.io/rules/no-confusing-void-expression
[`@typescript-eslint/no-deprecated`]: https://typescript-eslint.io/rules/no-deprecated
[`@typescript-eslint/no-dupe-class-members`]: https://typescript-eslint.io/rules/no-dupe-class-members
[`@typescript-eslint/no-duplicate-enum-values`]: https://typescript-eslint.io/rules/no-duplicate-enum-values
[`@typescript-eslint/no-duplicate-type-constituents`]: https://typescript-eslint.io/rules/no-duplicate-type-constituents
[`@typescript-eslint/no-dynamic-delete`]: https://typescript-eslint.io/rules/no-dynamic-delete
[`@typescript-eslint/no-empty-function`]: https://typescript-eslint.io/rules/no-empty-function
[`@typescript-eslint/no-empty-object-type`]: https://typescript-eslint.io/rules/no-empty-object-type
[`@typescript-eslint/no-explicit-any`]: https://typescript-eslint.io/rules/no-explicit-any
[`@typescript-eslint/no-extra-non-null-assertion`]: https://typescript-eslint.io/rules/no-extra-non-null-assertion
[`@typescript-eslint/no-extraneous-class`]: https://typescript-eslint.io/rules/no-extraneous-class
[`@typescript-eslint/no-floating-promises`]: https://typescript-eslint.io/rules/no-floating-promises
[`@typescript-eslint/no-for-in-array`]: https://typescript-eslint.io/rules/no-for-in-array
[`@typescript-eslint/no-implied-eval`]: https://typescript-eslint.io/rules/no-implied-eval
[`@typescript-eslint/no-import-type-side-effects`]: https://typescript-eslint.io/rules/no-import-type-side-effects
[`@typescript-eslint/no-inferrable-types`]: https://typescript-eslint.io/rules/no-inferrable-types
[`@typescript-eslint/no-invalid-this`]: https://typescript-eslint.io/rules/no-invalid-this
[`@typescript-eslint/no-invalid-void-type`]: https://typescript-eslint.io/rules/no-invalid-void-type
[`@typescript-eslint/no-magic-numbers`]: https://typescript-eslint.io/rules/no-magic-numbers
[`@typescript-eslint/no-meaningless-void-operator`]: https://typescript-eslint.io/rules/no-meaningless-void-operator
[`@typescript-eslint/no-misused-new`]: https://typescript-eslint.io/rules/no-misused-new
[`@typescript-eslint/no-misused-promises`]: https://typescript-eslint.io/rules/no-misused-promises
[`@typescript-eslint/no-misused-spread`]: https://typescript-eslint.io/rules/no-misused-spread
[`@typescript-eslint/no-mixed-enums`]: https://typescript-eslint.io/rules/no-mixed-enums
[`@typescript-eslint/no-namespace`]: https://typescript-eslint.io/rules/no-namespace
[`@typescript-eslint/no-non-null-asserted-nullish-coalescing`]: https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing
[`@typescript-eslint/no-non-null-asserted-optional-chain`]: https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain
[`@typescript-eslint/no-non-null-assertion`]: https://typescript-eslint.io/rules/no-non-null-assertion
[`@typescript-eslint/no-redeclare`]: https://typescript-eslint.io/rules/no-redeclare
[`@typescript-eslint/no-redundant-type-constituents`]: https://typescript-eslint.io/rules/no-redundant-type-constituents
[`@typescript-eslint/no-require-imports`]: https://typescript-eslint.io/rules/no-require-imports
[`@typescript-eslint/no-restricted-types`]: https://typescript-eslint.io/rules/no-restricted-types
[`@typescript-eslint/no-shadow`]: https://typescript-eslint.io/rules/no-shadow
[`@typescript-eslint/no-this-alias`]: https://typescript-eslint.io/rules/no-this-alias
[`@typescript-eslint/no-unnecessary-boolean-literal-compare`]: https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare
[`@typescript-eslint/no-unnecessary-condition`]: https://typescript-eslint.io/rules/no-unnecessary-condition
[`@typescript-eslint/no-unnecessary-parameter-property-assignment`]: https://typescript-eslint.io/rules/no-unnecessary-parameter-property-assignment
[`@typescript-eslint/no-unnecessary-qualifier`]: https://typescript-eslint.io/rules/no-unnecessary-qualifier
[`@typescript-eslint/no-unnecessary-template-expression`]: https://typescript-eslint.io/rules/no-unnecessary-template-expression
[`@typescript-eslint/no-unnecessary-type-arguments`]: https://typescript-eslint.io/rules/no-unnecessary-type-arguments
[`@typescript-eslint/no-unnecessary-type-assertion`]: https://typescript-eslint.io/rules/no-unnecessary-type-assertion
[`@typescript-eslint/no-unnecessary-type-constraint`]: https://typescript-eslint.io/rules/no-unnecessary-type-constraint
[`@typescript-eslint/no-unnecessary-type-conversion`]: https://typescript-eslint.io/rules/no-unnecessary-type-conversion
[`@typescript-eslint/no-unnecessary-type-parameters`]: https://typescript-eslint.io/rules/no-unnecessary-type-parameters
[`@typescript-eslint/no-unsafe-argument`]: https://typescript-eslint.io/rules/no-unsafe-argument
[`@typescript-eslint/no-unsafe-assignment`]: https://typescript-eslint.io/rules/no-unsafe-assignment
[`@typescript-eslint/no-unsafe-call`]: https://typescript-eslint.io/rules/no-unsafe-call
[`@typescript-eslint/no-unsafe-declaration-merging`]: https://typescript-eslint.io/rules/no-unsafe-declaration-merging
[`@typescript-eslint/no-unsafe-enum-comparison`]: https://typescript-eslint.io/rules/no-unsafe-enum-comparison
[`@typescript-eslint/no-unsafe-function-type`]: https://typescript-eslint.io/rules/no-unsafe-function-type
[`@typescript-eslint/no-unsafe-member-access`]: https://typescript-eslint.io/rules/no-unsafe-member-access
[`@typescript-eslint/no-unsafe-return`]: https://typescript-eslint.io/rules/no-unsafe-return
[`@typescript-eslint/no-unsafe-type-assertion`]: https://typescript-eslint.io/rules/no-unsafe-type-assertion
[`@typescript-eslint/no-unsafe-unary-minus`]: https://typescript-eslint.io/rules/no-unsafe-unary-minus
[`@typescript-eslint/no-unused-expressions`]: https://typescript-eslint.io/rules/no-unused-expressions
[`@typescript-eslint/no-unused-private-class-members`]: https://typescript-eslint.io/rules/no-unused-private-class-members
[`@typescript-eslint/no-unused-vars`]: https://typescript-eslint.io/rules/no-unused-vars
[`@typescript-eslint/no-use-before-define`]: https://typescript-eslint.io/rules/no-use-before-define
[`@typescript-eslint/no-useless-constructor`]: https://typescript-eslint.io/rules/no-useless-constructor
[`@typescript-eslint/no-useless-default-assignment`]: https://typescript-eslint.io/rules/no-useless-default-assignment
[`@typescript-eslint/no-useless-empty-export`]: https://typescript-eslint.io/rules/no-useless-empty-export
[`@typescript-eslint/no-wrapper-object-types`]: https://typescript-eslint.io/rules/no-wrapper-object-types
[`@typescript-eslint/non-nullable-type-assertion-style`]: https://typescript-eslint.io/rules/non-nullable-type-assertion-style
[`@typescript-eslint/only-throw-error`]: https://typescript-eslint.io/rules/only-throw-error
[`@typescript-eslint/parameter-properties`]: https://typescript-eslint.io/rules/parameter-properties
[`@typescript-eslint/prefer-as-const`]: https://typescript-eslint.io/rules/prefer-as-const
[`@typescript-eslint/prefer-destructuring`]: https://typescript-eslint.io/rules/prefer-destructuring
[`@typescript-eslint/prefer-enum-initializers`]: https://typescript-eslint.io/rules/prefer-enum-initializers
[`@typescript-eslint/prefer-find`]: https://typescript-eslint.io/rules/prefer-find
[`@typescript-eslint/prefer-for-of`]: https://typescript-eslint.io/rules/prefer-for-of
[`@typescript-eslint/prefer-function-type`]: https://typescript-eslint.io/rules/prefer-function-type
[`@typescript-eslint/prefer-includes`]: https://typescript-eslint.io/rules/prefer-includes
[`@typescript-eslint/prefer-literal-enum-member`]: https://typescript-eslint.io/rules/prefer-literal-enum-member
[`@typescript-eslint/prefer-namespace-keyword`]: https://typescript-eslint.io/rules/prefer-namespace-keyword
[`@typescript-eslint/prefer-nullish-coalescing`]: https://typescript-eslint.io/rules/prefer-nullish-coalescing
[`@typescript-eslint/prefer-optional-chain`]: https://typescript-eslint.io/rules/prefer-optional-chain
[`@typescript-eslint/prefer-promise-reject-errors`]: https://typescript-eslint.io/rules/prefer-promise-reject-errors
[`@typescript-eslint/prefer-readonly`]: https://typescript-eslint.io/rules/prefer-readonly
[`@typescript-eslint/prefer-readonly-parameter-types`]: https://typescript-eslint.io/rules/prefer-readonly-parameter-types
[`@typescript-eslint/prefer-reduce-type-parameter`]: https://typescript-eslint.io/rules/prefer-reduce-type-parameter
[`@typescript-eslint/prefer-regexp-exec`]: https://typescript-eslint.io/rules/prefer-regexp-exec
[`@typescript-eslint/prefer-return-this-type`]: https://typescript-eslint.io/rules/prefer-return-this-type
[`@typescript-eslint/prefer-string-starts-ends-with`]: https://typescript-eslint.io/rules/prefer-string-starts-ends-with
[`@typescript-eslint/promise-function-async`]: https://typescript-eslint.io/rules/promise-function-async
[`@typescript-eslint/related-getter-setter-pairs`]: https://typescript-eslint.io/rules/related-getter-setter-pairs
[`@typescript-eslint/require-array-sort-compare`]: https://typescript-eslint.io/rules/require-array-sort-compare
[`@typescript-eslint/require-await`]: https://typescript-eslint.io/rules/require-await
[`@typescript-eslint/restrict-plus-operands`]: https://typescript-eslint.io/rules/restrict-plus-operands
[`@typescript-eslint/restrict-template-expressions`]: https://typescript-eslint.io/rules/restrict-template-expressions
[`@typescript-eslint/return-await`]: https://typescript-eslint.io/rules/return-await
[`@typescript-eslint/strict-boolean-expressions`]: https://typescript-eslint.io/rules/strict-boolean-expressions
[`@typescript-eslint/strict-void-return`]: https://typescript-eslint.io/rules/strict-void-return
[`@typescript-eslint/switch-exhaustiveness-check`]: https://typescript-eslint.io/rules/switch-exhaustiveness-check
[`@typescript-eslint/triple-slash-reference`]: https://typescript-eslint.io/rules/triple-slash-reference
[`@typescript-eslint/unbound-method`]: https://typescript-eslint.io/rules/unbound-method
[`@typescript-eslint/unified-signatures`]: https://typescript-eslint.io/rules/unified-signatures
[`@typescript-eslint/use-unknown-in-catch-callback-variable`]: https://typescript-eslint.io/rules/use-unknown-in-catch-callback-variable

<!-- END @typescript-eslint -->

## @eslint-react

Configurations compared:

- **P** – @priver/eslint-config
- **R** – [strict-type-checked](https://eslint-react.xyz/docs/presets#typescript-specialized)

### react-x

<!-- START react-x -->

| Rule                                                                                                                   | P   | R   |
| ---------------------------------------------------------------------------------------------------------------------- | --- | --- |
| [`react-x/error-boundaries`] <a id="summary-react-x/error-boundaries"></a>                                             | ✅  | ✅  |
| [`react-x/exhaustive-deps`] <a id="summary-react-x/exhaustive-deps"></a>                                               | ✅  | ⚠️  |
| [`react-x/globals`] <a id="summary-react-x/globals"></a>                                                               | 🚫  | 🚫  |
| [`react-x/immutability`] <a id="summary-react-x/immutability"></a>                                                     | 🚫  | 🚫  |
| [`react-x/no-access-state-in-setstate`] <a id="summary-react-x/no-access-state-in-setstate"></a>                       | ✅  | ✅  |
| [`react-x/no-array-index-key`] <a id="summary-react-x/no-array-index-key"></a>                                         | ✅  | ⚠️  |
| [`react-x/no-children-count`] <a id="summary-react-x/no-children-count"></a>                                           | ✅  | ⚠️  |
| [`react-x/no-children-for-each`] <a id="summary-react-x/no-children-for-each"></a>                                     | ✅  | ⚠️  |
| [`react-x/no-children-map`] <a id="summary-react-x/no-children-map"></a>                                               | ✅  | ⚠️  |
| [`react-x/no-children-only`] <a id="summary-react-x/no-children-only"></a>                                             | ✅  | ⚠️  |
| [`react-x/no-children-to-array`] <a id="summary-react-x/no-children-to-array"></a>                                     | ✅  | ⚠️  |
| [`react-x/no-class-component`] <a id="summary-react-x/no-class-component"></a>                                         | ✅  | ✅  |
| [`react-x/no-clone-element`] <a id="summary-react-x/no-clone-element"></a>                                             | ✅  | ⚠️  |
| [`react-x/no-component-will-mount`] <a id="summary-react-x/no-component-will-mount"></a>                               | ✅  | ✅  |
| [`react-x/no-component-will-receive-props`] <a id="summary-react-x/no-component-will-receive-props"></a>               | ✅  | ✅  |
| [`react-x/no-component-will-update`] <a id="summary-react-x/no-component-will-update"></a>                             | ✅  | ✅  |
| [`react-x/no-context-provider`] <a id="summary-react-x/no-context-provider"></a>                                       | ✅  | ⚠️  |
| [`react-x/no-create-ref`] <a id="summary-react-x/no-create-ref"></a>                                                   | ✅  | ✅  |
| [`react-x/no-direct-mutation-state`] <a id="summary-react-x/no-direct-mutation-state"></a>                             | ✅  | ✅  |
| [`react-x/no-duplicate-key`] <a id="summary-react-x/no-duplicate-key"></a>                                             | 🚫  | 🚫  |
| [`react-x/no-forward-ref`] <a id="summary-react-x/no-forward-ref"></a>                                                 | ✅  | ⚠️  |
| [`react-x/no-implicit-children`] <a id="summary-react-x/no-implicit-children"></a>                                     | 🚫  | 🚫  |
| [`react-x/no-implicit-key`] <a id="summary-react-x/no-implicit-key"></a>                                               | 🚫  | 🚫  |
| [`react-x/no-implicit-ref`] <a id="summary-react-x/no-implicit-ref"></a>                                               | 🚫  | 🚫  |
| [`react-x/no-leaked-conditional-rendering`] <a id="summary-react-x/no-leaked-conditional-rendering"></a>               | ✅  | ✅  |
| [`react-x/no-missing-component-display-name`] <a id="summary-react-x/no-missing-component-display-name"></a>           | ✅  | 🚫  |
| [`react-x/no-missing-context-display-name`] <a id="summary-react-x/no-missing-context-display-name"></a>               | ✅  | 🚫  |
| [`react-x/no-missing-key`] <a id="summary-react-x/no-missing-key"></a>                                                 | ✅  | ✅  |
| [`react-x/no-misused-capture-owner-stack`] <a id="summary-react-x/no-misused-capture-owner-stack"></a>                 | ✅  | ✅  |
| [`react-x/no-nested-component-definitions`] <a id="summary-react-x/no-nested-component-definitions"></a>               | ✅  | ✅  |
| [`react-x/no-nested-lazy-component-declarations`] <a id="summary-react-x/no-nested-lazy-component-declarations"></a>   | ✅  | ✅  |
| [`react-x/no-set-state-in-component-did-mount`] <a id="summary-react-x/no-set-state-in-component-did-mount"></a>       | ✅  | ⚠️  |
| [`react-x/no-set-state-in-component-did-update`] <a id="summary-react-x/no-set-state-in-component-did-update"></a>     | ✅  | ⚠️  |
| [`react-x/no-set-state-in-component-will-update`] <a id="summary-react-x/no-set-state-in-component-will-update"></a>   | ✅  | ⚠️  |
| [`react-x/no-unnecessary-use-prefix`] <a id="summary-react-x/no-unnecessary-use-prefix"></a>                           | ✅  | ⚠️  |
| [`react-x/no-unsafe-component-will-mount`] <a id="summary-react-x/no-unsafe-component-will-mount"></a>                 | ✅  | ⚠️  |
| [`react-x/no-unsafe-component-will-receive-props`] <a id="summary-react-x/no-unsafe-component-will-receive-props"></a> | ✅  | ⚠️  |
| [`react-x/no-unsafe-component-will-update`] <a id="summary-react-x/no-unsafe-component-will-update"></a>               | ✅  | ⚠️  |
| [`react-x/no-unstable-context-value`] <a id="summary-react-x/no-unstable-context-value"></a>                           | ✅  | ⚠️  |
| [`react-x/no-unstable-default-props`] <a id="summary-react-x/no-unstable-default-props"></a>                           | ✅  | ⚠️  |
| [`react-x/no-unused-class-component-members`] <a id="summary-react-x/no-unused-class-component-members"></a>           | ✅  | ⚠️  |
| [`react-x/no-unused-props`] <a id="summary-react-x/no-unused-props"></a>                                               | ✅  | ⚠️  |
| [`react-x/no-unused-state`] <a id="summary-react-x/no-unused-state"></a>                                               | ✅  | 🚫  |
| [`react-x/no-use-context`] <a id="summary-react-x/no-use-context"></a>                                                 | ✅  | ⚠️  |
| [`react-x/purity`] <a id="summary-react-x/purity"></a>                                                                 | ✅  | ⚠️  |
| [`react-x/refs`] <a id="summary-react-x/refs"></a>                                                                     | 🚫  | 🚫  |
| [`react-x/rules-of-hooks`] <a id="summary-react-x/rules-of-hooks"></a>                                                 | ✅  | ✅  |
| [`react-x/set-state-in-effect`] <a id="summary-react-x/set-state-in-effect"></a>                                       | ✅  | ⚠️  |
| [`react-x/set-state-in-render`] <a id="summary-react-x/set-state-in-render"></a>                                       | ✅  | ✅  |
| [`react-x/static-components`] <a id="summary-react-x/static-components"></a>                                           | ✅  | ✅  |
| [`react-x/unsupported-syntax`] <a id="summary-react-x/unsupported-syntax"></a>                                         | ✅  | ✅  |
| [`react-x/use-memo`] <a id="summary-react-x/use-memo"></a>                                                             | ✅  | ✅  |
| [`react-x/use-state`] <a id="summary-react-x/use-state"></a>                                                           | ✅  | ⚠️  |

[`react-x/error-boundaries`]: https://eslint-react.xyz/docs/rules/error-boundaries
[`react-x/exhaustive-deps`]: https://github.com/facebook/react/issues/14920
[`react-x/globals`]: https://eslint-react.xyz/docs/rules/globals
[`react-x/immutability`]: https://eslint-react.xyz/docs/rules/immutability
[`react-x/no-access-state-in-setstate`]: https://eslint-react.xyz/docs/rules/no-access-state-in-setstate
[`react-x/no-array-index-key`]: https://eslint-react.xyz/docs/rules/no-array-index-key
[`react-x/no-children-count`]: https://eslint-react.xyz/docs/rules/no-children-count
[`react-x/no-children-for-each`]: https://eslint-react.xyz/docs/rules/no-children-for-each
[`react-x/no-children-map`]: https://eslint-react.xyz/docs/rules/no-children-map
[`react-x/no-children-only`]: https://eslint-react.xyz/docs/rules/no-children-only
[`react-x/no-children-to-array`]: https://eslint-react.xyz/docs/rules/no-children-to-array
[`react-x/no-class-component`]: https://eslint-react.xyz/docs/rules/no-class-component
[`react-x/no-clone-element`]: https://eslint-react.xyz/docs/rules/no-clone-element
[`react-x/no-component-will-mount`]: https://eslint-react.xyz/docs/rules/no-component-will-mount
[`react-x/no-component-will-receive-props`]: https://eslint-react.xyz/docs/rules/no-component-will-receive-props
[`react-x/no-component-will-update`]: https://eslint-react.xyz/docs/rules/no-component-will-update
[`react-x/no-context-provider`]: https://eslint-react.xyz/docs/rules/no-context-provider
[`react-x/no-create-ref`]: https://eslint-react.xyz/docs/rules/no-create-ref
[`react-x/no-direct-mutation-state`]: https://eslint-react.xyz/docs/rules/no-direct-mutation-state
[`react-x/no-duplicate-key`]: https://eslint-react.xyz/docs/rules/no-duplicate-key
[`react-x/no-forward-ref`]: https://eslint-react.xyz/docs/rules/no-forward-ref
[`react-x/no-implicit-children`]: https://eslint-react.xyz/docs/rules/no-implicit-children
[`react-x/no-implicit-key`]: https://eslint-react.xyz/docs/rules/no-implicit-key
[`react-x/no-implicit-ref`]: https://eslint-react.xyz/docs/rules/no-implicit-ref
[`react-x/no-leaked-conditional-rendering`]: https://eslint-react.xyz/docs/rules/no-leaked-conditional-rendering
[`react-x/no-missing-component-display-name`]: https://eslint-react.xyz/docs/rules/no-missing-component-display-name
[`react-x/no-missing-context-display-name`]: https://eslint-react.xyz/docs/rules/no-missing-context-display-name
[`react-x/no-missing-key`]: https://eslint-react.xyz/docs/rules/no-missing-key
[`react-x/no-misused-capture-owner-stack`]: https://eslint-react.xyz/docs/rules/no-misused-capture-owner-stack
[`react-x/no-nested-component-definitions`]: https://eslint-react.xyz/docs/rules/no-nested-component-definitions
[`react-x/no-nested-lazy-component-declarations`]: https://eslint-react.xyz/docs/rules/no-nested-lazy-component-declarations
[`react-x/no-set-state-in-component-did-mount`]: https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-mount
[`react-x/no-set-state-in-component-did-update`]: https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-update
[`react-x/no-set-state-in-component-will-update`]: https://eslint-react.xyz/docs/rules/no-set-state-in-component-will-update
[`react-x/no-unnecessary-use-prefix`]: https://eslint-react.xyz/docs/rules/no-unnecessary-use-prefix
[`react-x/no-unsafe-component-will-mount`]: https://eslint-react.xyz/docs/rules/no-unsafe-component-will-mount
[`react-x/no-unsafe-component-will-receive-props`]: https://eslint-react.xyz/docs/rules/no-unsafe-component-will-receive-props
[`react-x/no-unsafe-component-will-update`]: https://eslint-react.xyz/docs/rules/no-unsafe-component-will-update
[`react-x/no-unstable-context-value`]: https://eslint-react.xyz/docs/rules/no-unstable-context-value
[`react-x/no-unstable-default-props`]: https://eslint-react.xyz/docs/rules/no-unstable-default-props
[`react-x/no-unused-class-component-members`]: https://eslint-react.xyz/docs/rules/no-unused-class-component-members
[`react-x/no-unused-props`]: https://eslint-react.xyz/docs/rules/no-unused-props
[`react-x/no-unused-state`]: https://eslint-react.xyz/docs/rules/no-unused-state
[`react-x/no-use-context`]: https://eslint-react.xyz/docs/rules/no-use-context
[`react-x/purity`]: https://eslint-react.xyz/docs/rules/purity
[`react-x/refs`]: https://eslint-react.xyz/docs/rules/refs
[`react-x/rules-of-hooks`]: https://react.dev/reference/rules/rules-of-hooks
[`react-x/set-state-in-effect`]: https://eslint-react.xyz/docs/rules/set-state-in-effect
[`react-x/set-state-in-render`]: https://eslint-react.xyz/docs/rules/set-state-in-render
[`react-x/static-components`]: https://eslint-react.xyz/docs/rules/static-components
[`react-x/unsupported-syntax`]: https://eslint-react.xyz/docs/rules/unsupported-syntax
[`react-x/use-memo`]: https://eslint-react.xyz/docs/rules/use-memo
[`react-x/use-state`]: https://eslint-react.xyz/docs/rules/use-state

<!-- END react-x -->

### react-jsx

<!-- START react-jsx -->

| Rule                                                                                                       | P   | R   |
| ---------------------------------------------------------------------------------------------------------- | --- | --- |
| [`react-jsx/no-children-prop`] <a id="summary-react-jsx/no-children-prop"></a>                             | ✅  | ✅  |
| [`react-jsx/no-children-prop-with-children`] <a id="summary-react-jsx/no-children-prop-with-children"></a> | ✅  | ✅  |
| [`react-jsx/no-comment-textnodes`] <a id="summary-react-jsx/no-comment-textnodes"></a>                     | ✅  | ⚠️  |
| [`react-jsx/no-key-after-spread`] <a id="summary-react-jsx/no-key-after-spread"></a>                       | ✅  | ✅  |
| [`react-jsx/no-leaked-dollar`] <a id="summary-react-jsx/no-leaked-dollar"></a>                             | 🚫  | ⚠️  |
| [`react-jsx/no-leaked-semicolon`] <a id="summary-react-jsx/no-leaked-semicolon"></a>                       | ✅  | ⚠️  |
| [`react-jsx/no-namespace`] <a id="summary-react-jsx/no-namespace"></a>                                     | ✅  | ✅  |
| [`react-jsx/no-useless-fragment`] <a id="summary-react-jsx/no-useless-fragment"></a>                       | ✅  | ⚠️  |

[`react-jsx/no-children-prop`]: https://eslint-react.xyz/docs/rules/jsx-no-children-prop
[`react-jsx/no-children-prop-with-children`]: https://eslint-react.xyz/docs/rules/jsx-no-children-prop-with-children
[`react-jsx/no-comment-textnodes`]: https://eslint-react.xyz/docs/rules/jsx-no-comment-textnodes
[`react-jsx/no-key-after-spread`]: https://eslint-react.xyz/docs/rules/jsx-no-key-after-spread
[`react-jsx/no-leaked-dollar`]: https://eslint-react.xyz/docs/rules/jsx-no-leaked-dollar
[`react-jsx/no-leaked-semicolon`]: https://eslint-react.xyz/docs/rules/jsx-no-leaked-semicolon
[`react-jsx/no-namespace`]: https://eslint-react.xyz/docs/rules/jsx-no-namespace
[`react-jsx/no-useless-fragment`]: https://eslint-react.xyz/docs/rules/jsx-no-useless-fragment

<!-- END react-jsx -->

### react-rsc

<!-- START react-rsc -->

| Rule                                                                                 | P   | R   |
| ------------------------------------------------------------------------------------ | --- | --- |
| [`react-rsc/function-definition`] <a id="summary-react-rsc/function-definition"></a> | ✅  | ✅  |

[`react-rsc/function-definition`]: https://eslint-react.xyz/docs/rules/rsc-function-definition

<!-- END react-rsc -->

### react-dom

<!-- START react-dom -->

| Rule                                                                                                                               | P   | R   |
| ---------------------------------------------------------------------------------------------------------------------------------- | --- | --- |
| [`react-dom/no-dangerously-set-innerhtml`] <a id="summary-react-dom/no-dangerously-set-innerhtml"></a>                             | ✅  | ⚠️  |
| [`react-dom/no-dangerously-set-innerhtml-with-children`] <a id="summary-react-dom/no-dangerously-set-innerhtml-with-children"></a> | ✅  | ✅  |
| [`react-dom/no-find-dom-node`] <a id="summary-react-dom/no-find-dom-node"></a>                                                     | ✅  | ✅  |
| [`react-dom/no-flush-sync`] <a id="summary-react-dom/no-flush-sync"></a>                                                           | ✅  | ✅  |
| [`react-dom/no-hydrate`] <a id="summary-react-dom/no-hydrate"></a>                                                                 | ✅  | ✅  |
| [`react-dom/no-missing-button-type`] <a id="summary-react-dom/no-missing-button-type"></a>                                         | ✅  | ⚠️  |
| [`react-dom/no-missing-iframe-sandbox`] <a id="summary-react-dom/no-missing-iframe-sandbox"></a>                                   | ✅  | ⚠️  |
| [`react-dom/no-render`] <a id="summary-react-dom/no-render"></a>                                                                   | ✅  | ✅  |
| [`react-dom/no-render-return-value`] <a id="summary-react-dom/no-render-return-value"></a>                                         | ✅  | ✅  |
| [`react-dom/no-script-url`] <a id="summary-react-dom/no-script-url"></a>                                                           | ✅  | ⚠️  |
| [`react-dom/no-string-style-prop`] <a id="summary-react-dom/no-string-style-prop"></a>                                             | 🚫  | 🚫  |
| [`react-dom/no-unknown-property`] <a id="summary-react-dom/no-unknown-property"></a>                                               | 🚫  | 🚫  |
| [`react-dom/no-unsafe-iframe-sandbox`] <a id="summary-react-dom/no-unsafe-iframe-sandbox"></a>                                     | ✅  | ⚠️  |
| [`react-dom/no-unsafe-target-blank`] <a id="summary-react-dom/no-unsafe-target-blank"></a>                                         | 🚫  | ⚠️  |
| [`react-dom/no-use-form-state`] <a id="summary-react-dom/no-use-form-state"></a>                                                   | ✅  | ✅  |
| [`react-dom/no-void-elements-with-children`] <a id="summary-react-dom/no-void-elements-with-children"></a>                         | ✅  | ✅  |

[`react-dom/no-dangerously-set-innerhtml`]: https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml
[`react-dom/no-dangerously-set-innerhtml-with-children`]: https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml-with-children
[`react-dom/no-find-dom-node`]: https://eslint-react.xyz/docs/rules/dom-no-find-dom-node
[`react-dom/no-flush-sync`]: https://eslint-react.xyz/docs/rules/dom-no-flush-sync
[`react-dom/no-hydrate`]: https://eslint-react.xyz/docs/rules/dom-no-hydrate
[`react-dom/no-missing-button-type`]: https://eslint-react.xyz/docs/rules/dom-no-missing-button-type
[`react-dom/no-missing-iframe-sandbox`]: https://eslint-react.xyz/docs/rules/dom-no-missing-iframe-sandbox
[`react-dom/no-render`]: https://eslint-react.xyz/docs/rules/dom-no-render
[`react-dom/no-render-return-value`]: https://eslint-react.xyz/docs/rules/dom-no-render-return-value
[`react-dom/no-script-url`]: https://eslint-react.xyz/docs/rules/dom-no-script-url
[`react-dom/no-string-style-prop`]: https://eslint-react.xyz/docs/rules/dom-no-string-style-prop
[`react-dom/no-unknown-property`]: https://eslint-react.xyz/docs/rules/dom-no-unknown-property
[`react-dom/no-unsafe-iframe-sandbox`]: https://eslint-react.xyz/docs/rules/dom-no-unsafe-iframe-sandbox
[`react-dom/no-unsafe-target-blank`]: https://eslint-react.xyz/docs/rules/dom-no-unsafe-target-blank
[`react-dom/no-use-form-state`]: https://eslint-react.xyz/docs/rules/dom-no-use-form-state
[`react-dom/no-void-elements-with-children`]: https://eslint-react.xyz/docs/rules/dom-no-void-elements-with-children

<!-- END react-dom -->

### react-web-api

<!-- START react-web-api -->

| Rule                                                                                                                 | P   | R   |
| -------------------------------------------------------------------------------------------------------------------- | --- | --- |
| [`react-web-api/no-leaked-event-listener`] <a id="summary-react-web-api/no-leaked-event-listener"></a>               | ✅  | ⚠️  |
| [`react-web-api/no-leaked-fetch`] <a id="summary-react-web-api/no-leaked-fetch"></a>                                 | ✅  | ⚠️  |
| [`react-web-api/no-leaked-intersection-observer`] <a id="summary-react-web-api/no-leaked-intersection-observer"></a> | ✅  | ⚠️  |
| [`react-web-api/no-leaked-interval`] <a id="summary-react-web-api/no-leaked-interval"></a>                           | ✅  | ⚠️  |
| [`react-web-api/no-leaked-resize-observer`] <a id="summary-react-web-api/no-leaked-resize-observer"></a>             | ✅  | ⚠️  |
| [`react-web-api/no-leaked-timeout`] <a id="summary-react-web-api/no-leaked-timeout"></a>                             | ✅  | ⚠️  |

[`react-web-api/no-leaked-event-listener`]: https://eslint-react.xyz/docs/rules/web-api-no-leaked-event-listener
[`react-web-api/no-leaked-fetch`]: https://eslint-react.xyz/docs/rules/web-api-no-leaked-fetch
[`react-web-api/no-leaked-intersection-observer`]: https://eslint-react.xyz/docs/rules/web-api-no-leaked-intersection-observer
[`react-web-api/no-leaked-interval`]: https://eslint-react.xyz/docs/rules/web-api-no-leaked-interval
[`react-web-api/no-leaked-resize-observer`]: https://eslint-react.xyz/docs/rules/web-api-no-leaked-resize-observer
[`react-web-api/no-leaked-timeout`]: https://eslint-react.xyz/docs/rules/web-api-no-leaked-timeout

<!-- END react-web-api -->

### react-naming-convention

<!-- START react-naming-convention -->

| Rule                                                                                               | P   | R   |
| -------------------------------------------------------------------------------------------------- | --- | --- |
| [`react-naming-convention/context-name`] <a id="summary-react-naming-convention/context-name"></a> | ✅  | ⚠️  |
| [`react-naming-convention/id-name`] <a id="summary-react-naming-convention/id-name"></a>           | ✅  | ⚠️  |
| [`react-naming-convention/ref-name`] <a id="summary-react-naming-convention/ref-name"></a>         | ✅  | ⚠️  |

[`react-naming-convention/context-name`]: https://eslint-react.xyz/docs/rules/naming-convention-context-name
[`react-naming-convention/id-name`]: https://eslint-react.xyz/docs/rules/naming-convention-id-name
[`react-naming-convention/ref-name`]: https://eslint-react.xyz/docs/rules/naming-convention-ref-name

<!-- END react-naming-convention -->

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
