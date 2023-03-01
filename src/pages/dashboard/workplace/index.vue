<template>
  <div>
    <User />
    <a-row m="y-4" :gutter="16">
      <a-col :xl="18" :xs="24">
        <Projects />
      </a-col>
      <a-col :xl="6" :xs="24">456</a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
  import User from './components/User.vue'
  import Projects from './components/Projects.vue'
</script>
