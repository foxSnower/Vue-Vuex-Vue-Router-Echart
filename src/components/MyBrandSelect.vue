<template>
  <transition name="slide-fade">
    <!-- showMyBrandSelect -->
    <div class="slide" v-if="showMyBrandSelect">
      <div class="select-mask" @click.preventDefault @click="close"></div>
      <div class="select">
        <div class="select-header">
          <div class="left" @click.preventDefault @click="close">取消</div>
          <div class="center">
            <span>选择查看品牌({{selectedLength}}/{{brandList.length-1}})</span>
          </div>
          <div class="right" @click="onOk">确定</div>
        </div>
        <div class="select-content" :style="{maxHeight:resizeHeight}" v-if="brandList.length-1>0">
          <div class="items" v-for="(item,index) in brandList" :key="index">
            <span @click="setBranDCheck(index)" :class="{ active: item.check==true ,'auto-font':getStrLeng(item.name)}">
              {{ item.name }}
              </span>
          </div>
        </div>
        <div v-else class="no-data">暂无品牌</div>
      </div>
    </div>
  </transition>
</template>
<script>
import api from '@/api/api.js'
import { mapState, mapActions } from 'vuex'
import PublicMethods from '@/utils/PublicMethods'
export default {
  name: 'MyBrandSelect',
  data() {
    return {
      brandList: [{
        name: '全部品牌',
        code: 'all'
      }],
      selectedLength: 0,
      first: true
    }
  },
  watch: {
    showMyBrandSelect: function(newVal) {
      if (newVal) {
        this.getAPI();
      }
    }
  },
  methods: {
    ...mapActions(['updateMyBrandSelect', 'updateShowMyBrandSelect']),
    getAPI() {
      this.brandList.splice(1, 10000); //初始化列表
      let pageType = this.$route.query.pageType + '_BRAND';
      if (this[pageType] != null) {
        this.brandList = this.brandList.concat(this[pageType]);
        this.initData();
      }
    },
    initData() {
      //第一次选择品牌默认全选
      if (this.first) {
        this.brandList.forEach((x, index) => {
          x.check = true;
        })
        this.selectedLength = this.brandList.length - 1;
        this.first = false;
      }
    },
    setBranDCheck: function(idx) {
      if (idx > 0) { //点击‘品牌’按钮
        this.brandList[idx].check = !this.brandList[idx].check;
        if (!this.brandList[idx].check) {
          this.brandList[0].check = false;
        }
      } else { //点击'全部'按钮
        this.brandList[idx].check = !this.brandList[idx].check;
        this.brandList.forEach((y, index) => {
          y.check = this.brandList[idx].check
        });
      }
      //统计已选择的数据，排除第一个全部
      this.selectedLength = 0;
      this.brandList.forEach((y, index) => {
        if (y.check == true && index > 0) {
          this.selectedLength++;
        }
      });
    },
    close() {
      this.updateShowMyBrandSelect(false);
    },
    onOk() {
      let pageType = this.$route.query.pageType + '_BRAND';
      let selectedBrand = [];
      //如果选择的数量与(数组的数量-1)一致，那么选择的是全部
      if (this.selectedLength == this.brandList.length - 1) {
        selectedBrand = this[pageType];
      } else {
        this.brandList.forEach((y, index) => {
          if (y.check == true) {
            selectedBrand.push(y);
          }
        })
      }
      //存贮起来备用
      this.updateMyBrandSelect(selectedBrand)
      this.updateShowMyBrandSelect(false);
      console.log(selectedBrand);
      // console.log(code);
    },
    getStrLeng(str) {
      //数据长度与设置的长度比较
      if (str != null) {
        if (PublicMethods.getStrLeng(str) >= PublicMethods.setSelectMaxLength) {
          return true
        } else {
          return false
        }
      }
    }
  },
  computed: {
    ...mapState({
      activeTab: state => state.activeTab,
      showMyBrandSelect: state => state.showMyBrandSelect,
      myBrandSelect: state => state.myBrandSelect,

      SALE_XIANSUO_AREA_BRAND: state => state.SALE_XIANSUO_AREA_BRAND,
      SALE_LAIDIAN_AREA_BRAND: state => state.SALE_LAIDIAN_AREA_BRAND,
      SALE_YIXIANG_AREA_BRAND: state => state.SALE_YIXIANG_AREA_BRAND,
      SALE_DINGDAN_AREA_BRAND: state => state.SALE_DINGDAN_AREA_BRAND,
      SALE_KAIPIAO_AREA_BRAND: state => state.SALE_KAIPIAO_AREA_BRAND,
      SALE_JIAOCHE_AREA_BRAND: state => state.SALE_JIAOCHE_AREA_BRAND,
      SALE_TICHE_AREA_BRAND: state => state.SALE_TICHE_AREA_BRAND,
      SALE_TICHEJIN_AREA_BRAND: state => state.SALE_TICHEJIN_AREA_BRAND,
      SALE_DINGDANJIN_AREA_BRAND: state => state.SALE_DINGDANJIN_AREA_BRAND,
      SALE_KAIPIAOJIN_AREA_BRAND: state => state.SALE_KAIPIAOJIN_AREA_BRAND,

      STOCK_ZAIKU_AREA_BRAND: state => state.STOCK_ZAIKU_AREA_BRAND,
      STOCK_ZAITU_AREA_BRAND: state => state.STOCK_ZAITU_AREA_BRAND,
      STOCK_KEGONGXIAO_AREA_BRAND: state => state.STOCK_KEGONGXIAO_AREA_BRAND,
      STOCK_ZAIKUJIN_AREA_BRAND: state => state.STOCK_ZAIKUJIN_AREA_BRAND,

      INSURANCE_XINBAOTAI_AREA_BRAND: state => state.INSURANCE_XINBAOTAI_AREA_BRAND,
      INSURANCE_XINBAOJIN_AREA_BRAND: state => state.INSURANCE_XINBAOJIN_AREA_BRAND,
      INSURANCE_XUBAOTAI_AREA_BRAND: state => state.INSURANCE_XUBAOTAI_AREA_BRAND,
      INSURANCE_XUBAOJIN_AREA_BRAND: state => state.INSURANCE_XUBAOJIN_AREA_BRAND,

       SERVICE_YINGSHOU_AREA_BRAND: state => state.SERVICE_YINGSHOU_AREA_BRAND,
      SERVICE_HUICHANTAI_AREA_BRAND: state => state.SERVICE_HUICHANTAI_AREA_BRAND,
      SERVICE_GONGDANSHU_AREA_BRAND: state => state.SERVICE_GONGDANSHU_AREA_BRAND,
      SERVICE_BEIJIANDINGJIN_AREA_BRAND: state => state.SERVICE_BEIJIANDINGJIN_AREA_BRAND,
      SERVICE_BAOYOUKEHU_AREA_BRAND: state => state.SERVICE_BAOYOUKEHU_AREA_BRAND,
      SERVICE_BEIJIANKUJIN_AREA_BRAND: state => state.SERVICE_BEIJIANKUJIN_AREA_BRAND,

    }),
    resizeHeight() {
      //根据屏幕高度设计容器
      return screen.height * 0.5 - 50 + 'px';
    },
  },
}

