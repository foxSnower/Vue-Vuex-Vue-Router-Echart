<template>
  <publicStockPage :tableData="computedTableData"></publicStockPage>
</template>
<script>
import api from '@/api/api.js'
import { mapState, mapActions } from 'vuex'
import DealWithData from '@/utils/DealWithData'
import PublicMethods from '@/utils/PublicMethods'
import publicStockPage from '@/pages/publicStockPage'

export default {
  name: 'stockArea',
  data() {
    return {
      tableData: [{
        head: true,
        count: '统计',
        busName: '大区',
        isCount: true,
        more: 0
      }],
    }
  },
  components: {
    publicStockPage
  },
  mounted() {
    this.$nextTick(() => {
      this.loadPage();
    })
  },
  watch: {
    //根据选择的标签页加载不同的数据
    activeTab: function(newVal) {
      this.initParmes(newVal, this.stockDateSelect, this.myBrandSelect, this.myCarSelect);
    },
    stockDateSelect: function(newVal) {
      this.initParmes(this.activeTab, newVal, this.myBrandSelect, this.myCarSelect);
    },
    //选择品牌时触发
    myBrandSelect: function(newVal) {
      this.filterBrand(newVal);
    },
    //选择车系时触发
    myCarSelect: function(newVal) {
      this.filterCar(newVal);
    },
  },
  methods: {
    ...mapActions(['updateActiveTab', 'updateStockDateSelect', 'updateMyBrandSelect']),
    loadPage() {
      this.updateActiveTab(1); //进入此页面，默认按组织查看
      // this.updateStockDateSelect(PublicMethods.getCurMonth()); //进入此页面，默认当前月份查看
      this.initParmes(this.activeTab, this.stockDateSelect, this.myBrandSelect, this.myCarSelect);
    },
    initParmes(tab, stockDateSelect, myBrandSelect, myCarSelect) {
      console.log(1111);
      if (tab == 1) { //1按组织 2按品牌 3按车系
        this.tableData[0].busName = '大区';
        let activeTabNameApi = this.$route.query.pageType; //接口名称
        let storeType = this.$route.query.pageType; //存贮参数
        let parmes = {};
        parmes = DealWithData.stockInParame(); //请求的参数，DealWithData中配置
        delete parmes.brandCode; // 删除brandCode
        delete parmes.seriesCode; // 删除seriesCode
        this.getAPI(parmes, stockDateSelect, activeTabNameApi, storeType);
      } else if (tab == 2) {
        this.tableData[0].busName = '品牌';
        let activeTabNameApi = this.$route.query.pageType + '_BRAND';
        let storeType = this.$route.query.pageType + '_BRAND';
        let parmes = {};
        parmes = DealWithData.stockInParame(); //请求的参数，DealWithData中配置 
        delete parmes.seriesCode; // 删除seriesCode
        parmes.brandCode = this.computedSelectedBrand(myBrandSelect);
        this.getAPI(parmes, stockDateSelect, activeTabNameApi, storeType);
      } else if (tab == 3) {
        this.tableData[0].busName = '车系';
        let activeTabNameApi = this.$route.query.pageType + '_CAR';
        let storeType = this.$route.query.pageType + '_CAR';
        let parmes = {};
        parmes = DealWithData.stockInParame(); //请求的参数，DealWithData中配置
        delete parmes.brandCode; // 删除brandCode
        parmes.seriesCode = this.computedSelectedBrand(myCarSelect);
        this.getAPI(parmes, stockDateSelect, activeTabNameApi, storeType);
      }
    },
    getAPI(parmes, stockDateSelect, activeTabNameApi, storeType) {
      console.log(activeTabNameApi);
      console.log(parmes);
      console.log(PublicMethods.getCurMonth())
      let getCurMonth = PublicMethods.getCurMonth();
      if (this[storeType] == null || stockDateSelect != getCurMonth) { //state 如果为null 说明第一次进入
        api[activeTabNameApi](parmes).then(res => {
          if (res.status == '0') {
            //选择非当前月份不需要存贮数据
            if (stockDateSelect == getCurMonth ||this[storeType]==null) {
              this.$store.commit(storeType, res.data);
            }
            this.dealData(res.data);
          } else {
            this.tableData.splice(1, 10000);
            console.log(res.message);
          }
        })
      } else {
        this.dealData(this[storeType]);
      }
    },
    dealData(res) {
      this.tableData.splice(1, 10000); //初始化数据
      res.forEach((x, index) => {
        DealWithData.dealWithStockAreaData(x); //处理数据，品牌与车系没有点击事件
        this.tableData.push(x);
      })
    },
    //选择品牌后过滤数据
    filterBrand(myBrandSelect) {
      if (myBrandSelect != null) {
        this.dealData(this.myBrandSelect);
      } else {
        this.initParmes(this.activeTab, myBrandSelect, this.myCarSelect);
      }
    },
    //选择车系后过滤数据
    filterCar(myCarSelect) {
      if (myCarSelect != null) {
        this.dealData(this.myCarSelect);
      } else {
        this.initParmes(this.activeTab, this.myBrandSelect, myCarSelect);
      }
    },
    computedSelectedBrand(myBrandSelect) {
      let brandCode = 'all';
      let codes = [];
      if (myBrandSelect != null) {
        myBrandSelect.forEach((x, index) => {
          codes.push(x.code);
        })
      } else {
        codes = ['all'];
      }
      brandCode = codes.join(',');
      return brandCode
    },
    computedSelectedCar(myCarSelect) {
      let seriesCode = 'all';
      let codes = [];
      if (myCarSelect != null) {
        myCarSelect.forEach((x, index) => {
          codes.push(x.code);
        })
      } else {
        codes = ['all'];
      }
      seriesCode = codes.join(',');
      return seriesCode
    }
  },
  computed: {
    //activeTab页签
    ...mapState({
      activeTab: state => state.activeTab,
      stockDateSelect: state => state.stockDateSelect,
      myBrandSelect: state => state.myBrandSelect,
      myCarSelect: state => state.myCarSelect,

      STOCK_ZAIKU_AREA: state => state.STOCK_ZAIKU_AREA,
      STOCK_ZAITU_AREA: state => state.STOCK_ZAITU_AREA,
      STOCK_KEGONGXIAO_AREA: state => state.STOCK_KEGONGXIAO_AREA,
      STOCK_ZAIKUJIN_AREA: state => state.STOCK_ZAIKUJIN_AREA,

      STOCK_ZAIKU_AREA_BRAND: state => state.STOCK_ZAIKU_AREA_BRAND,
      STOCK_ZAITU_AREA_BRAND: state => state.STOCK_ZAITU_AREA_BRAND,
      STOCK_KEGONGXIAO_BRAND: state => state.STOCK_KEGONGXIAO_BRAND,
      STOCK_ZAIKUJIN_AREA_BRAND: state => state.STOCK_ZAIKUJIN_AREA_BRAND,

      STOCK_ZAIKU_AREA_CAR: state => state.STOCK_ZAIKU_AREA_CAR,
      STOCK_ZAITU_AREA_CAR: state => state.STOCK_ZAITU_AREA_CAR,
      STOCK_KEGONGXIAO_AREA_CAR: state => state.STOCK_KEGONGXIAO_AREA_CAR,
      STOCK_ZAIKUJIN_AREA_CAR: state => state.STOCK_ZAIKUJIN_AREA_CAR,
    }),
    // //增加区域内链接属性
    computedTableData() {
      let tableData = this.tableData;
      tableData.forEach((x, index) => {
        x.link = './stockLittleArea';
        x.pageType = this.$route.query.pageType;
      })
      return tableData
    }
  }
}

</script>
