<script lang="ts" setup>
export interface Props {
  name: string
  description: string
  belong?: string

}
const props = withDefaults(
  defineProps<Props>(),
  {
    name: '',
    description: '',
    belong: 'Young',
  },
)
</script>

<template>
  <div
    flex-col
    w-full
    h-32
    shadow="~ gray-500/30 hover:bluegray hover:xl"
    transition="all 9"
  >
    <div p-4 flex-1>
      <span text="lg" font="500">
        <span i-mdi-vuejs text="green-600" />
        <span text="md" inline-block ml-2>
          {{ props.name || '-' }}
        </span>
      </span>
      <div mt-4 text-gray>
        {{ props.description || '-' }}
      </div>
      <div mt-4 text="gray-500/50">
        {{ props.belong || '-' }}
      </div>
    </div>
  </div>
</template>
