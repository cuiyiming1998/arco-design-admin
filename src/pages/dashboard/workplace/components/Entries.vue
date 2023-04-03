<script setup lang="ts">
import { Message } from '@arco-design/web-vue'

const operationList = ref<string[]>(['工作台', '审批', '摸鱼', '吃饭', '看文档', '打篮球'])
const handleAddEntry = () => {
  if (operationList.value.length >= 10) {
    Message.warning('最多十个入口!')
    return
  }
  operationList.value.push('新增的')
}
</script>

<template>
  <div base-card>
    <CardTitle :title="$t('workplace.entries.title')" />
    <a-row :gutter="[8, 16]">
      <a-col
        v-for="(name, index) in operationList"
        :key="index"
        :span="6"
        f-c-c
      >
        <a-button type="text">
          {{ name }}
        </a-button>
      </a-col>
      <a-col :span="6" f-c-c>
        <a-button type="primary" @click="handleAddEntry">
          <template #icon>
            <icon-plus />
          </template>
          添加
        </a-button>
      </a-col>
    </a-row>
  </div>
</template>
