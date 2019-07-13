const path = require('path')
require('dotenv').config({
  path:
    process.env.NODE_ENV === 'development'
      ? path.join(__dirname, '../.env.development')
      : path.join(__dirname, '../.env.production'),
})
const express = require('express')
const next = require('next')
const nextI18NextMiddleware = require('next-i18next/middleware')
const nextI18next = require('../utils/i18n')
const isProd = require('../utils/isProd')

const port = process.env.PORT
const app = next({ dev: !isProd })
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
