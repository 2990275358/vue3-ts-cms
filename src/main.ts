import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "normalize.css"
import "@/assets/css/index.less"
import registerGlobal from "@/global/index"

createApp(App).use(store).use(registerGlobal).use(router).mount("#app")

import request from "../src/service/index"

interface IData {
  data: any
  returnCode: string
  success: boolean
}

request
  .post({
    url: "/login",
    data: {
      name: "codewhy",
      password: "123456"
    }
  })
  .then((res) => {
    console.log(res)
  })
