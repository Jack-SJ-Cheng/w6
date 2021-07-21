<template>
  <div>
    <AdminNavbar></AdminNavbar>
  </div>
  <router-view></router-view>
</template>

<script>
import AdminNavbar from '@/components/Dashboard/AdminNavbar.vue';

export default {
  components: {
    AdminNavbar,
  },
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)braveToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = `${token}`;
    const api = `${process.env.VUE_APP_API}/api/user/check`;
    this.$http.post(api)
      .then((response) => {
        if (!response.data.success) {
          this.$router.push('/login');
          this.$messageTrans(response);
        }
      }).catch((err) => {
        console.log(err);
      });
  },
};
</script>
