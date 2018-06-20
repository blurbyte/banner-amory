const defaultConfig = require('tools/jest.config.js');

module.exports = {
  ...defaultConfig,
  testEnvironment: 'jsdom'
}
