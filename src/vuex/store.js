import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import PublicMethods from '@/utils/PublicMethods'

const initState = {
  toast: { showToast: false, title: '' },
  isLoading: false,
  refreshTime: '',
  direction: 'forward',

  activeTab: 1,
  loginInfo: null,

  showMySlideLeft: false,
  showDateSelect: false,
  showMyBrandSelect: false,
  showMyCarSelect: false,
  showStockDateSelect: false,

  dateSelect: {
    checkWayName: '月累计',
    checkWay: '2', //2、日新增2、月累计2、年累计4、其他时间段
    startTime: '',
    endTime: ''
  },
  myBrandSelect: null,
  myCarSelect: null,

  stockDateSelect: PublicMethods.getCurMonth(), //库存的时间选择

  noneObject: {
    show: false,
    text: ''
  },
  //数据存贮
  GET_SAlE_DATA: null, //销售
  GET_STOCK_DATA: null, //库存
  GET_SERVICE_DATA: null, //售后
  GET_INSURANCE_DATA: null, //保险

  GET_BRAND: null, //品牌
  GET_CAR: null, //车系
  /**
   * [SALE 销售]
   * @type {[type]}
   */
  SALE_XIANSUO_AREA: null, //线索区
  SALE_LAIDIAN_AREA: null, //来店区
  SALE_YIXIANG_AREA: null, //意向区
  SALE_DINGDAN_AREA: null, //订单区
  SALE_KAIPIAO_AREA: null, //开票区
  SALE_JIAOCHE_AREA: null, //交车区
  SALE_TICHE_AREA: null, //提车区
  SALE_TICHEJIN_AREA: null, //提车金额区
  SALE_DINGDANJIN_AREA: null, //订单金额区
  SALE_KAIPIAOJIN_AREA: null, //开票金额区

  SALE_XIANSUO_AREA_LITTLE: null, //线索区-小区
  SALE_LAIDIAN_AREA_LITTLE: null, //来店区-小区
  SALE_YIXIANG_AREA_LITTLE: null, //意向区-小区
  SALE_DINGDAN_AREA_LITTLE: null, //订单区-小区
  SALE_KAIPIAO_AREA_LITTLE: null, //开票区-小区
  SALE_JIAOCHE_AREA_LITTLE: null, //交车区-小区
  SALE_TICHE_AREA_LITTLE: null, //提车区-小区
  SALE_TICHEJIN_AREA_LITTLE: null, //提车金额区-小区
  SALE_DINGDANJIN_AREA_LITTLE: null, //订单金额区-小区
  SALE_KAIPIAOJIN_AREA_LITTLE: null, //开票金额区-小区

  SALE_XIANSUO_AREA_TINY: null, //线索区-小区
  SALE_LAIDIAN_AREA_TINY: null, //来店区-小区
  SALE_YIXIANG_AREA_TINY: null, //意向区-小区
  SALE_DINGDAN_AREA_TINY: null, //订单区-小区
  SALE_KAIPIAO_AREA_TINY: null, //开票区-小区
  SALE_JIAOCHE_AREA_TINY: null, //交车区-小区
  SALE_TICHE_AREA_TINY: null, //提车区-小区
  SALE_TICHEJIN_AREA_TINY: null, //提车金额区-小区
  SALE_DINGDANJIN_AREA_TINY: null, //订单金额区-小区
  SALE_KAIPIAOJIN_AREA_TINY: null, //开票金额区-小区

  SALE_XIANSUO_AREA_BRAND: null, //品牌——线索区
  SALE_LAIDIAN_AREA_BRAND: null, //品牌——来店区
  SALE_YIXIANG_AREA_BRAND: null, //品牌——意向区
  SALE_DINGDAN_AREA_BRAND: null, //品牌——订单区
  SALE_KAIPIAO_AREA_BRAND: null, //品牌——开票区
  SALE_JIAOCHE_AREA_BRAND: null, //品牌——交车区
  SALE_TICHE_AREA_BRAND: null, //品牌——提车区
  SALE_TICHEJIN_AREA_BRAND: null, //品牌——提车金额区
  SALE_DINGDANJIN_AREA_BRAND: null, //品牌——订单金额区
  SALE_KAIPIAOJIN_AREA_BRAND: null, //品牌——开票金额区

  SALE_XIANSUO_AREA_CAR: null, //车系——线索区
  SALE_LAIDIAN_AREA_CAR: null, //车系——来店区
  SALE_YIXIANG_AREA_CAR: null, //车系——意向区
  SALE_DINGDAN_AREA_CAR: null, //车系——订单区
  SALE_KAIPIAO_AREA_CAR: null, //车系——开票区
  SALE_JIAOCHE_AREA_CAR: null, //车系——交车区
  SALE_TICHE_AREA_CAR: null, //车系——提车区
  SALE_TICHEJIN_AREA_CAR: null, //车系——提车金额区
  SALE_DINGDANJIN_AREA_CAR: null, //车系——订单金额区
  SALE_KAIPIAOJIN_AREA_CAR: null, //车系——开票金额区
  /**
   * [STOCK 库存]
   * @type {[type]}
   */
  STOCK_ZAIKU_AREA: null, //在库
  STOCK_ZAITU_AREA: null, //在途
  STOCK_KEGONGXIAO_AREA: null, //可供销
  STOCK_ZAIKUJIN_AREA: null, //在库金额

  STOCK_ZAIKU_AREA_TITTLE: null, //在库=小区
  STOCK_ZAITU_AREA_TITTLE: null, //在途=小区
  STOCK_KEGONGXIAO_AREA_TITTLE: null, //可供销=小区
  STOCK_ZAIKUJIN_AREA_TITTLE: null, //在库金额=小区

  STOCK_ZAIKU_AREA_TINY: null, //在库=4S店
  STOCK_ZAITU_AREA_TINY: null, //在途=4S店
  STOCK_KEGONGXIAO_AREA_TINY: null, //可供销=4S店
  STOCK_ZAIKUJIN_AREA_TINY: null, //在库金额=4S店

  STOCK_ZAIKU_AREA_BRAND: null, //在库-品牌
  STOCK_ZAITU_AREA_BRAND: null, //在途-品牌
  STOCK_KEGONGXIAO_AREA_BRAND: null, //可供销-品牌
  STOCK_ZAIKUJIN_AREA_BRAND: null, //在库金额-品牌

  STOCK_ZAIKU_AREA_CAR: null, //在库-车系
  STOCK_ZAITU_AREA_CAR: null, //在途-车系
  STOCK_KEGONGXIAO_AREA_CAR: null, //可供销-车系
  STOCK_ZAIKUJIN_AREA_CAR: null, //在库金额-车系

  /**
   * SERVICE售后
   */
  SERVICE_YINGSHOU_AREA: null, //营收-大区
  SERVICE_HUICHANTAI_AREA: null, //回厂台次-大区
  SERVICE_GONGDANSHU_AREA: null, //工单数-大区
  SERVICE_BEIJIANDINGJIN_AREA: null, //备件订单金额-大区
  SERVICE_BAOYOUKEHU_AREA: null, //保有客户-大区
  SERVICE_BEIJIANKUJIN_AREA: null, //备件库存金额-大区

  SERVICE_YINGSHOU_AREA_LITTLE: null, //营收-小区
  SERVICE_HUICHANTAI_AREA_LITTLE: null, //回厂台次-小区
  SERVICE_GONGDANSHU_AREA_LITTLE: null, //工单数-小区
  SERVICE_BEIJIANDINGJIN_AREA_LITTLE: null, //备件订单金额-小区
  SERVICE_BAOYOUKEHU_AREA_LITTLE: null, //保有客户-小区
  SERVICE_BEIJIANKUJIN_AREA_LITTLE: null, //备件库存金额-小区

  SERVICE_YINGSHOU_AREA_TINY: null, //营收-4S店
  SERVICE_HUICHANTAI_AREA_TINY: null, //回厂台次-4S店
  SERVICE_GONGDANSHU_AREA_TINY: null, //工单数-4S店
  SERVICE_BEIJIANDINGJIN_AREA_TINY: null, //备件订单金额-4S店
  SERVICE_BAOYOUKEHU_AREA_TINY: null, //保有客户-4S店
  SERVICE_BEIJIANKUJIN_AREA_TINY: null, //备件库存金额-4S店

  SERVICE_YINGSHOU_AREA_BRAND: null, //营收-品牌
  SERVICE_HUICHANTAI_AREA_BRAND: null, //回厂台次-品牌
  SERVICE_GONGDANSHU_AREA_BRAND: null, //工单数-品牌
  SERVICE_BEIJIANDINGJIN_AREA_BRAND: null, //备件订单金额-品牌
  SERVICE_BAOYOUKEHU_AREA_BRAND: null, //保有客户-品牌
  SERVICE_BEIJIANKUJIN_AREA_BRAND: null, //备件库存金额-品牌

  SERVICE_YINGSHOU_AREA_CAR: null, //营收-车系
  SERVICE_HUICHANTAI_AREA_CAR: null, //回厂台次-车系
  SERVICE_GONGDANSHU_AREA_CAR: null, //工单数-车系
  SERVICE_BEIJIANDINGJIN_AREA_CAR: null, //备件订单金额-车系
  SERVICE_BAOYOUKEHU_AREA_CAR: null, //保有客户-车系
  SERVICE_BEIJIANKUJIN_AREA_CAR: null, //备件库存金额-车系

  /**
   * INSURANCE保险
   */
  INSURANCE_XINBAOTAI_AREA: null, //保险-大区
  INSURANCE_XINBAOJIN_AREA: null, //在库-大区
  INSURANCE_XUBAOTAI_AREA: null, //在途-大区
  INSURANCE_XUBAOJIN_AREA: null, //可供销-大区

  INSURANCE_XINBAOTAI_AREA_LITTLE: null, //保险-小区
  INSURANCE_XINBAOJIN_AREA_LITTLE: null, //在库-小区
  INSURANCE_XUBAOTAI_AREA_LITTLE: null, //在途-小区
  INSURANCE_XUBAOJIN_AREA_LITTLE: null, //可供销-小区

  INSURANCE_XINBAOTAI_AREA_TINY: null, //保险-4S店
  INSURANCE_XINBAOJIN_AREA_TINY: null, //在库-4S店
  INSURANCE_XUBAOTAI_AREA_TINY: null, //在途-4S店
  INSURANCE_XUBAOJIN_AREA_TINY: null, //可供销-4S店

  INSURANCE_XINBAOTAI_AREA_BRAND: null, //保险-品牌
  INSURANCE_XINBAOJIN_AREA_BRAND: null, //在库-品牌
  INSURANCE_XUBAOTAI_AREA_BRAND: null, //在途-品牌
  INSURANCE_XUBAOJIN_AREA_BRAND: null, //可供销-品牌

  INSURANCE_XINBAOTAI_AREA_CAR: null, //保险-车系
  INSURANCE_XINBAOJIN_AREA_CAR: null, //在库-车系
  INSURANCE_XUBAOTAI_AREA_CAR: null, //在途-车系
  INSURANCE_XUBAOJIN_AREA_CAR: null, //可供销-车系
}
/**
 * [state 全局变量的初始值]
 * @type {Object}
 */
