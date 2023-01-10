<template>
  <main class="flex flex-col justify-center items-center p-20">
    <a-button type="primary">按钮</a-button>
  </main>
</template>

<script lang="ts" setup>
  import { test } from '@/api'

  test()
</script>
