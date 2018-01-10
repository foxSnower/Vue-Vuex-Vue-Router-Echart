<template>
  <transition name="scale-big">
    <div class="panel" v-if="refreshTime">
      <div class="left">
        <p><span class="point"></span>更新时间</p>
        <p>{{refreshTime}}</p>
      </div>
      <div class="bg"><img src="../assets/img/indexBg.png"></div>
      <div class="right" @click="reloadPage()">
        <i class="iconfont icon-refresh"></i>
      </div>
    </div>
  </transition>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import PublicMethods from '@/utils/PublicMethods'
export default {
  name: 'Panel',
  mounted() {
    this.$nextTick(() => {
      this.loadPage();
    })
  },
  methods: {
    ...mapActions(['updateRefreshTime']),
    loadPage() {
      if (this.refreshTime == '') {
        this.updateRefreshTime(PublicMethods.getCurTime());
      }
    },
    reloadPage() {
      location.reload();
    }
  },
  computed: {
    ...mapState({
      refreshTime: state => state.refreshTime,
    }),
  }
}

</script>
<style lang="less" scoped="scoped">
@import '../styles/var';
.panel {
  position: relative;
  padding: 15px;
  color: #fff;
  &:before {
    .setTopLine();
  }
  .point {
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background-color: #fff;
    display: inline-block;
    margin-right: 10px;
  }
  .left,
  .right {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .left {
    left: 10%;
  }
  .right {
    right: 10%;
    .icon-refresh {
      font-size: 3rem;
    }
  }
  .bg {
    border-radius: 10px;
    font-size: 0;
    box-shadow: 5px 5px 10px rgba(19, 153, 248, 0.3);
  }
}


.scale-big-enter-active,
.scale-big-leave-active {
  transition: all .2s;
}

.scale-big-enter,
.scale-big-leave-to {
  opacity: 0;
  transform: scale(0.2);
}

</style>
