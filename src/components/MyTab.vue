<template>
  <div class="my-tab">
    <div class="change-tab">
      <div class="f-flex tab">
        <div class="f-item" @click="updateActiveTab(1)"><span :class="{active:activeTab==1}">按组织</span></div>
        <div class="f-item" @click="updateActiveTab(2)"><span :class="{active:activeTab==2}">按品牌</span></div>
        <div class="f-item" @click="updateActiveTab(3)"><span :class="{active:activeTab==3}">按车系</span></div>
      </div>
    </div>
    <div class="select">
      <!--从全局中拿出：dateselect.updateTimeSelect-->
       <span v-if="tabType=='stock'"  @click="setDate">{{stockDateSelect}}<i class="iconfont icon-sanjiaoxing"></i></span>
      <span v-else @click="updateShowDateSelect(true)" :class="{'auto-font':getStrLeng(dateSelect.checkWayName)}">{{dateSelect.checkWayName}}<i class="iconfont icon-sanjiaoxing"></i></span>
      <span v-if="activeTab==2" @click="updateShowMyBrandSelect(true)" :class="{'auto-font':getStrLeng(dateSelect.checkWayName)}">品牌<i class="iconfont icon-sanjiaoxing"></i></span>
      <span v-if="activeTab==3" @click="updateShowMyCarSelect(true)" :class="{'auto-font':getStrLeng(dateSelect.checkWayName)}">车系<i class="iconfont icon-sanjiaoxing"></i></span>
    </div>
  </div>
</template>
<script>
// 注册全局变量Calendar
import Vue from 'vue'
import Calendar from "./PickerTime/modules/index"
Vue.use(Calendar);

import { mapState, mapActions } from 'vuex'
import PublicMethods from '@/utils/PublicMethods'
import Echart from '@/components/Echart'
export default {
  name: 'MyTab',
  data() {
    return {
      // active: 1
    }
  },
  props:['tabType'],
  components: {
    Echart
  },
  methods: {
    ...mapActions(['updateStockDateSelect','updateShowDateSelect', 'updateShowMyBrandSelect', 'updateShowMyCarSelect','updateActiveTab']),
    getStrLeng(str) {
      //数据长度与字符串最大长度比较
      if (PublicMethods.getStrLeng(str) >= PublicMethods.setScalMaxLength) {
        return true
      } else {
        return false
      }
    },
     setDate() {
      let _this = this; //改变全局变量中this的指向
      this.$calendar.show({
        year: [PublicMethods.getCurYear()-1, PublicMethods.getCurYear()], //年份的范围,如果初始化的年份不在这个范围，会自动选最小的年份
        month:[1,12],
        endTime:PublicMethods.getCurDay(),  //终止的日期，这个要在year的范围里面，不然没用
        date1:'没有下一步',
        onOk(time) {
          _this.updateStockDateSelect( _this.computedTime(time));
        },
      });
      // this.close();
    },
    computedTime(val){
      let date = [];
      let newDate =[];
      date = val.split('-');
      date.forEach((x,index)=>{
        newDate.push(PublicMethods.formatZero(x));
      })
      newDate = newDate.join('-');
      newDate = newDate.substring(0,7);
      return newDate;
    }
  },
  computed: {
    ...mapState({
      dateSelect: state => state.dateSelect,
      activeTab: state => state.activeTab,
      stockDateSelect:state => state.stockDateSelect,
    }),
  }
}

</script>

<style lang="less" scoped>
@import '../styles/var';
.fixed {
  position: fixed;
  width: 100%;
  top: 50px;
  z-index: 1;
  background: #fff;
  .change-tab {
    background-color: @while;
    text-align: center;
    height: 44px;
    line-height: 44px;
    width: 100%;
    border-bottom: 1px solid @borderColor;
    .tab {
      margin: 0 35px;
      span {
        display: inline-block;
        height: 100%;
        &.active {
          border-bottom: 2px solid @themeColor;
          color: @themeColor;
        }
      }
    }
  }
}

.select {
  margin: 15px;
  span {
    border: 1px solid @borderColor;
    display: inline-block;
    line-height: 35px;
    text-indent: 10px;
    border-radius: 44px;
    .icon-sanjiaoxing {
      padding-left: 10px;
      padding-right: 10px;
    }
    +span {
      margin-left: 10px;
    }
  }
}

.auto-font {
  font-size: @tinySize;
}

</style>