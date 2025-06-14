# @priver/tsconfig

Shared TypeScript configurations for the monorepo.

## Usage

Extend from the appropriate configuration in your `tsconfig.json`:

```json
{
  "extends": "@priver/tsconfig"
}
```

## Available Configurations

- `@priver/tsconfig` - Base configuration with strict type checking
- `@priver/tsconfig/react` - React-specific settings (JSX, DOM types)
- `@priver/tsconfig/vite` - Vite client types
