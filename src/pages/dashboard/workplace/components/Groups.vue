<script setup lang="ts">

</script>

<template>
  <div base-card>
    <CardTitle :title="$t('workplace.groups.title')" />
    <a-row :gutter="[16, 32]">
      <a-col :span="8" f-c-c>
        <a-badge :count="2">
          <a href="" f-c-c flex-col>
            <span
              i-mdi-vuejs
              w-10
              h-10
              mb-2
            />
            <span text-sm> Vue.js </span>
          </a>
        </a-badge>
      </a-col>
      <a-col :span="8" f-c-c>
        <a-badge :count="0">
          <a href="" f-c-c flex-col>
            <span
              i-mdi-react
              w-10
              h-10
              mb-2
            />
            <span text-sm> React.js </span>
          </a>
        </a-badge>
      </a-col>
      <a-col :span="8" f-c-c>
        <a-badge :count="2">
          <a href="" f-c-c flex-col>
            <span
              i-mdi-flask
              w-10
              h-10
              mb-2
            />
            <span text-sm> Chemistry </span>
          </a>
        </a-badge>
      </a-col>
      <a-col :span="8" f-c-c>
        <a-badge :count="11">
          <a href="" f-c-c flex-col>
            <span
              i-mdi-hamburger
              w-10
              h-10
              mb-2
            />
            <span text-sm> 吃什么小组 </span>
          </a>
        </a-badge>
      </a-col>
    </a-row>
  </div>
</template>
