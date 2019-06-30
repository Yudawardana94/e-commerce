<template>
  <div class="home">
    <carrouselApp/>
    <h1>landingPage</h1>
    {{ $store.state.message}} <br>
    {{ $store.state.lagi}}
    <loginRegist />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import carrouselApp from '../components/carrousel.vue'
import loginRegist from '../components/loginRegister.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld,
    carrouselApp,
    loginRegist
  },
};
</script>
