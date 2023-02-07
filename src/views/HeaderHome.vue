<template>
    <nav>
        <h2>Home</h2>
        <p>{{ count }}</p>
        <button @click="increment">+1</button>
        <button @click="decrement">-1</button>
      <router-link to="/" tag="button" active-class="active" exact>Home</router-link>
      <router-link to="/users" tag="button" active-class="active" exact>Users</router-link>
    </nav> 
</template>
<script>
export default {
    computed:{
        count(){
            return this.$store.state.count
        }
    },
    methods:{
        increment(){
            this.$store.state.count++
        },
        decrement(){
            return this.$store.state.count--
        }
    }   
}
</script>
<style>
nav{
    text-align: center;
}
</style>
