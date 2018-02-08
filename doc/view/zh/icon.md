<template>

  # Icon 图标
  <br>

  #### 内置了 font-awesome icon;
  <br>

<template>
    <ul class="icon-list">
        <li v-for="(item,index) in iconList" class="item">
            <GA-icon :size="2" :type="item"></GA-icon>
            <br>
            <p>{{item}}</p>
        </li>
    </ul>
</template>

  ## EXAMPLE

<template>
    <GA-icon :size="1" type="check-circle-o"></GA-icon>
    <GA-icon :size="2" type="check-circle-o"></GA-icon>
    <GA-icon :size="3" type="check-circle-o"></GA-icon>
    <GA-icon :size="4" type="check-circle-o"></GA-icon>
    <GA-icon :size="5" type="check-circle-o"></GA-icon>
</template>

<br>

    
#### 1-5 可调节icon大小，icon的类参考font-awesome;
<br>

  ```html

    <GA-icon :size="1" type="check-circle-o"></GA-icon>
    <GA-icon :size="2" type="check-circle-o"></GA-icon>
    <GA-icon :size="3" type="check-circle-o"></GA-icon>
    <GA-icon :size="4" type="check-circle-o"></GA-icon>
    <GA-icon :size="5" type="check-circle-o"></GA-icon>
    
  ```
<br>

  # 参数
  <br>

  | 参数          | 类型            |   默认值         |   说明   |
  |-------------  |---------------- |----------------  |-------- |
  | type          | String     |    -         |   <code>fade</code> <code>fadeLeft</code><code>fadeDown</code><code>bounce</code><code>scale</code>    |

</template>

<script>
  export default {
    data () {
      return {
        iconList:[
            'address-book',
            'check',
            'circle-thin',
            'close',
            'cube',
            'user-o',
            'ban',
            'calendar-check-o',
            'camera',
            'check-circle',
            'check-circle-o',
            'circle-o-notch',
            'cloud-download',
            'cog',
            'comments',
            'file-code-o',
            'file-picture-o',
            'check-square',
            'check-square-o',
            'minus-square-o',
            'square',
            'area-chart',
            'pie-chart',
            'bar-chart-o',
            'cny',
            'btc',
            'dollar',
            'copy',
            'bold',
            'rotate-left',
            'undo',
            'angle-up',
            'angle-down',
            'angle-left',
            'angle-right',
            'caret-up',
            'caret-left',
            'caret-down',
            'caret-right',
            'amazon',
            'bluetooth',
            'android',
            'css3',
            'chrome'
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
    .icon-list{
        display:flex;
        flex-wrap: wrap;
        li{
            width:110px;
            text-align:center; 
            padding:20px 0;
            p{
                font-size:14px;
                color:#000;
                line-height:1.8;
            }
                    i{
                        color:orange;
                    }
        }
    }
</style>