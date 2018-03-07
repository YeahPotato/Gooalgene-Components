<template>

  >  Checkbox 多选框

  <br> 

##### 一组备选项中进行多选

<br>
<br>
<br>
  
### **基础用法**

<br>

单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。

<br>
<br>
  
  <template>
    <ga-checkbox v-model="checked">多选框1</ga-radio>
  </template>

<br>
<br>

```html
  <template>
    <ga-checkbox v-model="checked">多选框1</ga-radio>
  </template>

  <script>
      export default{
          data(){
              return{
                  checked:true
              }
          }
      }
  </script>
```

<br>
<br>
<br>

### **禁用状态**

<br>

多选框不可用状态。

<br>
<br>

<template>
    <ga-checkbox class="ga-checkboxitem" v-model="checked2" disabled>多选框2</ga-checkbox>
    <ga-checkbox v-model="checked3">多选框3</ga-checkbox>
</template>

<br>
<br>

```html
    <template>
        <ga-checkbox v-model="checked2" disabled>多选框2</ga-checkbox>
        <ga-checkbox v-model="checked3">多选框3</ga-checkbox>
    </template>

    <script>
        export default{
            data(){
                return{
                    checked2:false,
                    checked3:true
                }
            }
        }
    </script>

```
<br>
<br>
<br>

### **多选框组**

<br>

适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。

<br>
<br>

<template>
  <ga-checkbox-group @change="change" v-model="checkboxgrouplist">
    <ga-checkbox class="ga-checkboxitem" label="checkbox1"></ga-checkbox>
    <ga-checkbox class="ga-checkboxitem" label="checkbox2" disabled></ga-checkbox>
    <ga-checkbox class="ga-checkboxitem" label="checkbox3"></ga-checkbox>
  </ga-checkbox-group>
</template>

<br>
<br>

```html
    <template>
        <ga-checkbox-group v-model="checkboxgrouplist">
            <ga-checkbox label="checkbox1"></ga-checkbox>
            <ga-checkbox label="checkbox2" disabled></ga-checkbox>
            <ga-checkbox label="checkbox3"></ga-checkbox>
        </ga-checkbox-group>
    </template>

    <script>
        export default{
            data(){
                return{
                    checkboxgrouplist:['checkbox2','checkbox3']
                }
            }
        }
    </script>
```
<br>
<br>
<br>

  # Checkbox Attributes
  <br>

  | 参数          | 说明            |   类型         |   可选值   | 默认值 |
  |-------------  |---------------- |----------------  |-------- | -------- |
  | value          | Checkbox 的 value | Boolean | true / false | false |
  | disabled     | 是否禁用     | Boolean | true / false |   — |
  | label        | 使用<code>ga-checkbox-group</code>时的<code>checkbox</code>的<code>label</code>值，单独使用<code>ga-checkbox</code>时<code>label</code>用插槽代替 | String | medium / small / mini   |  — |

  <br>
  <br>
  <br>

  # Checkbox-group Events
  <br>

  | 事件名称          | 说明            |   回调函数         
  |-------------  |---------------- |----------------  
  | change          | 绑定值变化时触发的事件     |    选中的 Checkbox label 值         



</template>

<script>
  export default {
    data () {
      return {
          radioData:'radio1',
          radioGroup:"radio-group1",
          radioGroup2:"禁用状态",
          checked:true,
          checked2:false,
          checked3:true,
          checkboxgrouplist:['checkbox2','checkbox3']
      }
    },
    methods:{
      change(val){
        console.log(val)
      }
    }
  }
</script>

<style lang="scss">
    .ga-checkboxitem{
        margin-right:12px;
    }
</style>
