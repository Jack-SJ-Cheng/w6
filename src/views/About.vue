<template>
  <div class="home m-top container">
    <div class="row justify-content-center">
      <div class="col-4">
        <Form v-slot="{ errors }" @submit="onSubmit">
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
              v-model="user.phone"
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
          <button class="btn btn-danger" type="submit">Submit</button>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      user: {},
    };
  },
  methods: {
    onSubmit() {
      console.log(this.user);
    },
  },
  created() {
    console.log(this);
  },
};
</script>
