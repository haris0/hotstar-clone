/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

/** @type {import('jest').Config} */
const config = {
  coverageProvider: "v8",

  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/context/(.*)$": "<rootDir>/src/context/$1",
    "^@/helpers/(.*)$": "<rootDir>/src/helpers/$1",
    "^@/hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "^@/models/(.*)$": "<rootDir>/src/models/$1",
    "^@/repositories/(.*)$": "<rootDir>/src/repositories/$1",
  },

  testEnvironment: "jsdom",
};

module.exports = createJestConfig(config);
