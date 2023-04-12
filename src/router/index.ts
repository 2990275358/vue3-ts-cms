import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import Main from "../views/main/main.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/main",
    name: "main",
    component: Main
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login/login.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
