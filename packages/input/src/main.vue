
<template>
    <div :class="[
        'ga-input',
         disabled?'is-disabled':'',
         'ga-input__'+size,
         $slots.pre?'is-pre':'',
        $slots.append?'is-append':''
    ]" 
        @mouseover="handlerMouseOver"
        @mouseout="handlerMouseOut"
    >
        <label :class="[
            'ga-input__label',
            clearable && !$slots.append ?'is-clearable':'',
        ]">
            <input :class="[
                'ga-input__inner',
                isFocus?'is-active':''    
            ]"
                ref="input"
                @blur="handlerBlur"
                @focus="handlerFocus"
                @input="handlerInput"
                :placeholder="placeholder" 
                :disabled="disabled" 
                :type="type" 
                :readonly="readonly"
                v-model="innerValue"
            >
        </label>
        <!-- slot pre -->
        <span ref="pre" @click="handlerPreIconClick" v-if="$slots.pre" class="ga-input--pre__icon">
            <slot name="pre"></slot>
        </span>
        <!-- slot append -->
        <span @click="handlerAppendIconClick" v-if="$slots.append" class="ga-input--append__icon">
            <slot name="append"></slot>
        </span>
        <!-- clearable -->
        <span @click="handlerCloseClick" v-if="!disabled && clearable && innerClose " class="ga-input_icon__clear">
            <ga-icon type="times-circle"></ga-icon>
        </span>
    </div>
</template>

<script>
import gaIcon from "../../icon/src/main.vue";

export default {
  name: "GAInput",

  data() {
    return {
      innerClose: false,
      isFocus: false
    };
  },

  model: {
    event: "change",
    prop: "value"
  },
  computed: {
    innerValue: {
      get() {
        if (!this.$slots.append) {
          if (this.value === "") {
            this.innerClose = false;
          } else {
            this.innerClose = true;
          }
        }
        return this.value;
      },
      set(value) {
        this.$emit("change", value);
      }
    }
  },
  props: {
    type: {
      type: String,
      default: "text"
    },
    disabled: {
      type: Boolean
    },
    clearable: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "small"
    },
    placeholder: {
      type: String,
      default: "请输入内容"
    },
    readonly: {
      type: Boolean,
      default: false
    },
    value: {}
  },

  methods: {
    // Node func
    focus() {
      this.$refs.input.focus();
    },
    handlerMouseOver() {
      if (this.$slots.append) return;
      this.innerClose = this.innerValue.length == 0 || "" ? false : true;
    },
    handlerMouseOut() {
      this.innerClose = false;
    },
    handlerCloseClick() {
      this.innerValue = "";
    },
    handlerFocus() {
      this.isFocus = true;
      this.$emit("focus");
    },
    handlerBlur() {
      this.isFocus = false;
      this.$emit("blur");
    },
    handlerInput() {
      this.isFocus = true;
      this.$emit("input");
    },
    handlerPreIconClick() {
      this.$emit("preiconclicked");
    },
    handlerAppendIconClick() {
      this.$emit("appendiconclicked");
    }
  },
  components: { gaIcon }
};
</script>
