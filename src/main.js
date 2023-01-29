import Vue from "vue";
import App from "./App.vue";
import LikeNumber from "./components/LikeNumber";

Vue.config.productionTip = true;

Vue.component("LikeNumber", LikeNumber);
Vue.filter('upperCase', (value) => {
  return value.toUpperCase();
})
Vue.mixin({
  created() {
    console.log('global!')
  }
})

new Vue({
  render: (h) => h(App),
}).$mount("#app");
