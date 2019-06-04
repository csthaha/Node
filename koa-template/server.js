const Koa = require('koa')

const app = new Koa();
const admin = new Koa();

// http.createServer
//req
//res
//ctx 就是context req + res
app.use(async(ctx,next) => {
    console.log(1);
    await next(); //此时代表 下一个中间件（15行）
    console.log(2)
})
app.use(async(ctx,next) => {
    console.log(4);
    ctx.body =`<h6>tj np 前</h6>`;
    await next();
    ctx.body =`<h1>tj np 后</h1>`;
    console.log(5)
})
app.use(async (ctx) => {
    console.log(3)
    ctx.body =`<strong>tj np</strong>`;
    console.log(6)
})
//执行完之后再一步一步返回执行(洋葱模型)

//http.listen 语法糖
app.listen(8080,() => {
    console.log('server is running 8080')
})