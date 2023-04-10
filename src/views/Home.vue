<template>
  <div class="home">
<<<<<<< HEAD
    <h1>Home</h1>
    <button @click="toUsers">User</button>
=======
    <div class="kv">
      <h4>key visual</h4>
      <p>{{ doubleCount }}</p>
      <p>{{ tripleCount }}</p>
    </div>
    <div>
      <button @click="toUsers">Users</button>
    </div>
    <ul class="ul">
      <li>list</li>
      <li>list</li>
      <li>list</li>
      <li>list</li>
      <li>list</li>
    </ul>
    <div class="wrapper">
      <div class="card">
        <span>1</span>
        <p>paragraph</p>
      </div>
      <div class="card">
        <span>2</span>
        <p>paragraph</p>
      </div>
    </div>
>>>>>>> 57c4cdaf060fa2b37ea9e8eba121457c71193477
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
