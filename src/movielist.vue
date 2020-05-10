/* eslint-disable vue/no-parsing-error */
<template>
  <div class="list">

    <movieItem
    v-for="(movie, index) in movies"
    :key="index" :movie='movie'
    />

    </div>

</template>
<script>
import { mapState, mapActions } from 'vuex'
import movieItem from './movieItem.vue'

export default {
  components: {
    movieItem
  },
  computed: {
    ...mapState(['movies'])
    //   movies () {
    //     // eslint-disable-next-line no-unused-expressions
    //     return this.$store.state.movies
    //   }
  },
  methods: {
    ...mapActions(['fetchMovies'])
  },
  mounted () {
    this.fetchMovies()
  }
}
</script>
<style>
.list {
  padding-top: 30px;
  text-align: center;
}
</style>
