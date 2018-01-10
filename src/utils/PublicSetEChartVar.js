//配置图表的风格 
let setColors = ['#5793f3', '#ccc', '#ff797a', '#ff797a']; //4种图的颜色
let setAxisLineX = { lineStyle: { color: '#ccc' } }; //X轴线的颜色
let setAxisLineY = { lineStyle: { color: 'transparent' } }; //Y轴线的颜色
let setBarColors = { //柱状图的颜色
  normal: {
    color: function(params) {
      // build a color map as your need.
      // var colorList = [
      //   '#ff797a', '#ffb55e', '#21dacf', '#51acff', '#d376ff',
      //   '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
      //   '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0'
      // ];
      var colorList = [
        '#d376ff', '#d376ff', '#d376ff', '#d376ff', '#d376ff', '#d376ff', '#d376ff', '#d376ff', '#d376ff'
      ];
      return colorList[params.dataIndex]
    },
  }
};
let setLineColors = [{
  normal: {
    lineStyle: {
      color: '#ccc'
    }
  }
}, {
  normal: {
    lineStyle: {
      color: '#999'
    }
  }
}]
let setSplitLine = { show: false }; //垂直参考线是否显示
let setAxisTick = { show: false }; //坐标轴刻度相关设置

// let setSplitLine = { show: true }; //垂直参考线是否显示
// let setAxisTick = { show: true }; //坐标轴刻度相关设置

let setTextStyle = { color: '#999' }; //字体颜色
let setTooltip = { trigger: 'axis'}; //提示框

let setDataZoom = [{ // 这个dataZoom组件，默认控制x轴。
    type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
    start: 0, // 左边在 10% 的位置。
    end: 100, // 右边在 100% 的位置。
    show: false
  },
  { // 这个dataZoom组件，也控制x轴。
    type: 'inside', // 这个 dataZoom 组件是 inside 型 dataZoom 组件
    start: 0, // 左边在 10% 的位置。
    end: 100, // 右边在 100% 的位置。
    show: false
  }
]; //区域缩放

export default {
  setLineColors,
  setColors,
  setTooltip,
  setBarColors,
  setAxisLineX,
  setAxisLineY,
  setSplitLine,
  setAxisTick,
  setTextStyle,
  setDataZoom
}
