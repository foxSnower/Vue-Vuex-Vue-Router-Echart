<template>
  <div class="f-flex tr" :class="{head:TrData.head!=null}" @click="linkTo()">
    <!-- tableHead -->
    <template v-if="TrData.head!=null">
      <div class="lable">{{TrData.busName}}</div>
      <!-- 4列数据 -->
      <template v-if="!TrData.isCount">
        <div class="f-item">
          <p :class="{'font-scale':getStrLeng(TrData.dayAdd)}">{{TrData.dayAdd}}</p>
        </div>
        <div class="f-item">
          <p :class="{'font-scale':getStrLeng(TrData.monthAdd)}">{{TrData.monthAdd}}</p><span class="tips">{{TrData.monthRate}}</span></div>
        <div class="f-item">
          <p :class="{'font-scale':getStrLeng(TrData.yearAdd)}">{{TrData.yearAdd}}</p><span class="tips">{{TrData.yearRate}}</span>
        </div>
        <i class="iconfont icon-gengduo transparent"></i>
      </template>
      <!-- 2列数据 -->
      <template v-else>
        <div class="f-item f-txt-right">{{TrData.count}}</div>
        <i class="iconfont icon-gengduo transparent"></i>
      </template>
    </template>
    <!-- tableBody -->
    <template v-else>
      <div class="lable" :class="{'auto-font':getStrLeng(TrData.busName||TrData.name)}"><span class="point" :style="{backgroundColor:colors[index-1]}"></span>{{TrData.busName||TrData.name}}</div>
      <!-- 4列数据 -->
      <template v-if="!TrData.isCount">
        <div class="f-item">
          <p :class="{'auto-font':getStrLeng(TrData.dayAdd)}">{{TrData.dayAdd}}</p>
        </div>
        <div class="f-item">
          <p :class="{'auto-font':getStrLeng(TrData.monthAdd)}">{{TrData.monthAdd}}</p><span class="tips" :class="{red:parseFloat(TrData.monthRate/10)>=1}">{{parseFloat(TrData.monthRate)*10+'%'}}</span></div>
        <div class="f-item">
          <p :class="{'auto-font':getStrLeng(TrData.yearAdd)}">{{TrData.yearAdd}}</p><span class="tips" :class="{red:parseFloat(TrData.yearRate/10)>=1}">{{parseFloat(TrData.yearRate*10)+'%'}}</span>
        </div>
        <i class="iconfont icon-gengduo" :class="{transparent:TrData.more==0}"></i>
      </template>
      <!-- 2列数据 -->
      <template v-else>
        <div class="f-item f-txt-right">{{TrData.count}}</div>
        <i class="iconfont icon-gengduo" :class="{transparent:TrData.more==0}"></i>
      </template>
    </template>
  </div>
</template>
<script>
import PublicMethods from '@/utils/PublicMethods'
export default {
  name: 'MyTableTr',
  data() {
    return {
      colors: ['#ff797a', '#ffb55e', '#21dacf', '#51acff', '#d376ff', '#ff797a', '#ffb55e', '#21dacf', '#51acff'] //点的颜色
    }
  },
  props: ['tableData', 'index'],
  mounted() {
    console.log();
  },
  methods: {
    linkTo() {
      //首页进入页面才有pageType
      let url = this.TrData.link; //链接
      let isHead = this.TrData.head != null; //是表格标题
      let isMore = this.TrData.more != 0; //有更多
      let pageType = this.TrData.pageType; //页面类型
      let orgCode = this.TrData.code; //小区 ，4s店需要
      let orgCodeInfo = '';
      if (orgCode != null) {
        orgCodeInfo = '&orgCode=' + orgCode;
      }
      console.log(url + isHead + isMore + pageType + orgCode)
      if (url != null && !isHead && isMore && pageType != null) {
        this.$router.push(url + '?pageType=' + pageType + orgCodeInfo);
      }
    },
    getStrLeng(str) {
      //数据长度与设置的长度比较
      if (str != null && str != '') {
        if (PublicMethods.getStrLeng(str) >= PublicMethods.setScalMaxLength) {
          return true
        } else {
          return false
        }
      }
    }
  },
  computed: {
    TrData() {
      return this.tableData
    }
  }
}

</script>
<style lang="less" scoped="scoped">
@import '../styles/var';

.table {
  font-size: @normalSize;
  border-top: 1px solid @borderColor;
  border-bottom: 1px solid @borderColor;
  .tr {
    position: relative;
    +.tr:before {
      .setTopLine();
    }
    >div {
      padding: 20px 0;
    }
    .tips {
      position: absolute;
      bottom: 5px;
      font-size: @tinySize;
      color: @gray;
      width: 100%;
      left: 0;
      &.red {
        color: #ff8d8e;
      }
    }
    .lable {
      width: 9rem;
      text-align: left;
      padding-left: 10px;
      .point {
        width: 10px;
        height: 10px;
        border-radius: 10px;
        background-color: orange;
        display: inline-block;
        margin-right: 10px;
      }
    }
    .icon-gengduo {
      padding-right: 10px;
      color: @borderColor;
      &.transparent {
        color: transparent;
      }
    }
  }
  .head {
    .lable {
      padding-left: 30px;
      width: 80px;
    }
    background-color: #f7f7f7;
    color: @lighterColor;
    >div {
      padding: 10px 0 15px;
      .tips {
        bottom: 0;
      }
    }
  }
}

</style>
