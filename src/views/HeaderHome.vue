<template>
    <nav>
        <h2>Home</h2>
      <router-link to="/" tag="button" active-class="active" exact>Home</router-link>
      <router-link to="/users" tag="button" active-class="active" exact>Users</router-link>
    </nav> 
</template>
<style>
nav{
    text-align: center;
}
</style>
