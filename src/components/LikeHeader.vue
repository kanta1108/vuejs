<template>
    <div class="header">
        <slot></slot>
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

