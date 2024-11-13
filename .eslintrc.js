<<<<<<< HEAD
=======
/* eslint-disable quote-props */
/* eslint-disable no-dupe-keys */
>>>>>>> 7645d27a3c973849c08e9797d7a1608d46e10eeb
module.exports = {
  env: {
    browser: true,
    es2021: true,
<<<<<<< HEAD
  },
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {},
  plugins: ['jest'],
  env: {
    'jest/globals': true,
=======
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
>>>>>>> 7645d27a3c973849c08e9797d7a1608d46e10eeb
  },
};
