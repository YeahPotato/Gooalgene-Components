<template>
    <div class="more-wrap">
        <p @click="showmore">
            <span>{{isExpand?'收起':'更多'}}</span>
        </p>
    </div> 
</template>

<script>
export default {
    name:"GAMore",
    data(){
        return{
            height:0,
            isExpand:false
        }
    },
    mounted(){
        this.height = document.querySelector(this.tag).offsetHeight();
        console.log(this.height);
    },
    methods:{
        showmore(){
            let oPre = document.querySelector(this.tag);
            if(this.isExpand){
                oPre.style.overflow = 'scroll';
                oPre.style.height = this.height+'px';
            }else{
                oPre.style.overflow = 'visible';
                oPre.style.height = 'auto';
            }
            
            this.isExpand = !this.isExpand;
        }
    },
    props:{
        tag:{
            type:"String",
            required:true
        }
    }
};
</script>

<style scoped>
    .more-wrap{
        background-color:#f8f8f8;
    }

    .more-wrap p{
        color:orange;
        padding:12px 0;
        border:1px solid #fff;
        text-align:center;
        cursor:pointer;
    }
</style>
