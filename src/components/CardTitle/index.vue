<script lang="ts" setup>
const props = withDefaults(defineProps<{ title: string }>(), {
  title: '',
})
</script>

<template>
  <div mb-2>
    <a-typography-text text="lg text-1" font="bold" block>
      {{ props.title }}
    </a-typography-text>
  </div>
</template>
