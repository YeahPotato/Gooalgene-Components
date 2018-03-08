<template>

  >  Input 输入框

  <br> 

##### 通过鼠标或键盘输入字符

<br>
<br>
<br>
  
### **基础用法**

<br>
  
  <template>
    <ga-input v-model="input1"></ga-input>
  </template>

<br>
<br>

```html
  <template>
    <ga-input v-model="input1"></ga-input>
  </template>
```

<br>
<br>
<br>

### **禁用状态**

<br>

<template>
    <ga-input v-model="input1" disabled></ga-input>
</template>

<br>
<br>

```html
  <template>
    <ga-input v-model="input1" disabled></ga-input>
  </template>
```
<br>
<br>
<br>

### **可清空**

<br>

使用`clearable`属性即可得到一个可清空的输入框

<br>
<br>
<template>
  <ga-input v-model="input1" clearable></ga-input>
</template>

<br>
<br>

```html
    <template>
        <ga-input v-model="input1" clearable></ga-input>
    </template>
```
<br>
<br>
<br>

### **带 icon 的输入框**

<br>

带有图标标记输入类型 ( slot方式 )

<br>
<br>
<template>
  <ga-input v-model="input1">
    <ga-icon type="search" slot="pre"></ga-icon>
  </ga-input>
  <ga-input v-model="input1" >
    <ga-icon type="calendar" slot="append"></ga-icon>
  </ga-input>
</template>

<br>
<br>

```html
    <template>
        <ga-input v-model="input1">
            <ga-icon type="search" slot="pre"></ga-icon>
        </ga-input>
        <ga-input v-model="input1" >
            <ga-icon type="calendar" slot="append"></ga-icon>
        </ga-input>
    </template>
```
<br>
<br>
<br>

### **尺寸**

<br>

<template>
  <ga-input v-model="input1" size="mini">
    <ga-icon type="search" slot="pre"></ga-icon>
  </ga-input>
  <ga-input v-model="input1" size="small" clearable></ga-input>
  <ga-input v-model="input1" size="medium">
    <ga-icon type="calendar" slot="append"></ga-icon>
  </ga-input>
</template>

<br>
<br>

```html
    <template>
        <ga-input v-model="input1" size="mini">
            <ga-icon type="search" slot="pre"></ga-icon>
        </ga-input>
        <ga-input v-model="input1" size="small" clearable></ga-input>
        <ga-input v-model="input1" size="medium">
            <ga-icon type="calendar" slot="append"></ga-icon>
        </ga-input>
    </template>
```
<br>
<br>
<br>

  # Input Attributes
  <br>

  | 参数          | 说明            |   类型         |   可选值   | 默认值 |
  |-------------  |---------------- |----------------  |-------- | -------- |
  | type          | input的类型 | String | text / number / password | text | 
  | disabled     | 是否禁用     | Boolean | true / false | false |
  | clearable     | 是否可清空 | Boolean | true / false   |  false |
  | size     | 输入框尺寸 | String |mini / small / medium   |  small |
  | placeholder     | 输入框占位文本 | String | —   | —  |

  <br>
  <br>
  <br>

  # Input Slots
  <br>

  | name          | 说明       
  |-------------  | ------ 
  | pre          | 输入框前置内容          
  | append          | 输入框后置内容            

  <br>
  <br>
  <br> 

  # Input Events
  <br>

  | 事件名称          | 说明            |   回调参数        
  |-------------  |---------------- |----------------  
  | change          | 在 Input 值改变时触发     |   (value: string / number)        
  | blur          | 在 Input 失去焦点时触发	|   (event: Event)             
  | focus          | 在 Input 获得焦点时触发     |   (event: Event)       
  | preiconclicked  | 前置icon点击事件     |   (event: Event)       
  | appendiconclicked  | 后置icon点击事件     |   (event: Event)       

  <br>
  <br>
  <br> 

  # Input Methods
  <br>

  | 方法名          | 说明            |   参数        
  |-------------  |---------------- |----------------  
  | focus          | 使 input 获取焦点     |  —         

  <br>
  <br>
  <br> 



</template>

<script>
  export default {
    data () {
      return {
          input1:"123",
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
    .ga-input{
        margin-right:12px;
    }
</style>
