<template>
  <div class="m-top container">
    <Loading :active="isLoading"></Loading>
    <button
      @click="deleteCart"
      class="btn btn-outline-danger m-2"
      type="button"
    >
      清空購物車
    </button>
    <table class="table align-middle" id="cart">
      <thead>
        <tr>
          <th width="60">分類</th>
          <th>品名</th>
          <th class="text-center">單價</th>
          <th width="50" class="text-center">數量</th>
          <th class="text-center">總價</th>
          <th class="text-end">刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in purchase" :key="item">
          <td>
            <span class="badge bg-secondary">{{ item.product.category }}</span>
          </td>
          <td>{{ item.product.title }}</td>
          <td class="text-center">{{ item.product.price }}</td>
          <td class="text-center">{{ item.qty }}</td>
          <td class="text-center">{{ item.final_total }}</td>
          <td class="text-end">
            <button class="btn text-danger" @click="deleteCartItem(item.id)">
              <i class="fas fa-times"></i>
            </button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td class="text-end" colspan="5">總計</td>
          <td class="text-center">{{ finalTotal }}</td>
        </tr>
      </tfoot>
    </table>
    <div class="d-flex justify-content-end">
      <button type="button" class="btn btn-outline-danger"
      @click="this.$router.push('/about')">填寫收件資料</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      purchase: [],
      finalTotal: '',
      isLoading: false,
    };
  },
  methods: {
    updateCart() {
      this.isLoading = true;
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          this.purchase = res.data.data.carts;
          this.finalTotal = res.data.data.final_total;
          this.isLoading = false;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteCart() {
      this.isLoading = true;
      this.$http
        .delete(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`,
        )
        .then(() => {
          this.updateCart();
          this.isLoading = false;
        });
    },
    deleteCartItem(id) {
      this.isLoading = true;
      this.$http
        .delete(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`,
        )
        .then((res) => {
          if (res.data.success) {
            this.updateCart();
            this.isLoading = false;
          }
        });
    },
  },
  mounted() {
    this.updateCart();
  },
};
</script>
