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
          <transition name="fade" :appear="true">
            <router-view></router-view>
          </transition>
        </div>
      </div>
  </div>
</template>

<script>
import Icon from "@view/zh/icon.md";
import Button from "@view/zh/button.md";
import Radio from "@view/zh/radio.md";

export default {
  name: "doc",
  data() {
    return {
      component: "Icon",
      title: {
        组件: [
          "Icon 图标", 
          "Button 按钮", 
          "Radio 单选框",
          "Checkbox 多选框",
          "Input 输入框",
          "Textarea 文本域"
        ]
      }
    };
  },
  methods: {
    itemclick(...args) {
      this.component = args[0].split(" ")[0];
      this.$router.push(this.component.toLowerCase());
    }
  },
  components: { Button, Icon, Radio }
};
</script>

<style scoped lang="scss">

</style>


