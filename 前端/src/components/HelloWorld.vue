<template>
  <transition name="el-zoom-in-top">
    <div class="header" v-show="scroll">
      <div class="title">
        <div class="title-1 " @click="path(9,9)"><i class="iconfont icon-zhuye i"></i></div>
        <!--中间导航栏-->
        <div class="title-2">
          <div class="tag tag3">
            <div class="tag3-1" v-bind:class="{tag2:a1}" @mouseenter="path(1,1)" @mouseleave="lik()">文章</div>
            <div class="tag3-2 animate__animated animate__fadeInDown" v-show="is_show" @mouseenter="path(1,1)"
                 @mouseleave="lik()">
              <div class="tag3-3" @click="path(22,22)">找文章</div>
              <div class="tag3-3" @click="path(21,21)">分类</div>
              <div class="tag3-3" @click="path(20,20)">标签</div>
            </div>
          </div>
          <div class="tag tagaaa" @click="path(200,200)" v-bind:class="{tag2:a1}">文章</div>
          <div class="tag" @click="path(2,2)" v-bind:class="{tag2:a2}">图库</div>
          <div class="tag" @click="path(3,3)" v-bind:class="{tag2:a3}">说说</div>
          <div class="tag" @click="path(4,4)" v-bind:class="{tag2:a4}">留言</div>
          <div class="tag" @click="path(5,5)" v-bind:class="{tag2:a5}">友链</div>
          <div class="tag" @click="path(6,6)" v-bind:class="{tag2:a6}">作品</div>
          <div class="tag" @click="path(7,7)" v-bind:class="{tag2:a7}">建站</div>
          <div class="tag" @click="path(8,8)" v-bind:class="{tag2:a8}">关于</div>
        </div>
        <div class="title-3" @click="path(10,10)"><i class="el-icon-setting i"></i></div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      //文章分类查找
      is_show: false,
      //刷新后保存当前所在位置
      ick: '',
      //导航栏是否显示
      scroll: true,
      //滚动值
      oldScrollTop: 0,
      //当前导航的位置的按钮
      a1: true,
      a2: false,
      a3: false,
      a4: false,
      a5: false,
      a6: false,
      a7: false,
      a8: false
    }
  },
  methods: {
    //文章导航离开隐藏
    lik() {
      this.is_show = false
      this.a1 = false
    },
    //导航
    path(i, k) {
      if (i === 1) {
        this.is_show = true
        this.a1 = false
        this.a2 = false
        this.a3 = false
        this.a4 = false
        this.a5 = false
        this.a6 = false
        this.a7 = false
        this.a8 = false
      } else if (i===200){
        window.scrollTo(0, 0)
        if (k === 200) {
          this.$router.push('/articles').catch(() => {
          })
        }
        this.is_show = true
        this.a1 = true
        this.a2 = false
        this.a3 = false
        this.a4 = false
        this.a5 = false
        this.a6 = false
        this.a7 = false
        this.a8 = false
        window.sessionStorage.setItem('ick', 200)
      } else if (i === 2) {
        window.scrollTo(0, 0)
        if (k === 2) {
          this.$router.push('/gallery').catch(() => {
          })
        }
        this.a1 = false
        this.a2 = true
        this.a3 = false
        this.a4 = false
        this.a5 = false
        this.a6 = false
        this.a7 = false
        this.a8 = false
        window.sessionStorage.setItem('ick', 2)
      } else if (i === 3) {
        window.scrollTo(0, 0)
        if (k === 3) {
          this.$router.push('/say').catch(() => {
          })
        }
        this.a1 = false
        this.a2 = false
        this.a3 = true
        this.a4 = false
        this.a5 = false
        this.a6 = false
        this.a7 = false
        this.a8 = false
        window.sessionStorage.setItem('ick', 3)
      } else if (i === 4) {
        window.scrollTo(0, 0)
        if (k === 4) {

          this.$router.push('/msg').catch(() => {
          })
        }
        this.a1 = false
        this.a2 = false
        this.a3 = false
        this.a4 = true
        this.a5 = false
        this.a6 = false
        this.a7 = false
        this.a8 = false
        window.sessionStorage.setItem('ick', 4)
      } else if (i === 5) {
        window.scrollTo(0, 0)
        if (k === 5) {
          this.$router.push('/link').catch(() => {
          })
        }
        this.a1 = false
        this.a2 = false
        this.a3 = false
        this.a4 = false
        this.a5 = true
        this.a6 = false
        this.a7 = false
        this.a8 = false
        window.sessionStorage.setItem('ick', 5)
      } else if (i === 6) {
        window.scrollTo(0, 0)
        if (k === 6) {

          this.$router.push('/show').catch(() => {
          })
        }
        this.a1 = false
        this.a2 = false
        this.a3 = false
        this.a4 = false
        this.a5 = false
        this.a6 = true
        this.a7 = false
        this.a8 = false
        window.sessionStorage.setItem('ick', 6)
      } else if (i === 7) {
        window.scrollTo(0, 0)
        if (k === 7) {

          this.$router.push('/log').catch(() => {
          })
        }
        this.a1 = false
        this.a2 = false
        this.a3 = false
        this.a4 = false
        this.a5 = false
        this.a6 = false
        this.a7 = true
        this.a8 = false
        window.sessionStorage.setItem('ick', 7)
      } else if (i === 8) {
        window.scrollTo(0, 0)
        if (k === 8) {

          this.$router.push('/about').catch(() => {
          })
        }
        this.a1 = false
        this.a2 = false
        this.a3 = false
        this.a4 = false
        this.a5 = false
        this.a6 = false
        this.a7 = false
        this.a8 = true
        window.sessionStorage.setItem('ick', 8)
      } else if (i === 9) {
        window.scrollTo(0, 0)
        if (k === 9) {
          this.$router.push('/').catch(() => {
          })
        }
        this.a1 = false
        this.a2 = false
        this.a3 = false
        this.a4 = false
        this.a5 = false
        this.a6 = false
        this.a7 = false
        this.a8 = false
        window.sessionStorage.setItem('ick', 9)
      } else if (i === 10) {
        window.scrollTo(0, 0)
        if (k === 10) {
          window.open('https://admin.startea.top', '_blank')
        }
        this.a1 = false
        this.a2 = false
        this.a3 = false
        this.a4 = false
        this.a5 = false
        this.a6 = false
        this.a7 = false
        this.a8 = false
        window.sessionStorage.removeItem('ick')
      } else if (i === 20) {
        window.scrollTo(0, 0)
        if (k === 20) {
          this.$router.push('/tags').catch(() => {
          })
        }
        window.sessionStorage.setItem('ick', 20)
      } else if (i === 21) {
        window.scrollTo(0, 0)
        if (k === 21) {
          this.$router.push('/class').catch(() => {
          })
        }
        window.sessionStorage.setItem('ick', 21)
      } else if (i === 22) {
        window.scrollTo(0, 0)
        if (k === 22) {
          this.$router.push('/articles').catch(() => {
          })
        }
        window.sessionStorage.setItem('ick', 22)
      }
    },
    // 保存滚动值，兼容的写法
    handleScroll(e) {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // console.log(this.scrollTop)
      // 滚动条距文档顶部的距离
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // 滚动条滚动的距离
      let scrollStep = scrollTop - this.oldScrollTop;
      // 更新——滚动前，滚动条距文档顶部的距离
      this.oldScrollTop = scrollTop;
      if (scrollStep < 0) {
        // console.log("滚动条向上滚动了！")
        this.scroll = true
      } else {
        // console.log("滚动条向下滚动了！")
        this.scroll = false
      }

    },

  },
  mounted() {
    //监听滚动值
    window.addEventListener('scroll', this.handleScroll, true)
    // //获取当前导航区域
    if (window.sessionStorage.getItem('ick') != null) {
      let i = window.sessionStorage.getItem('ick')
      this.path(parseInt(i))
    }
  },
  destroyed() {
    // 离开该页面需要移除这个监听的事件，不然会报错
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
.tagaaa{
  display: none!important;
}
.header {
  width: 100%;
  height: 70px;
  background-color: rgb(35, 35, 44);
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 10;
  box-shadow: 0 0 18px #000;
}

.title {
  width: 1200px;
  height: 100%;
  /*background-color: red;*/
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title-1 {
  width: 60px;
  height: 44px;
  /*background-color: green;*/
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  border-radius: 14px;
  cursor: pointer;
  color: white;
}

.title-1:hover {
  background-color: rgb(97, 147, 187);
}

.title-2 {
  width: 800px;
  height: 44px;
  /*background-color: #0b418a;*/
  display: flex;
  justify-content: space-evenly;
}

.title-3 {
  width: 60px;
  height: 44px;
  /*background-color: #2bdab1;*/
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  border-radius: 14px;
  cursor: pointer;
  color: white;
}

.title-3:hover {
  background-color: rgb(97, 147, 187);
}

.tag {
  width: 60px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border-radius: 14px;
  cursor: pointer;
  padding: 0 5px;
  color: white;
}

/*导航后的样式*/
.tag2 {
  width: 60px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border-radius: 14px;
  cursor: pointer;
  padding: 0 5px;
  color: white;
  background-color: rgb(97, 147, 187);
}

.tag:hover {
  background-color: rgb(97, 147, 187);
}

.tag3 {
  height: 200px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: transparent;
  cursor: default;
}

.tag3:hover {
  background-color: transparent;
}

.tag3-1 {
  width: 70px;
  height: 44px;
  /*background-color: #990055;*/
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  box-sizing: border-box;
  cursor: default;
}

.tag3-1:hover {
  background-color: rgb(97, 147, 187);
}

.tag3-2 {
  width: 70px;
  /*background-color: #4BAE4F;*/
}

.tag3-3 {
  width: 70px;
  height: 44px;
  background-color: rgb(35, 35, 44);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  border-radius: 14px;
  cursor: pointer;
}

.tag3-3:hover {
  background-color: rgb(97, 147, 187);
}
@media screen and (max-width: 1025px) {
  .header {
    width: 100%;
  }

  .title {
    width: 100%;
  }
}
@media screen and (max-width: 1001px){
  .title-2{
    width: 100%;
  }
}
@media screen and (max-width: 638px){
  .tag{
    width: auto;
  }
  .tag3-1{
    width: auto;
  }
  .title-1{
    display: none;
  }
  .title-3{
    display: none;
  }
  .title-1{
    display: none;
  }
  .title-3{
    display: none;
  }
  .tag3{
    display: none;
  }
  .tagaaa{
    display: flex!important;
  }
}
@media screen and (max-width: 550px){
  .tag{
    font-size: 16px;
    border-radius: 4px;
  }
}
@media screen and (max-width: 450px){
  .tag{
    border-radius: 4px;
  }
}
@media screen and (max-width: 349px){
  .tag{
    font-size: 12px;
  }
}
</style>
