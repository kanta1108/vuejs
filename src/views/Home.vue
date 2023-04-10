<template>
  <div class="home">
    <h1>Home</h1>
    <button @click="toUsers">User</button>
  </div>
</template>
<script>
  export default {
    name: 'Home',
    methods: {
      toUsers() {
        //$routerでルーティングを行う
        //pushメソッドで遷移先を指定する
        this.$router.push({
          name: 'users-id-profile', //pathではなくnameを指定することもできる
          params: { id: 1 }
        });
      }
    }
  };
</script>
<style scoped></style>
