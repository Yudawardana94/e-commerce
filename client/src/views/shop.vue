<template>
  <div class="shop">
    <h1>Shop</h1>
    <el-row>
      <el-col id="mainSide" :span="4">
        <div class="grid-content bg-purple-dark">
          <sideMenu />
        </div>
      </el-col>
      <el-col id="mainSide2" :span="20">
        <div class="grid-content bg-purple-dark">
          <cardApp />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import cardApp from "../components/cardShop.vue";
import sideMenu from "../components/sideMenu.vue";

export default {
  components: {
    cardApp,
    sideMenu
  }
}
</script>

<style>
.el-row {
  margin-bottom: 20px;
}
#mainSide {
  border-radius: 4px;
  border: 1px solid black;
}
#mainSide2 {
  border-radius: 4px;
  border: 1px solid black;
  padding: 20px;
}
</style>
