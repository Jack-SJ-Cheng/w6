<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <Loading :active='isLoading'></Loading>
    <div class="container">
      <a class="navbar-brand" href="#">管理後台</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/admin/products"
            >產品列表</router-link
          >
          <router-link class="nav-link" to="/admin/coupons">優惠券</router-link>
          <router-link class="nav-link" to="/admin/orders"
            >訂單列表</router-link
          >
          <a class="nav-link" href="#" @click.prevent="logout">登出</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    logout() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}/logout`;
      this.$http.post(api)
        .then((res) => {
          if (res.data.success) {
            document.cookie = 'hexToken=; expires=; path=/';
            this.$router.push('/login');
            this.isLoading = false;
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&display=swap');

.router-link-exact-active {
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: 700;
}
</style>
