<template>
  <div id="doc">
      <div class="header">
        <header><b>GOOALGENE-UI</b></header>
      </div>
      <div class="container">
        <div class="left">
          <p>更新日志</p>
          <p>Gooalgene Vue</p>
          <GA-sidebar :data="title" @itemclick="itemclick"></GA-sidebar>
        </div>
        <div class="right">
          <component :is="component"></component>
        </div>
      </div>
  </div>
</template>

<script>
import Icon from '@view/zh/icon.md';
import Alert from "@view/zh/alert.md";

export default {
  name: "doc",
  data() {
    return {
      component: "Icon",
      title: {
        组件: [
			"Icon",
			"Alert"
		]
      }
    };
  },
  methods:{
	  itemclick(...args){
		  this.component = args[0];
	  }
  },
  components: { Alert,Icon }
};
</script>

<style scoped lang="scss">

</style>


