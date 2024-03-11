const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => { 
    ctx.body = 'Hello Koa 서버입니다.';
});

//router.routes는 라우터 미들웨어를 앱에 적용합니다.
app.use(router.routes());
//allowedMethods는 허용되지 않은 메소드를 사용했을 때 405 Method Not Allowed를 응답합니다.
app.use(router.allowedMethods());

app.listen(4000, () => { 
    console.log('Listening to port 4000');
});