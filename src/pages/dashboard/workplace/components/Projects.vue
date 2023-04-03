<script lang="ts" setup>
import ProjectItem from './ProjectItem.vue'
import type { Props } from './ProjectItem.vue'
import { CardTitle } from '@/components/CardTitle'

const projectList: Props[] = [
  {
    name: 'Vue',
    description: 'Vue3还是Vue2?',
    lastChanged: '一周前',
  },
  {
    name: 'React',
    description: 'React Hooks? React-Redux?',
    lastChanged: '一个月前',
  },
  {
    name: 'Vite',
    description: 'Vite真的很厉害!',
  },
  {
    name: 'Vitest',
    description: '多写写测试代码吧!',
  },
  {
    name: 'Webpack',
    description: 'Webpack5',
    lastChanged: '一年前',
  },
]
</script>

<template>
  <div base-card>
    <CardTitle :title="$t('workplace.projects.title')" />
    <a-row>
      <a-col v-for="(project, index) in projectList" :key="index" :span="8">
        <ProjectItem v-bind="{ ...project }" />
      </a-col>
    </a-row>
  </div>
</template>
