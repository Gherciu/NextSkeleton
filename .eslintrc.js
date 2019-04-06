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
    "indent":["error",4, { "SwitchCase": 1 }], //tab width
    "react/jsx-indent":["error", 4],//jsx tab width
    "react/forbid-prop-types":0, //to use prop-types (any,object,array)
    "react/require-default-props":0, 
    "react/no-danger":0, //to use dangerouslySetInnerHtml
    "react/jsx-one-expression-per-line":0,//to use <div> count: {count} </div> inline
    "react/jsx-filename-extension": [1, { "extensions": [".tsx", ".jsx"] }], //allowed jsx files extensions
    "jsx-a11y/anchor-is-valid":0, //to use <a>link</a> without href
    "@typescript-eslint/no-var-requires":true, //to use require
    "@typescript-eslint/explicit-function-return-type":false, //not explicite function return type
    "@typescript-eslint/interface-name-prefix":[true, "always-prefix"],//requires interface names to start with an “I”
    "@typescript-eslint/no-explicit-any":false,
    "@typescript-eslint/explicit-member-accessibility":0,//to use classes without public,privat,protected
    "import/no-unresolved":false, //not work corect with alliases
    "no-underscore-dangle": 0, //This rule disallows dangling underscores in identifiers.
    "comma-dangle": ["error", "never"], //This rule enforces consistent use of trailing commas in object and array literals.
    "no-nested-ternary":0,//to use nested ternary operator
    "jsx-a11y/no-static-element-interactions":0,
    "jsx-a11y/click-events-have-key-events":0
  },
  settings:  {
    react:  {
      version:  'detect'  // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  }
};
