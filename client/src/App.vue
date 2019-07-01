<template>
  <div id="app">
    <navbarApp />
    <router-view />
  </div>
</template>

<script>
import navbarApp from "./components/navbar";
import ax from "./server";

export default {
  data() {
    return {

    };
  },
  components: {
    navbarApp
  },
  created() {
    if (localStorage.getItem("access_token")) {

      let data = {
        isLogin : true,
        role: localStorage.getItem('role')
      }
      // console.log(localStorage.getItem("access_token"), "ini access_token");
      this.$store.commit("setLogin", data);
      ax.defaults.headers.common["access_token"] = localStorage.getItem(
        "access_token"
      );
    }
  }
};
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
