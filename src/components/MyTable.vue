<template>
  <div class="table" :class="{'no-bottom-line':noData}">
    <MyTableTr v-for="(x,index) in tableData" :key="index" :tableData="x" :index="index"></MyTableTr>
    <div class="tips" v-if="noData">暂无数据</div>
  </div>
</template>
<script>
import MyTableTr from '@/components/MyTableTr'
export default {
  name: 'MyTable',
  components: {
    MyTableTr
  },
  props: ['tableData'],
  computed:{
    noData(){
      if(this.tableData.length<=1){
        return true
      }else{
        return false
      }
    }
  }
}

</script>
<style lang="less" scoped="scoped">
@import '../styles/var';
.table {
  font-size: @normalSize;
  position: relative;
  &:before {
    .setTopLine();
  }
  &:after {
    .setBottomLine();
  }
  &.no-bottom-line:after{
    border-bottom: 1px solid transparent;
    color: transparent;
  }
  .tips {
    margin-top:50px;
    text-align: center;
    font-size: @littleSize;
    color: @lighterColor;
  }
}

</style>
