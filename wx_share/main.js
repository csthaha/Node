// live-server

{/* <script scc="./fs.js"></script> */ }
// require 进来 COMMONJS 模块化方案
const http = require('http');
const https = require('https');
let i = 0;

http
    .createServer(function (request, response) {
        i++;
        response.end(`Hello World ${i}`);
        console.log(i+":"+request.url);
    })
    .listen(3000);

// 创建一个http服务，本地文件就可以 localhost 来访问

// Web服务 在软件上理解就是一个HTTP访问的服务