# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

TypeScript kata starter template for practicing software development with comprehensive test infrastructure. Supports unit, integration, and acceptance testing patterns using Jest.

## Development Commands

### Testing

```bash
# Run all test suites
yarn test:all

# Run individual test suites
yarn test:unit              # Unit tests (co-located with source in src/)
yarn test:integration       # Integration tests (test-integration/)
yarn test:acceptance        # Acceptance/E2E tests (test-acceptance/)

# Watch mode for any test suite
yarn test:unit:watch
yarn test:integration:watch
yarn test:acceptance:watch

# Run specific test file
yarn test:unit src/controller/welcome.test.ts
yarn test:integration test-integration/lib/os/host.test.ts
```

### Code Quality

```bash
yarn lint                   # Run ESLint
yarn format                 # Format with Prettier
```

### Build & Run

```bash
yarn build                  # Build the project
yarn start                  # Start production server
```

## Architecture

### Directory Structure

- `src/` - Application source code
  - `cmd/` - Command/entry point logic
  - `controller/` - Business logic controllers
  - `lib/` - Reusable library code
    - `models/` - Data models
    - `os/` - OS-level utilities
  - `index.ts` - Public API exports
- `test-integration/` - Integration tests (mirrors src/ structure)
- `test-acceptance/` - End-to-end acceptance tests

### Test Organization

Three distinct test layers with separate Jest configurations:

1. **Unit Tests** (`*.test.ts` in `src/`)
   - Co-located with source files
   - Timeout: Default
   - Import alias: `@/` for src paths, `~src` for index
   - Example: `src/controller/welcome.test.ts`

2. **Integration Tests** (`test-integration/`)
   - Mirror source directory structure
   - Timeout: 10s
   - Import aliases: `~sut` for src/index.ts, `~sut/*` for src paths
   - Example: `test-integration/lib/os/host.test.ts`

3. **Acceptance Tests** (`test-acceptance/`)
   - End-to-end scenarios
   - Timeout: 30s
   - Import alias: `~sut` for src/index.ts
   - Example: `test-acceptance/smoke.test.ts`

### Module Resolution

Path aliases configured in `tsconfig.json`:

- `@/*` - Maps to `src/*`
- `~src` - Maps to `src/index.ts`
- `~sut` - Maps to `src/index.ts` (System Under Test - for test files)
- `~sut/*` - Maps to `src/*` (for test files)

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
- Lint-staged configured for pre-commit hooks
