<template>
    <label :class="[
        'ga-checkbox',
        innerActive?'is-active':'',
        disabled?'is-disabled':''
    ]" @click="handlerClick">
        <span class="ga-checkbox-input">
            <span v-if="innerActive" class="ga-checkbox-input__inner" ></span>
        </span>
        <span v-if="$slots.default" class="ga-checkbox-label">
            <slot></slot>
        </span>
        <span v-if="label" class="ga-checkbox-label">{{label}}</span>
    </label>
</template>

<script>
import emitter from "../../../utils/emitter";

export default {
  name: "GACheckbox",
  mixins: [emitter],
  data() {
    return {
      innerActive: false,
      index: null
    };
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    // checked
    value: {
      type: Boolean,
      defalt: false
    },
    // checbox-group
    label: {}
  },
  created() {
    this.innerActive = this.value;
  },
  methods: {
    handlerClick() {
      // disabled
      if (this.disabled) return;
      // is-group
      if (this.$parent.$options.name === "GACheckboxGroup") {
        this.innerActive = !this.innerActive;
        // 根据当前checkbox的激活状态派发不同的值
        if (this.innerActive) {
          this.dispatch("GACheckboxGroup", "sendToGACheckboxGroup", [
            this.label,
            this.index
          ]);
        } else {
          this.dispatch("GACheckboxGroup", "sendToGACheckboxGroup", [
            null,
            this.index
          ]);
        }
      } else {
        this.$emit("input", !this.value);
        this.innerActive = !this.value;
      }
    }
  },

  // checkbox-group
  mounted() {
    if (this.$parent.$options.name === "GACheckboxGroup") {
      this.$on("boradcastCheckboxItem", (val, index) => {
        console.log(index);
        if (this.label === val) {
          this.index = index;
          this.innerActive = true;
        }
      });
    }
  }
};
</script>

