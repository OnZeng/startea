

const mysql_api=global.express.Router()


//连接数据库
//使用连接池
global.client = global.mysql.createPool({
    host: '', //ip地址
    port: '', //端口
    user: '', //用户名
    password: '', //密码
    database: '',
    charset:'utf8mb4',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})
// //打印连接信息
// global.client.connect(function (error) {
//     if (error) {
//         console.log('数据库连接失败');
//         return
//     } else {
//         //以重启服务器作为修改代码次数标准
//         //    global.client.query("update server set server_b=server_b+1 where server_id=?",[1])
//         console.log('数据库连接已生成')
//     }
// });

module.exports=mysql_api
