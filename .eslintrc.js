module.exports = {
  parser:  '@typescript-eslint/parser', //comment this line to disable ts
  env: {  
    browser: true,
    es6: true
  },
  extends: [
    'airbnb',
    // Uses the recommended rules from the @typescript-eslint/eslint-plugin 
    'plugin:@typescript-eslint/recommended', //comment this line to disable ts
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    project: "./tsconfig.json", //comment this line to disable ts
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
    "react/jsx-indent":["error", 4],//jsx tab width
    "react/forbid-prop-types":0, //to use prop-types (any,object,array)
    "react/require-default-props":0, 
    "react/no-danger":0, //to use dangerouslySetInnerHtml
    "react/jsx-one-expression-per-line":0,//to use <div> count: {count} </div> inline
    "react/jsx-filename-extension": [1, { "extensions": [".tsx", ".jsx"] }], //allowed jsx files extensions
    "jsx-a11y/anchor-is-valid":0, //to use <a>link</a> without href
    "jsx-quotes": ["error", "prefer-single"],//jsx quotes to single
    "@typescript-eslint/no-var-requires":true, //to use require
    "@typescript-eslint/explicit-function-return-type":false, //not explicite function return type
    "@typescript-eslint/interface-name-prefix":[true, "always-prefix"],//requires interface names to start with an “I”
    "@typescript-eslint/no-explicit-any":false,
    "@typescript-eslint/explicit-member-accessibility":0,//to use classes without public,privat,protected
    "import/no-unresolved":false, //not work corect with alliases
    "no-underscore-dangle": 0, //This rule disallows dangling underscores in identifiers.
    "no-nested-ternary":0,//to use nested ternary operator
    "comma-dangle":0,//comma on end of array,objects items
    "jsx-a11y/no-static-element-interactions":0,
    "jsx-a11y/click-events-have-key-events":0,
    "arrow-parens": ["error", "as-needed"], //use parantese for arrow functions as-neded
    "object-curly-newline": ["error", { "consistent": true }] //This rule enforces consistent line breaks inside braces of object literals or destructuring assignments.
  },
  settings:  {
    react:  {
      version:  'detect'  // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  }
};
