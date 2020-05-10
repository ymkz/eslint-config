module.exports = {
  parserOptions: { sourceType: 'module' },
  env: { browser: true, es6: true, node: true, jest: true },
  plugins: ['prettier', 'unicorn'],
  extends: ['eslint:recommended', 'plugin:unicorn/recommended', 'plugin:prettier/recommended', 'prettier/unicorn'],
  rules: {
    'unicorn/consistent-function-scoping': 'off',
    'unicorn/no-abusive-eslint-disable': 'off',
    'unicorn/prevent-abbreviations': 'off',
  },
}
