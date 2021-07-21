<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            <span v-if="isNew">新增優惠券</span>
            <span v-else>編輯優惠券</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form action="">
          <div class="modal-body">
            <div class="mb-3">
              <label for="couponName" class="form-label">優惠名稱</label>
              <input
                type="text"
                class="form-control"
                id="couponName"
                placeholder="請輸入優惠活動名稱"
                v-model="tempCoupon.title"
              />
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="mb-3">
                  <label for="couponPersent" class="form-label">優惠折扣</label>
                  <input
                    type="text"
                    class="form-control"
                    id="couponPersent"
                    placeholder="請輸入折扣數(%)"
                    v-model.number="tempCoupon.percent"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label for="couponDate" class="form-label">到期日</label>
                  <input
                    type="date"
                    class="form-control"
                    id="couponDate"
                    v-model="date"
                    @change="changeDate"
                  />
                </div>
              </div>
            </div>
            <div class="mb-3">
              <label for="couponCode" class="form-label">優惠代碼</label>
              <input
                type="text"
                class="form-control"
                id="couponCode"
                placeholder="請輸入優惠代碼"
                v-model="tempCoupon.code"
              />
            </div>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                id="couponEnabled"
                :true-value="1"
                :false-value="0"
                v-model="tempCoupon.is_enabled"
              />
              <label class="form-check-label" for="couponEnabled">
                <span v-if="tempCoupon.is_enabled" class="text-success"
                  >啟用</span
                >
                <span v-else class="text-secondary">未啟用</span>
              </label>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              @click="$emit('update', tempCoupon)"
              class="btn btn-primary"
            >
              儲存並送出
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixins from '../../mixins/modalMixins';

export default {
  props: ['isNew', 'coupon'],
  data() {
    return {
      tempCoupon: {},
      date: '',
    };
  },
  methods: {
    changeDate() {
      this.tempCoupon.due_date = new Date(this.date) / 1000;
    },
  },
  watch: {
    coupon() {
      if (this.isNew) {
        this.tempCoupon = {};
        this.tempCoupon.due_date = Math.floor(Date.now() / 1000);
        this.tempCoupon.is_enabled = 0;
      } else {
        this.tempCoupon = this.coupon;
      }
      // 將時間格式改為 YYYY-MM-DD
      const dateAndTime = new Date(this.tempCoupon.due_date * 1000)
        .toISOString()
        .split('T');
      [this.date] = dateAndTime;
    },
  },
  mixins: [modalMixins],
};
</script>
