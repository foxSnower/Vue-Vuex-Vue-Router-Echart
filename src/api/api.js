/**
 axios.post('/serv/ve/clue/v1/homePage?params={"dlrCode":"H2901"}').then(function(response) {
  console.log(response);
}).catch(function(response) {
  console.log(response);
});
axios({
  method: 'post',
  url:'/serv/ve/clue/v1/homePage',
  data: 'params={"dlrCode":"H2901"}'
})
 * 
 */

import axios from 'axios'
import store from '../vuex/store.js'
import qs from 'qs'

const debug = process.env.NODE_ENV !== 'production';
// const IsLoacalData = process.env.NODE_ENV !== 'production'; 
const IsLoacalData = false; //本地数据
//公共api处理方法

const commonAPI = (url, params, callback) => {
  let APIName = params.localType;
  store.commit('updateLoading', {
    isLoading: true
  })
  let defalutConfig = {
    method: 'post',
    url: url,
    data: getParam(params)
  }
  if (IsLoacalData) {
    //本地数据
    defalutConfig.url = './local?api=' + APIName;
  }
  return axios(defalutConfig).then(res => { //请求成功返回的数据
    store.commit('updateLoading', {
      isLoading: false
    })
    if (res.data.status == '0') {
      if (callback) {
        callback(res.data)
      } else {
        return res.data
      }
    } else {
      console.log('errerrerrerrerrerrerrerrerrerrerrerrerrerrerr调用' + APIName + '失败，详情如下：')
      console.log(res.message)
      return res.data
    }
  }).catch(function(err) { //请求失败返回的数据
    console.log(err);
    return err
  });
}
const getParam = (params) => {

  let res = ''
  if (IsLoacalData) {
    //本地数据
    res = 'local=' + JSON.stringify(params)
  } else {
    delete params.localType //清除本地测试json标识
    // res = 'params=' + JSON.stringify(params)
    res = qs.stringify(params) //格式化参数
  }
  return res
}

