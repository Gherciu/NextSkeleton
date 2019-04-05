module.exports = {
  parser:  '@typescript-eslint/parser',
  env: {  
    browser: true,
    es6: true
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended' // Uses the recommended rules from the @typescript-eslint/eslint-plugin
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    "no-param-reassign": 0,
    "indent":["error",4, { "SwitchCase": 1 }],
    "@typescript-eslint/no-var-requires":true,
    "@typescript-eslint/explicit-function-return-type":false,
    "@typescript-eslint/no-explicit-any":false,
    "import/no-unresolved":false, //not work corect with alliases
    "no-underscore-dangle": 0, //This rule disallows dangling underscores in identifiers.
    "comma-dangle": ["error", "never"] //This rule enforces consistent use of trailing commas in object and array literals.
  },
  settings:  {
    react:  {
      version:  'detect'  // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  }
};
