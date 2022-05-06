
const wenzhang_api = global.express.Router();

/*
*查询文章数量
*/
wenzhang_api.get('/api/wenzhang_1', function (req, res) {
    //sql语句
    global.client.query("SELECT COUNT(*) as count  FROM article", function (error, data) {
        if (error) {
            console.log('查询异常')
            return
        } else {
            // console.log(data)
            res.send(data)
        }
    })
})


/*
*查询标签数量
*/
wenzhang_api.get('/api/wenzhang_2', function (req, res) {
    //sql语句
    global.client.query("SELECT COUNT(*) as count  FROM tags", function (error, data) {
        if (error) {
            console.log('查询异常')
            return
        } else {
            // console.log(data)
            res.send(data)
        }
    })
})

/**
 * 查询所有文章
 */
wenzhang_api.get('/api/wenzhang_3', function (req, res) {
    global.client.query("select article_id,article_title,article_date,article_type,article_jj,class_name from article where kp=1", function (error, data) {
        if (error) {
            console.log("查询文章信息失败")
            return
        } else {
            // console.log(data)
            res.send(data)
        }
    })
})



/*
*查询分类数量
*/
wenzhang_api.get('/api/wenzhang_4', function (req, res) {
    //sql语句
    global.client.query("SELECT COUNT(*) as count  FROM class", function (error, data) {
        if (error) {
            console.log('查询异常')
            return
        } else {
            // console.log(data)
            res.send(data)
        }
    })
})


/*
*查询分类数据
*/
wenzhang_api.get('/api/wenzhang_5', function (req, res) {
    //sql语句
    global.client.query("SELECT * FROM class", function (error, data) {
        if (error) {
            console.log('查询异常')
            return
        } else {
            // console.log(data)
            res.send(data)
        }
    })
})



/*
*查询标签数据
*/
wenzhang_api.get('/api/wenzhang_6', function (req, res) {
    //sql语句
    global.client.query("SELECT * FROM tags", function (error, data) {
        if (error) {
            console.log('查询异常')
            return
        } else {
            // console.log(data)
            res.send(data)
        }
    })
})

//根据文章分类查询指定文章
wenzhang_api.get('/api/wenzhang_7', function (req, res) {
    let class_name = req.query.class_name
    // console.log(class_name)
    if (class_name != undefined) {
        global.client.query("select article_id,article_title,article_date from article where class_name=?", [class_name], function (error, data) {
            if (error) {
                console.log('查询指定文章失败')
                return
            } else {
                res.send(data)
            }
        })
    } else {
        res.send({
            msg: '查询指定文章失败'
        })
    }

})
//根据文章标签查询指定文章
wenzhang_api.get('/api/wenzhang_8', function (req, res) {
    let article_type = "["+JSON.stringify(req.query.article_type)+"]"
    // console.log(article_type)
    if (article_type != undefined) {
        global.client.query("select article_id,article_title,article_date from article where article_type=?", [article_type], function (error, data) {
            if (error) {
                console.log('查询指定文章失败')
                return
            } else {
                res.send(data)
            }
        })
    } else {
        res.send({
            msg: '查询指定文章失败'
        })
    }

})

//根据文章id查询指定文章
wenzhang_api.get('/api/wenzhang_9', (req, res) => {
    let id = req.query.id
    //sql
    global.client.query('select*from article where article_id=?', [id], (error, data) => {
        if (error) {
            console.log('查询指定id文章失败')
            return
        } else res.send(data)
    })

})
//权限判断
const a = (req, res, next) => {
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

//修改文章
wenzhang_api.post('/api/wenzhang_10', a, (req, res) => {
    let body = req.body
    let article_title=body.article_title
    let article_jj=body.article_jj
    let article_content=body.article_content
    let article_type=JSON.stringify(body.article_type)
    let class_name=body.class_name
    let article_id=body.article_id
    let sql = 'update article set article_title=?,article_jj=?,article_content=?,article_type=?,class_name=? where article_id=?'
    global.client.query(sql, [article_title, article_jj, article_content, article_type, class_name, article_id], (error, data) => {
        if (error) {
            // console.log("修改文章数据失败")
            console.log(error)
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
//发布文章
wenzhang_api.post('/api/wenzhang_11', a, (req, res) => {
    let body = req.body
    let article_type = JSON.stringify(req.body.article_type)
    //时间格式化
    let date = new Date()
    let article_date = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + '-' + date.getHours() + ':' + date.getMinutes()
    let sql = 'insert into article (article_title,article_date,article_content,article_type,article_jj,class_name,kp)values(?,?,?,?,?,?,?)'
    global.client.query(sql, [body.article_title, article_date, body.article_content, article_type, body.article_jj, body.class_name, 1], (error) => {
        if (error) {
            console.log('修改文章失败')
            res.send('10')
            return
        } else {
            res.send('1')
        }
    })
})

//删除文章
wenzhang_api.post('/api/wenzhang_12', a, (req, res) => {
    let id = req.body.article_id
    // console.log(id)
    let sql = 'delete from article where article_id=?'
    global.client.query(sql, [id], (error) => {
        if (error) {
            console.log('删除文章失败')
            res.send('10')
            return
        } else {
            res.send('1')
        }
    })
})


module.exports = wenzhang_api