const state = initState;
/**
 * [mutations 这里写的是全局变量发生变化后取代原来的值]
 * @type {Object}
 */
const mutations = {

  loginInfo(state, payload) { state.loginInfo = payload.loginInfo },

  updateToast(state, payload) { state.toast = payload.toast },
  updateLoading(state, payload) { state.isLoading = payload.isLoading },
  updateRefreshTime(state, payload) { state.refreshTime = payload.refreshTime },

  updateDirection(state, payload) {
    state.direction = payload.direction
  },

  updateActiveTab(state, payload) { state.activeTab = payload.activeTab },
  updateShowMySlideLeft(state, payload) { state.showMySlideLeft = payload.showMySlideLeft },
  updateShowDateSelect(state, payload) { state.showDateSelect = payload.showDateSelect },
  updateShowMyBrandSelect(state, payload) { state.showMyBrandSelect = payload.showMyBrandSelect },
  updateShowMyCarSelect(state, payload) { state.showMyCarSelect = payload.showMyCarSelect },
  updateShowStockDateSelect(state, payload) { state.showStockDateSelect = payload.showStockDateSelect },

  updateDateSelect(state, payload) { state.dateSelect = payload.dateSelect },
  updateMyBrandSelect(state, payload) { state.myBrandSelect = payload.myBrandSelect },
  updateMyCarSelect(state, payload) { state.myCarSelect = payload.myCarSelect },
  updateStockDateSelect(state, payload) { state.stockDateSelect = payload.stockDateSelect },

  GET_SAlE_DATA(state, payload) { state.GET_SAlE_DATA = payload },
  GET_STOCK_DATA(state, payload) { state.GET_STOCK_DATA = payload },
  GET_SERVICE_DATA(state, payload) { state.GET_SERVICE_DATA = payload },
  GET_INSURANCE_DATA(state, payload) { state.GET_INSURANCE_DATA = payload },

  GET_BRAND(state, payload) { state.GET_BRAND = payload },
  GET_CAR(state, payload) { state.GET_CAR = payload },

  SALE_XIANSUO_AREA(state, payload) { state.SALE_XIANSUO_AREA = payload },
  SALE_LAIDIAN_AREA(state, payload) { state.SALE_LAIDIAN_AREA = payload },
  SALE_YIXIANG_AREA(state, payload) { state.SALE_YIXIANG_AREA = payload },
  SALE_DINGDAN_AREA(state, payload) { state.SALE_DINGDAN_AREA = payload },
  SALE_KAIPIAO_AREA(state, payload) { state.SALE_KAIPIAO_AREA = payload },
  SALE_JIAOCHE_AREA(state, payload) { state.SALE_JIAOCHE_AREA = payload },
  SALE_TICHE_AREA(state, payload) { state.SALE_TICHE_AREA = payload },
  SALE_TICHEJIN_AREA(state, payload) { state.SALE_TICHEJIN_AREA = payload },
  SALE_DINGDANJIN_AREA(state, payload) { state.SALE_DINGDANJIN_AREA = payload },
  SALE_KAIPIAOJIN_AREA(state, payload) { state.SALE_KAIPIAOJIN_AREA = payload },

  SALE_XIANSUO_AREA_LITTLE(state, payload) { state.SALE_XIANSUO_AREA_LITTLE = payload },
  SALE_LAIDIAN_AREA_LITTLE(state, payload) { state.SALE_LAIDIAN_AREA_LITTLE = payload },
  SALE_YIXIANG_AREA_LITTLE(state, payload) { state.SALE_YIXIANG_AREA_LITTLE = payload },
  SALE_DINGDAN_AREA_LITTLE(state, payload) { state.SALE_DINGDAN_AREA_LITTLE = payload },
  SALE_KAIPIAO_AREA_LITTLE(state, payload) { state.SALE_KAIPIAO_AREA_LITTLE = payload },
  SALE_JIAOCHE_AREA_LITTLE(state, payload) { state.SALE_JIAOCHE_AREA_LITTLE = payload },
  SALE_TICHE_AREA_LITTLE(state, payload) { state.SALE_TICHE_AREA_LITTLE = payload },
  SALE_TICHEJIN_AREA_LITTLE(state, payload) { state.SALE_TICHEJIN_AREA_LITTLE = payload },
  SALE_DINGDANJIN_AREA_LITTLE(state, payload) { state.SALE_DINGDANJIN_AREA_LITTLE = payload },
  SALE_KAIPIAOJIN_AREA_LITTLE(state, payload) { state.SALE_KAIPIAOJIN_AREA_LITTLE = payload },

  SALE_XIANSUO_AREA_TINY(state, payload) { state.SALE_XIANSUO_AREA_TINY = payload },
  SALE_LAIDIAN_AREA_TINY(state, payload) { state.SALE_LAIDIAN_AREA_TINY = payload },
  SALE_YIXIANG_AREA_TINY(state, payload) { state.SALE_YIXIANG_AREA_TINY = payload },
  SALE_DINGDAN_AREA_TINY(state, payload) { state.SALE_DINGDAN_AREA_TINY = payload },
  SALE_KAIPIAO_AREA_TINY(state, payload) { state.SALE_KAIPIAO_AREA_TINY = payload },
  SALE_JIAOCHE_AREA_TINY(state, payload) { state.SALE_JIAOCHE_AREA_TINY = payload },
  SALE_TICHE_AREA_TINY(state, payload) { state.SALE_TICHE_AREA_TINY = payload },
  SALE_TICHEJIN_AREA_TINY(state, payload) { state.SALE_TICHEJIN_AREA_TINY = payload },
  SALE_DINGDANJIN_AREA_TINY(state, payload) { state.SALE_DINGDANJIN_AREA_TINY = payload },
  SALE_KAIPIAOJIN_AREA_TINY(state, payload) { state.SALE_KAIPIAOJIN_AREA_TINY = payload },

  SALE_XIANSUO_AREA_BRAND(state, payload) { state.SALE_XIANSUO_AREA_BRAND = payload },
  SALE_LAIDIAN_AREA_BRAND(state, payload) { state.SALE_LAIDIAN_AREA_BRAND = payload },
  SALE_YIXIANG_AREA_BRAND(state, payload) { state.SALE_YIXIANG_AREA_BRAND = payload },
  SALE_DINGDAN_AREA_BRAND(state, payload) { state.SALE_DINGDAN_AREA_BRAND = payload },
  SALE_KAIPIAO_AREA_BRAND(state, payload) { state.SALE_KAIPIAO_AREA_BRAND = payload },
  SALE_JIAOCHE_AREA_BRAND(state, payload) { state.SALE_JIAOCHE_AREA_BRAND = payload },
  SALE_TICHE_AREA_BRAND(state, payload) { state.SALE_TICHE_AREA_BRAND = payload },
  SALE_TICHEJIN_AREA_BRAND(state, payload) { state.SALE_TICHEJIN_AREA_BRAND = payload },
  SALE_DINGDANJIN_AREA_BRAND(state, payload) { state.SALE_DINGDANJIN_AREA_BRAND = payload },
  SALE_KAIPIAOJIN_AREA_BRAND(state, payload) { state.SALE_KAIPIAOJIN_AREA_BRAND = payload },

  SALE_XIANSUO_AREA_CAR(state, payload) { state.SALE_XIANSUO_AREA_CAR = payload },
  SALE_LAIDIAN_AREA_CAR(state, payload) { state.SALE_LAIDIAN_AREA_CAR = payload },
  SALE_YIXIANG_AREA_CAR(state, payload) { state.SALE_YIXIANG_AREA_CAR = payload },
  SALE_DINGDAN_AREA_CAR(state, payload) { state.SALE_DINGDAN_AREA_CAR = payload },
  SALE_KAIPIAO_AREA_CAR(state, payload) { state.SALE_KAIPIAO_AREA_CAR = payload },
  SALE_JIAOCHE_AREA_CAR(state, payload) { state.SALE_JIAOCHE_AREA_CAR = payload },
  SALE_TICHE_AREA_CAR(state, payload) { state.SALE_TICHE_AREA_CAR = payload },
  SALE_TICHEJIN_AREA_CAR(state, payload) { state.SALE_TICHEJIN_AREA_CAR = payload },
  SALE_DINGDANJIN_AREA_CAR(state, payload) { state.SALE_DINGDANJIN_AREA_CAR = payload },
  SALE_KAIPIAOJIN_AREA_CAR(state, payload) { state.SALE_KAIPIAOJIN_AREA_CAR = payload },
  /**
   * STOCK 库存
   */
  STOCK_ZAIKU_AREA(state, payload) { state.STOCK_ZAIKU_AREA = payload },
  STOCK_ZAITU_AREA(state, payload) { state.STOCK_ZAITU_AREA = payload },
  STOCK_KEGONGXIAO_AREA(state, payload) { state.STOCK_KEGONGXIAO_AREA = payload },
  STOCK_ZAIKUJIN_AREA(state, payload) { state.STOCK_ZAIKUJIN_AREA = payload },

  STOCK_ZAIKU_AREA_LITTLE(state, payload) { state.STOCK_ZAIKU_AREA_LITTLE = payload },
  STOCK_ZAITU_AREA_LITTLE(state, payload) { state.STOCK_ZAITU_AREA_LITTLE = payload },
  STOCK_KEGONGXIAO_AREA_LITTLE(state, payload) { state.STOCK_KEGONGXIAO_AREA_LITTLE = payload },
  STOCK_ZAIKUJIN_AREA_LITTLE(state, payload) { state.STOCK_ZAIKUJIN_AREA_LITTLE = payload },

  STOCK_ZAIKU_AREA_TINY(state, payload) { state.STOCK_ZAIKU_AREA_TINY = payload },
  STOCK_ZAITU_AREA_TINY(state, payload) { state.STOCK_ZAITU_AREA_TINY = payload },
  STOCK_KEGONGXIAO_AREA_TINY(state, payload) { state.STOCK_KEGONGXIAO_AREA_TINY = payload },
  STOCK_ZAIKUJIN_AREA_TINY(state, payload) { state.STOCK_ZAIKUJIN_AREA_TINY = payload },

  STOCK_ZAIKU_AREA_BRAND(state, payload) { state.STOCK_ZAIKU_AREA_BRAND = payload },
  STOCK_ZAITU_AREA_BRAND(state, payload) { state.STOCK_ZAITU_AREA_BRAND = payload },
  STOCK_KEGONGXIAO_AREA_BRAND(state, payload) { state.STOCK_KEGONGXIAO_AREA_BRAND = payload },
  STOCK_ZAIKUJIN_AREA_BRAND(state, payload) { state.STOCK_ZAIKUJIN_AREA_BRAND = payload },

  STOCK_ZAIKU_AREA_CAR(state, payload) { state.STOCK_ZAIKU_AREA_CAR = payload },
  STOCK_ZAITU_AREA_CAR(state, payload) { state.STOCK_ZAITU_AREA_CAR = payload },
  STOCK_KEGONGXIAO_AREA_CAR(state, payload) { state.STOCK_KEGONGXIAO_AREA_CAR = payload },
  STOCK_ZAIKUJIN_AREA_CAR(state, payload) { state.STOCK_ZAIKUJIN_AREA_CAR = payload },
  /**
   * [SERVICE 售后]
   */
  SERVICE_YINGSHOU_AREA(state, payload) { state.SERVICE_YINGSHOU_AREA = payload },
  SERVICE_HUICHANTAI_AREA(state, payload) { state.SERVICE_HUICHANTAI_AREA = payload },
  SERVICE_GONGDANSHU_AREA(state, payload) { state.SERVICE_GONGDANSHU_AREA = payload },
  SERVICE_BEIJIANDINGJIN_AREA(state, payload) { state.SERVICE_BEIJIANDINGJIN_AREA = payload },
  SERVICE_BAOYOUKEHU_AREA(state, payload) { state.SERVICE_BAOYOUKEHU_AREA = payload },
  SERVICE_BEIJIANKUJIN_AREA(state, payload) { state.SERVICE_BEIJIANKUJIN_AREA = payload },

  SERVICE_YINGSHOU_AREA_LITTLE(state, payload) { state.SERVICE_YINGSHOU_AREA_LITTLE = payload },
  SERVICE_HUICHANTAI_AREA_LITTLE(state, payload) { state.SERVICE_HUICHANTAI_AREA_LITTLE = payload },
  SERVICE_GONGDANSHU_AREA_LITTLE(state, payload) { state.SERVICE_GONGDANSHU_AREA_LITTLE = payload },
  SERVICE_BEIJIANDINGJIN_AREA_LITTLE(state, payload) { state.SERVICE_BEIJIANDINGJIN_AREA_LITTLE = payload },
  SERVICE_BAOYOUKEHU_AREA_LITTLE(state, payload) { state.SERVICE_BAOYOUKEHU_AREA_LITTLE = payload },
  SERVICE_BEIJIANKUJIN_AREA_LITTLE(state, payload) { state.SERVICE_BEIJIANKUJIN_AREA_LITTLE = payload },

  SERVICE_YINGSHOU_AREA_TINY(state, payload) { state.SERVICE_YINGSHOU_AREA_TINY = payload },
  SERVICE_HUICHANTAI_AREA_TINY(state, payload) { state.SERVICE_HUICHANTAI_AREA_TINY = payload },
  SERVICE_GONGDANSHU_AREA_TINY(state, payload) { state.SERVICE_GONGDANSHU_AREA_TINY = payload },
  SERVICE_BEIJIANDINGJIN_AREA_TINY(state, payload) { state.SERVICE_BEIJIANDINGJIN_AREA_TINY = payload },
  SERVICE_BAOYOUKEHU_AREA_TINY(state, payload) { state.SERVICE_BAOYOUKEHU_AREA_TINY = payload },
  SERVICE_BEIJIANKUJIN_AREA_TINY(state, payload) { state.SERVICE_BEIJIANKUJIN_AREA_TINY = payload },

  SERVICE_YINGSHOU_AREA_BRAND(state, payload) { state.SERVICE_YINGSHOU_AREA_BRAND = payload },
  SERVICE_HUICHANTAI_AREA_BRAND(state, payload) { state.SERVICE_HUICHANTAI_AREA_BRAND = payload },
  SERVICE_GONGDANSHU_AREA_BRAND(state, payload) { state.SERVICE_GONGDANSHU_AREA_BRAND = payload },
  SERVICE_BEIJIANDINGJIN_AREA_BRAND(state, payload) { state.SERVICE_BEIJIANDINGJIN_AREA_BRAND = payload },
  SERVICE_BAOYOUKEHU_AREA_BRAND(state, payload) { state.SERVICE_BAOYOUKEHU_AREA_BRAND = payload },
  SERVICE_BEIJIANKUJIN_AREA_BRAND(state, payload) { state.SERVICE_BEIJIANKUJIN_AREA_BRAND = payload },

  SERVICE_YINGSHOU_AREA_CAR(state, payload) { state.SERVICE_YINGSHOU_AREA_CAR = payload },
  SERVICE_HUICHANTAI_AREA_CAR(state, payload) { state.SERVICE_HUICHANTAI_AREA_CAR = payload },
  SERVICE_GONGDANSHU_AREA_CAR(state, payload) { state.SERVICE_GONGDANSHU_AREA_CAR = payload },
  SERVICE_BEIJIANDINGJIN_AREA_CAR(state, payload) { state.SERVICE_BEIJIANDINGJIN_AREA_CAR = payload },
  SERVICE_BAOYOUKEHU_AREA_CAR(state, payload) { state.SERVICE_BAOYOUKEHU_AREA_CAR = payload },
  SERVICE_BEIJIANKUJIN_AREA_CAR(state, payload) { state.SERVICE_BEIJIANKUJIN_AREA_CAR = payload },

  /**
   * INSURANCE 保险
   */
  INSURANCE_XINBAOTAI_AREA(state, payload) { state.INSURANCE_XINBAOTAI_AREA = payload },
  INSURANCE_XINBAOJIN_AREA(state, payload) { state.INSURANCE_XINBAOJIN_AREA = payload },
  INSURANCE_XUBAOTAI_AREA(state, payload) { state.INSURANCE_XUBAOTAI_AREA = payload },
  INSURANCE_XUBAOJIN_AREA(state, payload) { state.INSURANCE_XUBAOJIN_AREA = payload },

  INSURANCE_XINBAOTAI_AREA_LITTLE(state, payload) { state.INSURANCE_XINBAOTAI_AREA_LITTLE = payload },
  INSURANCE_XINBAOJIN_AREA_LITTLE(state, payload) { state.INSURANCE_XINBAOJIN_AREA_LITTLE = payload },
  INSURANCE_XUBAOTAI_AREA_LITTLE(state, payload) { state.INSURANCE_XUBAOTAI_AREA_LITTLE = payload },
  INSURANCE_XUBAOJIN_AREA_LITTLE(state, payload) { state.INSURANCE_XUBAOJIN_AREA_LITTLE = payload },

  INSURANCE_XINBAOTAI_AREA_TINY(state, payload) { state.INSURANCE_XINBAOTAI_AREA_TINY = payload },
  INSURANCE_XINBAOJIN_AREA_TINY(state, payload) { state.INSURANCE_XINBAOJIN_AREA_TINY = payload },
  INSURANCE_XUBAOTAI_AREA_TINY(state, payload) { state.INSURANCE_XUBAOTAI_AREA_TINY = payload },
  INSURANCE_XUBAOJIN_AREA_TINY(state, payload) { state.INSURANCE_XUBAOJIN_AREA_TINY = payload },

  INSURANCE_XINBAOTAI_AREA_BRAND(state, payload) { state.INSURANCE_XINBAOTAI_AREA_BRAND = payload },
  INSURANCE_XINBAOJIN_AREA_BRAND(state, payload) { state.INSURANCE_XINBAOJIN_AREA_BRAND = payload },
  INSURANCE_XUBAOTAI_AREA_BRAND(state, payload) { state.INSURANCE_XUBAOTAI_AREA_BRAND = payload },
  INSURANCE_XUBAOJIN_AREA_BRAND(state, payload) { state.INSURANCE_XUBAOJIN_AREA_BRAND = payload },

  INSURANCE_XINBAOTAI_AREA_CAR(state, payload) { state.INSURANCE_XINBAOTAI_AREA_CAR = payload },
  INSURANCE_XINBAOJIN_AREA_CAR(state, payload) { state.INSURANCE_XINBAOJIN_AREA_CAR = payload },
  INSURANCE_XUBAOTAI_AREA_CAR(state, payload) { state.INSURANCE_XUBAOTAI_AREA_CAR = payload },
  INSURANCE_XUBAOJIN_AREA_CAR(state, payload) { state.INSURANCE_XUBAOJIN_AREA_CAR = payload },

}
/**
 * [actions 取代原来的值的方法]
 * @type {Object}
 */
