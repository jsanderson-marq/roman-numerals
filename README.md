# Kata Starter

TypeScript template for practicing software development through code katas. Includes comprehensive test infrastructure with unit, integration, and acceptance testing patterns.

## Prerequisites

This project uses [Yarn Berry](https://github.com/yarnpkg/berry) (v4). Before running yarn commands, enable corepack:

```bash
npm install -g corepack
corepack enable
```

## Quick Start

```bash
# Install dependencies
yarn install

# Run tests
yarn test:unit              # Unit tests
yarn test:integration       # Integration tests
yarn test:acceptance        # Acceptance tests
yarn test:all              # All test suites

# Development
yarn lint                  # Lint code
yarn format                # Format code
yarn build                 # Build project
```

## Branches

- `main` - Basic folder structure without tests
- `tests` - Includes example unit, integration, and acceptance tests

## Learn More

See [CLAUDE.md](./CLAUDE.md) for detailed architecture and development guidance.
