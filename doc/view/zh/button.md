<template>

>  Button 按钮 

<br> 

#### 常用的操作按钮

<br>


### **Type :**

<br>

<template>
    <div class="list">
      <ga-button >成功按钮</ga-button>
      <ga-button type="primary">主要按钮</ga-button>
      <ga-button type="success">成功按钮</ga-button>
      <ga-button type="info">信息按钮</ga-button>
      <ga-button type="warning">警告按钮</ga-button>
      <ga-button type="danger">危险按钮</ga-button>
    </div>
</template>

<br>

```html
  <div>
    <ga-button >成功按钮</ga-button>
    <ga-button type="primary">主要按钮</ga-button>
    <ga-button type="success">成功按钮</ga-button>
    <ga-button type="info">信息按钮</ga-button>
    <ga-button type="warning">警告按钮</ga-button>
    <ga-button type="danger">危险按钮</ga-button>
  </div>
```
<br>
<br>
<br>

### **Plain :**

<br>
<template>
    <div class="list">
      <ga-button plain >成功按钮</ga-button>
      <ga-button plain type="primary">主要按钮</ga-button>
      <ga-button plain type="success">成功按钮</ga-button>
      <ga-button plain type="info">信息按钮</ga-button>
      <ga-button plain type="warning">警告按钮</ga-button>
      <ga-button plain type="danger">危险按钮</ga-button>
    </div>
</template>

<br>

  ```html
    <div>
      <ga-button plain >成功按钮</ga-button>
      <ga-button plain type="primary">主要按钮</ga-button>
      <ga-button plain type="success">成功按钮</ga-button>
      <ga-button plain type="info">信息按钮</ga-button>
      <ga-button plain type="warning">警告按钮</ga-button>
      <ga-button plain type="danger">危险按钮</ga-button>
    </div>
  ```
<br>
<br>
<br>

### **Size :**

<br>
<template>
    <div class="list">
      <ga-button size="mini" type="primary">主要按钮</ga-button>
      <ga-button size="small" type="success">成功按钮</ga-button>
      <ga-button size="medium" type="info">信息按钮</ga-button>
      <ga-button plain size="medium" type="danger">危险按钮</ga-button>
    </div>
</template>

<br>

  ```html
    <div>
      <ga-button size="mini" type="primary">主要按钮</ga-button>
      <ga-button size="small" type="success">成功按钮</ga-button>
      <ga-button size="medium" type="info">信息按钮</ga-button>
      <ga-button plain size="medium" type="danger">危险按钮</ga-button>
    </div>
  ```
<br>
<br>
<br>

  # Attributes
  <br>

  | 参数          | 说明            |   类型         |   可选值   | 默认值 |
  |-------------  |---------------- |----------------  |-------- | -------- |
  | type          | 按钮的颜色类型 | String |default / primary / success / info / warning /danger | default |
  | plain         |  — |    Boolean | true / false | false |
  | size          | 按钮的大小 | String | mini / small / medium  | small |

  <br>
  <br>
  <br>

  # Events
  <br>

  | 事件名称          | 说明            |   回调函数        
  |-------------  |---------------- |----------------  
  | click          | 按钮的点击事件     |   — |


</template>

<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>

<style lang="scss">
  .list{
    margin-bottom:14px;
    &:last-child{
      margin:0;
    }
    button{
      margin-right:12px;
    }
  }
</style>
