<template>
<div>
<div class="footer1">
  <p class="p5" @click="jr">进入后台管理系统</p>
<el-link :underline="false" href="https://test.startea.top/" target="_blank" class="link1"><span style="color: white;cursor: text">个人博客系统</span>「源代码」</el-link>
  <el-link :underline="false" href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank" class="link2">赣ICP备2021001386号-3</el-link>
  <div class="tag">
    <p class="tag2">Vue2</p>
    <p class="tag2">VueX</p>
    <p class="tag2">VueCLI</p>
    <p class="tag2">Element-UI</p>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: "zm4",
  methods:{
    jr(){
      window.open('https://admin.startea.top','_blank')
    }
  }
}
</script>

<style scoped>
.footer1{
  height: 150px;
  background-color: rgba(0,0,0,.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}
.link1{
  color: white!important;
  font-size: 18px!important;
  margin-bottom: 10px!important;
}
.link2{
  color: white!important;
  font-size: 18px!important;
  margin-bottom: 10px;
}
.link1:hover{
  color: rgb(88,147,182) !important;
}
.link2:hover{
  color: rgb(88,147,182) !important;
}
.tag{
  display: flex;
  color: white;
}
.tag2{
  padding:2px 8px;
  border-radius: 6px;
  background-color: rgba(35, 35, 44, 1);
  font-size: 18px;
  margin: 4px;
}
.p5{
  color: white;
  padding:2px 8px;
  border-radius: 6px;
  background-color: rgba(35, 35, 44, 1);
  font-size: 18px;
  margin: 4px;
  display: none;
  cursor: pointer;
}
.tag2:hover{
  background-color: rgb(97,147,187);
}
@media screen and (max-width: 341px){
  .tag2{
    font-size: inherit;
  }
}
@media screen and (max-width: 638px){
  .p5{
    display: block;
  }
}
</style>