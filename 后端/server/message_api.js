


const message_api = global.express.Router()


/**
 * 查询留言信息
 */
message_api.get('/api/message_1', function (req, res) {
    //sql语句
    global.client.query('select * from message', function (error, data) {
        if (error) {
            console.log('查询留言信息失败')
            return
        } else {
            res.send(data)
        }

    })
})
/**
 * 查询头像QQ号api
 */
message_api.get('/api/getqqinfo', function (req, response) {
    let qq = req.query.qq
    // console.log(qq)
    global.requesta({
        url: 'https://tenapi.cn/qqname/?qq=' + qq,//请求路径
        method: "get",//请求方式，默认为get  
    }, function (error, res, body) {
        if (error) {
            console.log("获取qq信息失败")
            return
        }
        // console.log(body)
        response.send(body)
    });
})


/**
 * 添加留言信息
 */
message_api.post('/api/message_2', function (req, res) {
    //时间格式化
    let date = new Date()
    let msg_date = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + '-' + date.getHours() + ':' + date.getMinutes()
    //前端传递的数据
    let msg_name = req.body.msg_name
    let msg_type = req.body.msg_type
    let msg_content = req.body.msg_content
    let msg_img = req.body.msg_img
    let msg_home = req.body.msg_home
    let url = req.body.url
    let qq_email = req.body.qq_email
    let msg_hf = req.body.msg_hf
    // console.log(req.body)
    if (msg_name !== undefined && msg_type !== undefined && msg_content !== undefined && qq_email !== undefined) {
        let reg2 = /[1-9]\d{5,10}@qq\.com/
        // console.log(reg2.test(qq_email)===false)
        if(reg2.test(qq_email)===false){
            res.send('0')
        }else{
        if (msg_type !== 'Windows10' && msg_type !== 'iPhome端' && msg_type !== 'Android端' && msg_type !== 'iPad端' && msg_type !== '其他类型客户端') {
            res.send('0')
        } else {
            if (msg_home === undefined) msg_home = '地球'
            //sql
            let sql = 'insert into message (msg_date,msg_home,msg_type,msg_content,msg_name,msg_img,url,qq_email,msg_role,msg_hf)values(?,?,?,?,?,?,?,?,?,?)'
            global.client.query(sql, [msg_date, msg_home, msg_type, msg_content, msg_name, msg_img, url, qq_email, 1, msg_hf], (error,data) => {
                if (error) {
                    console.log('插入留言失败')
                    res.send('0')
                    return
                } else res.send({
                    msg:'1',
                    id: data.insertId
                })
            })
        }
        }





    } else res.send('0')
})

/**
 * 查询留言数量
 */
message_api.get('/api/message_3',(req,res)=>{
    //sql语句
    global.client.query('SELECT COUNT(*) as count  FROM message',(error,data)=>{
        if(error){
            console.log('查询留言数量失败')
            return
        }else{
            res.send(data)
        }
    })
})



//权限判断
const c = (req, res, next) => {
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
/**
 * 修改留言
 */
message_api.post('/api/message_4',c,(req,res)=>{
    let body=req.body
    // console.log(body)
    let sql='update message set msg_date=?,msg_home=?,msg_type=?,msg_content=?,msg_name=?,msg_img=?,url=?,qq_email=?,msg_role=? where msg_id=?'
    let da=[body.msg_date,body.msg_home,body.msg_type,body.msg_content,body.msg_name,body.msg_img,body.url,body.qq_email,body.msg_role,body.msg_id]
    global.client.query(sql,da,(error,data)=>{
        if (error) {
            console.log("修改文章数据失败")
            // console.log(error)
            res.send('10')
            return
        } else {
            if (data.affectedRows > 0) {
                console.log("成功修改一条留言")
                res.send('1')
            } else {
                res.send('0')
            }
        }
    })
})


/**
 * 删除留言
 */
message_api.post('/api/message_5',c,(req,res)=>{
    let id=req.body.id
    let sql ='delete from message where msg_id=?'
    global.client.query(sql,[id],(error)=>{
        if (error) {
            console.log('删除说说失败')
            res.send('10')
            return
        } else {
            res.send('1')
        }
    })
})




module.exports = message_api