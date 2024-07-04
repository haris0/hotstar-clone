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
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^@/context/(.*)$": "<rootDir>/context/$1",
    "^@/helpers/(.*)$": "<rootDir>/helpers/$1",
    "^@/hooks/(.*)$": "<rootDir>/hooks/$1",
    "^@/models/(.*)$": "<rootDir>/models/$1",
    "^@/repositories/(.*)$": "<rootDir>/repositories/$1",
  },

  testEnvironment: "jsdom",
};

module.exports = createJestConfig(config);
