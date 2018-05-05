<template>
  <div class="ga-select">
      <div class="ga-select-wrap">
        <ga-input v-model="value" :readonly="true" :placeholder="placeholder" @click.native="handlerClick">
            <ga-icon :class="[isExpand?'active':'']" type="chevron-down" :size="1" slot="append"></ga-icon>
        </ga-input>
        <ul
            :class="[
                'ga-options',
                `ga-options__${size}`,
                'animated',
                isExpand?'ga-options__expand':'zoomOut'
            ]"
        >
            <li v-for="(item,index) in list" :key="index">{{item.label}}</li>
        </ul>
      </div>
  </div>
</template>

<script>
import gaInput from "./main.vue";
import gaIcon from "../../icon/src/main.vue";

export default {
  name: "GaSelect",

  model: {
    prop: "value",
    event: "change"
  },

  data() {
    return {
      isExpand: false
    };
  },

  methods: {
    handlerClick(ev) {
      this.isExpand = !this.isExpand;
      ev.cancelBubble = true;
    }
  },

  mounted() {
    document.addEventListener(
      "click",
      () => {
        this.isExpand = false;
      },
      false
    );
  },

  props: {
    value: "",
    list: {
      type: Array,
      default: []
    },
    placeholder: {
      type: String,
      default: "请选择"
    },
    size: {
      type: String,
      default: "small"
    }
  },

  components: { gaInput, gaIcon }
};
</script>