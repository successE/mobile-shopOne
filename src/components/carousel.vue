<template>
  <div class="carousel">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(item,index) in swiperData" :key="index">
        <img class="myswiper_img" :src="item" alt />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'carousel',
  props: {
    swiperData: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },
        autoplay: {
          delay: 2500,
          disableOnInteration: false
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>
<style lang="less" scoped>
.carousel {
  /deep/ .swiper-pagination-bullet-active {
    background-color: #fff;
  }
  .myswiper_img {
    width: 100%;
    height: 4rem;
  }
}
</style>