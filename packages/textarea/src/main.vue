<template>
    <div :class="[
        'ga-textarea',
        disabled?'is-disabled':''
    ]">
        <label class="ga-textarea__label">
                <!-- label slot -->
                <span v-if="!label && $slots.default" class="ga-textarea__inner___label">
                    <slot></slot>
                </span>
                <!-- label attr -->
                <span v-if="label && !$slots.default" class="ga-textarea__inner___label">{{label}}</span>
                <!-- textarea -->
                <textarea class="ga-textarea__inner" 
                v-model="innerValue" 
                :rows="rows"
                :disabled="disabled"
                :placeholder="placeholder"
            ></textarea>
        </label>
    </div>
</template>

<script>
export default {
  name: "GATextarea",

  model: {
    event: "input",
    prop: "value"
  },

  computed: {
    innerValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  },

  props: {
    label: {
      type: String
    },
    rows: {
      type: Number
    },
    placeholder: {
      type: String,
      default: "请输入内容"
    },
    rows: {
      type: [Number, String]
    },
    disabled: {
      type: Boolean,
      default:false
    },
    value: {}
  }
};
</script>
