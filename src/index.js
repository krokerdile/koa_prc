const Koa = require('koa');
const app = new Koa();

app.use((ctx,next) => {
    console.log(1);
    next();
})


app.use((ctx,next)=> {
    console.log(2);
    next();
})


app.use((ctx,next) => {
    ctx.body = 'Hello Koa';
    next();
})

app.use((ctx, next) => { 
    console.log(1);
    const started = new Date();
    next().then(() => {
        const ms = new Date() - started;
        console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
    });
})

app.use(async (ctx, next) => { 
    console.log(1);
    const started = new Date();
    await next();
    console.log(new Date() - started + 'ms');
});

app.listen(4000, () => {
    console.log('Listening to port 4000');
})