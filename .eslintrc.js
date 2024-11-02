/* eslint-disable quote-props */
/* eslint-disable no-dupe-keys */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'import/extensions': ['error', 'ignorePackages', { 'js': 'never' }],
  },
};
