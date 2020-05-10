<template>
  <div class="movie">
    <div class="cover" :style="coverStyle"></div>
    <span class="title">{{movie.name}}</span>
    <span class="price">{{movie.price}}</span>
    <span class="type">{{movie.type}}</span>
    <div :class="btnClass" @click="addToCart(movie)">{{btnLabel}}</div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  props: ['movie'],
  computed: {
    ...mapGetters(['isMovieInCart']),
    inCart () {
      return this.isMovieInCart(this.movie)
    },
    btnClass () {
      return {
        buy: true,
        bought: this.inCart
      }
    },
    btnLabel () {
      return this.inCart ? '已加入購物車' : '加入購物車'
    }
    // type() {
    //   return this.movie.type.map(user => user.type).join(",");
    // }
    // coverStyle () {
    //   return {
    //     backgroundImage: `url('${this.movie.cover}')`
    //   }
    // }
  },
  methods: {
    ...mapMutations(['addToCart']),
    coverStyle () {
      return {
        backgroundImage: `url('${this.movie.cover}')`
      }
    }
  }
}
</script>
<style scoped>
.movie {
  display: inline-block;
  width: 200px;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 2px 2px 15px #999;
  margin: 10px;
  vertical-align: top;
}
.cover {
  width: 100%;
  height: 120px;
  background: center center;
  background-size: cover;
}
span {
  display: block;
  padding: 6px;
}
.title {
  font-size: 0.9em;
  height: 30px;
  color: #333;
  text-align: left;
}
.price {
  font-size: 0.8em;
  float: left;
  color: #178fac;
}
.price:before {
  content: "$";
}
.type {
  font-size: 0.7em;
  float: right;
  line-height: 1.7em;
  color: #178fac;
}
.buy {
  clear: both;
  text-align: center;
  padding: 6px;
  font-size: 0.7em;
  background-color: #dee;
  cursor: pointer;
}
.buy:hover {
  background-color: #cee;
}
.buy.bought {
  background-color: rgb(240, 22, 105);
}
</style>
