const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
const api = require('./api');

router.use('/api', api.routes()); 

router.get('/', (ctx, next) => { 
    ctx.body = 'Hello Koa 서버입니다.';
});

router.get('/about', (ctx, next) => { 
    ctx.body = '소개';
});

router.get('/about/:name', (ctx, next) => { 
    const { name } = ctx.params;
    ctx.body = name + '의 소개';
});

router.get('/posts', (ctx, next) => { 
    const { id } = ctx.request.query;
    if(id) {
        ctx.body = '포스트 #' + id;
    } else {
        ctx.body = '포스트 아이디가 없습니다.';
    }
});

//router.routes는 라우터 미들웨어를 앱에 적용합니다.
app.use(router.routes());
//allowedMethods는 허용되지 않은 메소드를 사용했을 때 405 Method Not Allowed를 응답합니다.
app.use(router.allowedMethods());

app.listen(4000, () => { 
    console.log('Listening to port 4000');
});