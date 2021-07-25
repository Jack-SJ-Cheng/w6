<template>
<div class="fixed-top">
  <div id="topLogo" class="d-flex justify-content-center bg-white" :class="classList.bigLogo">
    <h1 class="d-none d-lg-block pt-2">
    <router-link class="slogo" to="/home/welcome">勇者倉庫</router-link>
  </h1>
  </div>
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container-fluid">
      <h2>
        <router-link class="navbar-toggler border-0 tlogo" to="/home/welcome">勇者倉庫</router-link>
      </h2>
      <button
        ref="bur"
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <router-link to="/home/welcome" class="nav-link">回到櫃台</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/home/products" class="nav-link">瀏覽商品</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/home/cart" class="nav-link">購物車</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/home/ordersheet" class="nav-link">訂單列表</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>
</template>

<script>
export default {
  data() {
    return {
      classList: {
        bigLogo: '',
      },
    };
  },
};
</script>
