module.exports = {
  parserOptions: { ecmaFeatures: { jsx: true }, sourceType: 'module' },
  plugins: ['react', 'react-hooks'],
  extends: ['plugin:react/recommended', 'prettier/react'],
  rules: {
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
  },
  settings: {
    react: { version: 'detect' },
  },
}
