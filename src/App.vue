import LikeNumber from './components/LikeNumber.vue'

<template>
  <div>
    <LikeHeader :totalNumber="number">
      <template #title>
        <h2>Total Good</h2>
      </template>
      <template #number>
        <p>{{ number }}</p>
      </template>
      <h3>etc...</h3>
    </LikeHeader>
    <LikeNumber @total-increment="increment"></LikeNumber>
    <LikeNumber @total-increment="increment"></LikeNumber>
  </div>
</template>
<script>
import LikeHeader from './components/LikeHeader.vue'
export default {
  data(){
    return{
      number:0
    }
  },
  methods:{
    increment(){
      this.number += 1
    },
    reset(){
      this.number = 0
    }
  },
  components:{
    LikeHeader
  }
}
</script>
