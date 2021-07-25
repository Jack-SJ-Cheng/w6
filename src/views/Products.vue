<template>
  <div class="container m-top">
    <Loading :active="isLoading"></Loading>
    <div class="row">
      <div class="col-2">
        <ul class="list-group list-group-flush text-center sticky-top pt-5">
          <a
            class="list-group-item list-group-item-action"
            @click="cate = 'all'"
            :class="{ active: cate === 'all' }"
            >全部</a
          >
          <a
            class="list-group-item list-group-item-action"
            @click="cate = '武器'"
            :class="{ active: cate === '武器' }"
            >武器</a
          >
          <a
            class="list-group-item list-group-item-action"
            @click="cate = '防具'"
            :class="{ active: cate === '防具' }"
            >防具</a
          >
          <a
            class="list-group-item list-group-item-action"
            @click="cate = '道具'"
            :class="{ active: cate === '道具' }"
            >道具</a
          >
          <a
            class="list-group-item list-group-item-action"
            @click="cate = '項鍊'"
            :class="{ active: cate === '項鍊' }"
            >項鍊</a
          >
        </ul>
      </div>
      <div class="col-10">
        <div class="row">
          <div class="col-4 mb-2" v-for="item in products" :key="item">
            <div class="card h-100">
              <img
                :src="item.imageUrl"
                alt=""
                style="height: 18rem; object-fit: cover"
                class="card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title">{{ item.title }}</h5>
                <p class="card-text">
                  {{ item.description }}
                </p>
              </div>
              <div class="card-body">
                <strong>
                  NT. {{ item.price }} -
                </strong>
              </div>
              <div class="card-end p-2">
                <div
                  class="btn-group btn-group-sm w-100"
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <pagination v-if="cate === 'all'" :page="pagination" @get-data="getData"></pagination>
    </div>
  </div>
  <ProductModal
    ref="productModal"
    :info="productInfo"
    @add-cart="addCart"
  ></ProductModal>
</template>

<script>
import Pagination from '../components/Pagination.vue';
import ProductModal from '../components/ProductModal.vue';

export default {
  inject: ['emitter'],
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
      isLoading: false,
      addLoading: false,
      cate: 'all',
    };
  },
  methods: {
    openModal() {
      this.$refs.productModal.openModal();
    },
    getData(page = 1) {
      this.isLoading = true;
      this.$http
        .get(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?page=${page}`,
        )
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products;
            this.pagination = res.data.pagination;
            this.isLoading = false;
            window.document.body.scrollTop = 0;
            window.document.documentElement.scrollTop = 0;
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
      this.isLoading = true;
      this.$http
        .post(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`,
          {
            data: { product_id: id, qty },
          },
        )
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            this.$messageTrans(res);
          }
        })
        .catch((err) => console.log(err));
    },
  },
  watch: {
    cate() {
      if (this.cate === 'all') {
        this.getData();
      } else {
        this.isLoading = true;
        let temp = [];
        const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
        this.$http.get(api)
          .then((res) => {
            temp = res.data.products;
            this.products = temp.filter((e) => e.category === this.cate);
            this.isLoading = false;
            window.document.body.scrollTop = 0;
            window.document.documentElement.scrollTop = 0;
          });
      }
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
