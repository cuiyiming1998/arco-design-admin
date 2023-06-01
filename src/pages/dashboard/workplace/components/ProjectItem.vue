<script lang="ts" setup>
export interface Props {
  name: string
  description: string
  belong?: string
  lastChanged?: string
}
const props = withDefaults(
  defineProps<Props>(),
  {
    name: '',
    description: '',
    belong: 'Young',
    lastChanged: '',
  },
)
</script>

<template>
  <div
    flex-col
    w-full
    h-32
    box-border
    base-shadow
  >
    <div p="x-6 y-4" flex-1>
      <span text="lg" font="500">
        <span i-mdi-vuejs text="green-600" />
        <span
          text="hover:primary-5"
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
      <div mt-4 flex justify-between items-center text="gray-500/50">
        <span>
          {{ props.belong || '-' }}
        </span>
        <span v-if="props.lastChanged">
          {{ props.lastChanged }}
        </span>
      </div>
    </div>
  </div>
</template>