const actions = {
  updateToast({ commit }, toast) { commit({ type: 'updateToast', toast: toast }) },
  updateLoading({ commit }, isLoading) { commit({ type: 'updateLoading', isLoading: isLoading }) },
  updateRefreshTime({ commit }, refreshTime) { commit({ type: 'updateRefreshTime', refreshTime: refreshTime }) },

  updateActiveTab({ commit }, activeTab) { commit({ type: 'updateActiveTab', activeTab: activeTab }) },

  updateShowMySlideLeft({ commit }, showMySlideLeft) { commit({ type: 'updateShowMySlideLeft', showMySlideLeft: showMySlideLeft }) },
  updateShowDateSelect({ commit }, showDateSelect) { commit({ type: 'updateShowDateSelect', showDateSelect: showDateSelect }) },
  updateShowMyBrandSelect({ commit }, showMyBrandSelect) { commit({ type: 'updateShowMyBrandSelect', showMyBrandSelect: showMyBrandSelect }) },
  updateShowMyCarSelect({ commit }, showMyCarSelect) { commit({ type: 'updateShowMyCarSelect', showMyCarSelect: showMyCarSelect }) },
  updateShowStockDateSelect({ commit }, showStockDateSelect) { commit({ type: 'updateShowStockDateSelect', showStockDateSelect: showStockDateSelect }) },

  updateDateSelect({ commit }, dateSelect) { commit({ type: 'updateDateSelect', dateSelect: dateSelect }) },
  updateMyBrandSelect({ commit }, myBrandSelect) { commit({ type: 'updateMyBrandSelect', myBrandSelect: myBrandSelect }) },
  updateMyCarSelect({ commit }, myCarSelect) { commit({ type: 'updateMyCarSelect', myCarSelect: myCarSelect }) },
  updateStockDateSelect({ commit }, stockDateSelect) { commit({ type: 'updateStockDateSelect', stockDateSelect: stockDateSelect }) },

}

/**
 * 声明vuex中的几个模块，保证其可以全局使用
 */
export default new Vuex.Store({
  initState,
  state,
  mutations,
  actions,
})
