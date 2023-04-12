<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs
      type="border-card"
      class="demo-tabs"
      stretch
      @tab-click="handleTabClick"
    >
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <my-icon type="UserFilled" />
            <span>密码登录</span>
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <my-icon type="Iphone" />
            <span>手机登录</span>
          </span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control" v-if="curTab === 0">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import LoginAccount from "./login-account.vue"
import LoginPhone from "./login-phone.vue"
import type { TabsPaneContext } from "element-plus"

export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()
    const curTab = ref(0)
    const isKeepPassword = ref(true)
    const handleLoginClick = (): void => {
      if (curTab.value === 0) {
        accountRef.value?.handleLogin(isKeepPassword.value)
      } else {
        phoneRef.value?.handleLogin()
      }
    }
    const handleTabClick = (pane: TabsPaneContext) => {
      curTab.value = parseInt(pane.paneName as string)
    }
    return {
      accountRef,
      phoneRef,
      isKeepPassword,
      curTab,
      handleLoginClick,
      handleTabClick
    }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  width: 360px;
  margin-bottom: 240px;
  .title {
    text-align: center;
  }
  .account-control {
    width: 100%;
    margin: 10px 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
