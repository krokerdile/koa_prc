const Router = require('koa-router');

const books = new Router();

// books.get('/', (ctx, next) => {
//     ctx.body = `${ctx.request.method} ${ctx.request.path}`;
// });

//? 라우터가 어떤 메소드와 경로로 호출되었는지 확인하는 라우터
// const handler = (ctx, next) => {
//     ctx.body = `${ctx.request.method} ${ctx.request.path}`;
// }

//? books.controller를 불러온다
const booksCtrl = require('./books.controller');

// books.get('/', handler);
books.get('/', booksCtrl.list);

// books.post('/', handler);
books.post('/', booksCtrl.create);

// books.delete('/', handler);
books.delete('/', booksCtrl.delete);    

// books.put('/', handler);
books.put('/', booksCtrl.replace);

// books.patch('/', handler);
books.patch('/', booksCtrl.update);

module.exports = books;