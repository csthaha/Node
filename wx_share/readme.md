传统的MVC后端开发

MVVM
Model  Page({data:{}})
View Template wxml
VM {{}}  wx:for

MVC 经典的web开发模式 Model 数据库
V view 静态页面
C controller 

Web HTTP服务器 

端口？ 3000
Mysql  常用端口：3306
WebServer 80

用户 Request  通过IP + 端口 
Web Server Response 

http
    .createServer(回调 function(request,response){
        (有请求 有响应)
        request 用户 N
        response 
    })
    .listen(8080)