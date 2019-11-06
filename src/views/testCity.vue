<template>
  <div class="testCity">
    <router-link to="/test">返回test页面</router-link>
    <div class="content">
      <select name v-model="selected">
        <option value disabled>请选择</option>
        <option>杭州</option>
        <option>广州</option>
        <option>长沙</option>
      </select>
      <span class="btn" @click="click(selected)">提交</span>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  name: 'testCity',
  components: {},
  data() {
    return {
      selected: ''
    }
  },
  mounted() {},
  methods: {
    click(city) {
      // this.$store.dispatch('changeCity', city)
      // 通过 mapActions 辅助函数 ， 我们就可以将this.changeCity() 映射为this.$store.dispatch('changeCity')
      // this.changeCity(city)
      // 通过 mapActions 辅助函数，我们就可以将  this.changeCity() 映射为 this.$store.commit('chagneCity')
      this.changeCity(city)
    },
    ...mapMutations(['changeCity'])
  }
}
</script>
<style lang="less" scoped>
@import '~styles/variables.less';
.testCity {
  font-size: 16px;
  padding: 5px;
  .content {
    padding-top: 20px;
    margin-top: 5px;
    border-top: 1px dotted #000;
    .btn {
      color: #fff;
      font-size: 14px;
      padding: 5px 20px;
      background-color: #de3d96;
      border-radius: 25px;
    }
  }
}
</style>