

const link_api=global.express.Router();



/**
 * 查询友情链接数据
 */
link_api.get('/api/link_1', function (req, res) {
    //sql语句
    global.client.query("select * from link", function (error, data) {
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
 * 查询友链数量
 */
link_api.get('/api/link_2', (req, res) => {
    //sql语句
    global.client.query('SELECT COUNT(*) as count  FROM link', (error, data) => {
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
//修改链接
link_api.post('/api/link_3',d,(req,res)=>{
    let body=req.body
    // console.log(body)
    let sql='update link set link_title=?,link_img=?,link_content=?,link_url=? where link_id=?'
    global.client.query(sql,[body.link_title,body.link_img,body.link_content,body.link_url,body.link_id],(error,data)=>{
        if (error) {
            console.log("修改链接数据失败")
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


//新增链接
link_api.post('/api/link_4',d,(req,res)=>{
    let body=req.body
    let sql ='insert into link(link_title,link_img,link_content,link_url)values(?,?,?,?)'
    global.client.query(sql,[body.link_title,body.link_img,body.link_content,body.link_url],(error,data)=>{
        if (error) {
            console.log("发布链接数据失败")
            res.send('10')
            return
        } else {
            console.log("成功发布一条数据")
            res.send({
                msg: '1',
                id: data.insertId
            })
        }
    })
})

//删除链接
link_api.post('/api/link_5',d,(req,res)=>{
    let id=req.body.id
    let sql='delete from link where link_id=?'
    global.client.query(sql, [id], (error) => {
        if (error) {
            console.log('删除链接失败')
            res.send('10')
            return
        } else {
            res.send('1')
        }
    })
})
module.exports=link_api