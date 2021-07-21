<template>
  <div
    class="modal fade"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    ref="modal"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">訂單內容</h5>
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
              <div class="mb-2">
                訂單日期：{{ $timeTransformer(order.create_at) }}
              </div>
              <div class="mb-2">
                付款狀態：
                <span v-if="order.is_paid" class="text-success">已付款</span>
                <span v-else class="text-danger">未付款</span>
              </div>
              <div class="mb-2">
                訂單總金額：NT$ {{ $toCurrency(order.total) }}
              </div>
            </div>
            <div class="col-8">
              <h5>客戶資料</h5>
              <table class="table table-sm">
                <tbody v-if="order.user">
                  <tr>
                    <th style="width: 100px">姓名</th>
                    <td>{{ order.user.name }}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{{ order.user.email }}</td>
                  </tr>
                  <tr>
                    <th>電話</th>
                    <td>{{ order.user.tel }}</td>
                  </tr>
                  <tr>
                    <th>地址</th>
                    <td>{{ order.user.address }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="mb-2">
            留言：<br />
            <textarea
              readonly
              name=""
              id=""
              class="w-100"
              :value="order.message"
            ></textarea>
          </div>
          <div>
            <h5>訂單內容：</h5>
            <table class="table table-hover">
              <tbody>
                <tr v-for="item in order.products" :key="item">
                  <th class="text-center">
                    {{ item.product.title }}
                  </th>
                  <td class="text-center">{{ item.qty }}  {{ item.product.unit }}</td>
                  <td class="text-center">
                    {{ $toCurrency(item.final_total) }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
            確定
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixins from '../../mixins/modalMixins';

export default {
  props: ['order'],
  mixins: [modalMixins],
};
</script>
