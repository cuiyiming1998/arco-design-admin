<script lang="ts" setup>
export interface Props {
  name: string
  description: string
  belong?: string
}
const props = defineProps<Props>()
</script>

<template>
  <div
    border="solid  1px gray-200"
    flex="col"
    justify-center
    items-center
    p="4"
  >
    <a-typography-text text="xl" font="500">
      {{ props.name }}
    </a-typography-text>
  </div>
</template>
