<template>
  <div class="me">
    <!-- 顶部栏目 -->
    <!-- 顶部导航栏 -->
    <div class="topNav">
      <span class="iconfont" @click="goBack">&#xe600;</span>
      <div class="title">我的</div>
      <span class="iconfont" @click="goHome">&#xe68d;</span>
    </div>
    <!-- 头部昵称与背景´ -->
    <div class="userinfo">
      <div class="avatar">
        <img src alt="avatar" />
      </div>
      <div class="nickname">猫吗</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Me',
  components: {},
  data() {
    return {}
  },
  mounted() {},
  computed: {},
  methods: {}
}
</script>
<style lang="less" scoped>
@import '~styles/variables.less';
.me {
  // 顶部栏
  .topNav {
    box-sizing: border-box;
    height: 45px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.24rem;
    background: #fff;
    border-bottom: 1px solid @bgColor;
    .title {
      font-size: @sizeL;
    }
    .iconfont {
      font-size: 20px;
      font-weight: bold;
    }
  }
  .userinfo {
    width: 100%;
    height: 4.53333rem;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .avatar {
      img {
        display: block;
        width: 1.906667rem;
        height: 1.906667rem;
        border-radius: 50%;
        box-shadow: 0 0 20px #29000000;
      }
    }
  }
}
</style>