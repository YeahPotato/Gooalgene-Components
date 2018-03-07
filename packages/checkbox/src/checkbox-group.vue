<template>
  <div class="ga-checkbox__group">
      <slot></slot>
  </div>
</template>

<script>
import emitter from "../../../utils/emitter";

export default {
  name: "GACheckboxGroup",
  mixins: [emitter],
  data() {
    return {
      arr: []
    };
  },
  props: {
    value: {
      type: Array
    }
  },
  watch: {
    value: {
      handler: function(newVal, oldVal) {
        this.$emit("change", newVal);
      },
      deep: true
    }
  },
  methods: {
    broad() {
      this.arr.forEach((val, index) => {
        this.broadcast("GACheckbox", "boradcastCheckboxItem", [val, index]);
      });
    }
  },
  mounted() {
    this.arr = [...this.value];
    // broadcast value
    this.broad();
    // recive
    this.$on("sendToGACheckboxGroup", (val, index) => {
      val === null ? this.arr.splice(index, 1) : this.arr.push(val);
      this.$emit("input", this.arr);
      this.broad();
    });
  }
};
</script>