const api = {
  GET_TEST(params, callback) { //测试
    params.localType = 'GET_TEST'; //请求本地数据添加，不需要可以删除，不建议删除   →_→|||
    return commonAPI('/toutiao/index', params, callback)
  },
  //登录
  LOGIN(params, callback) { params.localType = 'LOGIN'; return commonAPI('api/clue/all/statistics', params, callback) },
  /**
   * [首页]
   */
  //销售数据
  GET_SAlE_DATA(params, callback) { params.localType = 'GET_SAlE_DATA'; return commonAPI('api/clue/all/statistics', params, callback) },
  //库存数据
  GET_STOCK_DATA(params, callback) { params.localType = 'GET_STOCK_DATA'; return commonAPI('api/clue/all/statistics', params, callback) },
  //售后数据
  GET_SERVICE_DATA(params, callback) { params.localType = 'GET_SERVICE_DATA'; return commonAPI('api/clue/all/statistics', params, callback) },
  //保险数据
  GET_INSURANCE_DATA(params, callback) { params.localType = 'GET_INSURANCE_DATA'; return commonAPI('api/clue/all/statistics', params, callback) },

  GET_BRAND(params, callback) { params.localType = 'GET_BRAND'; return commonAPI('api/clue/all/statistics', params, callback) },
  GET_CAR(params, callback) { params.localType = 'GET_CAR'; return commonAPI('api/clue/all/statistics', params, callback) },
  /**
   * [SALE_销售区域]
   */
  //线索区
  SALE_XIANSUO_AREA(params, callback) { params.localType = 'SALE_XIANSUO_AREA'; return commonAPI('api/clue/all/statistics', params, callback) },
  //来店区
  SALE_LAIDIAN_AREA(params, callback) { params.localType = 'SALE_LAIDIAN_AREA'; return commonAPI('api/clue/all/statistics', params, callback) },
  //意向区
  SALE_YIXIANG_AREA(params, callback) { params.localType = 'SALE_YIXIANG_AREA'; return commonAPI('api/clue/all/statistics', params, callback) },
  //订单区
  SALE_DINGDAN_AREA(params, callback) { params.localType = 'SALE_DINGDAN_AREA'; return commonAPI('api/clue/all/statistics', params, callback) },
  //开票区
  SALE_KAIPIAO_AREA(params, callback) { params.localType = 'SALE_KAIPIAO_AREA'; return commonAPI('api/clue/all/statistics', params, callback) },
  //交车区
  SALE_JIAOCHE_AREA(params, callback) { params.localType = 'SALE_JIAOCHE_AREA'; return commonAPI('api/clue/all/statistics', params, callback) },
  //提车区
  SALE_TICHE_AREA(params, callback) { params.localType = 'SALE_TICHE_AREA'; return commonAPI('api/clue/all/statistics', params, callback) },
  //提车金额区
  SALE_TICHEJIN_AREA(params, callback) { params.localType = 'SALE_LAIDIAN_AREA'; return commonAPI('api/clue/all/statistics', params, callback) },
  //订单金额区
  SALE_DINGDANJIN_AREA(params, callback) { params.localType = 'SALE_DINGDANJIN_AREA'; return commonAPI('api/clue/all/statistics', params, callback) },
  //开票金额区
  SALE_KAIPIAOJIN_AREA(params, callback) { params.localType = 'SALE_KAIPIAOJIN_AREA'; return commonAPI('api/clue/all/statistics', params, callback) },

  /**
   * [SALE_销售_品牌]
   */
  //品牌-线索区
  SALE_XIANSUO_AREA_BRAND(params, callback) { params.localType = 'SALE_XIANSUO_AREA_BRAND'; return commonAPI('api/clue/all/statistics', params, callback) },
  //品牌-来店区
  SALE_LAIDIAN_AREA_BRAND(params, callback) { params.localType = 'SALE_LAIDIAN_AREA_BRAND'; return commonAPI('api/clue/all/statistics', params, callback) },
  //品牌-意向区
  SALE_YIXIANG_AREA_BRAND(params, callback) { params.localType = 'SALE_YIXIANG_AREA_BRAND'; return commonAPI('api/clue/all/statistics', params, callback) },
  //品牌-订单区
  SALE_DINGDAN_AREA_BRAND(params, callback) { params.localType = 'SALE_DINGDAN_AREA_BRAND'; return commonAPI('api/clue/all/statistics', params, callback) },
  //品牌-开票区
  SALE_KAIPIAO_AREA_BRAND(params, callback) { params.localType = 'SALE_KAIPIAO_AREA_BRAND'; return commonAPI('api/clue/all/statistics', params, callback) },
  //品牌-交车区
  SALE_JIAOCHE_AREA_BRAND(params, callback) { params.localType = 'SALE_JIAOCHE_AREA_BRAND'; return commonAPI('api/clue/all/statistics', params, callback) },
  //品牌-提车区
  SALE_TICHE_AREA_BRAND(params, callback) { params.localType = 'SALE_TICHE_AREA_BRAND'; return commonAPI('api/clue/all/statistics', params, callback) },
  //品牌-提车金额区
  SALE_TICHEJIN_AREA_BRAND(params, callback) { params.localType = 'SALE_TICHEJIN_AREA_BRAND'; return commonAPI('api/clue/all/statistics', params, callback) },
  //品牌-订单金额区
  SALE_DINGDANJIN_AREA_BRAND(params, callback) { params.localType = 'SALE_DINGDANJIN_AREA_BRAND'; return commonAPI('api/clue/all/statistics', params, callback) },
  //品牌-开票金额区
  SALE_KAIPIAOJIN_AREA_BRAND(params, callback) { params.localType = 'SALE_KAIPIAOJIN_AREA_BRAND'; return commonAPI('api/clue/all/statistics', params, callback) },
  /**
   * [SALE_销售_车系]
   */
  //品牌-线索区
  SALE_XIANSUO_AREA_CAR(params, callback) { params.localType = 'SALE_XIANSUO_AREA_CAR'; return commonAPI('api/clue/all/statistics', params, callback) },
  //品牌-来店区
  SALE_LAIDIAN_AREA_CAR(params, callback) { params.localType = 'SALE_LAIDIAN_AREA_CAR'; return commonAPI('api/clue/all/statistics', params, callback) },
  //品牌-意向区
  SALE_YIXIANG_AREA_CAR(params, callback) { params.localType = 'SALE_YIXIANG_AREA_CAR'; return commonAPI('api/clue/all/statistics', params, callback) },
  //品牌-订单区
  SALE_DINGDAN_AREA_CAR(params, callback) { params.localType = 'SALE_DINGDAN_AREA_CAR'; return commonAPI('api/clue/all/statistics', params, callback) },
  //品牌-开票区
  SALE_KAIPIAO_AREA_CAR(params, callback) { params.localType = 'SALE_KAIPIAO_AREA_CAR'; return commonAPI('api/clue/all/statistics', params, callback) },
  //品牌-交车区
  SALE_JIAOCHE_AREA_CAR(params, callback) { params.localType = 'SALE_JIAOCHE_AREA_CAR'; return commonAPI('api/clue/all/statistics', params, callback) },
  //品牌-提车区
  SALE_TICHE_AREA_CAR(params, callback) { params.localType = 'SALE_TICHE_AREA_CAR'; return commonAPI('api/clue/all/statistics', params, callback) },
  //品牌-提车金额区
  SALE_TICHEJIN_AREA_CAR(params, callback) { params.localType = 'SALE_TICHEJIN_AREA_CAR'; return commonAPI('api/clue/all/statistics', params, callback) },
  //品牌-订单金额区
  SALE_DINGDANJIN_AREA_CAR(params, callback) { params.localType = 'SALE_DINGDANJIN_AREA_CAR'; return commonAPI('api/clue/all/statistics', params, callback) },
  //品牌-开票金额区
  SALE_KAIPIAOJIN_AREA_CAR(params, callback) { params.localType = 'SALE_KAIPIAOJIN_AREA_CAR'; return commonAPI('api/clue/all/statistics', params, callback) },

  //在库
  STOCK_ZAIKU_AREA(params, callback) { params.localType = 'STOCK_ZAIKU_AREA'; return commonAPI('api/clue/all/statistics', params, callback) },
  //在途
  STOCK_ZAITU_AREA(params, callback) { params.localType = 'STOCK_ZAITU_AREA'; return commonAPI('api/clue/all/statistics', params, callback) },
  //可供销
  STOCK_KEGONGXIAO_AREA(params, callback) { params.localType = 'STOCK_KEGONGXIAO_AREA'; return commonAPI('api/clue/all/statistics', params, callback) },
  //在库金额
  STOCK_ZAIKUJIN_AREA(params, callback) { params.localType = 'STOCK_ZAIKUJIN_AREA'; return commonAPI('api/clue/all/statistics', params, callback) },

  //在库-品牌
  STOCK_ZAIKU_AREA_BRAND(params, callback) { params.localType = 'STOCK_ZAIKU_AREA_BRAND'; return commonAPI('api/clue/all/statistics', params, callback) },
  //在途-品牌
  STOCK_ZAITU_AREA_BRAND(params, callback) { params.localType = 'STOCK_ZAITU_AREA_BRAND'; return commonAPI('api/clue/all/statistics', params, callback) },
  //可供销-品牌
  STOCK_KEGONGXIAO_AREA_BRAND(params, callback) { params.localType = 'STOCK_KEGONGXIAO_AREA_BRAND'; return commonAPI('api/clue/all/statistics', params, callback) },
  //在库金额-品牌
  STOCK_ZAIKUJIN_AREA_BRAND(params, callback) { params.localType = 'STOCK_ZAIKUJIN_AREA_BRAND'; return commonAPI('api/clue/all/statistics', params, callback) },

  //在库-车系
  STOCK_ZAIKU_AREA_CAR(params, callback) { params.localType = 'STOCK_ZAIKU_AREA_CAR'; return commonAPI('api/clue/all/statistics', params, callback) },
  //在途-车系
  STOCK_ZAITU_AREA_CAR(params, callback) { params.localType = 'STOCK_ZAITU_AREA_CAR'; return commonAPI('api/clue/all/statistics', params, callback) },
  //可供销-车系
  STOCK_KEGONGXIAO_AREA_CAR(params, callback) { params.localType = 'STOCK_KEGONGXIAO_AREA_CAR'; return commonAPI('api/clue/all/statistics', params, callback) },
  //在库金额-车系
  STOCK_ZAIKUJIN_AREA_CAR(params, callback) { params.localType = 'STOCK_ZAIKUJIN_AREA_CAR'; return commonAPI('api/clue/all/statistics', params, callback) },

  //营收
  SERVICE_YINGSHOU_AREA(params, callback) { params.localType = 'SERVICE_YINGSHOU_AREA'; return commonAPI('api/clue/all/statistics', params, callback) },
  //回厂台次
  SERVICE_HUICHANTAI_AREA(params, callback) { params.localType = 'SERVICE_HUICHANTAI_AREA'; return commonAPI('api/clue/all/statistics', params, callback) },
  //工单数
  SERVICE_GONGDANSHU_AREA(params, callback) { params.localType = 'SERVICE_GONGDANSHU_AREA'; return commonAPI('api/clue/all/statistics', params, callback) },
  //备件订单金额
  SERVICE_BEIJIANDINGJIN_AREA(params, callback) { params.localType = 'SERVICE_BEIJIANDINGJIN_AREA'; return commonAPI('api/clue/all/statistics', params, callback) },
  //保有客户
  SERVICE_BAOYOUKEHU_AREA(params, callback) { params.localType = 'SERVICE_BAOYOUKEHU_AREA'; return commonAPI('api/clue/all/statistics', params, callback) },
  //备件库存金额
  SERVICE_BEIJIANKUJIN_AREA(params, callback) { params.localType = 'SERVICE_BEIJIANKUJIN_AREA'; return commonAPI('api/clue/all/statistics', params, callback) },

  //营收-品牌
  SERVICE_YINGSHOU_AREA_BRAND(params, callback) { params.localType = 'SERVICE_YINGSHOU_AREA_BRAND'; return commonAPI('api/clue/all/statistics', params, callback) },
  //回厂台次-品牌
  SERVICE_HUICHANTAI_AREA_BRAND(params, callback) { params.localType = 'SERVICE_HUICHANTAI_AREA_BRAND'; return commonAPI('api/clue/all/statistics', params, callback) },
  //工单数-品牌
  SERVICE_GONGDANSHU_AREA_BRAND(params, callback) { params.localType = 'SERVICE_GONGDANSHU_AREA_BRAND'; return commonAPI('api/clue/all/statistics', params, callback) },
  //备件订单金额-品牌
  SERVICE_BEIJIANDINGJIN_AREA_BRAND(params, callback) { params.localType = 'SERVICE_BEIJIANDINGJIN_AREA_BRAND'; return commonAPI('api/clue/all/statistics', params, callback) },
  //保有客户-品牌
  SERVICE_BAOYOUKEHU_AREA_BRAND(params, callback) { params.localType = 'SERVICE_BAOYOUKEHU_AREA_BRAND'; return commonAPI('api/clue/all/statistics', params, callback) },
  //备件库存金额-品牌
  SERVICE_BEIJIANKUJIN_AREA_BRAND(params, callback) { params.localType = 'SERVICE_BEIJIANKUJIN_AREA_BRAND'; return commonAPI('api/clue/all/statistics', params, callback) },

  //营收-车系
  SERVICE_YINGSHOU_AREA_CAR(params, callback) { params.localType = 'SERVICE_YINGSHOU_AREA_CAR'; return commonAPI('api/clue/all/statistics', params, callback) },
  //回厂台次-车系
  SERVICE_HUICHANTAI_AREA_CAR(params, callback) { params.localType = 'SERVICE_HUICHANTAI_AREA_CAR'; return commonAPI('api/clue/all/statistics', params, callback) },
  //工单数-车系
  SERVICE_GONGDANSHU_AREA_CAR(params, callback) { params.localType = 'SERVICE_GONGDANSHU_AREA_CAR'; return commonAPI('api/clue/all/statistics', params, callback) },
  //备件订单金额-车系
  SERVICE_BEIJIANDINGJIN_AREA_CAR(params, callback) { params.localType = 'SERVICE_BEIJIANDINGJIN_AREA_CAR'; return commonAPI('api/clue/all/statistics', params, callback) },
  //保有客户-车系
  SERVICE_BAOYOUKEHU_AREA_CAR(params, callback) { params.localType = 'SERVICE_BAOYOUKEHU_AREA_CAR'; return commonAPI('api/clue/all/statistics', params, callback) },
  //备件库存金额-车系
  SERVICE_BEIJIANKUJIN_AREA_CAR(params, callback) { params.localType = 'SERVICE_BEIJIANKUJIN_AREA_CAR'; return commonAPI('api/clue/all/statistics', params, callback) },


  //新保台次
  INSURANCE_XINBAOTAI_AREA(params, callback) { params.localType = 'INSURANCE_XINBAOTAI_AREA'; return commonAPI('api/clue/all/statistics', params, callback) },
  //新保金额
  INSURANCE_XINBAOJIN_AREA(params, callback) { params.localType = 'INSURANCE_XINBAOJIN_AREA'; return commonAPI('api/clue/all/statistics', params, callback) },
  //续保台次
  INSURANCE_XUBAOTAI_AREA(params, callback) { params.localType = 'INSURANCE_XUBAOTAI_AREA'; return commonAPI('api/clue/all/statistics', params, callback) },
  //续保金额
  INSURANCE_XUBAOJIN_AREA(params, callback) { params.localType = 'INSURANCE_XUBAOJIN_AREA'; return commonAPI('api/clue/all/statistics', params, callback) },

  //新保台次-品牌
  INSURANCE_XINBAOTAI_AREA_BRAND(params, callback) { params.localType = 'INSURANCE_XINBAOTAI_AREA_BRAND'; return commonAPI('api/clue/all/statistics', params, callback) },
  //新保金额-品牌
  INSURANCE_XINBAOJIN_AREA_BRAND(params, callback) { params.localType = 'INSURANCE_XINBAOJIN_AREA_BRAND'; return commonAPI('api/clue/all/statistics', params, callback) },
  //续保台次-品牌
  INSURANCE_XUBAOTAI_AREA_BRAND(params, callback) { params.localType = 'INSURANCE_XUBAOTAI_AREA_BRAND'; return commonAPI('api/clue/all/statistics', params, callback) },
  //续保金额-品牌
  INSURANCE_XUBAOJIN_AREA_BRAND(params, callback) { params.localType = 'INSURANCE_XUBAOJIN_AREA_BRAND'; return commonAPI('api/clue/all/statistics', params, callback) },

  //新保台次-车系
  INSURANCE_XINBAOTAI_AREA_CAR(params, callback) { params.localType = 'INSURANCE_XINBAOTAI_AREA_CAR'; return commonAPI('api/clue/all/statistics', params, callback) },
  //新保金额-车系
  INSURANCE_XINBAOJIN_AREA_CAR(params, callback) { params.localType = 'INSURANCE_XINBAOJIN_AREA_CAR'; return commonAPI('api/clue/all/statistics', params, callback) },
  //续保台次-车系
  INSURANCE_XUBAOTAI_AREA_CAR(params, callback) { params.localType = 'INSURANCE_XUBAOTAI_AREA_CAR'; return commonAPI('api/clue/all/statistics', params, callback) },
  //续保金额-车系
  INSURANCE_XUBAOJIN_AREA_CAR(params, callback) { params.localType = 'INSURANCE_XUBAOJIN_AREA_CAR'; return commonAPI('api/clue/all/statistics', params, callback) },

}

export default api
