<template>
  <div id="app">
    <navbarApp/>
    <router-view />
  </div>
</template>

<script>
import navbarApp from './components/navbar'

export default {
  data() {
    return{
      
    }
  },
  components: {
    navbarApp
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
