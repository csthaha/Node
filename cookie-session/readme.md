npm init  -y

cnpm i koa koa-router -S

cnpm i koa-session -S

cnpm i koa-static -S
## why

 无状态

## cookie
     内容：
    name:
    value:
    path: cookie 在哪个路径下生效
    /   / 生效范围为：/ 后面的所有路径
    /user  /user 以及 user 下面的所有
    /user/abc  /user/abc 以及 其下面的
    domain:

    httpOnly: true:为了安全的考虑，放重要的信息）设置为true 就不能通过 js 获取 cookie 的值
              false
    maxAge: 在几秒之后 cookie 被删除。
    secure: 安全 只会在 https 协议下传输
    koa: ms js：s

    作用范围：
    domain + path
    在什么域名什么路径下生效
    浏览器检查存储的 cookie，会发送给 服务端
    而且： http 传输报文的大小。 放在Cookie 请求头里面发送

本地存储
怎么来:
1. js 操作
    document.cookie = 'name = juejin'  可读可写
2. 服务端 通过set-cookie 响应头设置 cookie

用途：
状态管理， true
用户个性化设置， false

## session
会话
靠后台自己实现
很多个用户产生很多个 session 
<!-- userId 关联起来 -->
sessionId 当用户进行一个会话的时候 通过 自己的 sessionId 查询自己的状态
cookie： sessionID = id
