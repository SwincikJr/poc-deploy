module.exports = {
    clearMocks: true,
    collectCoverage: true,
    testMatch: ["**/?(*.)+(test).[jt]s?(x)"],
    coverageDirectory: '<rootDir>/tests/unit/coverage',
    collectCoverageFrom: [
        'src/**/*.js',
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
  