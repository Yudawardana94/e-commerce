<template>
  <div class="adminPage">
    <h1>AdminPage</h1>
    <el-button @click="onLogout">logout</el-button>
    <el-row class="addItem">
      <el-col :span="6">
        <div class="grid-content bg-purple-dark"></div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-dark">
          <el-form>
            <el-form-item label="Product Name">
              <el-input v-model="addItemForm.name"></el-input>
            </el-form-item>
            <el-form-item label="Category">
              <el-input v-model="addItemForm.category"></el-input>
            </el-form-item>
            <el-form-item label="Description">
              <el-input v-model="addItemForm.description"></el-input>
            </el-form-item>
            <el-form-item label="Stock">
              <el-input v-model="addItemForm.stock"></el-input>
            </el-form-item>
            <el-form-item label="Price">
              <el-input v-model="addItemForm.price"></el-input>
            </el-form-item>
            <el-upload
              class="upload-demo"
              action="http://localhost:3000/pdoructs/add"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="addItemForm.image"
              list-type="picture"
            >
              <el-button size="small" type="primary">Click to upload</el-button>
              <div slot="tip" class="el-upload__tip">jpg/png files with a size less than 500kb</div>
            </el-upload>
            <el-button type="primary">Upload</el-button>
            <el-button type="primary" @click="addItem">Add</el-button>
          </el-form>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-dark"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addItemForm: {
        name: "",
        category: "",
        description: "",
        stock: 0,
        price: 0,
        image: []
      }
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    open() {
      this.$notify.success({
        title: "Success",
        message: "Success input new Item. "
      });
    },
    handlePreview(file) {
      console.log(file);
    },
    addItem() {
      this.open()
      console.log(this.addItemForm);
      this.$store.dispatch("addItem", this.addItemForm);
      this.addItemForm.name = ''
      this.addItemForm.description = ''
      this.addItemForm.category = ''
      this.addItemForm.stock = 0
      this.addItemForm.price = 0
      this.addItemForm.image = []
    },
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
