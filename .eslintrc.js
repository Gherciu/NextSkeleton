module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'airbnb'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
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
    "indent": ["error", 4, { "SwitchCase": 1 }], // tab width
    "no-param-reassign": 0, // use param.a = 1 to use ressign
    "react/jsx-indent":["error", 4],//jsx tab width
    "react/forbid-prop-types":0, //to use prop-types (any,object,array)
    "react/no-danger":0, //to use dangerouslySetInnerHtml
    "react/jsx-indent-props": [2, 'first'], //This option validates a specific indentation style for props.
    "react/jsx-one-expression-per-line":0,//to use <div> count: {count} </div> inline
    "react/jsx-filename-extension": [1, { "extensions": [".jsx"] }], //allowed jsx files extensions
    "jsx-a11y/anchor-is-valid":0, //to use <a>link</a> without href
    "jsx-quotes": ["error", "prefer-single"],//jsx quotes to single
    "import/no-unresolved":false, //not work corect with alliases
    "no-underscore-dangle": 0, //This rule disallows dangling underscores in identifiers.
    "no-nested-ternary":0,//to use nested ternary operator
    "comma-dangle":["error", "always-multiline"],//comma on end of array,objects items (neded for git diff;)))
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
