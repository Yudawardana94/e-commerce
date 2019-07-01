<template>
  <el-row>
    <el-col :span="6" v-for="(product,i) in allProduct" :key="i">
      <el-card class="cardThing" :body-style="{ padding: '0px' }">
        <img v-bind:src="product.image" class="image" />
        <!-- <p> {{ product.image }} </p> -->
        <div style="padding: 14px;">
          <a href="/#">{{ product.name }}</a>
          <div class="bottom clearfix">
            <p>
              Price: {{ product.price }}
              <br />
              <br />
              Stock: {{ product.stock}}
            </p>
            <el-button
              type="text"
              class="button"
              v-if="$store.state.role == 'Admin'"
              @click="deleteItem(product._id)"
            >DeleteProduct</el-button>
            <el-button type="text" class="button" @click="addToCart(product._id)">add To Cart</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import cardApp from "../components/cardShop.vue";
import sideMenu from "../components/sideMenu.vue";
import { mapState } from "vuex";

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
    },
    open2() {
      this.$message({
        message: "Congrats, this is a success message.",
        type: "success"
      });
    },
    addToCart(id) {
      this.open2()
      console.log("add to cart");
      console.log(id);
      let sendToCart = {
        productId: id,
        ammount: 1
      };
      this.$store.dispatch("addToCart", sendToCart);
    },
    deleteItem(id) {
      console.log("want to delete");
      console.log(id);
      this.$store.dispatch("deleteItem", id);
    }
  },
  computed: {
    ...mapState(["allProduct"])
  },
  created() {
    this.$store.dispatch("readData");
    this.inputData();
  }
};
</script>
<style>
.time {
  font-size: 13px;
  color: #999;
}

.cardThing {
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
