

<!-- <ga-radio v-model="radioData"  label="radio">单选框1</ga-radio> -->
<template>
    <label class="ga-radio" 
        :class="{'is-active':isActive,'is-disabled':disabled}"
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
export default {
  name: "GaRadio",
  data() {
    return {
      isActive: false
    };
  },
  props: {
    label: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {}
  },
  watch: {
    isActive: function(newVal, oldVal) {
      if (newVal) {
        this.$emit("input", this.label);
      }
    },
    value: function(newVal, oldVal) {
      this.isActive = newVal === this.label;
    }
  },
  methods: {
    handlerClick() {
      if (!this.disabled) this.isActive = true;
    }
  },
  created() {
    this.isActive = this.label == this.value;
  }
};
</script>

<style>

</style>
