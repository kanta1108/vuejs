import LikeNumber from './components/LikeNumber.vue'

<template>
  <div>
    <LikeHeader>
        <h2>Total Good</h2>
    </LikeHeader>
    <LikeNumber @total-increment="increment"></LikeNumber>
    <button @click="currentComponent = 'Home'">HOME</button>
    <button @click="currentComponent = 'About'">ABOUT</button>
    <KeepAlive>
      <component :is=" currentComponent "></component>
    </KeepAlive>
    <CountNum></CountNum>
    <div>
      <h3>Event Form</h3>
      <EventTitle v-model="eventData.title"></EventTitle>
      <label for="title">Age</label>
      <input type="number" name="age" v-model="eventData.age">
      <p>{{  eventData.age }}</p>
      <label for="host">Host</label>
      <input type="texr" name="host" v-model.trim="eventData.host">
      <p>{{  eventData.host }}</p>
      <label for="detail"></label>
      <textarea v-model="eventData.detail" name="detail" id="" cols="30" rows="10"></textarea>
      <p>{{ eventData.detail }}</p>
      <label for="isPrivate">Private</label>
      <input v-model="eventData.isPrivate" type="checkbox" name="isPrivate" id="">
      <p>{{ eventData.isPrivate }}</p>
      <p>sex</p>
      <label for="man">man</label>
      <input v-model="eventData.sex" type="radio" name="sex" id="sex" value="man">
      <label for="woman">woman</label>
      <input v-model="eventData.sex" type="radio" name="sex" id="sex" value="woman">
      <label for="other">other</label>
      <input v-model="eventData.sex" type="radio" name="sex" id="sex" value="other">
      <p>{{ eventData.sex }}</p>
      <select style="padding:10px" v-model="eventData.location">
        <option v-for="location in locations" :key ="location">
          {{ location }}
        </option>
      </select>
      <p>{{ eventData.location }}</p>
    </div>
  </div>
</template>
<script>
import LikeHeader from './components/LikeHeader.vue'
import  About  from "./components/About.vue";
import Home from './components/Home.vue';
import EventTitle from "./components/EventTitle.vue";
import CountNum from './components/CountNum.vue';

export default {
  data(){
    return{
      number:0,
      currentComponent: 'Home',
      locations: ["tokyo", "osaka", "fukuoka"],
      eventData: {
        title: '',
        age: 0,
        host: '',
        detail: '',
        isPrivate: false,
        sex: '',
        location:""
      }
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
    LikeHeader,
    Home,
    About,
    EventTitle,
    CountNum
  }
}
</script>
