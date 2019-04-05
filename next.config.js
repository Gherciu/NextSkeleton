const path = require('path');
const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');

module.exports = withTypescript(
    withSass({
        webpack: (config) => {
            config.resolve.alias.components = path.join(__dirname, 'components');
            config.resolve.alias.layouts = path.join(__dirname, 'components/Layouts');
            config.resolve.alias.store = path.join(__dirname, 'store');
            return config;
        },
    }),
);
