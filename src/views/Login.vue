<template>
  <div class="background w-100 min-vh-100">
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-5 p-4">
          <h3 class="mb-4">
            勇者倉庫 <br />
            後台管理系統
          </h3>
          <form @submit.prevent="logIn">
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="name@example.com"
                autofocus
                required
                v-model="user.username"
              />
              <label for="email" class="form-label">
                E-mail
              </label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="請輸入密碼"
                required
                v-model="user.password"
              />
              <label for="password" class="form-label">
                password
              </label>
            </div>
            <button
              class="btn btn-primary w-100 mt-3"
              type="submit"
            >
              登入
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    logIn() {
      this.$http
        .post(`${process.env.VUE_APP_API}/admin/signin`, this.user)
        .then((res) => {
          if (res.data.success) {
            const { token, expired } = res.data;
            document.cookie = `braveToken=${token};expires=${new Date(expired)};`;
            this.$router.push('/admin/products');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.background{
  background-image: url(https://images.unsplash.com/photo-1511866423212-1f95ebd1541c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80);
  background-size: cover;
}
</style>
