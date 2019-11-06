<template>
  <div class="addressEdit">
    <!-- 导航栏 -->
    <div class="topNav">
      <span class="iconfont" @click="goBack">&#xe600;</span>
      <div class="title">选择收货地址</div>
    </div>
    <!-- 地址栏列表内容 -->
    <div class="content">
      <van-address-edit
        :area-list="areaList"
        show-postal
        :address-info="addressInfo"
        show-delete
        show-set-default
        @save="onSave"
        @delete="onDelete"
      />
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import areaList from '@/assets/js/area'
import { Toast } from 'vant'
export default {
  name: 'addressEdit',
  components: {},
  data() {
    return {
      areaList,
      addressInfo: {
        name: '熊猫Ewall',
        tel: '13111111111',
        areaCode: '110101',
        addressDetail: '某某街几号几号几号',
        postalCode: '410000'
      }
    }
  },
  mounted() {},
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    ...mapMutations(['saveAddress']),
    // 保存
    onSave(e) {
      let data = {}
      data.name = e.name
      data.tel = e.tel
      data.address = e.province + e.city + e.county + e.addressDetail + ''
      data.addressDetail = e.addressDetail
      data.areaCodeL = e.areaCode
      data.postalCode = e.postalCode
      data.isDefault = e.isDefault
      this.saveAddress(data)
    },
    // 删除
    onDelete(item, index) {
      Toast('delete')
    }
  }
}
</script>
<style lang="less" scoped>
@import '~styles/variables.less';
.addressEdit {
  //导航栏
  .topNav {
    position: relative;
    box-sizing: border-box;
    height: 45px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0 0.24rem;
    background: #fff;
    border-bottom: 1px solid @bgColor;
    line-height: 45px;
    .title {
      font-size: @sizeL;
    }
    .iconfont {
      position: absolute;
      top: 0;
      left: 0;
      font-size: 20px;
      font-weight: bold;
      margin-left: 0.24rem;
    }
  }
}
</style>