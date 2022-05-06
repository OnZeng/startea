

const say_api=express.Router();

/**
 * 查询说说数据
 */
say_api.get('/api/say_1', function (req, res) {
    //sql语句
    global.client.query("select say_content,say_date,say_img,say_id from say",function (error, data) {
        if (error) {
            console.log('查询异常2')
            return
        } else {
            // console.log(data)
            res.send(data)
        }

    })
})
/**
 * 查询说说数量
 */
say_api.get('/api/say_2', (req, res) => {
    //sql语句
    global.client.query('SELECT COUNT(*) as count  FROM say', (error, data) => {
        if (error) {
            console.log('查询留言数量失败')
            return
        } else {
            res.send(data)
        }
    })
})

//权限判断
const b = (req, res, next) => {
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
 * 修改说说
 */
say_api.post('/api/say_3',b,(req,res)=>{
    let body=req.body
    let sql='update say set say_content=?,say_date=?,say_img=? where say_id=?'
    global.client.query(sql,[body.say_content,body.say_date,body.say_img,body.say_id],(error,data)=>{
        if (error) {
            console.log("修改文章数据失败")
            res.send('10')
            return
        } else {
            if (data.affectedRows > 0) {
                console.log("成功修改一条文章")
                res.send('1')
            } else {
                res.send('0')
            }
        }
    })
})
/**
 * 发布说说
 */
say_api.post('/api/say_4',b,(req,res)=>{
    let body=req.body
    //时间格式化
    let date = new Date()
    let say_date = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + '-' + date.getHours() + ':' + date.getMinutes()
    let sql='insert into say(say_content,say_date,say_img)values(?,?,?)'
    global.client.query(sql,[body.say_content,say_date,body.say_img],(error,data)=>{
        if (error) {
            console.log("发布文章说说数据失败")
            res.send('10')
            return
        } else {
                console.log("发布一条说说")
                res.send({
                    msg: '1',
                    id: data.insertId
                })
        }
    })
})
/**
 * 删除说说
 */
say_api.post('/api/say_5',b,(req,res)=>{
        let id=req.body.id
        // console.log(id)
    let sql ='delete from say where say_id=?'
    global.client.query(sql,[id],(error)=>{
        if(error){
            console.log('删除说说失败')
            res.send('10')
            return
        }else{
            res.send('1')
        }
    })
})





module.exports=say_api