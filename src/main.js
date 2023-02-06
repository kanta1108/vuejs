import Vue from "vue";
import App from "./App.vue";
import LikeNumber from "./components/LikeNumber";
import router from "./router";

Vue.config.productionTip = true;
Vue.component("LikeNumber", LikeNumber);
Vue.filter("upperCase", (value) => {
  return value.toUpperCase();
});
Vue.mixin({
  created() {},
});

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app");
