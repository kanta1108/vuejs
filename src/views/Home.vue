<template>
  <div class="home">
    <h3>Home</h3>
    <div class="kv">
      <h4>key visual</h4>
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
  </div>
</template>
<script>
export default {
  methods: {
    toUsers() {
      this.$router.push("users");
    },
  },
};
</script>
<style scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: 10vw;
}
h3 {
  text-align: center;
}
.kv {
  height: 40vw;
  background-color: #ebebeb;
}
.ul {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  gap: 10vw;
}
li {
  list-style: none;
}
.wrapper {
  display: flex;
  flex-direction: row;
}
.card {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
