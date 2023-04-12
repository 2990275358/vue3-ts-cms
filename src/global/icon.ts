import type { App } from "vue"
import * as ElementPlusIconVue from "@element-plus/icons-vue"
import MyIcon from "components/my-icon.vue"

export default function (app: App): void {
  for (const [key, component] of Object.entries(ElementPlusIconVue)) {
    app.component(key, component)
  }
  app.component("MyIcon", MyIcon)
}
