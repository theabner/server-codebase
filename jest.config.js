module.exports = {
  roots: ['test/'],
  setupFiles: ['reflect-metadata'],
  verbose: true,
  bail: 1,
  collectCoverage: true,
  collectCoverageFrom: [
    '!node_modules/**',
    '!dist/**',
    '!test/**',
    '!src/server.ts',
    '!src/routes.ts',
    '!src/module.ts',
  ],
  coverageThreshold: {
    global: {
      lines: 70,
      statements: 80,
      branches: 80,
      functions: 80,
    },
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
}