<template>

  >  Icon 图标 

  <br> 

  ##### 使用了 `font-awesome` , 更多图标请 [查看](http://fontawesome.dashgame.com/)

  <br>

<template>
    <ul class="icon-list">
        <li v-for="(item,index) in iconList" class="item">
            <ga-icon :size="2" :type="item"></ga-icon>
            <br>
            <p>{{item}}</p>
        </li>
    </ul>
</template>

<br>
<br>
<br>

#### **Example**

<br>

1 - 5 可调节icon大小，icon的类参考 [font-awesome](http://fontawesome.dashgame.com/);

<br>
<br>

<template>
    <ga-icon :size="1" type="check-circle-o"></ga-icon>
    <ga-icon :size="2" type="check-circle-o"></ga-icon>
    <ga-icon :size="3" type="check-circle-o"></ga-icon>
    <ga-icon :size="4" type="check-circle-o"></ga-icon>
    <ga-icon :size="5" type="check-circle-o"></ga-icon>
    
</template>


<br>
<br>


    
  ```html
    <ga-icon :size="1" type="check-circle-o"></ga-icon>
    <ga-icon :size="2" type="check-circle-o"></ga-icon>
    <ga-icon :size="3" type="check-circle-o"></ga-icon>
    <ga-icon :size="4" type="check-circle-o"></ga-icon>
    <ga-icon :size="5" type="check-circle-o"></ga-icon>
  ```




<br>


<br>
<br>
<br>

  # Attributes
  <br>

  | 参数          | 说明            |   类型         |   可选值   | 默认值 |
  |-------------  |---------------- |----------------  |-------- | -------- |
  | size          | icon的大小 | Number | 1 / 2 / 3 / 4 / 5 / | 1 |
  | type          | icon类型，参考     <code>[font-awesome_v4.7](http://fontawesome.dashgame.com/)</code>           | String | — |   — |

  
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
    },
    
  }
</script>

