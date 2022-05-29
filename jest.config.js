module.exports = {
  testEnvironment: 'node',
  preset: 'ts-jest',
  testEnvironmentOptions: {
    NODE_ENV: 'test',
  },
  restoreMocks: true,
  coveragePathIgnorePatterns: ['node_modules', 'tests'],
  coverageReporters: ['text', 'lcov', 'clover', 'html'],
};
