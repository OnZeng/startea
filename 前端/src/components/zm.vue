<template>
  <el-main class="zm">

    <div style="text-align: center">
      <p class="p1 animate__animated animate__bounceInDown">StarTea小站</p>
      <p id="jinrishici-sentence" class="animate__animated animate__bounceInUp">{{msg}}</p>
    </div>
  </el-main>
</template>

<script>
const jinrishici = require('jinrishici');
export default {
  name: "zm",
  data(){
    return{
      msg:''
    }
  },
  methods:{
    loadSentence: function() {
      jinrishici.load(result => {
        this.msg = result.data.content
      }, err => {
        console.log("test");
      })
    }
  },
  created() {
    this.loadSentence()
  }
}
</script>

<style scoped>
.zm {
  width: 100%;
  height: 100vh;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-y: hidden;
}

.p1 {
  font-size: 56px;
  font-weight: 700;
  color: white;
  text-shadow: 0 0 6px #000;
  position: relative;
}

#jinrishici-sentence {
  margin-top: 10px;
  padding: 0;
  border: 0;
  font-size: 30px;
  font-family: "Microsoft YaHei";
  color: #FFFFFF;
  text-shadow: 0 0 6px #000;

}
@media screen and (max-width: 661px){
  .p1{
    font-size: 45px;
  }
  #jinrishici-sentence{
    font-size: 25px;
  }
}
@media screen and (max-width: 601px){
  .p1{
    font-size: 40px;
  }
  #jinrishici-sentence{
    font-size: 20px;
  }
}
@media screen and (max-width: 400px){
  .p1{
    font-size: 30px;
  }
  #jinrishici-sentence{
    font-size: 16px;
  }
}
</style>