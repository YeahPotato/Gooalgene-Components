<template>
    <i :class="[
        'fa',
        type?'fa-'+type:'',
        size==1?`fa-lg`:`fa-${size}x`
    ]" aria-hidden="true"></i>
</template>

<script>
export default {
    name:"GAIcon",
    props:{
        type:String,
        size:{
            type:Number,
            default:1
        }
    }
}
</script>

