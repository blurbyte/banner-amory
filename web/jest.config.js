const defaultConfig = require('tools/jest.config.js');

module.exports = {
  ...defaultConfig,
  testEnvironment: 'jsdom',
  globals: {
    GRAPHQL_API_URL: '',
    STORAGE_URL: ''
  },
  moduleNameMapper: {
    '^@styles/(.*)': '<rootDir>/src/styles/$1',
    '^@sharedTypes/(.*)': '<rootDir>/src/types/$1'
  }
}
