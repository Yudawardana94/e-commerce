<template>
  <div id="nav">
    <el-row :gutter="10">
      <el-col :xs="10" :sm="10" :md="10" :lg="10" :xl="10">
        <div class="grid-content left">
          <router-link to="/">Home</router-link>|
          <router-link to="/about">About</router-link>|
          <router-link to="/shop">Shop</router-link>
        </div>
      </el-col>
      <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
        <div class="grid-content">Logo</div>
      </el-col>
      <el-col :xs="10" :sm="10" :md="10" :lg="10" :xl="10">
        <div class="grid-content right">
          <router-link to="/myCart">Mycart</router-link>
          <router-link v-if="$store.state.role === 'Admin' " to="/admin">profile</router-link>
          <router-link v-if="$store.state.role === 'Customer' " to="/user">profile</router-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
#nav {
  margin-top: 25px;
  margin-bottom: -15px;
  /* border: 1px solid black; */
}
.el-col {
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  /* align-items: center; */
}
.grid-content.left {
  text-align: left;
  margin-left: 35px;
}
.grid-content.right {
  text-align: right;
  margin-right: 35px;
}
</style>
