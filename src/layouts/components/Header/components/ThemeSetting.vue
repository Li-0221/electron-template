<template>
  <div class="theme-setting">
    <el-icon class="toolBar-icon" @click="openDrawer"><Setting /></el-icon>
  </div>
</template>

<script setup lang="ts">
import mittBus from "@/utils/mittBus";
const openDrawer = () => {
  mittBus.emit("openThemeDrawer");
};
</script>
