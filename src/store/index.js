import Vue from "vue";
import Vuex from "vuex";
import count from "./modules/count";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: "",
  },
  getters: {
    message: (state) => state.message,
  },
  mutations: {
    updateMessage(state, newMessage) {
      state.message = newMessage;
    },
  },
  actions: {
    updateMessage({ commit }, newMessage) {
      commit("updateMessage", newMessage);
    },
  },
  modules: {
    count,
  },
});
