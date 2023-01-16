<template>
  <a-layout h-full ada-layout>
    <a-layout-header>
      <Header />
    </a-layout-header>
    <a-layout>
      <a-layout-sider collapsible breakpoint="md">
        <Sider />
      </a-layout-sider>
      <a-layout-content>
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
  import Header from './components/Header.vue'
  import Sider from './components/Sider.vue'
</script>

<style lang="scss" scoped>
  .ada-layout :deep(.arco-layout-sider) {
    background-color: var(--color-bg-2);
  }
</style>
