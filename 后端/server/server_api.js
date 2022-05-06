
const server_api=global.express.Router()

/**
 * 博客累计访问数量
 * 
 */
server_api.get('/api/server_b',function(req,res){
    //记录累计登录次数
    global.client.query("update server set server_a=server_a+1 where server_id=?", [1], function (error) {
        if (error) {
            console.log('统计登录次数失败')
            res.send("0")
            return
        } else {
            // console.log('统计了')
            res.send('1')
        }
    })
})




/**
 * 查询归属地 IP地址
 */
server_api.get('/api/server_c', function (request, response) {
    let ip = request.ip.match(/\d+\.\d+\.\d+\.\d+/)[0]
    console.log(ip)
    global.requesta({
        url: 'https://restapi.amap.com/v3/ip?key=91d04f194b85868e3cb56c7d7e7a6050&ip=' + ip,//请求路径
        method: "get",//请求方式，默认为get  
    }, function (error, res, body) {
        if (error) {
            console.log("获取归属地失败")
            return
        }
        // console.log(body)
        response.send({
            body: body,
            ip: ip
        })
    });
})


/**
 * 查询博客访问数量
 */
server_api.get('/api/server_d', function (request, response) {
    //sql语句
    global.client.query("select server_a from server", function (error, data) {
        if (error) {
            console.log('查询异常2')
            return
        } else {
            // console.log(data)
            response.send(data)
        }

    })
})










module.exports=server_api