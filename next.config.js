require('dotenv').config();
const path = require('path');
const withPlugins = require('next-compose-plugins');
const withSASS = require('@zeit/next-sass');
const withOptimizedImages = require('next-optimized-images');
const Dotenv = require('dotenv-webpack');
const isProd = require('./lib/isProd');

module.exports = withPlugins([
    [withSASS],
    [withOptimizedImages, {
        optimizeImages: isProd,
    }],
],
{
    assetPrefix: isProd ? process.env.ASSET_PREFIX : '',
    webpack: config => {
        config.resolve.alias.components = path.join(__dirname, 'components');
        config.resolve.alias.store = path.join(__dirname, 'store');
        config.resolve.alias.lib = path.join(__dirname, 'lib');
        config.resolve.alias.static = path.join(__dirname, 'static');

        config.plugins = config.plugins || [];
        config.plugins = [
            ...config.plugins,
            new Dotenv({
                path: path.join(__dirname, '.env'),
                systemvars: true,
            }),
        ];
        return config;
    },
},);
