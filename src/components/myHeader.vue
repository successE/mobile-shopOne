<template>
  <div class="myHeader">
    <div class="left">
      <img src="@/assets/logo1.png" class="logo" />
      <span class="title">Hxx-Luxury Store</span>
    </div>
    <div class="right">
      <span class="iconfont">&#xe605;</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'myHeader',
  data() {
    return {}
  }
}
</script>
<style lang="less" scoped>
.myHeader {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 1.066667rem;
  padding: 0 0.13333rem;
  .left {
    display: flex;
    flex-direction: row;
    align-items: center;
    .logo {
      width: 0.8rem;
      height: 0.8rem;
    }
    .title {
      padding-left: 0.13333rem;
      font-size: 0.4rem;
      color: #8e8e8e;
    }
  }
  .right {
    font-size: 0.5rem;
  }
}
</style>