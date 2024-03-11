const Router = require('koa-router');

const api = new Router();
const books = require('./books');

api.get('/books', (ctx, next) => {
    ctx.body = 'GET ' + ctx.request.path;
});

api.use('/books2',books.routes());

module.exports = api;