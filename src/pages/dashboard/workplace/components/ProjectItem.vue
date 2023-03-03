<script lang="ts" setup>
export interface Props {
  name: string
  description: string
  belong?: string
}
defineProps<Props>()
</script>

<template>
  <div>ProjectItem</div>
</template>
