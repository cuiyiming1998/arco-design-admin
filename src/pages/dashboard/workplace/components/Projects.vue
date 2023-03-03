<script lang="ts" setup>
import ProjectItem from './ProjectItem.vue'
import type { Props } from './ProjectItem.vue'
import { CardTitle } from '@/components/CardTitle'

const projectList: Props[] = [
  {
    name: 'Vue',
    description: 'Vue.js',
  },
]
</script>

<template>
  <div bg="bg-2" p="4">
    <CardTitle :title="$t('workplace.user.projects')" />
    <a-row m="t-2">
      <a-col v-for="(project, index) in projectList" :key="index" :span="8">
        <ProjectItem :description="project.description" :name="project.name" />
      </a-col>
    </a-row>
  </div>
</template>
