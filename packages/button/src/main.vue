<template>
    <button  class="ga-button" :class="[
      'ga-button--'+type,
      plain?'is-plain':'',
      'ga-button--size-'+size
      ]" 
      :data-type="type">
        <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>

<script>
export default {
  name: "GAButton",
  props: {
    type: {
      type: String,
      default: "default"
    },
    plain:{
      type:Boolean,
      default:false
    },
    size:{
      type:String,
      default:"small"
    }
  }
};
</script>
