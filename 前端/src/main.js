import Vue from 'vue'
import App from './App.vue'
//引入vueRouter
import  VueRouter from  'vue-router'
import  router from './router/router'
//引入animated
import animated from 'animate.css'
//引入vuex
import vuex from 'vuex'
//引入axios
import axios from 'axios'
//引入store
import store from "./store/store";
//引入图标
import './assets/icon/font_3226319_1jeua13jiig/iconfont.css'
//引入element-ui
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/base.css';
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
Vue.config.productionTip = false
//引入element-ui
import {Main} from 'element-ui'
import {Row, Col,} from 'element-ui'
import {Pagination} from 'element-ui'
import {Link} from 'element-ui'
import {Timeline} from "element-ui";
import {TimelineItem} from "element-ui";
import {Card} from "element-ui";
import {Switch} from "element-ui";
import {Input} from "element-ui";
import {Avatar} from "element-ui";
import {Popover} from "element-ui";
import {Popconfirm} from "element-ui";
import {Message} from "element-ui";
import {Dialog} from "element-ui";
import {Button} from "element-ui";
import {Skeleton} from "element-ui";
import {SkeletonItem} from "element-ui";
Vue.use(vuex)
Vue.use(Main)
Vue.use(Row)
Vue.use(Col)
Vue.use(CollapseTransition.name, CollapseTransition)
Vue.use(Pagination)
Vue.use(Link)
Vue.use(Timeline)
Vue.use(TimelineItem)
Vue.use(Card)
Vue.use(Switch)
Vue.use(Input)
Vue.use(Avatar)
Vue.use(Popover)
Vue.use(Popconfirm)
Vue.use(Dialog)
Vue.use(Button)
Vue.use(Skeleton)
Vue.use(SkeletonItem)
Vue.prototype.$message = Message;
Vue.prototype.axios=axios
//应用vueRouter插件
Vue.use(VueRouter)
//应用animated动画库
Vue.use(animated)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
