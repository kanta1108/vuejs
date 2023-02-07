import Vue from "vue";
import App from "./App.vue";
import LikeNumber from "./components/LikeNumber";
import router from "./router";
import store from "./store";

Vue.config.productionTip = true;
Vue.component("LikeNumber", LikeNumber);
Vue.filter("upperCase", (value) => {
  return value.toUpperCase();
});
Vue.mixin({
  created() {},
});

router.beforeEach((to, from, next) => {
  next();
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
