<template>
  <div class="btn" @click="$emit('click')">
    <button>{{text}}</button>
  </div>
</template>
<script>

export default {
  name: 'login',
  props:['text']
}

</script>
<style lang="less" scoped="scoped">
@import '../styles/var';

.btn {
  margin: 20px;
  margin-top: 30px;
  button {
    display: block;
    width: 100%;
    background-color: @btnColor;
    border: none;
    color: #fff;
    border-radius: 20px;
    line-height: 44px;
    font-size: @normalSize;
    box-shadow: 5px 5px 10px rgba(240, 131, 0, 0.5);
    outline: none;
    &:active {
      background-color: @activeColor;
    }
  }
}

</style>
