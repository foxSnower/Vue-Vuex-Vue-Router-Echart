<template>
  <div class="tab">
    <div class="fixed">
      <div class="f-flex">
        <div class="f-item" :class="{active:active==1}" @click="linkTo(1)">
          <i class="iconfont icon-xiaoshou"></i><span>销售</span>
        </div>
        <div class="f-item" :class="{active:active==2}" @click="linkTo(2)">
          <i class="iconfont icon-kucun"></i><span>库存</span>
        </div>
        <div class="f-item" :class="{active:active==3}" @click="linkTo(3)">
          <i class="iconfont icon-baozhang"></i><span>售后</span>
        </div>
        <div class="f-item" :class="{active:active==4}" @click="linkTo(4)">
          <i class="iconfont icon-shouhou"></i><span>保险</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BottomTab",
  data() {
    return {
      active: 1
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.loadPage();
    })
  },
  methods: {
    loadPage() {
      let path = this.$route.path;
      switch (path) {
        case '/indexSale':
          this.active = 1;
          break;
        case '/indexStock':
          this.active = 2;
          break;
        case '/indexService':
          this.active = 3;
          break;
        case '/indexInsurance':
          this.active = 4;
          break;
        default:
          break;
      }
    },
    linkTo(index) {
      this.active = index;
      switch (index) {
        case 1:
          this.$router.replace('/indexSale');
          break;
        case 2:
          this.$router.replace('/indexStock');
          break;
        case 3:
          this.$router.replace('/indexService');
          break;
        case 4:
          this.$router.replace('/indexInsurance');
          break;
        default:
          break;
      }
    }
  }
}

</script>
<style lang="less" scoped="scoped">
@import '../styles/var.less';
.tab {
  height: @normalHeight;
  text-align: center;
  .f-flex {
    align-items: inherit;
    height: 100%;
    span {
      display: block;
      font-size: @tinySize;
      color: @lighterColor;
      position: relative;
      top: -40px;
    }
    .iconfont {
      font-size: 2.4rem;
      color: @lightColor;
      position: relative;
      top: -8px;
    }
    .active .iconfont,
    .active span {
      color: @tabActiveColor;
    }
  }
}

.fixed {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: @normalHeight;
  line-height: @normalHeight;
  background-color: @while;
  z-index: 99;
  &:after {
    .setTopLine();
  }
}

</style>
