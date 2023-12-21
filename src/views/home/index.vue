<template>
  <div>
    <div>
      <div class="bg-red-300 w-20 h-[20px]"></div>
      <el-button>Default</el-button>
      <el-button type="primary">12</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </div>
    <div class="flex-center">
      Place static files into the <code>/public</code> folder
      <img style="width: 2.4em; margin-left: 0.4em" src="/logo.svg" alt="Logo" />
    </div>
  </div>
</template>

<script setup lang="ts">
import fs from "fs";
import { onMounted } from "vue";

onMounted(() => {
  const a = fs.readFileSync("//Users/li/Personal/electron-vite-vue-main/src/assets/json/authButtonList.json", "utf-8");
  console.log(a);
  const b = JSON.parse(a);
  console.log(b);
});
</script>
