<template>
  <div class="login-phone">
    <el-form :model="{ phone, code }" :rules="rules" ref="formRef">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="phone" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="code-box">
          <el-input v-model="code" />
          <el-button type="primary" class="code-btn">发送验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import { ElForm } from "element-plus"
import { phoneRules as rules } from "../config/config"
export default defineComponent({
  setup() {
    const formRef = ref<InstanceType<typeof ElForm>>()
    const phone = ref("")
    const code = ref("")
    const handleLogin = () => {
      formRef.value?.validate((isValid) => {
        if (!isValid) return
        console.log("正在手机号验证码登录~")
      })
    }
    return {
      phone,
      code,
      formRef,
      rules,
      handleLogin
    }
  }
})
</script>

<style scoped lang="less">
.code-box {
  display: flex;
  .code-btn {
    margin-left: 10px;
  }
}
</style>
