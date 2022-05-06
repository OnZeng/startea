

const log_api=global.express.Router()

/**
 * 查询系统日志
 */
log_api.get('/api/log_1',function(req,res){
    //sql语句
    global.client.query('select * from server_log',function(error,data){
            if(error){
                console.log('查询小站日志失败')
                return
            }else{
                res.send(data)
            }

    })
})
/**
 * 查询说说数量
 */
log_api.get('/api/log_2', (req, res) => {
    //sql语句
    global.client.query('SELECT COUNT(*) as count  FROM server_log', (error, data) => {
        if (error) {
            console.log('查询留言数量失败')
            return
        } else {
            res.send(data)
        }
    })
})


//权限判断
const d = (req, res, next) => {
    let token = req.body.token
    // console.log(token)
    if (token !== undefined) {
        global.jwt.verify(token, 'I am a goog man!zengming', (err, data) => {
            if (err && err.message == 'invalid token') {
                console.log('无效token')
                res.send('0')
                return
            } else if (err && err.message == 'jwt expired') {
                console.log('token过期')
                res.send('11')
            } else if (data != undefined) {
                next()
            } else {
                res.send('0')
            }
        })
    } else {
        res.send('0')
    }

}

//添加日志
log_api.post('/api/log_3',d,(req,res)=>{
    let body=req.body
    //时间格式化
    let date = new Date()
    let log_date = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
    let sql='insert into server_log (log_title,log_content,log_date)values(?,?,?)'
    global.client.query(sql,[body.log_title,body.log_content,log_date],(error,data)=>{
        if (error) {
            console.log("发布日志失败")
            console.log(error)
            res.send('10')
            return
        } else {
            console.log("发布一条日志")
            res.send({
                msg: '1',
                id: data.insertId
            })
        }
    })
})


//修改日志
log_api.post('/api/log_4',d,(req,res)=>{
    let body=req.body
    let sql='update server_log set log_title=?,log_content=?,log_date=? where log_id=?'
    global.client.query(sql,[body.log_title,body.log_content,body.log_date,body.log_id],(error,data)=>{
        if (error) {
            console.log("修改日志数据失败")
            // console.log(error)
            res.send('10')
            return
        } else {
            if (data.affectedRows > 0) {
                console.log("成功修改一条日志")
                res.send('1')
            } else {
                res.send('0')
            }
        }
    })
})



//删除日志
log_api.post('/api/log_5',d,(req,res)=>{
    let id=req.body.id
    let sql='delete from server_log where log_id=?'
    global.client.query(sql,[id],(error)=>{
        if (error) {
            console.log('删除作品失败')
            res.send('10')
            return
        } else {
            res.send('1')
        }
    })
})

module.exports=log_api