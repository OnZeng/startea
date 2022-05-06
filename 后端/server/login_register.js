

const zm = global.express.Router()



/**
 * 登录功能
 */
zm.get('/api/login', (req, res) => {
    // console.log(req.query)
    let user_name = req.query.user_name             //账号
    let user_password = req.query.user_password     //密码
    //正则表达式
    let reg1 = /[a-zA-Z0-9_]{5,12}$/
    let reg2 = /[a-zA-Z0-9_]{5,12}$/
    if (reg1.test(user_name) && reg2.test(user_password)) {
        //sql语句
        let sql = 'select user_name user_password from user where user_name=? and user_password=?'
        global.client.query(sql, [user_name, user_password], (error, data) => {
            if (error) {
                console.log('登录查询失败')
                res.send('0')
                return
            } else {
                if (data != '') {
                    //查询用户基础信息
                    let sql2 = 'select*from user where user_name=?'
                    global.client.query(sql2, [user_name], (error, userdata) => {
                        if (error) {
                            console.log('查询用户信息失败')
                            res.send('0')
                            return
                        } else {
                            // console.log(userdata)
                            //存储用户信息至token
                            global.content = {
                                user_id: userdata[0].user_id,
                                user_name: userdata[0].user_name,
                                user_petname: userdata[0].user_petname,
                                user_date: userdata[0].user_date,
                                user_role: userdata[0].user_role
                            }
                            global.secretOrPrivateKey = '自行定义'  //自己定义密钥
                            global.token = jwt.sign(content, secretOrPrivateKey, {
                                expiresIn: '4h'   //过期时间
                            })
                            if (userdata[0].user_role == '2') {
                                res.send({
                                    msg: 1,
                                    token: global.token,
                                    // user_img: userdata[0].user_img,
                                    user_name: userdata[0].user_name,
                                    // user_petname: userdata[0].user_petname,
                                    user_role: '管理员'
                                })
                            }
                        }
                    })





                } else {
                    res.send('0')
                }




            }


        })







    } else {
        res.send('0')
    }



})


/**
 * 游客登录
 */
zm.get('/api/yk', (req, res) => {
    let body = req.body
    let ip = request.ip.match(/\d+\.\d+\.\d+\.\d+/)[0]
    let sql = 'insert into aaaa (a_date,a_home,a_type,a_ip)values(?,?,?,?)'
    
})






module.exports = zm