module.exports = {
  watchPathIgnorePatterns: ['globalConfig'],
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage/unit',
  coverageProvider: 'v8',
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  collectCoverageFrom: [
    'src/v1/domains/**/*.js'
  ],
  roots: ['test/v1/unit']
}
