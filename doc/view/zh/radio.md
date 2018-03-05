<template>

  >  Radio 单选框

  <br> 

##### 在一组备选项中进行单选

<br>
<br>
<br>
  
### **基础用法**

<br>

由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。

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

### **禁用状态**

<br>

单选框不可用的状态。只要在`ga-radio`元素中设置`disabled`属性即可，它接受一个`Boolean`，`true`为禁用。

<br>
<br>

<template>
  <ga-radio-group @change="labelChange" v-model="radioGroup2">
    <ga-radio disabled label="禁用状态">禁用状态</ga-radio>
    <ga-radio label="可用状态">可用状态</ga-radio>
  </ga-radio-group>
</template>

<br>
<br>

```html
  <template>
    <ga-radio-group @change="labelChange" v-model="radioGroup2">
      <ga-radio disabled label="禁用状态">禁用状态</ga-radio>
      <ga-radio label="可用状态">可用状态</ga-radio>
    </ga-radio-group>
</template>
```
<br>
<br>
<br>

  # Radio Attributes
  <br>

  | 参数          | 说明            |   类型         |   可选值   | 默认值 |
  |-------------  |---------------- |----------------  |-------- | -------- |
  | label          | Radio 的 value | String / Number / Boolean | — | — |
  | disabled     | 是否禁用     | Boolean | true / false |   — |
  | size         | Radio 的尺寸 | String | medium / small / mini   |  — |

  <br>
  <br>
  <br>

  # Radio-group Events
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
          radioGroup:"radio-group1",
          radioGroup2:"禁用状态"
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
