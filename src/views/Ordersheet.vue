<template>
  <div class="container m-top d-flex justify-content-center">
    <Loading :active="isLoading"></Loading>
    <table class="table">
      <thead>
        <td colspan="3"><div class="display-5 text-center">訂單列表</div></td>
        <tr>
          <th class="text-center">訂單日期</th>
          <th class="text-center">總價</th>
          <th class="text-center">狀態</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item) in orders" :key="item">
          <td class="text-center">{{ transDate(item.create_at) }}</td>
          <td class="text-center">{{ item.total }}</td>
          <td v-if="item.is_paid" class="text-success text-center">已付款</td>
          <td v-if="!item.is_paid" class="text-danger text-center">未付款</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: [],
      isLoading: false,
    };
  },
  methods: {
    getOrders(page = 1) {
      this.isLoading = true;
      this.$http
        .get(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/orders?page=${page}`,
        )
        .then((res) => {
          console.log(res);
          this.orders = res.data.orders;
          this.isLoading = false;
        });
    },
    transDate(time) {
      const localDate = new Date(time * 1000);
      return localDate.toLocaleDateString();
    },
  },
  mounted() {
    this.getOrders();
  },
};
</script>
