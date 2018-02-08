<template>

  

  # 提示框


  ## 二級標題

  <GA-icon type="address-card-o"></GA-icon>

  ```github```

  ### 参数

  | 参数          | 类型            |   默认值         |   说明   |
  |-------------  |---------------- |----------------  |-------- |
  | name          | String     |    -         |   <code>fade</code> <code>fadeLeft</code><code>fadeDown</code><code>bounce</code><code>scale</code>    |


  
  ```javascript

    export default {
      methods: {
        showToast () {
          this.n3Toast({
            text: '成功',
            type: 'success',
            placement: 'top',
            closeOnClick : true
          })
        }
      }
    }
    
  ```  
  |
  

</template>

<script>
  export default {
    data () {
      return {
        show: false
      }
    }
  }
</script>