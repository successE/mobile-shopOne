<template>
  <div class="goodsItem">
    <img :src="img" alt class="goods_img" />
    <div class="goods_desc">{{desc}}</div>
    <div class="goods_price">
      <span class="price_now">¥{{price}}</span>
      <span class="discount">¥{{discount}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'goodsItem',
  props: {
    img: String,
    desc: {
      type: String,
      default: '请输入商品描述'
    },
    price: {
      type: null,
      default: '商品价格'
    },
    discount: {
      type: null,
      default: 'hello'
    }
  }
}
</script>
<style lang="less" scoped>
@import '../assets/styles/variables.less';
.goodsItem {
  width: 4.746667rem;
  .goods_img {
    display: block;
    // padding: 0.13333rem 0.13333rem;
    width: 100%;
    height: 6rem;
  }
  .goods_desc {
    padding: 0.133333rem 0.133333rem;
    font-size: @sizeS;
    white-space: nowrap;
    color: @fontColor1;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .goods_price {
    padding: 0 0.133333rem;
    .price_now {
      font-size: @sizeXL;
      color: @themeColor;
    }
    .discount {
      font-size: @sizeM;
      color: @fontColor2;
      text-decoration: line-through;
      margin-left: 0.213333rem;
    }
  }
}
</style>