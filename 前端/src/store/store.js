
import Vue from "vue";
import vuex from 'vuex';
import axios from 'axios'
Vue.use(vuex)
export default new vuex.Store({
    //状态
    state:{
        //是否显示页面
        kk:0,
        //请求地址
        api:'https://startea.top',
        //请求的归属地
        gsd:{
            home:'中国境内',
            ip:''
        },
        //总访问量
        fwl:'',
        //文章数量
        wzsl:'',
        //标签数量
        tags:'',
        //分类数量
        classs:'',
        //文章数据
        article:[],
        //分类数据
        fl:[],
        //标签数据
        bq:[],
        //说说数据
        say:[],
        //友情链接数据
        link:[],
        //系统日志数据
        log:[],
        //留言数据
        message:[],
        //小作品数据
        show:[]
    },
    mutations:{
    },
    //
    actions:{
        //请求归属地个人IP等信息
        gsd(context){
            axios({
                method:'get',
                url:context.state.api+'/api/server_c',
            }).then(function (response) {
                // console.log(JSON.parse(response.data.body))
                let a=JSON.parse(response.data.body)
                context.state.gsd.home=a.province+a.city
                context.state.gsd.ip=response.data.ip
                if (context.state.gsd.home===''){
                    context.state.gsd.home='中国境内'
                }
                context.state.kk++
            })
        },
        //请求总访问量
        fwl(context){
            axios({
                method:'get',
                url:context.state.api+'/api/server_d'
            }).then(function (response) {
                // console.log(response.data[0].server_a)
                context.state.fwl=response.data[0].server_a
                context.state.kk++
            })
        },
        //记录累计登录次数
        dl(context){
            axios({
                method:'get',
                url:context.state.api+'/api/server_b'
            }).then(function (response) {
                context.state.kk++
            })
        },
        //请求文章数量
        wenzhang(context){
            axios({
                method:'get',
                url:context.state.api+'/api/wenzhang_1'
            }).then(function (response) {
                // console.log(response.data[0].count)
                context.state.wzsl=response.data[0].count
                context.state.kk++
            })
        },
        //请求文章
        wenzhang3(context){
            axios({
                method:'get',
                url:context.state.api+'/api/wenzhang_3'
            }).then(function (response) {
                // console.log(response.data[0])
                for (let i=0;i<response.data.length;i++){
                    context.state.article.push(JSON.parse(JSON.stringify(response.data[i])))
                }
                context.state.kk++
            })
        },
        //请求标签数量
        wenzhang4(context){
            axios({
                method:'get',
                url:context.state.api+'/api/wenzhang_2'
            }).then(function (response) {
                context.state.tags=response.data[0].count
                context.state.kk++
            })
        },
        //请求分类数量
        wenzhang5(context){
          axios({
              method:'get',
              url:context.state.api+'/api/wenzhang_4'
          }).then(function (response) {
              // console.log(response)
              context.state.classs=response.data[0].count
              context.state.kk++
          })
        },
        //请求分类数据
        wenzhang6(context){
          axios({
              method:'get',
              url:context.state.api+'/api/wenzhang_5'
          }).then(function (response) {
              // console.log(response.data)
              for (let i=0;i<response.data.length;i++){
                  context.state.fl.push(JSON.parse(JSON.stringify(response.data[i])))
              }
              context.state.kk++
          })
        },
        //请求标签数据
        wenzhang7(context){
            axios({
                method:'get',
                url:context.state.api+'/api/wenzhang_6'
            }).then(function (response) {
                // console.log(response.data)
                for (let i=0;i<response.data.length;i++){
                    context.state.bq.push(JSON.parse(JSON.stringify(response.data[i])))
                }
                context.state.kk++
            })
        },
        //请求说说数据
        wenzhang8(context){
            axios({
                method:'get',
                url:context.state.api+'/api/say_1'
            }).then(function (response) {
                // console.log(response.data)
                for (let i=0;i<response.data.length;i++){
                    context.state.say.unshift(JSON.parse(JSON.stringify(response.data[i])))
                }
                context.state.kk++
            })
        },
        //请求友情链接数据
        wenzhang9(context){
            axios({
                method:'get',
                url:context.state.api+'/api/link_1'
            }).then(function (response) {
                // console.log(response.data)
                for (let i=0;i<response.data.length;i++){
                    context.state.link.push(JSON.parse(JSON.stringify(response.data[i])))
                }
                context.state.kk++
            })
        },
        //请求系统日志数据
        wenzhang10(context){
            axios({
                method:'get',
                url:context.state.api+'/api/log_1'
            }).then(function (response) {
                // console.log(response.data)
                for (let i=0;i<response.data.length;i++){
                    context.state.log.push(JSON.parse(JSON.stringify(response.data[i])))
                }
                context.state.kk++
            })
        },
        //请求留言数据
        wenzhang11(context){
            axios({
                method:'get',
                url:context.state.api+'/api/message_1'
            }).then(function (response) {
                // console.log(response.data)
                for (let i=0;i<response.data.length;i++){
                    context.state.message.push(JSON.parse(JSON.stringify(response.data[i])))
                }
                context.state.kk++
            })
        },
        //请求小作品数据
        wenzhang12(context){
            axios({
                method:'get',
                url:context.state.api+'/api/show_1'
            }).then(function (response) {
                // console.log(response.data)
                for (let i=0;i<response.data.length;i++){
                    context.state.show.push(JSON.parse(JSON.stringify(response.data[i])))
                }
                context.state.kk++
            })
        },
    }
})