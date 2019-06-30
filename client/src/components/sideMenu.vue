<template>
  <el-collapse v-model="activeName" accordion>
    <h5>kategori</h5>
    <el-collapse-item title="High Grade 1/144" name="1"></el-collapse-item>
    <el-collapse-item title="Master Grade 1/144" name="2"></el-collapse-item>
    <el-collapse-item title="Perfect Grade 1/60" name="3"></el-collapse-item>
    <el-collapse-item title="Non Grade 1/100" name="4"></el-collapse-item>
  </el-collapse>
</template>


<script>
export default {
  data() {
    return {
      activeName: ""
    };
  }
};
</script>

<style>
</style>
