<template>
  <div id="app">
      <Header/>
 <movielist/>
  </div>
</template>

<script>

import movielist from './movielist.vue'
import Header from './Header.vue'

export default {
  name: 'App',
  components: {
    Header,
    movielist
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
