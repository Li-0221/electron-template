<template>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import { useTheme } from "./hooks/useTheme";

const { initTheme } = useTheme();
initTheme();
</script>
