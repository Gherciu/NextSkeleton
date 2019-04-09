require('dotenv').config();
const express = require('express');
const next = require('next');
const nextI18NextMiddleware = require('next-i18next/middleware');
const nextI18next = require('./../lib/i18n');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.use(nextI18NextMiddleware(nextI18next));

    server.get('*', (req, res) => handle(req, res));

    server.listen(port, err => {
        if (err) throw err;
        // eslint-disable-next-line no-console
        console.log(`🚀 Ready on http://localhost:${port}`);
    });
});
