/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
const path = require('path')
require('dotenv').config({
  path:
    process.env.NODE_ENV === 'development'
      ? path.join(__dirname, '/.env.development')
      : path.join(__dirname, '/.env.production'),
})

const withPlugins = require('next-compose-plugins')
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withLess = require('@zeit/next-less')
const Dotenv = require('dotenv-webpack')
const withOptimizedImages = require('next-optimized-images')
const isProd = require('./utils/isProd')

module.exports = withPlugins(
  [
    [withSass],
    [withCSS],
    [
      withLess,
      {
        lessLoaderOptions: {
          javascriptEnabled: true,
        },
      },
    ],
    [
      withOptimizedImages,
      {
        optimizeImages: isProd,
        handleImages: ['jpeg', 'png', 'webp', 'gif'],
        imagesName: '[name]-[hash].[ext]',
        inlineImageLimit: 8192,
        optimizeImagesInDev: false,
      },
    ],
  ],
  {
    assetPrefix: isProd ? process.env.ASSET_PREFIX : '',
    webpack: config => {
      config.resolve.alias['@pages'] = path.join(__dirname, 'pages')
      config.resolve.alias['@utils'] = path.join(__dirname, 'utils')
      config.resolve.alias['@components'] = path.join(__dirname, 'components')
      config.resolve.alias['@common'] = path.join(
        __dirname,
        'components/common',
      )
      config.resolve.alias['@containers'] = path.join(
        __dirname,
        'components/containers',
      )
      config.resolve.alias['@layouts'] = path.join(
        __dirname,
        'components/layouts',
      )
      config.resolve.alias['@styles'] = path.join(__dirname, 'styles')
      config.resolve.alias['@static'] = path.join(__dirname, 'static')
      config.resolve.alias['@store'] = path.join(__dirname, 'store')
      config.resolve.alias['@providers'] = path.join(
        __dirname,
        'components/providers',
      )

      config.plugins = config.plugins || []
      config.plugins = [
        ...config.plugins,
        new Dotenv({
          path: path.join(__dirname, '.env'),
          systemvars: true,
        }),
      ]
      config.module.rules.push(
        {
          test: /.(ico|mp4|mp3)$/,
          loader: 'file-loader',
          options: {
            name: '[name]-[hash].[ext]',
            publicPath: isProd
              ? `${process.env.ASSET_PREFIX}/_next/static`
              : '/_next/static',
            outputPath: 'static',
          },
        },
        {
          test: /.svg$/,
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                svgoConfig: {
                  pretty: true,
                  multipass: true,
                  plugins: [
                    { removeViewBox: false },
                    { removeAttrs: { attrs: '(width|height)' } },
                  ],
                },
              },
            },
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
                name: '[name]-[hash].[ext]',
                publicPath: isProd
                  ? `${process.env.ASSET_PREFIX}/_next/static`
                  : '/_next/static',
                outputPath: 'static',
              },
            },
          ],
        },
      )
      return config
    },
  },
)
