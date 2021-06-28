<template>
  <div class="m-top container">
    <Loading :active="isLoading"></Loading>
    <div class="row justify-content-center">
      <div class="col-lg-8 col-sm-9">
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item mb-3">
            <h2 class="accordion-header" id="flush-headingOne">
              <button
                class="accordion-button collapsed bg-light fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                檢視訂單 <br> 總價: {{finalTotal}}
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                <table class="container">
                  <thead>
                    <tr>
                      <th class="text-center">名稱</th>
                      <th class="d-none d-sm-block text-center">單價</th>
                      <th class="text-center">數量</th>
                      <th class="text-center">總價</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in purchase" :key="item">
                      <td class="text-center">{{ item.product.title }}</td>
                      <td class="d-none d-sm-block text-center">{{ item.product.price }}</td>
                      <td class="text-center">{{ item.qty }}</td>
                      <td class="text-center">{{ item.final_total }}</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colspan="2" class="text-end fw-bold">總計</td>
                      <td class="text-end fw-bold">{{ finalTotal }}</td>
                      <td class="text-center fw-bold">元</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-9 col-sm-6">
        <Form v-slot="{ errors }">
          <div class="mb-3">
            <label for="name" class="form-label">收件人姓名</label>
            <Field
              id="name"
              name="收件人姓名"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['收件人姓名'] }"
              placeholder="請輸入 收件人姓名"
              rules="required"
              v-model="user.name"
            ></Field>
            <error-message
              name="收件人姓名"
              class="invalid-feedback"
            ></error-message>
          </div>
          <div class="mb-3">
            <label for="tel" class="form-label">收件人電話</label>
            <Field
              id="tel"
              name="收件人電話"
              type="tel"
              class="form-control"
              :class="{ 'is-invalid': errors['收件人電話'] }"
              placeholder="請輸入 收件人電話"
              rules="required|min:9"
              v-model="user.tel"
            ></Field>
            <error-message
              name="收件人電話"
              class="invalid-feedback"
            ></error-message>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <Field
              id="email"
              name="email"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors['email'] }"
              placeholder="請輸入 Email"
              rules="email|required"
              v-model="user.email"
            ></Field>
            <error-message
              name="email"
              class="invalid-feedback"
            ></error-message>
          </div>
          <div class="mb-3">
            <label for="address" class="form-label">收件人地址</label>
            <Field
              id="address"
              name="收件人地址"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['收件人地址'] }"
              placeholder="請輸入 收件人地址"
              rules="required"
              v-model="user.address"
            ></Field>
            <error-message
              name="收件人地址"
              class="invalid-feedback"
            ></error-message>
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">留言</label>
            <textarea
              id="message"
              type="text"
              class="form-control"
              cols="30"
              rows="3"
              placeholder="請輸入 留言"
              v-model="message"
            ></textarea>
          </div>
          <div class="d-flex justify-content-end">
            <button class="btn btn-danger w-100 mt-3" type="button" @click="sendOrder">
              送出訂單
            </button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
      purchase: [],
      finalTotal: 0,
      isLoading: false,
      message: '',
    };
  },
  methods: {
    onSubmit() {
      console.log(this.user);
    },
    sendOrder() {
      const data = {
        data: {
          user: this.user,
          message: this.message,
        },
      };
      this.isLoading = true;
      this.$http
        .post(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`, data,
        )
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            this.$router.push('/success');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getCart() {
      this.isLoading = true;
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          if (res.data.success) {
            this.purchase = res.data.data.carts;
            this.finalTotal = res.data.data.final_total;
            this.isLoading = false;
          }
        });
    },
  },
  mounted() {
    this.getCart();
  },
};
</script>
