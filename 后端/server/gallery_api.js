

const gallery_api=global.express.Router();



/**
 * 查询图片地址
 */
gallery_api.get('/api/gallery_1', function (req, res) {
    let gal_type=req.query.gal_type
    //sql语句
    global.client.query("select gal_img from gallery where gal_type=?",[gal_type], function (error, data) {
        if (error) {
            console.log('查询异常2')
            return
        } else {
            // console.log(data)
            res.send(data)
        }

    })
})




module.exports=gallery_api