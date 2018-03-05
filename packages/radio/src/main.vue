

<!-- <ga-radio v-model="radioData"  label="radio">单选框1</ga-radio> -->
<template>
    <label class="ga-radio" 
        :class="{
          'is-active':isActive,
          'is-disabled':disabled
        }"
        @click="handlerClick"
        >
        <span class="ga-radio_input">
            <span v-if="isActive" class="ga-radio_input__inner"></span>
        </span>
        <span class="ga-radio_label">
            <slot></slot>
        </span>
    </label>
</template>

<script>
import emitter from "../../../utils/emitter";

export default {
  name: "GaRadio",

  mixins: [emitter],

  data() {
    return {
      isGroup: false,
      groupVal: null
    };
  },

  computed: {
    isActive() {
      if (this.isGroup) {
        return this.label === this.groupVal;
      } else {
        return this.label === this.value;
      }
    }
  },

  props: {
    label: {
      type: [String, Number, Boolean]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {}
  },

  watch: {
    value: function(newVal) {
      this.groupVal = newVal;
    }
  },

  methods: {
    handlerClick() {
      // no group
      if (this.isActive) return;
      if (this.disabled) return;
      if (!this.isGroup) {
        this.$emit("input", this.label);
      } else {
        this.dispatch("GaRadioGroup", "childActive", [this.label]);
      }
    }
  },

  mounted() {
    // init components
    this.$on("toChild", parentData => {
      this.isGroup = true;
      this.groupVal = parentData;
    });
  }
};
</script>

<style>

</style>
