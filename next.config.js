require('dotenv').config();
const path = require('path');
const withSASS = require('@zeit/next-sass');
const withImages = require('next-images');

const isProd = process.env.NODE_ENV === 'production';
module.exports = withSASS(
    withImages({
        assetPrefix: isProd ? process.env.ASSET_PREFIX : '',
        webpack: config => {
            config.resolve.alias.components = path.join(__dirname, 'components');
            config.resolve.alias.store = path.join(__dirname, 'store');
            config.resolve.alias.static = path.join(__dirname, 'static');
            return config;
        }
    })
);
