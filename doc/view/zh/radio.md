<template>

  >  Radio 单选框

  <br> 




#### 由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。 

<br><br>

#### **基础用法:**
<br><br>

<template>
    <ga-radio v-model="radioData" label="radio1">单选框1</ga-radio>
    <ga-radio v-model="radioData" label="radio2">单选框2</ga-radio>
</template>

<br><br>

```html
  <div>
    <ga-radio v-model="radioData"  label="radio1">单选框1</ga-radio>
    <ga-radio v-model="radioData" label="radio2">单选框2</ga-radio>
  </div>
```

<br><br>


  # 参数
  <br>

  | 参数          | 类型            |   默认值         |   说明   |
  |-------------  |---------------- |----------------  |-------- |
  | label          | String     |    default         |   `primary`, `success`, `info`, `warning`,`danger`|
  | disabled          | Boolean     |    false         |   `true/false` |
  | size          | String     |    small         |   `mini`,`small`,`medium` |

</template>

<script>
  export default {
    data () {
      return {
          radioData:'radio1',
      }
    },
    watch:{
      radioData:function(newVal,oldVal){
        console.log(newVal)
      }
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