</script>
<style lang="less" scoped="scoped">
@import '../styles/var.less';

.slide {
  z-index: 100;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  .select-mask {
    z-index: 101;
    background-color: black;
    opacity: 0.5;
    position: absolute;
    /*bottom: 0;*/
    height: 100%;
    width: 100%;
  }
  .select {
    z-index: 102;
    position: absolute;
    bottom: 0;
    height: 50%;
    width: 100%;
    background-color: #fff;
    .select-header {
      height: @normalHeight;
      line-height: @normalHeight;
      position: relative;
      font-size: @normalSize;
      color: @themeColor;
      background-color: #fff;
      text-align: center;
      .left {
        position: absolute;
        width: 70px;
        top: 0;
        left: 0;
      }
      .center {
        color: #000;
      }
      .right {
        position: absolute;
        right: 0;
        top: 0;
        width: 70px;
      }
    }
    .select-header:before {
      .setBottomLine()
    }
    .select-content {
      /*height: 83%;*/
      background-color: #fff;
      overflow: auto;
      display: flex;
      flex-wrap: wrap;
      .items {
        width: 33.3%;
        margin: auto 0;
        span {
          margin: 8px 5px 2px;
          padding: 8px 2px;
          display: block;
          border: 1px solid @borderColor;
          border-radius: 5px;
          text-align: center;
          line-height: initial;
        }
        .active {
          border: 1px solid #65BCFA;
        }
      }
    }
    .no-data {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color:@lighterColor;
    }
  }
}




.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */

{
  transform: translateY(10px);
  opacity: 0;
}

@media screen and (max-width: 768px) {
  .slide .select .select-content .items {
    width: 25%;
  }
}

@media screen and (max-width: 414px) {
  .slide .select .select-content .items {
    width: 33.3%;
  }
}

</style>
