module.exports = {
  "extends": ["eslint:recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  plugins: [
    'svelte3',
    'prettier'
  ],
  "rules": {
    "no-unused-vars": ["error", { "args": "none" }],
    "no-console": "on"
  },
}