<template>
  <div id="doc">
      <div class="header">
        <header><b>GOOALGENE-UI</b></header>
      </div>
      <div class="container">
        <div class="left">
          <p>更新日志</p>
          <p>Gooalgene Vue</p>
          <ga-sidebar :data="title" @itemclick="itemclick"></ga-sidebar>
        </div>
        <div class="right">
          <component :is="component"></component>
        </div>
      </div>
  </div>
</template>

<script>
import Icon from "@view/zh/icon.md";
import Button from "@view/zh/button.md";

export default {
  name: "doc",
  data() {
    return {
      component: "Icon",
      title: {
        组件: ["Icon 图标", "Button 按钮"]
      }
    };
  },
  methods: {
    itemclick(...args) {
      this.component = (args[0].split(' '))[0];
    }
  },
  components: { Button, Icon }
};
</script>

<style scoped lang="scss">

</style>


