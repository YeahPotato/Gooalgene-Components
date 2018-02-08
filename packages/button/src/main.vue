<template>
    <button  class="ga-button" :class="['ga-button--'+type]">
        提交
    </button>
</template>

<script>
export default {
  name: "GAButton",
  props: {
    type: {
      type: String,
      default: "default"
    }
  }
};
</script>
