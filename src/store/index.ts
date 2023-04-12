import { createStore } from "vuex"
import type { IRootState } from "./type"
import login from "./login"
export default createStore<IRootState>({
  state() {
    return {}
  },
  mutations: {},
  actions: {},
  modules: {
    login
  }
})
