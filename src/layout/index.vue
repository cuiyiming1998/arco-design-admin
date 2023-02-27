<template>
  <a-layout h-full ada-layout>
    <a-layout-header>
      <Header />
    </a-layout-header>
    <a-layout>
      <a-layout-sider collapsible breakpoint="md">
        <Sider />
      </a-layout-sider>
      <a-layout-content class="flex-col">
        <router-view p="2" flex="1" overflow="auto" bg="fill-1" />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
  import Header from './Header/index.vue'
  import Sider from './Sider/index.vue'
</script>

<style lang="scss" scoped>
  .ada-layout :deep(.arco-layout-sider) {
    background-color: var(--color-bg-2);
  }
</style>
