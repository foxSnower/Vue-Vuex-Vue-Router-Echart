<template>
  <publicPage :tableData="computedTableData"></publicPage>
</template>
<script>
import api from '@/api/api.js'
import { mapState, mapActions } from 'vuex'
import DealWithData from '@/utils/DealWithData'
import publicPage from '@/pages/publicPage'

export default {
  name: 'insuranceTinyArea',//==================
  data() {
    return {
      tableData: [{
        head: true,
        busName: '4S店',//==================
        dayAdd: '日新增',
        monthAdd: '月累计',
        monthRate: '达成率',
        yearAdd: '年累计',
        yearRate: '达成率',
        count: '统计',
        isCount: false,
        more: 0
      }],
      activeTabNameApi: this.$route.query.pageType //获取当前标签页的aPI接口名称，用于区分存贮数据
    }
  },
  components: {
    publicPage
  },
  mounted() {
    this.$nextTick(() => {
      this.loadPage();
    })
  },
  watch: {
    //根据选择的标签页加载不同的数据
    activeTab: function(newVal) {
      this.initParmes(newVal, this.dateSelect.checkWay, this.myBrandSelect, this.myCarSelect);
    },
    //选择其他时间段时触发
    dateSelect: function(newVal) {
      if (newVal.checkWay == '4') {
        this.initParmes(this.activeTab, newVal.checkWay, this.myBrandSelect, this.myCarSelect); //监听是否选择的是选择其他时间段，另做处理
      }
    },
    //选择品牌时触发
    myBrandSelect: function(newVal) {
      // this.initParmes(this.activeTab,this.dateSelect.checkWay, newVal, this.myCarSelect);
      this.filterBrand(newVal, this.dateSelect.checkWay);
    },
    //选择车系时触发
    myCarSelect: function(newVal) {
      // this.initParmes(this.activeTab,this.dateSelect.checkWay, newVal, this.myCarSelect);
      this.filterCar(newVal, this.dateSelect.checkWay);
    },
  },
  methods: {
    ...mapActions(['updateActiveTab', 'updateDateSelect', 'updateMyBrandSelect']),
    loadPage() {
      this.updateActiveTab(1); //进入此页面，默认按组织查看
      // this.updateDateSelect({ //进入此页面，默认按月累计查看
      //   checkWayName: '月累计',
      //   checkWay: '2', //2、日新增2、月累计2、年累计4、其他时间段
      //   startTime: '',
      //   endTime: ''
      // });
      this.initParmes(this.activeTab, this.dateSelect.checkWay, this.myBrandSelect, this.myCarSelect);
    },
    initParmes(tab, checkWay, myBrandSelect, myCarSelect) {
      console.log(333);
      if (tab == 1) { //1按组织 2按品牌 3按车系
      	this.tableData[0].busName = '4S店';//===================================
        let activeTabNameApi = this.$route.query.pageType; //接口名称
        let storeType = this.$route.query.pageType + '_TINY'; //存贮参数===========================
        let orgParmes = {};
        orgParmes = DealWithData.areaOrgInParame(); //请求的参数，DealWithData中配置
        delete orgParmes.orgId; // 删除orgId
        orgParmes.orgType = '4'; //====================1 集团 2大区 3 小区 4 4s店
        orgParmes.orgCode = this.$route.query.orgCode;//====================
        orgParmes.startTime = this.dateSelect.startTime;
        orgParmes.endTime = this.dateSelect.endTime;
        orgParmes.checkWay = this.dateSelect.checkWay;
        this.getAPI(orgParmes, checkWay, activeTabNameApi, storeType);
      } else if (tab == 2) {
      	this.tableData[0].busName = '品牌';
        let activeTabNameApi = this.$route.query.pageType + '_BRAND';
        let storeType = this.$route.query.pageType + '_BRAND';
        let brandParmes = {};
        brandParmes = DealWithData.areaBrandInParame(); //请求的参数，DealWithData中配置
        brandParmes.startTime = this.dateSelect.startTime;
        brandParmes.endTime = this.dateSelect.endTime;
        brandParmes.checkWay = this.dateSelect.checkWay;
        if (checkWay == '4') {
          //计算当前已选择的品牌
          brandParmes.brandCode = this.computedSelectedBrand(myBrandSelect);
        }
        this.getAPI(brandParmes, checkWay, activeTabNameApi, storeType);
      } else if (tab == 3) {
      	this.tableData[0].busName = '车系';
        let activeTabNameApi = this.$route.query.pageType + '_CAR';
        let storeType = this.$route.query.pageType + '_CAR';
        let carParmes = {};
        carParmes = DealWithData.areaCarInParame(); //请求的参数，DealWithData中配置
        carParmes.startTime = this.dateSelect.startTime;
        carParmes.endTime = this.dateSelect.endTime;
        carParmes.checkWay = this.dateSelect.checkWay;
        if (checkWay == '4') {
          //计算当前已选择的品牌
          carParmes.seriesCode = this.computedSelectedCar(myCarSelect);
        }
        this.getAPI(carParmes, checkWay, activeTabNameApi, storeType);
      }
    },
    getAPI(parmes, checkWay, activeTabNameApi, storeType) {
    	if (checkWay != '4') {
        parmes.startTime = '';
        parmes.endTime = '';
      }
      console.log(activeTabNameApi);
      console.log(parmes);
      // debugger
      if (this[storeType] == null || checkWay == '4') { //state 如果为null 说明第一次进入， checkWay == '4' 选择时间段请求后台数据
        api[activeTabNameApi](parmes).then(res => {
          if (res.status == '0') {
            //选择时间段的不需要存贮数据
            if (checkWay != '4') {
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
        DealWithData.dealWithSaleAreaData(x); //处理数据，品牌与车系没有点击事件
        this.tableData.push(x);
      })
    },
    //选择品牌后过滤数据
    filterBrand(myBrandSelect, checkWay) {
      //如果checkWay不等于4就可以读取存贮的数据，如果等于4,重新加载数据
      if (myBrandSelect != null && checkWay != '4') {
        this.dealData(this.myBrandSelect);
      } else {
        this.initParmes(this.activeTab, checkWay, myBrandSelect, this.myCarSelect);
      }
    },
    //选择车系后过滤数据
    filterCar(myCarSelect, checkWay) {
      //如果checkWay不等于4就可以读取存贮的数据，如果等于4,重新加载数据
      if (myCarSelect != null && checkWay != '4') {
        this.dealData(this.myCarSelect);
      } else {
        this.initParmes(this.activeTab, checkWay, this.myBrandSelect, myCarSelect);
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
    //===================================
    ...mapState({
      activeTab: state => state.activeTab,
      dateSelect: state => state.dateSelect,
      myBrandSelect: state => state.myBrandSelect,
      myCarSelect: state => state.myCarSelect,

    
      INSURANCE_XINBAOTAI_AREA_TINY: state => state.INSURANCE_XINBAOTAI_AREA_TINY,
      INSURANCE_XINBAOJIN_AREA_TINY: state => state.INSURANCE_XINBAOJIN_AREA_TINY,
      INSURANCE_XUBAOTAI_AREA_TINY: state => state.INSURANCE_XUBAOTAI_AREA_TINY,
      INSURANCE_XUBAOJIN_AREA_TINY: state => state.INSURANCE_XUBAOJIN_AREA_TINY,

      INSURANCE_XINBAOTAI_AREA_BRAND: state => state.INSURANCE_XINBAOTAI_AREA_BRAND,
      INSURANCE_XINBAOJIN_AREA_BRAND: state => state.INSURANCE_XINBAOJIN_AREA_BRAND,
      INSURANCE_XUBAOTAI_AREA_BRAND: state => state.INSURANCE_XUBAOTAI_AREA_BRAND,
      INSURANCE_XUBAOJIN_AREA_BRAND: state => state.INSURANCE_XUBAOJIN_AREA_BRAND,

      INSURANCE_XINBAOTAI_AREA_CAR: state => state.INSURANCE_XINBAOTAI_AREA_CAR,
      INSURANCE_XINBAOJIN_AREA_CAR: state => state.INSURANCE_XINBAOJIN_AREA_CAR,
      INSURANCE_XUBAOTAI_AREA_CAR: state => state.INSURANCE_XUBAOTAI_AREA_CAR,
      INSURANCE_XUBAOJIN_AREA_CAR: state => state.INSURANCE_XUBAOJIN_AREA_CAR,

    }),
    // //增加区域内链接属性
    computedTableData() {
      let tableData = this.tableData;
      tableData.forEach((x, index) => {
        x.more = 0; //没有更多了//===================
      })
      return tableData
    }
  }
}

</script>
