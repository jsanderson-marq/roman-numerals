module.exports = {
  preset: "ts-jest/presets/default-esm",
  setupFilesAfterEnv: ["<rootDir>/jest.integration.setup.js"],
  testEnvironment: "node",
  extensionsToTreatAsEsm: [".ts"],
  testMatch: ["<rootDir>/test-integration/**/*.test.ts"],
  testTimeout: 10000,
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^~sut$": "<rootDir>/src/index.ts",
    "^~sut/(.*)$": "<rootDir>/src/$1",
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
        outputName: "integration-junit.xml",
        suiteName: "Integration Tests",
      },
    ],
  ],
};
