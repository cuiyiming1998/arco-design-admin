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
    shadow="~ gray-500/30"
    transition="all 9"
  >
    <div p-4 flex-1>
      <span text="lg" font="500">
        <span i-mdi-vuejs text="green-600" />
        <span
          text="md
          hover:primary-5"
          inline-block
          ml-2
          cursor-pointer
        >
          {{ props.name || '-' }}
        </span>
      </span>
      <div mt-4 text-gray-500>
        {{ props.description || '-' }}
      </div>
      <div mt-4 w-full text="gray-500/50">
        {{ props.belong || '-' }}
      </div>
    </div>
  </div>
</template>
