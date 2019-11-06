<template>
  <div class="goodsDetail">
    <router-link to="/testCity">返回testCity页面</router-link>
    <div>获取的 vuex 中的值： {{this.currentCity}}</div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'goodsDetail',
  components: {},
  data() {
    return {}
  },
  mounted() {},
  computed: {
    // 使用 mapState 辅助函数帮助我们生成计算属性
    // 将 this.city 映射为 this.$store.state.city
    ...mapGetters(['currentCity'])
  },
  methods: {}
}
</script>
<style lang="less" scoped>
@import '~styles/variables.less';
</style>