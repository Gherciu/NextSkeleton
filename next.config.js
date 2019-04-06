const path = require('path');
const withTypescript = require('@zeit/next-typescript');
const withSASS = require('@zeit/next-sass');

module.exports = withTypescript(
    withSASS({
        cssModules: true,
        cssLoaderOptions: {
            importLoaders: 1,
            localIdentName: '[local]__[hash:base64:5]'
        },
        webpack: config => {
            config.resolve.alias.components = path.join(__dirname, 'components');
            config.resolve.alias.store = path.join(__dirname, 'store');
            return config;
        }
    })
);
