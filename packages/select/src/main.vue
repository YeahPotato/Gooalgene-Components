<template>
<!-- 用icon改造 TODO -->
    <div class="ga-select">
        <ul class="ga-options">
            <li
             :class="[item.selected?'active':'']"
             v-for="(item,index) in list" :key="index">{{item[keys]}}</li>
        </ul>
    </div>
</template>

<script>
import gaIcon from '../../icon/index.js';

export default {
  name: "GaSelect",
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    value: "",
    list: {
      type: Array,
      default: []
    },
    keys: {
      type: String,
      required: true
    }
  },
  components:{gaIcon}
};
</script>

