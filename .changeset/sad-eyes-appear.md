---
'@priver/eslint-config': major
---

Make eslint-plugin-storybook an optional peer dependency

The `eslint-plugin-storybook` package is now an optional peer dependency instead of a required
dependency.

**Breaking change:** If you're using the `storybook` configuration from this package, you'll now
need to manually install `eslint-plugin-storybook`:

```bash
npm install --save-dev eslint-plugin-storybook
# or
pnpm add --save-dev eslint-plugin-storybook
```

The Storybook configuration will continue to work exactly as before once the plugin is installed.
