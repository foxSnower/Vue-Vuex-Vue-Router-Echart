<template>
  <div class="charts">
    <!-- <div class="fixed"> -->
    <div id="myChart"></div>
    <div class="tips" v-if="noData">暂无数据</div>
    <!-- </div> -->
  </div>
</template>
<script>
import PublicMethods from '@/utils/PublicMethods'
import PublicSetEChartVar from '@/utils/PublicSetEChartVar'
import { mapState } from 'vuex'
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
// 引入折线图组件
require('echarts/lib/chart/line')
// 引入提示框、title组件、标签和其他
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')
require('echarts/lib/component/toolbox')
// 区域缩放
require('echarts/lib/component/dataZoom')


let colors = ['#5793f3', '#d14a61', '#675bba', '#675bba'];
export default {
  name: 'Echart',
  data() {
    return {
      chart: null,
      noData: false,
      option: {
        color: PublicSetEChartVar.setColors, //每组数据的颜色
        tooltip: PublicSetEChartVar.setTooltip, //提示框
        textStyle: PublicSetEChartVar.setTextStyle,
        xAxis: {
          splitLine: PublicSetEChartVar.setSplitLine, //垂直参考线
          axisTick: PublicSetEChartVar.setAxisTick,
          axisLine: PublicSetEChartVar.setAxisLineX,
          axisLabel: {
            rotate: 45
          },
          // nameRotate: 30,
          // name:'大区',
          data: [], //X坐标轴
        },
        grid: {
          x: 30,
        },
        yAxis: [{
            type: 'value',
            splitLine: PublicSetEChartVar.setSplitLine,
            axisTick: PublicSetEChartVar.setAxisTick,
            name: '数值',
            min: 0,
            position: 'left',
            offset: 0,
            // interval: 10,
            axisLine: {
              lineStyle: {
                color: 'transparent'
              }
            },
            axisLabel: {
              formatter: '{value} '
            }
          },
          {
            type: 'value',
            splitLine: PublicSetEChartVar.setSplitLine,
            axisTick: PublicSetEChartVar.setAxisTick,
            name: '达成率',
            min: 0,
            // interval: 100,
            position: 'right',
            axisLine: PublicSetEChartVar.setAxisLineY,
            axisLabel: {
              formatter: '{value}'
            }
          }
        ],
        legend: {
          data: [] //图例名称 ['月累计','达成率', '同比', '环比','统计']
        },
        series: [{
            name: '月累计',
            type: 'bar',
            itemStyle: PublicSetEChartVar.setBarColors,
            barGap: '-100%', //因为与统计同在一条x轴上，为其中间对齐，设置为-100%
            barWidth: '40%',
            data: []
          },
          {
            name: '达成率',
            type: 'line',
            yAxisIndex: 1,
            itemStyle: PublicSetEChartVar.setLineColors[0],
            data: []
          },
          {
            name: '同比',
            type: 'line',
            yAxisIndex: 1,
            itemStyle: PublicSetEChartVar.setLineColors[1],
            data: []
          },
          {
            name: '环比',
            type: 'line',
            yAxisIndex: 1,
            itemStyle: PublicSetEChartVar.setLineColors[1],
            data: []
          },
          {
            name: '统计',
            type: 'bar',
            itemStyle: PublicSetEChartVar.setBarColors,
            barGap: '-100%', //因为与统计同在一条x轴上，为其中间对齐，设置为-100%
            barWidth: '40%',
            data: []
          }
        ],
        dataZoom: PublicSetEChartVar.setDataZoom,
      }
    }
  },
  props: ['updateOption'],
  mounted() {
    this.$nextTick(() => {
      this.initOption();
      this.resizeCharts(); //设计图表容器
      this.drawLine(); //绘制图表
    })
  },
  watch: {
    updateOption: {
      handler: function(newVal, oldVal) { // 监听外部传入的值,渲染新的的图表数据

        // console.log(1);
        // console.log(newVal);
        this.$set(this.option.xAxis, 'data', newVal.XData);
        this.$set(this.option.series[0], 'data', newVal.YDataAdd);
        this.$set(this.option.series[0], 'name', this.dateSelect.checkWayName);
        this.$set(this.option.series[1], 'data', newVal.YDataRate);
        this.$set(this.option.series[2], 'data', newVal.YDataTongbi);
        this.$set(this.option.series[3], 'data', newVal.YDataHuanbi);
        this.$set(this.option.series[4], 'data', newVal.YDataCount);
        this.$set(this.option.legend, 'data', newVal.legend); //图例名称

        if (newVal.YDataAdd.length == 0 && newVal.YDataRate.length == 0 && newVal.YDataTongbi == 0 && newVal.YDataHuanbi == 0 && newVal.YDataCount == 0) {
          this.noData = true;
        } else {
          this.noData = false;
        }
        //显示与不显示达成率
        let fullPath = this.$route.fullPath;
        if (this.dateSelect.checkWay == '2' && fullPath.indexOf('stock') < 0 && fullPath.indexOf('Area2') < 0) {
          this.$set(this.option.yAxis[1], 'name', '达成率');
        } else {
          this.$set(this.option.yAxis[1], 'name', '');
        }
        //y轴数值太长显示不全问题
        let isShort = newVal.YDataAdd.every((x, index) => {
          return PublicMethods.getStrLeng(x) <= 7
        })
        if (!isShort) {
          this.$set(this.option.grid, 'x', 80)
        } else {
          this.$set(this.option.grid, 'x', 50)
        }

        this.drawLine();
      },
      deep: true
    }
  },
  methods: {
    initOption() {
      let fullPath = this.$route.fullPath;
      if (fullPath.indexOf('stock') > 0 || fullPath.indexOf('Area2') > 0) {
        this.$set(this.option.yAxis[1], 'name', '');
      } else {
        this.$set(this.option.yAxis[1], 'name', '达成率');
      }
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      this.chart = new echarts.init(document.getElementById('myChart'));
      // 绘制图表
      // this.$set(this.option.xAxis,'data',this.updateOption.XData);
      this.chart.setOption(this.option);
      this.chart.on('click', params => {
        this.echartsClicked(params);
      })
    },
    resizeCharts() {
      //根据屏幕宽高设计图表容器
      let chartBox = document.getElementsByClassName('charts')[0];
      let myChart = document.getElementById('myChart');
      chartBox.style.width = screen.width + 'px';
      chartBox.style.height = screen.height / 2.5 + 'px';
      // myChart.style.width = screen.width - 20 + 'px'; 
      // myChart.style.left = 10 + 'px';
      myChart.style.width = screen.width + 'px';
      myChart.style.height = screen.height / 2.5 + 'px';
    },
    echartsClicked(params) {
      console.log(params);
      this.$emit('click', params);
    }
  },
  computed: {
    ...mapState({
      dateSelect: state => state.dateSelect,
    }),
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '../styles/var';
.charts {
  position: relative;
}

.tips {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  font-size: @littleSize;
  color: @lighterColor;
}

</style>
