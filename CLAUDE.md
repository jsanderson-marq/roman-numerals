# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Minimal TypeScript kata starter for practicing software development. Simple test infrastructure using Jest for TDD practice.

## Development Commands

### Testing

```bash
# Run tests once
yarn test

# Watch mode for continuous testing
yarn test:watch
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

Single test layer using Jest:

- **Tests** (`*.test.ts` in `src/`)
  - Co-located with source files
  - Default Jest timeout
  - Import aliases: `@/*` for src paths, `~src` for index
  - Example: `src/index.test.ts`

### Module Resolution

Path aliases configured in `tsconfig.json`:

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
- ESM modules with ts-jest preset
- Test results output to `test-results/` directory in JUnit XML format
