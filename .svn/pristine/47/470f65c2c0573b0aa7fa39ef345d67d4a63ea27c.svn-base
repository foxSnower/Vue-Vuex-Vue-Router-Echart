<template>
  <div>
    <Panel></Panel>
    <router-view/>
    <BottomTab></BottomTab>
    <MySlideLeft></MySlideLeft>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import PublicMethods from '@/utils/PublicMethods'
import Panel from '@/components/Panel'
import MyTable from '@/components/MyTable'
import BottomTab from '@/components/BottomTab'
import MySlideLeft from '@/components/MySlideLeft'
export default {
  name: 'index',
  components: {
    Panel,
    MyTable,
    BottomTab,
    MySlideLeft
  },
  methods: {
    ...mapActions(['updateDateSelect','updateStockDateSelect','updateMyBrandSelect','updateMyCarSelect']),
  },
  mounted() {
    //每次退出至首页后，清除DateSelect、stockDateSelect、MyBrandSelect、MyCarSelect的数据
    this.updateDateSelect({
      checkWayName: '月累计',
      checkWay: '2', //2、日新增2、月累计2、年累计4、其他时间段
      startTime: '',
      endTime: ''
    });
    this.updateStockDateSelect(PublicMethods.getCurMonth());
    this.updateMyBrandSelect(null);
    this.updateMyCarSelect(null);
  }
}

</script>
