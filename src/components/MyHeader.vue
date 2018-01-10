<template>
  <div class="header">
    <div class="fixed">
      <div class="left" @click="onClickBack" v-if='back'><i class="iconfont icon-fanhui"></i>返回</div>
      <div class="left" @click="onClickList" v-else><i class="iconfont icon-liebiao"></i></div>
      <div class="center">
        <transition :name="headerTransition">
          <span v-show="title">{{title}}</span>
        </transition>
        <transition :name="headerTransition">
          <span class="sub" v-show="subTitle">{{subTitle}}</span>
        </transition>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: "MyHeader",
  props: {
    headerTransition: {
      type: String,
      default: 'header-fade-in-right'
    }
  },
  computed: {
    ...mapState({
      loginInfo: state => state.loginInfo
    }),
    back() {
      let path = this.$route.path;
      //链接里包含了index字符串，改变返回按钮
      if (path.indexOf('index') == -1) {
        return true;
      } else {
        return false
      }
    },
    title() {
      if (this.$route.name != '' && this.$route.name != null) {
        return this.$route.name
      } else {
        return this.setTitleName()
      }
    },
    subTitle() {
      if (this.loginInfo != null) {
        return this.loginInfo.orgName;
      }
    }
  },
  methods: {
    ...mapActions(['updateShowMySlideLeft']),
    onClickBack() {
      this.$router ? this.$router.back() : window.history.back()
    },
    onClickList() {
      this.updateShowMySlideLeft(true);
    },
    setTitleName() {
      let fullPath = this.$route.fullPath;
      fullPath = fullPath.substring(fullPath.indexOf('_') + 1, fullPath.length);
      fullPath = fullPath.substring(0, fullPath.indexOf('_'));
      if (fullPath == 'XIANSUO') return '线索'
      if (fullPath == 'LAIDIAN') return '来店批次'
      if (fullPath == 'YIXIANG') return '新增意向'
      if (fullPath == 'DINGDAN') return '订单'
      if (fullPath == 'KAIPIAO') return '开票'
      if (fullPath == 'JIAOCHE') return '交车'
      if (fullPath == 'TICHE') return '提车量'
      if (fullPath == 'TICHEJIN') return '提车金额'
      if (fullPath == 'DINGDANJIN') return '订单金额'
      if (fullPath == 'KAIPIAOJIN') return '开票金额'
      if (fullPath == 'ZAIKU') return '在库'
      if (fullPath == 'ZAITU') return '在途'
      if (fullPath == 'KEGONGXIAO') return '可供销'
      if (fullPath == 'ZAIKUJIN') return '在库金额'
      if (fullPath == 'YINGSHOU') return '营收'
      if (fullPath == 'HUICHANTAI') return '回厂台次'
      if (fullPath == 'GONGDANSHU') return '工单数'
      if (fullPath == 'BEIJIANDINGJIN') return '备件订货金额'
      if (fullPath == 'BAOYOUKEHU') return '保有客户'
      if (fullPath == 'BEIJIANKUJIN') return '备件库存金额'
      if (fullPath == 'XINBAOTAI') return '新保台次'
      if (fullPath == 'XINBAOJIN') return '新保金额'
      if (fullPath == 'XUBAOTAI') return '续保台次'
      if (fullPath == 'XUBAOJIN') return '续保金额'
    }
  }
}

</script>
<style lang="less" scoped="scoped">
@import '../styles/var.less';
.header {
  height: @normalHeight;
  text-align: center;
}

.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: @normalHeight;
  line-height: @normalHeight;
  background-color: @while;
  z-index: 99;
}

.center {
  text-align: center;
  font-size: 1.8rem;
  margin: 0 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 100%;
  >span {
    display: inline-block;
  }
}

.left {
  position: absolute;
  top: 0;
  left: 0;
  width: 70px;
  height: @normalHeight;
  z-index: 1;
}

.right {
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: @normalHeight;
  z-index: 1;
}


.sub {
  /*display: block;*/
  width: 100%;
  line-height: 40px;
  position: relative;
  top: -35px;
  line-height: 20px;
  font-size: @tinySize;
  color: @lighterColor;
}

.icon-liebiao {
  font-size: 2.4rem;
}

.header-fade-in-right-enter-active {
  animation: fadeinR .5s;
}

.header-fade-in-left-enter-active {
  animation: fadeinL .5s;
}

@keyframes fadeinR {
  0% {
    opacity: 0;
    transform: translateX(150px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeinL {
  0% {
    opacity: 0;
    transform: translateX(-150px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

</style>
