<template>
  <div class="myCart">
    <h1>mycart</h1>
    <el-row :gutter="20">
      <el-col :span="2">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="10">
        <div
          class="grid-content bg-purple"
          v-for="(item,i) in $store.state.myCart"
          :key="i"
          style="border: 1px solid black"
        >
          <h2>product :{{item.productId}}</h2>
          <h5>{{ item.ammount }}</h5>
        </div>
      </el-col>
      <el-col :span="10">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("getMyCart");
  }
};
</script>

<style>
</style>
