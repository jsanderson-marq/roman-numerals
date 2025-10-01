module.exports = {
  preset: "ts-jest/presets/default-esm",
  setupFilesAfterEnv: ["<rootDir>/jest.acceptance.setup.js"],
  testEnvironment: "node",
  extensionsToTreatAsEsm: [".ts"],
  testMatch: ["<rootDir>/test-acceptance/**/*.test.ts"],
  testTimeout: 30000,
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^~sut$": "<rootDir>/src/index.ts",
  },
  transformIgnorePatterns: ["node_modules/(?!(slonik|@slonik)/)"],
  transform: {
    "^.+\\.ts$": ["ts-jest", { useESM: true }],
  },
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "test-results",
        outputName: "acceptance-junit.xml",
        suiteName: "Acceptance Tests",
      },
    ],
  ],
};
