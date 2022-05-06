global.express = require('express');
global.mysql = require('mysql2');
global.fs = require("fs");
global.requesta = require('request');
global.nodeemailer = require('nodemailer')
global.jwt = require('jsonwebtoken')
// const https = require('https');
//引入中间件，解决history模式
const history = require('connect-history-api-fallback');
//配置ssl证书
// var privateKey = global.fs.readFileSync('../Nginx/2_startea.top.key'); //此处是你的ssl证书文件 私钥文件
// var certificate = global.fs.readFileSync('../Nginx/1_startea.top_bundle.crt');// 此处是你的ssl证书文件 crt文件或者pem都可以
// var credentials = { key: privateKey, cert: certificate };


//初始化express框架
const app = express();
// app.use(history());
/*引入分支模块*/
const mysql_api = require('./mysql_api')
const token_api= require('./token')
const server_api = require('./server_api')
const wenzhang_api = require('./wenzhang_api')
const gallery_api = require('./gallery_api')
const say_api = require('./say_api')
const link_api = require('./link_api')
const log_api = require('./log_api')
const message_api = require('./message_api')
const comment_api = require('./comment_api')
const login_register=require('./login_register')
const show_api=require('./show_api')
//配置中间件
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
//使用静态资源
app.use(express.static("../dist"));
//配置静态文件
app.use(express.static('../public'))
///解决跨域问题
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    if (req.method == "OPTIONS") {
        res.sendStatus(200)
    } else {
        next();
    }
});
/*引用自定义api路由*/
app.use(mysql_api)
//引入token信息api
app.use(token_api)
//引入系统信息api
app.use(server_api)
//引入文章信息api
app.use(wenzhang_api)
//引用图库信息api
app.use(gallery_api)
//引用说说信息api
app.use(say_api)
//引用友情链接信息api
app.use(link_api)
//引用小站日志api
app.use(log_api)
//引用留言信息api
app.use(message_api)
//引用评论信息api
app.use(comment_api)
//引入登录注册api
app.use(login_register)
//引入作品信息api
app.use(show_api)


app.listen(443, function () {
    console.log("服务器启动中")
})
// 使用https模块
// var httpsPort = "443"
// var httpsServer = https.createServer(credentials, app);
// httpsServer.listen(httpsPort, '0.0.0.0', function () {
//     console.log('服务器已启动:端口443')
// });