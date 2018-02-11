<template>

  # Button 按钮 
  <br> 

  #### 常用的操作按钮

  <br><br>

#### **Type :**
<br><br>

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

<br><br>

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
<br><br>
#### **Plain :**
<br><br>
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

<br><br>

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
<br><br>


#### **tips**:1-5 可调节icon大小，icon的类参考font-awesome;
<br><br>

  # 参数
  <br>

  | 参数          | 类型            |   默认值         |   说明   |
  |-------------  |---------------- |----------------  |-------- |
  | type          | String     |    default         |   可选类型：primary, success, info, warning,danger|

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
