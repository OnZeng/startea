<template>
  <div id="app">
    <div class="ttte" v-if="k">
      <div class="ttt"></div>
    </div>
    <div v-else>
      <div class="body">
        <div v-if="!$route.meta.independent">
          <!--      导航区域-->
          <hello-world></hello-world>
          <!--      内容区域-->
          <keep-alive include="msg">
            <router-view></router-view>
          </keep-alive>
          <!--      页尾-->
          <zm4></zm4>
        </div>
        <div v-if="$route.meta.independent">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//导航栏
import HelloWorld from './components/HelloWorld.vue'
//页尾
import zm4 from './components/zm4'

export default {
  name: 'app',
  components: {
    HelloWorld,
    zm4
  },
  data() {
    return {
      //是否显示页面
      k: true,
      k2: 0
    }
  },
  methods: {
    //查询访问量
    fwl() {
      this.$store.dispatch('fwl')
      this.$store.dispatch('gsd')
      this.$store.dispatch('dl')
      this.$store.dispatch('wenzhang')
      this.$store.dispatch('wenzhang3')
      this.$store.dispatch('wenzhang4')
      this.$store.dispatch('wenzhang5')
      this.$store.dispatch('wenzhang6')
      this.$store.dispatch('wenzhang7')
      this.$store.dispatch('wenzhang8')
      this.$store.dispatch('wenzhang9')
      this.$store.dispatch('wenzhang10')
      this.$store.dispatch('wenzhang11')
      this.$store.dispatch('wenzhang12')
    },
    //获取数据
    get_data() {
      this.k2 = this.$store.state.kk
    },
    //校验请求的数据是否全部加载完成
    jy() {
        if (this.k2 === 14) {
          this.k = false
        }
    }
  },
  created() {
    this.fwl()
  },
  mounted() {
    let a = setInterval(function () {
      this.get_data()
      this.jy()
      if (this.k === false) {
        clearInterval(a)
      }
    }.bind(this), 100)
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: PingFang SC;
}

html, body {
  width: 100%;
  height: 100%;
}

body {
  /*overflow-y: scroll;*/
}

.body {
  width: 100%;
  background-image: url("./assets/BacgroundImage/20211126190312.jpg");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}

.ttte {
  width: 100%;
  height: 100vh;
  background-color: rgb(0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
}

.ttt {
  border: 20px solid hsla(185, 100%, 62%, 0.2);
  border-top-color: #3cefff;
  border-radius: 50%;
  width: 20em;
  height: 20em;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/*::-webkit-scrollbar {*/
/*  width: 0 !important;*/
/*}*/
/*::-webkit-scrollbar {*/
/*  width: 0 !important;height: 0;*/
/*}*/
/*定义滚动条高宽及背景
 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 15px;
  height: 15px;
}

/*定义滚动条轨道
 内阴影+圆角*/
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 6px;
}

/*定义滑块
 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 6px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
  background-color: rgb(69, 69, 88);
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgb(97, 147, 187);
}

::-webkit-scrollbar-track-piece {
  background-color: rgb(127, 127, 136);
}
</style>
<style>
.el-message {
  min-width: 100px !important;
  padding: 10px 10px 10px 15px !important;
}

.el-message__content {
}
</style>