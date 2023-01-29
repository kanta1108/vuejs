<template>
    <div v-border:solid.round ="{
    width: '5px',
    color:'blue'
    }">
        <h3>Home</h3>
        <p>This is Home component</p>
        <h2>{{ title | lowerCase }}</h2>
        <h3>{{ subtitle | upperCase}}</h3>
    </div>
</template>
<script>
import { hogehoge } from '@/mixin'
export default {
    mixins:[hogehoge],
    directives: {
        border(el, binding) {
            el.style.borderWidth = binding.value.width
            el.style.borderColor = binding.value.color
            el.style.borderStyle = binding.arg
            binding.modifiers.round ? el.style.borderRadius = '1rem' : '0px';
            binding.modifiers.shadow ? el.style.boxShadow = "0px 0px 30px 5px #000" : "0px 0px 0px 0px"
        }
    }
}
</script>