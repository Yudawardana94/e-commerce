<template>
  <el-carousel indicator-position="outside" class="carrApp" :interval=4000>
    <el-carousel-item v-for="(item, i) in background" :key="i">
    <h2 v-if="i === 0" style="background-color: lightblue;background-image: url()"></h2>
    <h2 v-if="i === 1" style="background-image: url()">  </h2>
    <h2 v-if="i === 2" style="background-image: url()">  </h2>
    <h2 v-if="i === 3" style="background-image: url()">  </h2>
    <h2 v-if="i === 4" style="background-image: url()">  </h2>
    <h2 v-if="i === 5" style="background-image: url()">  </h2>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data(){
    return {
      background: [
        'http://www.customecha.com/wp-content/uploads/2019/06/62035392_2348556422046928_1639637888763166720_o.jpg',
        '',
        '',
        ''
      ]
    }
  }
}
</script>

<style>
  .el-carousel__item h3 {
    /* color: #475669; */
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
    background-size: cover;
    background-image: url()
  }
img {
  width: auto;
  margin: 0px 0px,
}
.carrApp{
    margin: 0px 15px;
}

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>