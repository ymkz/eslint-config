module.exports = {
  plugins: ['import', 'simple-import-sort'],
  extends: ['plugin:import/errors', 'plugin:import/warnings', 'plugin:import/typescript'],
  rules: {
    'prefer-const': 'error',
    'sort-imports': 'off',
    'import/default': 'off',
    'import/named': 'off',
    'import/namespace': 'off',
    'import/newline-after-import': 'error',
    'import/no-named-as-default-member': 'off',
    'import/order': 'off',
    'simple-import-sort/sort': 'error',
  },
  settings: {
    'import/resolver': { 'babel-module': {} },
  },
}
