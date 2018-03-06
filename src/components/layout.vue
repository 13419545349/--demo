<template>
  <div>
      <div class="app-head">
        <div class="app-head-inner">
          <img src="../assets/logo.png" alt="">
          <div class="head-nav">
            <ul class="nav-list">
              <li>{{username}}</li>
              <li v-if="username!==''" class="nav-pile">|</li>
              <li v-if="username!== ''" @click="quit">退出</li>
              <li @click="showDialog('isShowLogin')" v-if="username== ''">登录</li>
              <li class="nav-pile">|</li>
              <li>注册</li>
              <li class="nav-pile">|</li>
              <li @click="showDialog('isShowAbout')">关于</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="app-content">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
      <div class="app-foot">
        <p>©2016 fishenal MIT</p>
      </div>
      <this-dialog :is-show="isShowAbout" @on-close="hiddenDialog('isShowAbout')">
        <p class="about">本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。</p>
      </this-dialog>
      <this-dialog :is-show="isShowLogin" @on-close="hiddenDialog('isShowLogin')">
         <log-form @has-log="onSuccessLog"></log-form>
      </this-dialog>
  </div>
</template>

<script>
import thisDialog from "./dialog"
import LogForm from './logForm'
export default {
  name: 'layout',
  data () {
    return {
      isShowAbout:false,
      isShowLogin:false,
      username:''
    }
  },
  methods:{
      showDialog(param){
        this[param] = true
      },
      hiddenDialog(param){
        this[param] = false
      },
      onSuccessLog(data){
        console.log(data.data.login.username)
        this.username = data.data.login.username
        this.hiddenDialog('isShowLogin')
      },
      quit(){
        this.username = ''
      }
  },
  components:{
    thisDialog,
    LogForm
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.app-head{
  background:#363636;
  color:#b2b2b2;
  height:90px;
  line-height:90px;
  width:100%
}
.app-head-inner{
  width:1200px;
  margin:0 auto;
}
.head-logo{
  float:left;
}
.app-head-inner img{
  width:50px;
  margin-top:20px;
}
.head-nav{
  float:right;
}
.head-nav li{
  cursor:pointer;
  float:left;
}
.nav-pile{
  padding:0 10px;
}
.app-foot{
  text-align: center;
  height:80px;
  width:100%;
  line-height:80px;
  background:#e3e4e8;
  clear:both;
  margin-top:30px;
}
.container {
  width: 1200px;
  margin: 0 auto;
}

</style>
