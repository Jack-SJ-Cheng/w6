<template>
  <div class="modal fade" ref="modal" tabindex="-1">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 v-if="isNew" class="modal-title">新增商品</h4>
          <h4 v-else class="modal-title">編輯商品</h4>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-4">
              <div class="input-group">
                <span class="input-group-text bg-light m-0" id="mainPicture">
                  <small>主要圖片</small>
                </span>
                <input
                  aria-describedby="mainPicture"
                  type="text"
                  class="form-control"
                  placeholder="請輸入圖片連結"
                  v-model="tempData.imageUrl"
                />
              </div>
              <img class="img-fluid mt-1" :src="tempData.imageUrl" alt="" />
              <div v-if="tempData.imagesUrl != undefined">
                <div
                  class="form-group"
                  v-for="(item, key) in tempData.imagesUrl"
                  :key="item + key"
                >
                  <input
                    class="form-control mt-4"
                    type="text"
                    placeholder="請輸入圖片連結"
                    v-model="tempData.imagesUrl[key]"
                  />
                  <img
                    :src="tempData.imagesUrl[key]"
                    class="img-fluid mt-1"
                    alt=""
                  />
                  <button
                    type="button"
                    class="btn btn-outline-danger w-100 mt-1"
                    @click="tempData.imagesUrl.splice(key, 1)"
                  >
                    刪除圖片
                  </button>
                </div>
                <button
                  type="button"
                  class="btn btn-outline-primary w-100 mt-3"
                  @click="tempData.imagesUrl.push('')"
                >
                  新增圖片
                </button>
              </div>
              <div v-else>
                <button
                  type="button"
                  class="btn btn-outline-primary w-100 mt-4"
                  @click="tempData.imagesUrl = ['']"
                >
                  新增圖片
                </button>
              </div>
            </div>
            <div class="col-8">
              <div class="input-group">
                <span class="input-group-text bg-light" id="productTitle"
                  >產品名稱
                </span>
                <input
                  type="text"
                  class="form-control"
                  aria-describedby="productTitle"
                  v-model="tempData.title"
                />
              </div>
              <div class="row mt-3">
                <div class="col-6">
                  <div class="input-group">
                    <span class="input-group-text bg-light" id="productCategory"
                      >分類</span
                    >
                    <input
                      type="text"
                      class="form-control"
                      aria-describedby="productCategory"
                      v-model="tempData.category"
                    />
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-group">
                    <span class="input-group-text bg-light" id="productUnit"
                      >單位</span
                    >
                    <input
                      type="text"
                      class="form-control"
                      aria-describedby="productUnit"
                      v-model="tempData.unit"
                    />
                  </div>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-6">
                  <div class="input-group">
                    <span
                      class="input-group-text bg-light"
                      id="productOriginPrice"
                      >原價</span
                    >
                    <input
                      type="text"
                      class="form-control"
                      aria-describedby="productOriginPrice"
                      v-model.number="tempData.origin_price"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="input-group">
                    <span
                      class="input-group-text bg-light"
                      id="productOriginPrice"
                      >優惠價</span
                    >
                    <input
                      type="text"
                      class="form-control"
                      aria-describedby="productPrice"
                      v-model.number="tempData.price"
                    />
                  </div>
                </div>
              </div>
              <hr />
              <div class="form-group">
                <label for="description">產品描述</label>
                <textarea
                  id="description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入產品描述"
                  v-model="tempData.description"
                >
                </textarea>
              </div>
              <div class="form-group">
                <label for="content">說明內容</label>
                <textarea
                  id="description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入說明內容"
                  v-model="tempData.content"
                >
                </textarea>
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input
                    id="is_enabled"
                    class="form-check-input"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                    v-model="tempData.is_enabled"
                  />
                  <label class="form-check-label" for="is_enabled"
                    >是否啟用</label
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-primary"
            @click="$emit('update', tempData)"
          >
            儲存並送出
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixins from '../../mixins/modalMixins';

export default {
  props: ['info', 'isNew'],
  data() {
    return {
      tempData: {},
    };
  },
  watch: {
    info() {
      this.tempData = JSON.parse(JSON.stringify(this.info));
    },
  },
  mixins: [modalMixins],
};
</script>
