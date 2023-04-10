<template>
  <div>
    <h2>Home</h2>
<<<<<<< HEAD
    <nav>
      <!-- リンクはrouter-linkを使う
          リンク先はhrefではなくtoを使う -->
      <!--
          active-classはリンクがアクティブになったときに付与されるクラス名
          exactはリンクが完全に一致したときにのみアクティブになる
          -->
      <router-link to="/" class="link" active-class="link--active" exact>Home</router-link>
      |
      <router-link :to="{ name: 'users', params: { id: 1 } }" class="link" active-class="link--active"
        >Users</router-link
      >
    </nav>
  </div>
</template>
<style scoped>
  .link {
    color: #42b983;
    text-decoration: none;
    font-weight: bold;
    opacity: 0.5;
  }
  .link--active {
    opacity: 1;
  }
=======
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
>>>>>>> 57c4cdaf060fa2b37ea9e8eba121457c71193477
</style>
