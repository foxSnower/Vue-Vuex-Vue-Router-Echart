//设置字符串最大长度====超过此长度字体变小
const setScalMaxLength = 9;
//设置需要重新登录的时长，1分钟=(1*60*1000)毫秒
const setResetLoginTime = 60000 * 60;
//设置选择品牌,车系内容最大长度====超过此长度字体变小
const setSelectMaxLength = 5;
// GBK字符集实际长度计算
const getStrLeng = (str) => {
  var realLength = 0;
  var len = str.length;
  var charCode = -1;
  for (var i = 0; i < len; i++) {
    charCode = str.charCodeAt(i);
    if (charCode >= 0 && charCode <= 128) {
      realLength += 1;
    } else {
      // 如果是中文则长度加2
      realLength += 2;
    }
  }
  return realLength;
}

//获取当前时间
const getCurTime = () => {
  let dd = new Date();
  let y = dd.getFullYear();
  let m = dd.getMonth() + 1; //获取当前月份的日期
  let d = dd.getDate();
  let h = dd.getHours();
  let mm = dd.getMinutes();
  if (m < 10) m = "0" + m;
  if (d < 10) d = "0" + d;
  if (h < 10) h = "0" + h;
  if (mm < 10) mm = "0" + mm;
  return y + '-' + m + '-' + d + ' ' + h + ':' + mm;
}

const getCurDay = () => {
  let dd = new Date();
  let y = dd.getFullYear();
  let m = dd.getMonth() + 1; //获取当前月份的日期
  let d = dd.getDate();
  return y + '-' + m+ '-' + d ;
}
//获取当前月份
const getCurMonth = () => {
  let dd = new Date();
  let y = dd.getFullYear();
  let m = dd.getMonth() + 1; //获取当前月份的日期
  if (m < 10) m = "0" + m;
  return y + '-' + m;
}
//获取当前年
const getCurYear = () => {
  let dd = new Date();
  let y = dd.getFullYear();
  return y;
}
/**
 * [获取毫秒数]
 */
const formatMs = (time) => {
  if (time != null) {
    let formatMs = time.replace(new RegExp("-", "gm"), "/");
    formatMs = new Date(formatMs).getTime(); //创建时间毫秒数
    return formatMs
  }
}

const formatZero = (val) =>{
  if(parseFloat(val)<10){
    return '0' + val
  }else{
    return val
  }
}

export default {
  setScalMaxLength,
  setResetLoginTime,
  setSelectMaxLength,
  getStrLeng,
  getCurTime,
  getCurDay,
  getCurMonth,
  getCurYear,
  formatMs,
  formatZero
}
