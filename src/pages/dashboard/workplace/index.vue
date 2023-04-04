<script lang="ts" setup>
import User from './components/User.vue'
import Projects from './components/Projects.vue'
import Entries from './components/Entries.vue'
import Groups from './components/Groups.vue'
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
          <Entries />
          <Groups mt-4 />
        </a-col>
      </a-row>
    </div>
  </div>
</template>
