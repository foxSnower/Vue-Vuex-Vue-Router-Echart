import objectAssign from 'object-assign'//也就是合并多个对象并返回一个结果，如有相同的属性时，后的对象会覆盖前对象的值。

const mergeOptions = function ($vm, options) {
  const defaults = {}
  for (let i in $vm.$options.props) {
    if (i !== 'value') {
      defaults[i] = $vm.$options.props[i].default
    }
  }
  const _options = objectAssign({}, defaults, options)
  for (let i in _options) {
    $vm[i] = _options[i]
  }
}

export {
  mergeOptions
}
//暂时没发现有什么用：也是用于合并我们写的东西和vue本身的东西
