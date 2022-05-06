<template>
  <el-skeleton
      :count="3"
      style="width: 90%"
      :loading="loading"
      animated
      :throttle="100"
      :rows="list.length+4"
  >
<div class="box animate__animated animate__bounceInUp">
  <div class="box1" v-for="item in list" v-bind:key="item.id">
  <img v-bind:src="item.gal_img" style="width: 300px;height: 200px;border-radius: 14px">
  </div>
<!--返回按钮-->
  <div class="box2 animate__animated animate__zoomIn" @click="back()" v-if="show">
  <i class="el-icon-d-arrow-left"></i>
  </div>
</div>
  </el-skeleton>
</template>

<script>
export default {
  name: "one",
  data(){
    return{
      loading: true,
      //显示返回按钮
      show:false,
      list:[
        // {
        //   gal_img:'https://startea.top/1231141.jpg'
        // }
      ]
    }
  },
  methods:{
    //返回上一级
    back() {
      this.$router.go(-1)
    },
    //根据文章分类查询指定文章
    gallery_cx(){
      this.list=[]
      this.axios({
        method:'get',
        url:'https://startea.top/api/gallery_1',
        params:{
          gal_type:this.$route.query.id
        }
      }).then(function (response) {
        // console.log(response)
        for (let i=0;i<response.data.length;i++){
          this.list.push(JSON.parse(JSON.stringify(response.data[i])))
        }
        // console.log(1)
      }.bind(this))
    },
    //检测数组
    jcimgsz(){
      // console.log(this.list.length===0)
      if (this.list.length!==0){
        this.loading=false
      }
    }
  },
  created() {
    //触发axios
    this.gallery_cx()
  },
  mounted() {
    setTimeout(function () {
      this.show=true
    }.bind(this),800)
    let a=setInterval(()=>{
      this.jcimgsz()
      if (this.loading===false){
        clearInterval(a)
      }
    },1)
  }
}
</script>

<style scoped>
.box{
  display: flex;
  flex-wrap: wrap;
}
.box1{
  width: 300px;
  height: 200px;
  /*background-color: orange;*/
  margin: 10px;
  border-radius: 14px;
  display: flex;
  flex-wrap: wrap;
}
img{
  width: 100%;
  height: 100%;
  border-radius: 14px;
}
.box2{
  width: 50px;
  height: 50px;
  background-color: rgb(231,104,139);
  position: fixed;
  border-radius: 14px;
  opacity: 0.9;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  cursor: pointer;
}
.box2:hover{
  background-color: rgb(97,147,187);
}
</style>