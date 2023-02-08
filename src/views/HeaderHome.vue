<template>
  <nav>
    <h2>Home</h2>
    <p>{{ count.count }}</p>
    <button @click="increment(2)">+1</button>
    <button @click="decrement(3)">-1</button>
    <router-link to="/" tag="button" active-class="active" exact
      >Home</router-link
    >
    <router-link to="/users" tag="button" active-class="active" exact
      >Users</router-link
    >
    <input type="text" v-model="message" >
    <p>{{ message }}</p>
  </nav>
</template>
<script>
import { mapActions } from "vuex";
export default {
  computed: {
    count() {
      return this.$store.state.count;
    },
    message:{
        get(){
        return this.$store.getters.message
        },
        set(value){
            this.$store.dispatch('updateMessage', value)
        }
    }
  },
  methods: {
    ...mapActions(['increment','decrement']),
  },
};
</script>
<style>
nav {
  text-align: center;
}
</style>
