<template>
  <div>
    <h1>User</h1>
    <hr />
    <h2>User No.{{ id }}</h2>
    <router-link to="/users/1">ユーザー1</router-link>
    <router-link to="/users/2">ユーザー2</router-link>
    <router-link to="/users/3">ユーザー3</router-link>

    <router-view></router-view>
    <div style="height: 700px" id="next"></div>
    <router-link
      :to="{ name: 'users-id-profile', params: { id: Number(id) + 1 }, query: { lang: 'ja' }, hash: '#next' }"
      >次のユーザー</router-link
    >
  </div>
</template>
<script>
  export default {
    props: ["id"]
  };
</script>
