<template>
  <div
    class="toast-container position-absolute pe-3 top-0 end-0"
    style="z-index: 1500"
  >
    <div
      class="toast show"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      v-for="(item, key) in content"
      :key="item + key"
    >
      <div class="toast-header">
        <strong class="me-auto">{{ item.title }}</strong>
        <button
          type="button"
          class="btn-close"
          aria-label="Close"
          @click="closeToast(key)"
        ></button>
      </div>
      <div class="toast-body">
        {{ item.message }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['emitter'],
  data() {
    return {
      content: [],
    };
  },
  methods: {
    closeToast(key) {
      this.content.splice(key, 1);
    },
  },
  created() {
    this.emitter.on('push', (content) => {
      this.content.push(content);
      setTimeout(() => {
        this.content.shift();
      }, 10000);
    });
  },
};
</script>
