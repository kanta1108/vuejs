<template>
  <div>
    <div>
      <h3>Users</h3>
      <router-link to="/users/1" tag="button">user1</router-link>
      <router-link to="/users/2" tag="button">user2</router-link>
      <router-link to="/users/3" tag="button">user3</router-link>
      <hr />
      <h3>User No.{{ id }}</h3>
      <!-- <router-link :to="'/users/'+(Number(id) + 1)+'/profile'">Next User's Profile</router-link> -->
      <router-link
        :to="{
          name: 'users-id-profile',
          params: { id: Number(id) + 1 },
          hash: '#next-user',
        }"
        >Next User's Profile</router-link
      >
      <transition name="fade">
        <router-view></router-view> 
      </transition>
      <div style="height: 1700px"></div>
      <router-link
        id="next-user"
        :to="{ name: 'users-id-profile', params: { id: Number(id) + 1 } }"
        >Next User's Profile</router-link
      >
    </div>
  </div>
</template>
<script>
export default {
  props: ["id"],
};
</script>
<style>
.fade-enter,
.fade-leave-to{
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.5s;
}
</style>
