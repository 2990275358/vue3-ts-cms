<template>
  <div class="login-account">
    <el-form :model="account" :rules="rules" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue"
import { useStore } from "vuex"
import { accountRules as rules } from "../config/config"
import { ElForm } from "element-plus"
import localCache from "@/utils/cache"
export default defineComponent({
  setup() {
    const store = useStore()
    // 读取本地缓存
    const localAccount = localCache.getCache("account")
    const account = reactive({
      name: localAccount.name ?? "",
      password: localAccount.password ?? ""
    })
    // InstanceType<typeof ElForm>取到对应类型传给ref,便于做类型推导
    const formRef = ref<InstanceType<typeof ElForm>>()
    // 处理登录
    const handleLogin = (isKeepPassword: boolean) => {
      formRef.value?.validate((isValid) => {
        if (!isValid) return
        // 如果选择记录密码则保存至本地缓存
        if (isKeepPassword) {
          localCache.setCache("account", account)
        }
        store.dispatch("login/accountLoginAction", { ...account })
      })
    }
    return {
      account,
      rules,
      formRef,
      handleLogin
    }
  }
})
</script>

<style scoped></style>
