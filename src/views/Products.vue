<template>
  <table class="table align-middle">
    <thead>
      <tr>
        <th width="150" class="text-center">圖片</th>
        <th>商品名稱</th>
        <th width="150">價格</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item">
        <td class="text-center">
          <div
            style="
              height: 120px;
              background-size: cover;
              background-position: center;
            "
            :style="{ backgroundImage: `url(${item.imageUrl})` }"
          ></div>
        </td>
        <td>{{ item.title }}</td>
        <td>
          <del class="h6">原價{{ item.origin_price }}</del>
          <p class="h5">特價{{ item.price }}</p>
        </td>
        <td class="text-end">
          <div
            class="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example"
          >
            <button
              @click="getInfo(item.id)"
              type="button"
              class="btn btn-outline-success"
            >
              查看更多
            </button>
            <button
              type="button"
              class="btn btn-outline-danger"
              @click="addCart(item.id, 1)"
            >
              加入購物車
            </button>
          </div>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="4"></td>
      </tr>
    </tfoot>
  </table>
  <pagination :page="pagination" @get-data="getData"></pagination><br />
  <ProductModal ref="productModal"
    :info="productInfo"
    @add-cart="addCart"
  ></ProductModal>
</template>

<script>
import Pagination from '../components/Pagination.vue';
import ProductModal from '../components/ProductModal.vue';

export default {
  components: {
    Pagination,
    ProductModal,
  },
  data() {
    return {
      user: {
        email: '',
        name: '',
        tel: '',
        address: '',
      },
      productInfo: [],
      products: [],
      purchase: [],
      pagination: [],
      message: '',
    };
  },
  methods: {
    openModal() {
      this.$refs.productModal.openModal();
    },
    getData(page = 1) {
      this.$http
        .get(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?page=${page}`,
        )
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products;
            this.pagination = res.data.pagination;
          }
        })
        .catch((err) => console.log(err));
    },
    getInfo(id) {
      this.$http
        .get(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`,
        )
        .then((res) => {
          this.productInfo = res.data.product;
          this.openModal();
        })
        .catch((err) => console.log(err));
    },
    addCart(id, qty) {
      this.$http
        .post(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`,
          {
            data: { product_id: id, qty },
          },
        )
        .then((res) => {
          if (res.data.success) {
            this.updateCart();
          }
        })
        .catch((err) => console.log(err));
    },
    updateCart() {
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          this.purchase = res.data.data.carts;
          console.log(res.data.data.carts);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    sendOrder() {
      const data = {
        data: {
          user: this.user,
          message: this.message,
        },
      };
      this.$http
        .post(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`,
          data,
        )
        .then((res) => {
          console.log(res);
          this.updateCart();
          this.user = {
            email: '',
            name: '',
            tel: '',
            address: '',
          };
          this.message = '';
        })
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.getData();
    this.updateCart();
  },
};
</script>
