<template>

  >  Radio 单选框

  <br> 




#### 由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。 

<br><br>

#### **基础用法:**
<br><br>

<template>
    <ga-radio :active="true" label="radio"></ga-radio>
    <ga-radio :active="false">单选框</ga-radio>
</template>

<br><br>

```html
  <div>
    <ga-radio :active="true" label="radio"></ga-radio>
    <ga-radio :active="false">单选框</ga-radio>
  </div>
```

<br><br>


  # 参数
  <br>

  | 参数          | 类型            |   默认值         |   说明   |
  |-------------  |---------------- |----------------  |-------- |
  | type          | String     |    default         |   `primary`, `success`, `info`, `warning`,`danger`|
  | plain          | Boolean     |    false         |   `true/false` |
  | size          | String     |    small         |   `mini`,`small`,`medium` |
  | click          | Event     |    -         |   按钮点击事件 |

</template>

<script>
  export default {
    data () {
      return {
          radioData:null,
      }
    },
    mounted(){
        this.$on('input',(val)=>{
            this.radioData = val;
        })
    },
    update(){
        console.log(this.radioData);
    }
  }
</script>

<style lang="scss">
    .ga-radio{
        padding-right:12px;
    }
</style>
