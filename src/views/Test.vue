<template>
  {{ pa }}
</template>

<script>
export default {
  data() {
    return {
      pa: [],
    };
  },
  mounted() {
    this.$http
      .get(
        `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?page=1`,
      )
      .then((res) => {
        console.log(res);
        this.pa = res.data.products;
      });
  },
};
</script>
