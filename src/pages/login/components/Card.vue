<template>
  <div class="card w-full">
    <h1 class="text-3xl text-center mb-10">
      {{ $t('login.title') }}
    </h1>

    <a-form
      ref="form"
      layout="vertical"
      :model="loginForm"
      :rules="rules"
      @submit="handleLogin"
    >
      <a-form-item
        hide-label
        :validate-trigger="formValidTrigger"
        field="username"
      >
        <a-input
          v-model="loginForm.username"
          allow-clear
          :placeholder="$t('login.form.placeholder.username')"
        >
          <template #prefix>
            <icon-user />
          </template>
        </a-input>
      </a-form-item>

      <a-form-item
        hide-label
        :validate-trigger="['change', 'blur']"
        field="password"
      >
        <a-input-password
          v-model="loginForm.password"
          allow-clear
          :placeholder="$t('login.form.placeholder.password')"
        >
          <template #prefix>
            <icon-lock />
          </template>
        </a-input-password>
      </a-form-item>

      <a-row justify="space-between" align="center">
        <a-checkbox
          v-model="rememberPassword"
          @change="switchRememberPassword as any"
        >
          {{ $t('login.form.checkbox.rememberPassword') }}
        </a-checkbox>

        <a-button type="text">
          {{ $t('login.form.checkbox.forgetPassword') }}
        </a-button>
      </a-row>

      <a-form-item class="mt-2">
        <a-button html-type="submit" type="primary" long>Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
  import { useI18n } from 'vue-i18n'
  import { useSettingsStore } from '@/store'
  import { useLogin } from '@/hooks/useLogin'
  import type { LoginForm } from './types.d'
  import type { ValidatedError } from '@arco-design/web-vue'

  const settingsStore = useSettingsStore()
  const { formValidTrigger } = storeToRefs(settingsStore)

  const { t } = useI18n()

  const config = useStorage('loginConfig', {
    rememberPassword: true
  })

  const form = ref()
  const loginForm = reactive<LoginForm>({
    username: '',
    password: ''
  })
  const rules: FormRules = {
    username: {
      required: true,
      message: t('login.form.rule.message.username')
    },
    password: {
      required: true,
      message: t('login.form.rule.message.password')
    }
  }

  const { login } = useLogin()
  const handleLogin = ({
    values,
    errors
  }: {
    values: Record<string, any>
    errors: Record<string, ValidatedError> | undefined
  }) => {
    if (!values || errors) {
      return
    }
    login()
  }

  const rememberPassword = ref<boolean>(config.value.rememberPassword)
  const switchRememberPassword = (value: boolean) => {
    config.value.rememberPassword = value
  }
</script>

<style lang="scss" scoped>
  .card {
    background-color: #fff;
    padding: 20px 60px;
    border-radius: 5px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
</style>
