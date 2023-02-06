<template>
  <div>
    <router-view name="header"></router-view>
    <!-- <transition name="slide" mode="out-in"> -->
    <router-view></router-view>
    <!-- </transition> -->
  </div>
</template>
<style scoped>
.active {
  font-size: 20px;
}
.slide-enter {
  /* opacity: 0; */
  transform: translateX(1000px);
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.8s;
}
.slide-leave-to {
  /* opacity: 0; */
  transform: translateX(-1000px);
}
</style>
