<template>
  <div class="main">
    <button @click="show = !show">toggle</button>
    <transition name="fade">
      <h2 v-if="show">hello</h2>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true,
    }
  }
}
</script>
<style scoped>
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity 3s;
}
.fade-enter-to{
  opacity: 1;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  transition: opacity 3s;
}
.fade-leave-to{
  opacity: 0;
}
.main{
  margin: auto;
  width: 70%;
  text-align: center;
  padding-top: 5rem;

}
</style>