module.exports = {
  verbose: true,
  transform: {
    '.(ts|tsx)': 'ts-jest'
  },
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json'
  ],
  testMatch: [
    "<rootDir>/**/?(*.)test.ts?(x)"
  ]
}
