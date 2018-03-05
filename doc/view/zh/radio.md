<template>

  >  Radio 单选框

  <br> 

##### 由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。

<br>
<br>
<br>
  
### **基础用法:**

<br>
<br>
  
  <template>
    <ga-radio v-model="radioData" label="radio1">单选框1</ga-radio>
    <ga-radio v-model="radioData" label="radio2">单选框2</ga-radio>
  </template>

<br>
<br>

```html
  <div>
    <ga-radio v-model="radioData"  label="radio1">单选框1</ga-radio>
    <ga-radio v-model="radioData" label="radio2">单选框2</ga-radio>
  </div>
```

<br>
<br>
<br>

### **radio-group**

<br>

结合`ga-radio-group`元素和子元素`ga-radio`可以实现单选组，在`ga-radio-group`中绑定`v-model`，在`ga-radio`中设置好`label`即可，无需再给每一个`ga-radio`绑定变量，另外，还提供了`change`事件来响应变化，它会传入一个参数`value`。

<br>
<br>

<template>
  <ga-radio-group @change="labelChange" v-model="radioGroup">
    <ga-radio label="radio-group1">radio-group1</ga-radio>
    <ga-radio label="radio-group2">radio-group2</ga-radio>
    <ga-radio label="radio-group3">radio-group3</ga-radio>
  </ga-radio-group>
</template>

<br>
<br>

```html
  <template>
    <ga-radio-group @change="labelChange" v-model="radioGroup">
      <ga-radio label="radio-group1">radio-group1</ga-radio>
      <ga-radio label="radio-group2">radio-group2</ga-radio>
      <ga-radio label="radio-group3">radio-group3</ga-radio>
    </ga-radio-group>
  </template>
```
<br>
<br>
<br>

  # 参数
  <br>

  | 参数          | 类型            |   默认值         |   说明   |
  |-------------  |---------------- |----------------  |-------- |
  | label          | String     |    default         |   `primary`, `success`, `info`, `warning`,`danger`|
  | disabled          | Boolean     |    false         |   `true/false` |
  | size          | String     |    small         |   `mini`,`small`,`medium` |

  <br>
  <br>
  <br>

  # Event
  <br>

  | 事件名称          | 说明            |   回调函数         
  |-------------  |---------------- |----------------  
  | change          | 绑定值变化时触发的事件     |    选中的 Radio label 值         



</template>

<script>
  export default {
    data () {
      return {
          radioData:'radio1',
          radioGroup:"radio-group1"
      }
    },
    methods:{
      labelChange(val){
        console.log(val)
      }
    }
  }
</script>

<style lang="scss">
    .ga-radio{
        padding-right:12px;
    }
</style>
