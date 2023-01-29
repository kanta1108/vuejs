<template>
    <div>
        <h3>Home</h3>
        <p>This is Home component</p>
        <h2>{{ title | lowerCase }}</h2>
        <h3>{{ subtitle | upperCase}}</h3>
    </div>
</template>
<script>
import {hogehoge} from "@/mixin"
export default {
    mixins: [hogehoge],
    created() {
        console.log('hoge')
    }
}
</script>
<style scoped>
div{
    border: dotted 5px red;
}
</style>