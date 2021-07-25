<template>
  <Navbar ref="navbar"></Navbar>
  <router-view />
  <Footer></Footer>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer,
  },
  mounted() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        this.$refs.navbar.classList.bigLogo = 'd-none';
      } else {
        this.$refs.navbar.classList.bigLogo = 'd-block';
      }
    });
  },
};
</script>
