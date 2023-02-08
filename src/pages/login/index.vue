<template>
  <main class="w-full h-full flex flex-col bg-gray-100">
    <a-row class="flex flex-col flex-1 p-15">
      <a-col class="h-full" :sm="11" :md="13">123</a-col>
      <a-col class="h-full flex items-center justify-center" :sm="13" :md="11">
        <Card />
      </a-col>
    </a-row>
  </main>
</template>

<script lang="ts" setup>
  import Card from './components/Card.vue'
</script>
