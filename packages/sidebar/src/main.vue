<template>
    <div ref="sidebar" class="sidebar">
        <ul>
            <li v-for="(item,key) in data" :key="key" @click="expand">
                <p><span>{{key}}</span><GA-icon type="angle-down"></GA-icon></p>
                <ol v-if="item.length">
                    <router-link  tag="li" :to="a.split(' ')[0]" exact  v-for="(a,index) in item" :key="index" >
                        <span>{{a}}</span>
                    </router-link>
                    <!-- <li :class="[activeIndex===index?'active':'']" @click="handlerItemClick(a,index)" v-for="(a,index) in item" :key="index">
                        <span>{{a}}</span>
                    </li> -->
                </ol>
                <ol v-if="!item.length">
                  <li class="no-data">{{tips}}</li>
                </ol>
            </li>
        </ul>
    </div>
</template>

<script>
import GAIcon from '../../icon/index.js';
export default {
  name: "GASidebar",
  data(){
    return{
      activeIndex:0
    }
  },
  components:{GAIcon},
  props: {
    width: {
      type: Number,
      default: 200
    },
    tips: {
      type: String,
      default: "暂无数据"
    },
    data: {
      type: Object,
      required: true
    }
  },
  methods:{
    expand(){

    },
    handlerItemClick(a,i){
      // arguments => item index 
      this.$emit('itemclick',a,i);
      this.activeIndex = i;
    }
  },
  created(){

  },
  mounted() {
    this.$refs.sidebar.style.width = this.width + "px";
  }
};
</script>
