<template>
  <div class="login">
    <loginPanel />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import loginPanel from "./cnps/login-panel.vue"

export default defineComponent({
  name: "Login",
  components: {
    loginPanel
  }
})
</script>
<style sscoped lang="less">
.login {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
