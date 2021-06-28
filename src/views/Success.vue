<template>
<div>
  <div class="m-top d-flex justify-content-center mb-4">
    <div>
      <img src="../assets/fireworks.svg" alt="">
      <div class="display-5">訂單建立成功</div>
    </div>
  </div>
  <div class="d-flex justify-content-center justify-content-center">
    <router-link to="/ordersheet" class="btn btn-outline-dark mx-2">查看訂單</router-link>
    <router-link to="/" class="btn btn-outline-dark mx-2">返回首頁</router-link>
    <router-link to="/products" class="btn btn-outline-danger mx-2">繼續購物</router-link>
  </div>
</div>
</template>
