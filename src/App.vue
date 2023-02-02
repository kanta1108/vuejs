<template>
  <div class="main">
    <button @click="show = !show">toggle</button>
    <button @click="myAnimation = 'slide'">Slide</button>
    <button @click="myAnimation = 'fade'">Fade</button>
    <p>{{ myAnimation }}</p>
    <transition name="fade" appear>
      <h2 v-if="show"
    enter-active-class="animate__animated animate__bounce"
    leave-active-class="animate__animated animate__shakeX"
    >hello</h2>
    </transition>
    <transition 
    :name="myAnimation" 
    appear
    >
      <h2 v-if="show">bye</h2>
    </transition>
    <transition name="fade">
      <p v-if="show" key="hello">こんにちは</p>
      <p v-if="!show" key="bye">さようなら</p>
    </transition>
    <p class="animate__animated animate__bounce">bounce</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true,
      myAnimation:'slide'
    }
  }
}
</script>
<style scoped>
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity .3s;
}
.fade-enter-to{
  opacity: 1;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  transition: opacity .3s;
}
.fade-leave-to{
  opacity: 0;
}

.slide-enter,
.slide-leave-to{
  opacity: 0;
}
.slide-enter-active{
  animation: slide-to .5s;
  transition: opacity 1s;

}
.slide-leave-active{
  animation: slide-to .5s reverse; 
  transition: opacity 1s;
}

.main{
  margin: auto;
  width: 70%;
  text-align: center;
  padding-top: 5rem;

}
@keyframes slide-to {
  from{
    transform: translateX(100px);
  }
  to{
    transform: translateX(0);
  }
}

</style>
