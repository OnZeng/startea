import Vue from 'vue'
import VueRouter from 'vue-router'

//引入路由组件
const gallery = () => import('../components/gallery')
const zm5 = () => import('../components/zm5')
const one = () => import ('../components/one')
const gallery2 = () => import("../components/gallery2")
const say = () => import("../components2/say")
const blogroll = () => import("../components2/blogroll");
const show = () => import("../components2/show");
const log = () => import("../components2/log");
const about = () => import("../components2/about");
const msg = () => import( "../components2/msg");
const tags = () => import( "../components2/tags");
const classes = () => import( "../components2/classes");
const find = () => import("../components2/find");
const articles = () => import("../components2/articles");
const post = () => import("../components2/post");
const login = () => import("../components3/login");
// 导入 vue-router 依赖
Vue.use(VueRouter);
export default new VueRouter({
    mode: 'history',
    routes: [
        //主页
        {
            path: '/',
            component: zm5
        },
        //图库
        {
            path: '/gallery',
            component: gallery,
            children: [
                {
                    path: 'one',
                    component: one,
                },
                {
                    path: '',
                    component: gallery2
                }
            ]
        },
        //说说
        {
            path: '/say',
            component: say
        },
        //友链
        {
            path: '/link',
            component: blogroll
        },
        //小作品
        {
            path: '/show',
            component: show
        },
        //建站日志
        {
            path: '/log',
            component: log
        },
        //关于
        {
            path: '/about',
            component: about
        },
        //留言
        {
            path: '/msg',
            component: msg,
            name: 'msg'
        },
        //标签
        {
            path: '/tags',
            component: tags,
        },
        //分类
        {
            path: '/class',
            component: classes
        },
        //查找标签
        {
            path: '/find',
            component: find
        },
        //所有文章
        {
            path: '/articles',
            component: articles
        },
        //文章浏览
        {
            path: '/post',
            component: post
        },
        //登录页面
        {
            path: '/login',
            component: login,
            meta: {
                independent: true
            }
        }
    ]
});