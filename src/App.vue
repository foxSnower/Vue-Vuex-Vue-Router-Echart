<template>
  <div id="app">
    <MyHeader v-show="$route.name!='登录'"></MyHeader>
   <!--  <transition name="pop-in"> -->
   <!-- <keep-alive> -->
       <router-view/>
       <!-- </keep-alive> -->
    <!-- </transition> -->
    <Loading></Loading>
    <Toast></Toast>
  </div>
</template>
<script>
import PublicMethods from '@/utils/PublicMethods'
import MyHeader from '@/components/MyHeader'
import Loading from '@/components/Loading'
import Toast from '@/components/Toast'

import { mapState } from 'vuex'
export default {
  name: 'app',
  components: {
    MyHeader,
    Loading,
    Toast,
  },
  mounted(){
    this.$nextTick(()=>{
      this.loadPage();
    })
  },
  methods:{
    loadPage(){
      let loginInfo = JSON.parse(sessionStorage.getItem('loginInfo'));
      if(loginInfo!=null){
        this.$store.commit('loginInfo',{loginInfo});
      }
      let loginTime = sessionStorage.getItem('loginTime');
      let getCurTime = PublicMethods.getCurTime();
      let resetLogin = PublicMethods.formatMs(getCurTime)-PublicMethods.formatMs(loginTime)>PublicMethods.setResetLoginTime;
      // console.log(PublicMethods.formatMs(getCurTime));
      // console.log(PublicMethods.formatMs(loginTime));
      // console.log(PublicMethods.setResetLoginTime);
      if(resetLogin){
        this.$router.push('./');
      }
    }
  }
}
</script>
<style lang="less">
@import './styles/index';
@import './styles/var';

#app {
  font-family: @FontDefault;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1.6rem;
  background-color: @bodyColor;
}

</style>
