<template>

  # Button 按钮 
  <br> 

  #### 常用的操作按钮

  <br><br>
  ## **EXAMPLE**
  <br><br>

<template>
    <div>
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
<br>

#### **tips**:1-5 可调节icon大小，icon的类参考font-awesome;
<br><br>

  # 参数
  <br>

  | 参数          | 类型            |   默认值         |   说明   |
  |-------------  |---------------- |----------------  |-------- |
  | size          | Number     |    1         |   <code>1</code> <code>2</code><code>3</code><code>4</code><code>5</code>    |
  | type          | String     |    -         |   <code>caret-left</code> <code>check-circle-o</code>  |

</template>

<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>
