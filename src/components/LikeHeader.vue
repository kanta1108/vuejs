<template>
    <div class="header">
        <slot name="title">
            <h1>default</h1>
        </slot>
        <slot name="number"></slot>
    </div><!-- /.header -->
</template>
<script>
export default {
    props:{
        totalNumber:{
            type:Number,
            default:10
        },
        headerText:{
            type:String
        }
    },
    computed:{
        showNum(){
            return(
                this.totalNumber
            )
        }
        
    }
}
</script>
<style scoped>
div{
    border: 2px dashed #000;
}
h2,p{
    color: blue;
}
</style>
