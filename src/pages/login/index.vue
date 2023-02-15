<template>
  <main class="flex-col wh-full" bg="gray-100">
    <a-row class="flex flex-col flex-1" p="15">
      <a-col h="full" :sm="0" :md="13">123</a-col>
      <a-col h="full" class="f-c-c" :sm="24" :md="11">
        <Card />
      </a-col>
    </a-row>
  </main>
</template>

<script lang="ts" setup>
  import Card from './components/Card.vue'
</script>
