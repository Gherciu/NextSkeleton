const fs = require('fs')
const path = require('path')

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
)

module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier', 'react', 'react-hooks', 'jsx-a11y'],
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'react/jsx-filename-extension': 0
  },
  settings:  {
    react:  {
      version:  'detect'
    },
    'import/resolver': {
      alias: {
        map: [
          ['@pages', path.join(__dirname, 'pages')],
          ['@utils', path.join(__dirname, 'utils')],
          ['@components', path.join(__dirname, 'components')],
          ['@common', path.join(__dirname, 'components/common')],
          ['@containers', path.join(__dirname, 'components/containers')],
          ['@layouts', path.join(__dirname, 'components/layouts')],
          ['@styles', path.join(__dirname, 'styles')],
          ['@static', path.join(__dirname, 'static')],
          ['@store', path.join(__dirname, 'store')],
          ['@providers', path.join(__dirname, 'components/providers')]
        ],
      }
    }
  }
}
