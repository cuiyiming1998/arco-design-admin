<template>
  <main class="w-full h-full flex flex-col bg-gray-100">
    <a-row class="flex flex-col flex-1 p-4">
      <a-col class="h-full" :span="14">123</a-col>
      <a-col class="h-full flex items-center justify-center" :span="10">
        <Card />
      </a-col>
    </a-row>
  </main>
</template>

<script lang="ts" setup>
  import Card from './components/Card.vue'
</script>
