<template>
  <div class="container">
    <Loading :active="isLoading"></Loading>
    <table class="table mt-3 align-middle">
      <thead>
        <tr>
          <th class="text-center" width="120">訂單日期</th>
          <th class="text-center">姓名</th>
          <th class="text-center" width="120">付款狀態</th>
          <th class="text-center">訂單金額</th>
          <th class="text-center" width="80">查看細節</th>
          <th class="text-center" width="80">刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orders" :key="item">
          <td class="text-center">
            {{ $timeTransformer(item.create_at) }}
          </td>
          <td class="text-center">{{ item.user.name }}</td>
          <td class="text-center">
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                :id="`paidSwitch${item.id}`"
                v-model="item.is_paid"
                @change="updatePaid(item)"
              />
              <span v-if="item.is_paid" class="text-success">已付款</span>
              <span v-else class="text-danger">未付款</span>
            </div>
          </td>
          <td class="text-center">
            {{ $toCurrency(item.total) }}
          </td>
          <td class="text-center">
            <button
              class="btn text-primary"
              @click="openModal(item)"
              type="button"
            >
              <span class="material-icons"> find_in_page </span>
            </button>
          </td>
          <td class="text-center">
            <button class="btn text-danger" @click="openDeleteModal(item)">
              <span class="material-icons"> delete_outline </span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination :page="pagination" @get-data="getData"></Pagination>
    <OrderModal ref="orderModal" :order="order"></OrderModal>
    <DeleteOrderModal ref="deleteModal" :order="order" @delete='deleteOrder'></DeleteOrderModal>
  </div>
</template>

<script>
import Pagination from '../../components/Dashboard/Pagination.vue';
import OrderModal from '../../components/Dashboard/OrderModal.vue';
import DeleteOrderModal from '../../components/Dashboard/DeleteOrderModal.vue';

export default {
  components: {
    OrderModal,
    Pagination,
    DeleteOrderModal,
  },
  data() {
    return {
      orders: [],
      pagination: {},
      order: [],
      isLoading: false,
    };
  },
  methods: {
    getData(page = 1) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`;
      this.$http
        .get(api)
        .then((res) => {
          this.orders = res.data.orders;
          this.pagination = res.data.pagination;
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    openModal(item) {
      this.$refs.orderModal.openModal();
      this.order = JSON.parse(JSON.stringify(item));
    },
    openDeleteModal(item) {
      this.$refs.deleteModal.openModal();
      this.order = JSON.parse(JSON.stringify(item));
    },
    updatePaid(item) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`;
      const paid = {
        is_paid: item.is_paid,
      };
      this.$http.put(api, { data: paid }).then(() => {
        this.isLoading = false;
      });
    },
    deleteOrder(id) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${id}`;
      this.$http.delete(api).then(() => {
        this.isLoading = false;
        this.getData(this.pagination.current_page);
      }).catch();
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
