## next-all-in

### Introduction

This is a starter application using next.js.

### Getting started

- Clone the repo: `git clone https://github.com/Gherciu/next-all-in.git`
- Rename `.env.example` file to `.env`
- Start dev server: `npm run start`

### Features

- `i18n` internationalization support ( Scalable apps need to support multiple languages, easily add and support multiple languages with `next-i18next`).
- `ESLint` and `Stylelint` to enforce code style. Run `npm run lint:scripts` for `.js|.jsx` and `npm run lint:styles` for `.css|.scss` files.
- Pre-commit hooks with `husky` and `lint-staged`
- Useful SCSS helpers `_mixins` and `_vars` see all in `./src/styles`
- `redux` and `redux-devtools` implimented and configured to work well in `development` mode and `production`. The store is hot reloadable ;)
- Aliases for all folders (components, styles, store etc.) see all available aliases in `./next-config.js`
- `antd` is added and configured to work well as an UI framework (css normalization is not need, antd has own)
- All folders in `./src` have own README.md file with a little documentation and usage guide
- `Helmet` implimented and configured, see an example in `./components/layouts/index.js`
- Configured `tailwindcss` a utility-first CSS framework for rapidly building custom designs.

### When ready to build for production

- Ccreate file `.env.production` the content should be the same as in `.env.development`
- Build the project: `npm run build`
- Start production server: `npm run serve`

---

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**@Gherciu/next-all-in** © [GHERCIU](https://github.com/Gherciu), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by GHERCIU with help from contributors ([list](https://github.com/Gherciu/next-all-in/contributors)).

> [github.com/Gherciu](https://github.com/Gherciu) · GitHub [@GHERCIU](https://github.com/Gherciu)

#### If you like this repository star⭐ and watch👀 on [GitHub](https://github.com/Gherciu/next-all-in)
