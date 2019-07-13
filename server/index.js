/* eslint-disable import/order */
const path = require('path')
const isProduction = require('../utils/isProduction')
require('dotenv').config({
  path: isProduction
    ? path.join(__dirname, '../.env.production')
    : path.join(__dirname, '../.env.development'),
})
const express = require('express')
const next = require('next')
const nextI18NextMiddleware = require('next-i18next/middleware')
const nextI18next = require('../utils/i18n')

const port = process.env.PORT
const app = next({ dev: !isProduction })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(nextI18NextMiddleware(nextI18next))

  server.get('*', (req, res) => handle(req, res))

  server.listen(port, err => {
    if (err) throw err
    // eslint-disable-next-line no-console
    console.log(`🚀 Ready on http://localhost:${port}`)
  })
})
