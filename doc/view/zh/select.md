<template>

  >  Select 选择器

  <br> 

##### 当选项过多时，使用下拉菜单展示并选择内容。

<br>
<br>
<br>
  
### **基础用法**

<br>

适用广泛的基础单选

<br>
  
  <template>
    <ga-select v-model="text" :list="options" keys="value"></ga-select>
  </template>

<br>
<br>

```html
  <template>
    <ga-select v-model="text"></ga-select>
  </template>
```

<br>
<br>
<br>

### **禁用状态**

<br>

<template>
    <ga-textarea disabled v-model="text"></ga-textarea>
</template>

<br>
<br>

```html
  <template>
      <ga-textarea disabled v-model="text"></ga-textarea>
  </template>
```
<br>
<br>
<br>

### **label**

<br>

使用`label`或者默认`slot`可自定义`textarea`的label

<br>
<br>
<template>
    <ga-textarea v-model="text">
        备注 <ga-icon type="edit"></ga-icon>
    </ga-textarea>
    <ga-textarea v-model="text" label="备注"></ga-textarea>
</template>

<br>
<br>

```html
    <template>
      <ga-textarea v-model="text">
          备注 <ga-icon type="edit"></ga-icon>
      </ga-textarea>
      <ga-textarea v-model="text" label="备注"></ga-textarea>
  </template>
```
<br>
<br>
<br>

### **字符限制**

<br>
<template>
  <ga-textarea v-model="text" :maxLength="160" counter>
  </ga-textarea>
  <ga-textarea v-model="text" >
  </ga-textarea>
</template>

<br>
<br>

```html
    <template>
      <ga-textarea v-model="text" :maxLength="160" counter></ga-textarea>
      <ga-textarea v-model="text"></ga-textarea>
    </template>
```
<br>
<br>
<br>

### **尺寸**

<br>

<template>
  <ga-textarea v-model="text" size="mini">
    <ga-icon type="search"></ga-icon>
  </ga-textarea>
  <ga-textarea v-model="text" size="small" >
    <ga-icon type="calendar"></ga-icon>
  </ga-textarea>
</template>

<br>
<br>

```html
    <template>
      <ga-textarea v-model="text" size="mini">
        <ga-icon type="search"></ga-icon>
      </ga-textarea>
      <ga-textarea v-model="text" size="small" >
        <ga-icon type="calendar"></ga-icon>
      </ga-textarea>
    </template>
```
<br>
<br>
<br>

  # Textarea Attributes
  <br>

  | 参数          | 说明            |   类型         |   可选值   | 默认值 |
  |-------------  |---------------- |----------------  |-------- | -------- |
  | label          | textarea的label文本 | String / Slot | —  | —  | 
  | rows     | textarea显示的行数     | Number / String | —  | 3 |
  | placeholder     | textarea占位符 | String |  —  |  请输入内容 |
  | maxLength     | textarea最大字符数 | Number | — |  — |
  | counter          | 是否显示计数器 | Boolean | false / true | false | 
  | disabled     | 是否禁用     | Boolean | true / false | false |
  | size     | 输入框尺寸 | String | mini / small / medium   |  small |

  <br>
  <br>
  <br>

  # Textarea Slots
  <br>

  | name          | 说明       
  |-------------  | ------ 
  | default          | textarea label 内容         

  <br>
  <br>
  <br> 

  # Textarea Events
  <br>

  | 事件名称          | 说明            |   回调参数        
  |-------------  |---------------- |----------------  
  | change          | 在 Textarea 值改变时触发     |   (value: string / number)        

  <br>
  <br>
  <br> 



</template>

<script>
  export default {
    data () {
      return {
        options: [
            {
                value: '选项1',
                label: '黄金糕'
            },
            {
                value: '选项2',
                label: '双皮奶'
            }, 
            {
                value: '选项3',
                label: '蚵仔煎'
            }, 
            {
                value: '选项4',
                label: '龙须面'
            }, 
            {
                value: '选项5',
                label: '北京烤鸭'
            }
        ]
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
    .ga-textarea{
        margin-right:12px;
    }
</style>
