<template>
  <div class="loginRegist">
    {{$store.state.isLogin}} ini state isLogin
    <div class="login">
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="grid-content bg-purple"></div>
        </el-col>

        <el-col v-if="$store.state.isLogin == false" :span="8">
          <h1>Login</h1>
          <el-card class="box-card">
            <el-form>
              <el-form-item label="Email">
                <el-input v-model="loginForm.email" placeholder="Email here"></el-input>
              </el-form-item>
              <el-form-item label="Password">
                <el-input v-model="loginForm.password" type="password" placeholder="Password here"></el-input>
              </el-form-item>
              <el-button type="primary" @click="login">Login</el-button>
            </el-form>
          </el-card>
        </el-col>

        <el-col v-if="$store.state.isLogin == false" :span="8">
          <h1>Register</h1>
          <el-card class="box-card">
            <el-form>
              <el-form-item label="username">
                <el-input v-model="registerForm.username" type="text" placeholder="Username here"></el-input>
              </el-form-item>
              <el-form-item label="Password">
                <el-input
                  v-model="registerForm.password"
                  type="password"
                  placeholder="Password here"
                ></el-input>
              </el-form-item>
              <el-form-item label="Email">
                <el-input v-model="registerForm.email" type="Email" placeholder="Email here"></el-input>
              </el-form-item>
              <el-button>Back</el-button>
              <el-button type="primary" @click="register">Send</el-button>
            </el-form>
          </el-card>
        </el-col>

        <el-col :span="4">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  data() {
    return {
      loginForm: {
        email: "",
        password: ""
      },
      registerForm: {
        username: "",
        password: "",
        email: ""
      }
    };
  },
  methods: {
    async login() {
      // console.log('masuk login')
      // console.log(this.loginForm)
      this.$store
        .dispatch("onLogin", this.loginForm)
        .then(success => {
          console.log(success);
          this.afterLogin();
        })
        .catch(err => {
          console.log(err);
        });
      // this.afterLogin()
    },
    register() {
      console.log("terjedor");
      console.log(this.registerForm);
      this.$store.dispatch("onRegister", this.registerForm);
    },
    afterLogin() {
      if (this.isLogin === true) {
        console.log("kesini");
        this.$router.push("/shop");
      } else {
        console.log("ke else");
        this.$router.push("/about");
      }
    }
  },
  created() {},
  computed: {
    ...mapState({
      isLogin: state => state.isLogin
    })
  }
};
</script>

<style>
</style>
