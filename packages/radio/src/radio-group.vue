<template>
    <div class="ga-radio__group">
        <slot></slot>
    </div>
</template>

<script>
import emitter from "../../../utils/emitter";

export default {
  name: "GaRadioGroup",

  mixins: [emitter],

  props: {
    value: {}
  },

  watch: {
    value: function(newVal) {
      this.broadcast("GaRadio", "toChild", [newVal]);
    }
  },

  mounted() {
    // recive radio data
    this.$on("childActive", childVal => {
      this.$emit("input", childVal);
      this.$emit("change", childVal);
    });

    // broadcast self data
    this.broadcast("GaRadio", "toChild", [this.value]);
  }
};
</script>

