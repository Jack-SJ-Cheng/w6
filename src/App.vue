<template>
  <router-view />
  <Toast></Toast>
</template>

<script>
import emitter from './assets/javascript/mitt';
import Toast from './components/Toast.vue';

export default {
  provide() {
    return {
      emitter,
    };
  },
  components: {
    Toast,
  },
};
</script>

<style lang="scss">
@import "@/assets/all";
</style>
