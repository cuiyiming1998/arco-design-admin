<script lang="ts" setup>
import User from './components/User.vue'
import Projects from './components/Projects.vue'
</script>

<template>
  <div>
    <User />
    <div my-4>
      <a-row :gutter="[16, 16]">
        <a-col :xl="16" :xs="24">
          <Projects />
        </a-col>
        <a-col :xl="8" :xs="24">
          快捷入口
        </a-col>
      </a-row>
    </div>
  </div>
</template>
