<template>
  <div>
    <MyTable :tableData="tableData"></MyTable>
  </div>
</template>
<script>
import api from '@/api/api.js'
import { mapState } from 'vuex'
import DealWithData from '@/utils/DealWithData'
import MyTable from '@/components/MyTable'
export default {
  name: 'indexInsurance',
  data() {
    return {
      tableData: [{
        head: true,
        busName: '数据',
        dayAdd: '日新增',
        monthAdd: '月累计',
        monthRate: '达成率',
        yearAdd: '年累计',
        yearRate: '达成率',
        isCount:false,
        more: 0
      }]
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
      if (this.GET_INSURANCE_DATA == null) {
        let parmes = DealWithData.indexInParame();
        api.GET_INSURANCE_DATA(parmes).then(res => {
          this.dealData(res);
        })
      }else{
        this.dealData(this.GET_INSURANCE_DATA);
      }
    },
    dealData(res) {
      if (res.status == '0') {
        this.$store.commit('GET_INSURANCE_DATA', res);
        res.data.forEach((x, index) => {
          DealWithData.dealWithIndexData(x);
          this.tableData.push(x);
        })
      } else {
        console.log(res.message);
      }
    }
  },
  computed: {
    ...mapState({
      GET_INSURANCE_DATA: state => state.GET_INSURANCE_DATA,
    }),
  }
}

</script>
