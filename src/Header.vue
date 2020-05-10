<template>
  <div class="header">
    <div class="cart">
      <span>購物車內:</span>
      <span class="lesson">{{movie}}</span>
      <span>套影片，共</span>
      <span class="price">{{price}}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    // movie () {
    //   return 0
    // },
    // price () {
    //   return 0
    // }
    ...mapGetters({
      movie: 'movieInCart',
      price: 'priceseIncart'

    })
  }
}
</script>

<style scoped>
span{
  display: inline-block;
  padding: 0;
}
.header{
  position: fixed;
  width: 100%;
  padding: 6px 8px;
  box-sizing: border-box;
  background-color: #419cb8;
  font-size: .9em;
  color: white;
  text-shadow: 1px 1px 1px rgba(0,0,0,.7);
}
.lessons, .price{
  font-weight: bolder;
  color: #ffc;
}
</style>
