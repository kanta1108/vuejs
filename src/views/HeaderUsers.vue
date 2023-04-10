<template>
  <div>
    <h2>Users</h2>
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
</style>
