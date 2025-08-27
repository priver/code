# Code

Monorepo for my Mikhail Priver's projects.

## Apps

- [storybook](apps/storybook) - Component library documentation and development

## Packages

- [`@priver/editor`](packages/editor) - Rich text editor components
- [`@priver/ui`](packages/ui) - Shared UI components
- [`@priver/eslint-config`](packages/eslint-config) - ESLint configuration
- [`@priver/tsconfig`](packages/tsconfig) - TypeScript configuration

## Contributing

### Prerequisites

Before you can start developing, you'll need to install the following tools using Homebrew:

```sh
# Install required tools
brew install caddy mkcert nss dnsmasq

# Install mkcert CA in system trust store
mkcert -install

# Install Turbo globally for easier CLI usage
pnpm add -g turbo
```

**Tool descriptions:**

- **Caddy**: HTTP/2 web server with automatic HTTPS for local development
- **mkcert**: Tool for making locally-trusted development certificates
- **nss**: Network Security Services (required for certificate trust in Firefox)
- **dnsmasq**: Lightweight DNS forwarder for local domain resolution

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/priver/code.git
   cd code
   ```

2. **Install dependencies:**

   ```sh
   pnpm install
   ```

3. **Generate SSL certificates:**

   ```sh
   pnpm run mkcert
   ```

   This creates SSL certificates for `*.priver.dev` domains in the project root.

4. **Configure DNS resolution:**

   Add `*.priver.dev` domains to dnsmasq to resolve to localhost:

   ```sh
   # Add *.priver.dev domain resolution
   echo "address=/.priver.dev/127.0.0.1" | tee $(brew --prefix)/etc/dnsmasq.d/priver.dev

   # Restart dnsmasq
   sudo brew services restart dnsmasq

   # Add dnsmasq to your DNS resolvers
   sudo mkdir -p /etc/resolver
   echo "nameserver 127.0.0.1" | sudo tee /etc/resolver/priver.dev
   ```
