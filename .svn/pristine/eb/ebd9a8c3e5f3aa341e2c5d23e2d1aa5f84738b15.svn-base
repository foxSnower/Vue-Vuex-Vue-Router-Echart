<template>
  <div>
    <MyTable :tableData="tableData1"></MyTable>
    <div class="line"></div>
    <MyTable :tableData="tableData2"></MyTable>
  </div>
</template>
<script>
import api from '@/api/api.js'
import { mapState } from 'vuex'
import DealWithData from '@/utils/DealWithData'
import MyTable from '@/components/MyTable'
export default {
  name: 'indexService',
  data() {
    return {
      tableData1: [{
        head: true,
        busName: '数据',
        dayAdd: '日新增',
        monthAdd: '月累计',
        monthRate: '达成率',
        yearAdd: '年累计',
        yearRate: '达成率',
        isCount: false,
        more: 0
      }],
      tableData2: []
    }
  },
  components: {
    MyTable,
  },
  mounted() {
    this.$nextTick(() => {
      this.loadPage();
    })
  },
  methods: {
    loadPage() {
      if (this.GET_SERVICE_DATA == null) {
        let parmes = DealWithData.indexInParame();
        api.GET_SERVICE_DATA(parmes).then(res => {
          this.dealData(res);
        })
      } else {
        this.dealData(this.GET_SERVICE_DATA);
      }
    },
    dealData(res) {
      if (res.status == '0') {
        this.$store.commit('GET_SERVICE_DATA', res);
        res.data.forEach((x, index) => {
          DealWithData.dealWithIndexData(x);
          //售后区别4列 和2列的数据
          if (x.busName == '保有客户' || x.busName == '备件库存金额') {
            x.isCount = true;
          } else {
            x.isCount = false;
          }
          if (!x.isCount) {
            this.tableData1.push(x);
          } else {
            this.tableData2.push(x);
          }
        })
      } else {
        console.log(res.message);
      }
    }
  },
  computed: {
    ...mapState({
      GET_SERVICE_DATA: state => state.GET_SERVICE_DATA,
    }),
  }
}

</script>
