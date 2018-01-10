<template>
  <transition name="slide-fade">
    <div class="silde-left" v-if="showMySlideLeft">
      <div class="mask" @click="updateShowMySlideLeft(false)"></div>
      <div class="silde">
        <div class="hd">
          <span class="img"></span>
          <p class="title">{{userInfo.userName}}</p>
          <p class="sub-title">{{userInfo.orgName}}</p>
        </div>
        <div class="bd">
          <div @click="linkTo"><i class="iconfont icon-tuichu"></i><span>退出</span></div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'MySlideLeft',
  data() {
    return {
      show: true
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.loadPage();
    })
  },
  methods: {
    ...mapActions(['updateShowMySlideLeft']),
    loadPage() {
      let loginInfo = JSON.parse(sessionStorage.getItem('loginInfo'));

    },
    linkTo() {
      this.updateShowMySlideLeft(false);
      this.$router.push('./');
    }
  },
  computed: {
    ...mapState({
      showMySlideLeft: state => state.showMySlideLeft,
      loginInfo: state => state.loginInfo,
    }),
    userInfo() {
      if (this.loginInfo != null) {
        return {
          userName: this.loginInfo.userName,
          orgName: this.loginInfo.orgName
        }
      }else{
         return {
          userName: '',
          orgName: ''
        }
      }
    }
  }
}

</script>
<style lang="less" scoped="scoped">
@import '../styles/var';
.silde-left {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  .mask {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .6);
    z-index: 100;
  }

  .silde {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 70%;
    background-color: @while;
    z-index: 101;
    .hd {
      height: 200px;
      width: 100%;
      text-align: center;
      .img {
        display: inline-block;
        width: 80px;
        height: 80px;
        margin-top: 60px;
        background: url('../assets/img/infoImg.png') no-repeat;
        background-size: contain;
      }
      .title {
        font-size: @hugeSize;
      }
      .sub-title {
        font-size: @littleSize;
        color: @lighterColor;
      }
    }
    .bd {
      margin-top: 40px;
      >div {
        padding-left: 30px;
        line-height: 50px;
        >span {
          padding-left: 10px;
        }
      }
    }
  }
}

.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */

{
  transform: translateX(-10px);
  opacity: 0;
}

</style>
