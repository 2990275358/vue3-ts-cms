<template>
  <el-icon
    :size="size"
    :color="color"
    style="position: relative; top: 2px; margin: 0 5px 0 10px"
  >
    <component :is="type" />
  </el-icon>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "myIcon",
  props: {
    type: {
      type: String,
      default: "User"
    },
    size: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    }
  }
})
</script>
