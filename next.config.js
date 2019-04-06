const path = require('path');
const withTypescript = require('@zeit/next-typescript');
const withSASS = require('@zeit/next-sass');
const withImages = require('next-images');

module.exports = withTypescript(
    withSASS(
        withImages({
            webpack: config => {
                config.resolve.alias.components = path.join(__dirname, 'components');
                config.resolve.alias.store = path.join(__dirname, 'store');
                config.resolve.alias.static = path.join(__dirname, 'static');
                return config;
            }
        })
    )
);
