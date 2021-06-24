<template>
<Trademark/>
  <Navbar></Navbar>
  <router-view />
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Trademark from '@/components/Trademark.vue';

export default {
  components: {
    Navbar,
    Trademark,
  },
};
</script>

<style lang="scss">
@import "@/assets/all";
</style>
