import Vue from 'vue'
import Router from 'vue-router'
import personnalCenter from '@/pages/personnalCenter'
import login from '@/pages/login'
import index from '@/pages/index'
import indexSale from '@/pages/indexSale' //销售
import indexStock from '@/pages/indexStock' //库存
import indexService from '@/pages/indexService' //售后
import indexInsurance from '@/pages/indexInsurance' //保险
import publicPage from '@/pages/publicPage' //公共页面

import saleArea from '@/pages/saleArea' //大区
import saleLittleArea from '@/pages/saleLittleArea' //小区
import saleTinyArea from '@/pages/saleTinyArea' //4S店

import stockArea from '@/pages/stockArea' //大区
import stockLittleArea from '@/pages/stockLittleArea' //小区
import stockTinyArea from '@/pages/stockTinyArea' //4S店

import serviceArea from '@/pages/serviceArea' //大区
import serviceLittleArea from '@/pages/serviceLittleArea' //小区
import serviceTinyArea from '@/pages/serviceTinyArea' //4S店

import serviceArea2 from '@/pages/serviceArea2' //大区
import serviceLittleArea2 from '@/pages/serviceLittleArea2' //小区
import serviceTinyArea2 from '@/pages/serviceTinyArea2' //4S店

import insuranceArea from '@/pages/insuranceArea' //大区
import insuranceLittleArea from '@/pages/insuranceLittleArea' //小区
import insuranceTinyArea from '@/pages/insuranceTinyArea' //4S店


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: '登录', meta: { title: '' }, component: login },
    {
      path: '/index',
      name: '经销商集团',
      meta: { title: '' },
      component: index,
      children: [
        { path: '/indexSale', name: '销售战报', meta: { title: '' }, component: indexSale },
        { path: '/indexStock', name: '库存战报', meta: { title: '经销商集团' }, component: indexStock },
        { path: '/indexService', name: '售后战报', meta: { title: '经销商集团' }, component: indexService },
        { path: '/indexInsurance', name: '保险战报', meta: { title: '经销商集团' }, component: indexInsurance }
      ]
    },
    { path: '/publicPage', name: '公共页面', component: publicPage },
    { path: '/saleArea', name: '', component: saleArea },
    { path: '/saleLittleArea', name: '', component: saleLittleArea },
    { path: '/saleTinyArea', name: '', component: saleTinyArea },
    { path: '/stockArea', name: '', component: stockArea },
    { path: '/stockLittleArea', name: '', component: stockLittleArea },
    { path: '/stockTinyArea', name: '', component: stockTinyArea },
    { path: '/serviceArea', name: '', component: serviceArea },
    { path: '/serviceLittleArea', name: '', component: serviceLittleArea },
    { path: '/serviceTinyArea', name: '', component: serviceTinyArea },
    { path: '/serviceArea2', name: '', component: serviceArea2 },
    { path: '/serviceLittleArea2', name: '', component: serviceLittleArea2 },
    { path: '/serviceTinyArea2', name: '', component: serviceTinyArea2 },
    { path: '/insuranceArea', name: '', component: insuranceArea },
    { path: '/insuranceLittleArea', name: '', component: insuranceLittleArea },
    { path: '/insuranceTinyArea', name: '', component: insuranceTinyArea },

    {
      path: '/personnalCenter',
      name: 'personnalCenter',
      title: '个人中心',
      component: personnalCenter
    },
  ]
})
