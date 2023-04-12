import { Module } from "vuex"
import type { ILoginState, IRootState } from "./type"
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: ""
    }
  },
  mutations: {},
  actions: {
    accountLoginAction({ commit }, payload: any) {
      console.log("================action执行~", payload)
    }
  }
}
export default loginModule
