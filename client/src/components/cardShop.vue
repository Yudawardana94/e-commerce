<template>
  <el-row>
    <el-col :span="6" v-for="(product,i) in allProduct" :key="i">
      <el-card class="cardThing" :body-style="{ padding: '0px' }">
        <!-- <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          class="image"
        /> -->
        <p> {{ product.image }} </p>
        <div style="padding: 14px;">
          
          <a href="/#">{{ product.name }}</a>
          <div class="bottom clearfix">
            <p> {{ product.description}} <br><br> {{ product.price }} <br><br> {{ product.stock}} </p>
            <el-button type="text" class="button">Operating</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import cardApp from "../components/cardShop.vue";
import sideMenu from "../components/sideMenu.vue";
import { mapState } from 'vuex'

export default {
  data() {
    return {
      currentDate: new Date()
    };
  },
  components: {
    cardApp,
    sideMenu
  },
  methods: {
    inputData() {
      console.log("mounted");
    }
  },
  computed: {
    ...mapState(['allProduct'])
  },
  created() {
    this.$store.dispatch("readData");
    this.inputData()
  }
};
</script>
<style>
.time {
  font-size: 13px;
  color: #999;
}

.cardThing{
    margin: 5px;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>
