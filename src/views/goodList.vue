<template>
  <div class="goodlist">
    <!-- 头部标题 -->
    <div class="header">
      <span class="iconfont" @click="goBack()">&#xe600;</span>
      <div class="title">{{$route.query.title}}</div>
      <span class="iconfont" @click="goHome()">&#xe68d;</span>
    </div>
    <div class="filter">
      <div class="filter_item" :class="{on:currentIndex===0}" @click="filterClick(0)">
        <span>综合排序</span>
      </div>
      <div class="filter_item" :class="{on:currentIndex===1}" @click="filterClick(1)">
        <i class="iconfont">&#xe62e;</i>
        <span>销量</span>
      </div>
      <div class="filter_item" :class="{on:currentIndex===2}" @click="filterClick(2)">
        <i class="iconfont">&#xe62e;</i>
        <span>价格</span>
      </div>
      <div class="filter_item" :class="{on:currentIndex===3}" @click="filterClick(3)">
        <i class="iconfont">&#xe615;</i>
        <span>筛选</span>
      </div>
    </div>
    <!-- 商品列表 -->
    <div class="goods">
      <div class="goods_item" v-for="(item,index) in list" :key="index">
        <goods-item
          :img="item.goodsImg"
          :dsec="item.desc"
          :price="item.price"
          :discount="item.discount"
        ></goods-item>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import GoodsItem from '@/components/goodsItem.vue'
export default {
  name: 'GoodList',
  components: {
    GoodsItem
  },
  data() {
    return {
      //工具栏索引
      currentIndex: 0,
      //商品列表
      list: ''
    }
  },
  mounted() {
    this.getGoodsList()
  },
  methods: {
    //获取商品列表数据
    getGoodsList() {
      axios.get('/api/goodsList.json').then(res => {
        if (res.data.code === 200) {
          this.list = res.data.goodslist
        }
        console.log('商品列表的数据：', res)
      })
    },
    // 回退
    goBack() {
      this.$router.go(-1)
    },
    // 回到首页
    goHome() {
      this.$router.push({
        path: '/'
      })
    },
    //筛选栏点击
    filterClick(index) {
      this.currentIndex = index
    }
  }
}
</script>
<style lang="less" scoped>
@import '~styles/variables.less';
.goodlist {
  // 头部标题
  .header {
    box-sizing: border-box;
    height: 45px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.24rem;
    background-color: #fff;
    border-bottom: 1px solid @bgColor;
    .title {
      font-size: @sizeL;
    }
    .iconfont {
      font-size: 20px;
      font-weight: bold;
    }
  }
  // 筛选工具栏
  .filter {
    display: flex;
    flex-direction: row;
    text-align: center;
    border-bottom: 1px solid @bgColor;
    .filter_item {
      flex-grow: 1;
      width: 0.96rem;
      height: 1.01333rem;
      line-height: 1.01333rem;
      font-size: @sizeM;
    }
    .on {
      color: @themeColor;
    }
  }
  // 商品列表
  .goods {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0.213333rem 0.133333rem;
    .goods_item {
      margin-bottom: 0.266667rem;
    }
  }
}
</style>