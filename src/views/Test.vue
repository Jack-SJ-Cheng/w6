<template>
  <div class="m-top">
    <button type="button" class="btn btn-primary" @click="loadingTime">
      loadin
    </button>
    <Loading :active="isLoading"></Loading>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    loadingTime() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 3000);
    },
  },
};
</script>
