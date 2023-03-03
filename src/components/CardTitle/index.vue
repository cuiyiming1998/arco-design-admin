<script lang="ts" setup>
const props = withDefaults(defineProps<{ title: string }>(), {
  title: '',
})
</script>

<template>
  <div>
    <a-typography-text text="xl text-1" font="bold" m="0" block>
      {{ props.title }}
    </a-typography-text>
  </div>
</template>
