<template>
  <Navbar></Navbar>
  <router-view />
  <Footer></Footer>
  <Toast></Toast>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import emitter from './assets/javascript/mitt';
import Toast from './components/Toast.vue';

export default {
  provide() {
    return {
      emitter,
    };
  },
  components: {
    Navbar,
    Footer,
    Toast,
  },
};
</script>

<style lang="scss">
@import "@/assets/all";
</style>
