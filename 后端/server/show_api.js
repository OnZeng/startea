


const show_api = global.express.Router();




//查询作品信息
show_api.get('/api/show_1', (req, res) => {
    global.client.query('select * from zp', (error, data) => {
        if (error) {
            console.log('查询作品信息失败')
            // console.log(error)
            return
        } {
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



//添加作品
show_api.post('/api/show_2', d, (req, res) => {
    let body = req.body
    //时间格式化
    let date = new Date()
    let show_date = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
    let sql = 'insert into zp (show_img,show_title,show_url,show_date)values(?,?,?,?)'
    global.client.query(sql, [body.show_img, body.show_title, body.show_url, show_date], (error, data) => {
        if (error) {
            console.log("发布作品失败")
            console.log(error)
            res.send('10')
            return
        } else {
            console.log("发布一个作品")
            res.send({
                msg: '1',
                id: data.insertId
            })
        }
    })
})



//修改作品
show_api.post('/api/show_3',d,(req,res)=>{
    let body=req.body
    let sql='update zp set show_img=?,show_title=?,show_url=?,show_date=? where show_id=?'
    global.client.query(sql,[body.show_img,body.show_title,body.show_url,body.show_date,body.show_id],(error,data)=>{
        if (error) {
            console.log("修改作品数据失败")
            // console.log(error)
            res.send('10')
            return
        } else {
            if (data.affectedRows > 0) {
                console.log("成功修改一个作品")
                res.send('1')
            } else {
                res.send('0')
            }
        }
    })
})

//删除作品
show_api.post('/api/show_4',d,(req,res)=>{
    let id=req.body.id
    let sql='delete from zp where show_id=?'
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







module.exports = show_api