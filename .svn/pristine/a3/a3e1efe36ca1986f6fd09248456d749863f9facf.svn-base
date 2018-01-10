<template>
  <transition name="slide-fade">
    <div id="watchWay" v-if="showDateSelect">
      <div class="mask" @click="close"></div>
      <div class="selectWay">
        <div class="showway change">切换查看方法</div>
        <div class="showway" @click="selectType('1')">日新增</div>
        <div class="showway" @click="selectType('2')">月累计</div>
        <div class="showway" @click="selectType('3')">年累计</div>
        <div class="showway" @click="setDate">其他时间段</div>
      </div>
      <div class="cancel" @click="close">取消</div>
    </div>
  </transition>
</template>
<script>
// 注册全局变量Calendar
import Vue from 'vue'
import Calendar from "./PickerTime/modules/index"
Vue.use(Calendar);

// 要使用store的方法，就需要引入Vuex的组件
import { mapState, mapActions } from 'vuex'
import PublicMethods from '@/utils/PublicMethods'
export default {
  name: 'DateSelect',
  data() {
    return {
      startTime: '',
      endTime: ''
    }
  },
  methods: {
    ...mapActions(['updateDateSelect', 'updateShowDateSelect']),
    setDate() {
      let _this = this; //改变全局变量中this的指向
      this.$calendar.show({
        year: [1990, 2050], //年份的范围,如果初始化的年份不在这个范围，会自动选最小的年份
        // endTime:'2020-2-12',  //终止的日期，这个要在year的范围里面，不然没用
        // date:'2017-12-01',  //初始化的日期
        date1: "",
        date2: "",
        onNext(startTime) {
          _this.startTime = _this.computedTime(startTime);
        },
        onOk(endTime) {
          _this.endTime = _this.computedTime(endTime);
          _this.selectType('4');
        },
      });
      this.close();
    },
    close() {
      this.updateShowDateSelect(false);
    },
    // 数据实时渲染
    selectType(checkWay) {
      let checkWayName = '';
      if (checkWay == '1') { checkWayName = '日新增'; }
      if (checkWay == '2') { checkWayName = '月累计'; }
      if (checkWay == '3') { checkWayName = '年累计'; }
      if (checkWay == '4') { checkWayName = this.startTime + ' 至 ' + this.endTime; }
      this.updateDateSelect({
        checkWayName: checkWayName,
        checkWay: checkWay,
        startTime: this.startTime,
        endTime: this.endTime
      })
      this.updateShowDateSelect(false);
    },
    computedTime(val){
      let date = [];
      let newDate =[];
      date = val.split('-');
      date.forEach((x,index)=>{
        newDate.push(PublicMethods.formatZero(x));
      })
      return newDate.join('-');
    }
  },
  computed: {
    ...mapState({
      showDateSelect: state => state.showDateSelect,
      dateSelect: state => state.dateSelect
    })
  }
}

</script>
<style lang="less" scoped="scoped">
@import '../styles/var.less';
.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}

#app {
  position: relative;
}

#watchWay {
  width: 100%;
  height: auto;
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 997;
  text-align: center;
  .mask {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #000;
    z-index: 998;
    opacity: 0.5;
  }
  .selectWay {
    width: 100%;
    height: auto;
    position: absolute;
    left: 0;
    bottom: 60px;
    z-index: 1000;
    line-height: 44px;
    text-align: center;
    background-color: white;
    .showway {
      position: relative;
      &:after {
        .setTopLine();
      }
    }
    .change {
      color: #999999;
    }
  }
  .cancel {
    width: 100%;
    height: 50px;
    line-height: 50px;
    position: absolute;
    left: 0;
    bottom: 0px;
    z-index: 1000;
    background-color: white;
  }
}

</style>
