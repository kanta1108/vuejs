<template>
  <div>
    <router-view name="header"></router-view>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script></script>
<style scoped>
  .slide-enter {
    transform: translateX(-70%);
    opacity: 0;
  }
  .slide-leave-to {
    transform: translateX(70%);
    opacity: 0;
  }
  .slide-enter-active,
  .slide-leave-active {
    transition: all 0.5s linear;
  }
</style>
