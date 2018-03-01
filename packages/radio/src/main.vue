

<template>
    <label class="ga-radio" 
        :class="{'active':isActive}"
        @click="handlerActive"
        >
        <span class="ga-radio_input">
            <span v-if="isActive" class="ga-radio_input__inner"></span>
        </span>
        <span class="ga-radio_label">
            <slot></slot>
            <template v-if="!$slots.default">{{label}}</template>
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
    active: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handlerActive() {
      this.isActive = !this.isActive;
    }
  },
  mounted() {
    this.isActive = this.active;
  }
};
</script>

<style>

</style>
