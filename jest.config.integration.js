module.exports = {
  clearMocks: true,
  collectCoverage: true,
  testMatch: ["**/?(*.)+(spec).[jt]s?(x)"],
  coverageDirectory: '<rootDir>/tests/integration/coverage',
  collectCoverageFrom: [
      '**/*.js/**',
      '!jest.config.{unit,integration}.js',
      '!index.js',
      '!**/tests/**',
      '!**/node_modules/**'
  ],
  testEnvironment: 'node',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
}