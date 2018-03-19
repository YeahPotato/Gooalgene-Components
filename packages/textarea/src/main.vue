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
          <div :class="[
            'ga-textarea__area',
            'ga-textarea__'+size
          ]">
              <textarea :class="[
                'ga-textarea__inner',
                counter?'ga-textarea__inner___counter':''
              ]" 
              v-model="innerValue" 
              :rows="rows"
              cols="30"
              :maxLength="maxLength"
              :disabled="disabled"
              :placeholder="placeholder"
            ></textarea>
            <span v-if="counter" class="ga-textarea__counter">{{innerValue.length}}/{{maxLength}}</span>
          </div>
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
        this.$emit('change');
        this.$emit("input", value);
      }
    }
  },

  props: {
    label: {
      type: String
    },
    placeholder: {
      type: String,
      default: "请输入内容"
    },
    maxLength: {
      type: Number
    },
    rows: {
      type: [Number, String],
      default: 3
    },
    counter: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "small"
    },
    value: {}
  }
};
</script>
