<template>
  <div class="m-top container">
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
          <td class="text-center">1</td>
          <td class="text-center">{{ item.final_total }}</td>
          <td class="text-end">
            <button class="btn text-danger" @click="deleteCartItem(item.id)">
              <img src="../assets/times-solid.svg" alt="" />
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      purchase: [],
      finalTotal: '',
    };
  },
  methods: {
    updateCart() {
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          this.purchase = res.data.data.carts;
          this.finalTotal = res.data.data.final_total;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteCart() {
      this.$http
        .delete(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`,
        )
        .then(() => {
          this.updateCart();
        });
    },
    deleteCartItem(id) {
      this.$http
        .delete(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`,
        )
        .then((res) => {
          if (res.data.success) {
            this.updateCart();
          }
        });
    },
  },
  mounted() {
    this.updateCart();
  },
};
</script>
