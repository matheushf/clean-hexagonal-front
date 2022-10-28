<script setup lang="ts">
import { darkTheme, NConfigProvider } from 'naive-ui';
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <router-view />
  </n-config-provider>
</template>
