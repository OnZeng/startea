

const comment_api = global.express.Router();


/**
 * 根据文章id查询指定文章的评论
 */
comment_api.get('/api/comment_1', (req, res) => {
    let id = req.query.id
    // console.log(id)
    //sql
    global.client.query('select com_id,com_name,com_content,com_date,com_type,com_home,com_hf,k_id,com_img,com_role from comment where k_id=?', [id], (error, data) => {
        if (error) {
            console.log('查询文章评论失败')
            return
        }else{
            res.send(data)
        }
    })
})



/**
 * 添加留言信息
 */
comment_api.post('/api/comment_2', function (req, res) {
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
    let k_id = req.body.k_id
    // console.log(req.body)
    if (msg_name !== undefined && msg_type !== undefined && msg_content !== undefined && qq_email !== undefined) {
        let reg2 = /[1-9]\d{5,10}@qq\.com/
        // console.log(reg2.test(qq_email)===false)
        if (reg2.test(qq_email) === false) {
            res.send('0')
        } else {
            if (msg_type !== 'Windows10' && msg_type !== 'iPhome端' && msg_type !== 'Android端' && msg_type !== 'iPad端' && msg_type !== '其他类型客户端') {
                res.send('0')
            } else {
                if (msg_home === undefined) msg_home = '地球'
                //sql
                let sql = 'insert into comment (com_date,com_home,com_type,com_content,com_name,com_img,url,qq_email,com_role,com_hf,k_id)values(?,?,?,?,?,?,?,?,?,?,?)'
                global.client.query(sql, [msg_date, msg_home, msg_type, msg_content, msg_name, msg_img, url, qq_email, 1, msg_hf,k_id], (error,data) => {
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







module.exports = comment_api