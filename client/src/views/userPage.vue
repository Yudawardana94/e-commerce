<template>
  <div class="user">
    <h1>User</h1>
    <el-button @click="onLogout">logout</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    onLogout() {
      console.log("masuk logout");
      localStorage.removeItem("access_token");
      this.$store.commit("logOut", false);
      this.$router.push("/");
    }
  }
};
</script>

<style>
</style>
