import Vue from "vue";
import App from "./App.vue";
import LikeNumber from "./components/LikeNumber";

Vue.config.productionTip = true;

Vue.component("LikeNumber", LikeNumber);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
