## NextSkeleton

### Introduction
This is a skeleton application using next.js. This application is meant to be used as a starting place for those looking to get their feet wet with Next.js.

### Getting started
- Clone the repo: `git clone https://github.com/Gherciu/NextSkeleton.git`
- Rename `.env.example` file to `.env`
- Start dev server: `yarn start:dev` or `yarn run start:dev`

### Features
- `ESLint` and `Stylelint` to enforce code style. Run `yarn lint:scripts` for `.js|.jsx` and `yarn lint:styles` for `*.scss` files.
- `i18n` internationalization support ( Scalable apps need to support multiple languages, easily add and support multiple languages with `next-i18next`).
- Pre-commit hooks with `husky` and `lint-staged`
- Useful SCSS helpers `_mixins` and `_vars`
- Automated images optimization
- Includes:
  - `Normalize.css` for CSS normalizations and common bug fixes
  - `redux`, `react-redux`, `redux-thunk` and `redux-devtools-extension` to manage app state
  - `NProgress` page loading progress bar
  - `dotenv` to read `.env` files in back-end and `dotenv-webpack` to read `.env` files in front-end

### When ready to build for production
- Set `NODE_ENV = production` in `.env` file
- Build the project: `yarn build` or `yarn run build`
- Start production server: `yarn start:prod` or `yarn run start:prod`

----


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**@Gherciu/NextSkeleton** © [GHERCIU](https://github.com/Gherciu), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by GHERCIU with help from contributors ([list](https://github.com/Gherciu/NextSkeleton/contributors)).

> [github.com/Gherciu](https://github.com/Gherciu) · GitHub [@GHERCIU](https://github.com/Gherciu)

#### If you like this repository star⭐ and watch👀 on [GitHub](https://github.com/Gherciu/NextSkeleton)

