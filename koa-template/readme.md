## koa 中间件 middleWare
app.use(middleWare)
next:下一个中间件， 每一次 use 都会注册一个中间件
[middleWare1,middleWare2]
1. async 函数
2. await next() 洋葱模型，一层一层往最里面执行，到最后一个中间件，执行完后，一层一层往外冒泡执行剩余的代码。
3. 解题：每一个中间件负责一件事

以 X 开头的： 自定义的响应头

koa-views 支持哪些模板引擎

## koa 第三方中间件特点
-  koa 里面的ctx 就是 req + res 组成的对象 
    ctx: {
        req: {},
        res: {}
    }
    koa-views 
    接着扩展 ctx, 接着往 ctx 上面塞东西
    ctx: {
        req: {},
        res: {},
        render: () => {
            
        }
    }
## 
package.json 项目描述
依赖 npm install 下来的文件。
-S  将依赖的名字和版本号放在 dependencies
```json 
 "dependencies": {
    "ejs": "^2.6.1",
    "koa": "^2.7.0",
    "koa-views": "^6.2.0"
  }
```





