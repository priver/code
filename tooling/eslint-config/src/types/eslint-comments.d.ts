declare module '@eslint-community/eslint-plugin-eslint-comments' {
  import type { Linter, Rule } from 'eslint';

  const eslintComments: {
    rules: Record<string, Rule.RuleModule>;
    configs: {
      recommended: Linter.Config;
    };
  };

  export default eslintComments;
}
