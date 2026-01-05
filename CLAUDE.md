# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Minimal TypeScript kata starter for practicing software development.
Simple test infrastructure using Vitest for TDD practice.

## Development Commands

### Testing

```bash
# Run tests once
yarn test

# Watch mode for continuous testing
yarn test:watch

# Run tests with interactive web UI
yarn test:ui
```

### Code Quality

```bash
yarn lint                   # Run ESLint
yarn format                 # Format with Prettier
```

### Build

```bash
yarn build                  # Compile TypeScript
```

## Architecture

### Directory Structure

- `src/` - Application source code
  - `index.ts` - Main entry point / public API
  - `*.test.ts` - Tests co-located with source files

### Test Organization

Single test layer using Vitest:

- **Tests** (`*.test.ts` in `src/`)
  - Co-located with source files
  - Global test APIs enabled (describe, it, expect)
  - Import aliases: `@/*` for src paths, `~src` for index
  - Example: `src/index.test.ts`

### Module Resolution

Path aliases configured in `tsconfig.json` and `vitest.config.ts`:

- `@/*` - Maps to `src/*`
- `~src` - Maps to `src/index.ts`

### Test Style

Uses BDD-style nested `describe()` blocks:

```typescript
describe("When [condition]", () => {
  describe("and [additional context]", () => {
    it("should [expected behavior]", () => {
      // Single assertion
    });
  });
});
```

## Important Notes

- Package manager: **yarn v4** (enforced via preinstall script)
- Node version specified in `.nvmrc`
- Test framework: **Vitest 4** with native ESM support
- Configuration: `vitest.config.ts` with path aliases and dotenv setup
- Interactive UI available via `yarn test:ui`
