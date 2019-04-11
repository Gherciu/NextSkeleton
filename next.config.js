require('dotenv').config();
const path = require('path');
const withPlugins = require('next-compose-plugins');
const withSASS = require('@zeit/next-sass');
const Dotenv = require('dotenv-webpack');
const withOptimizedImages = require('next-optimized-images');
const isProd = require('./lib/isProd');

module.exports = withPlugins([
    [withSASS],
    [withOptimizedImages, {
        optimizeImages: isProd,
        handleImages: ['jpeg', 'png', 'webp', 'gif'],
        imagesName: '[name]-[hash].[ext]',
        inlineImageLimit: 8192,
        optimizeImagesInDev: false,
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
        config.module.rules.push(
            {
                test: /.(ico|jpg|mp4|mp3)$/,
                loader: 'file-loader',
                options: {
                    name: '[name]-[hash].[ext]',
                    publicPath: isProd ? `${process.env.ASSET_PREFIX}/_next/static` : '/_next/static',
                    outputPath: 'static',
                },
            },
            {
                test: /.svg$/,
                use: [{
                    loader: '@svgr/webpack',
                    options: {
                        svgoConfig: {
                            pretty: true,
                            multipass: true,
                            plugins: [
                                { removeViewBox: false },
                                { convertColors: { currentColor: true } },
                                { removeAttrs: { attrs: '(fill|stroke|width|height)' } },
                            ],
                        },
                    },
                },
                {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: '[name]-[hash].[ext]',
                        publicPath: isProd ? `${process.env.ASSET_PREFIX}/_next/static` : '/_next/static',
                        outputPath: 'static',
                    },
                }],
            }
        );
        return config;
    },
},);
