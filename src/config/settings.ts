export interface ProjectSettings {
  theme?: 'light' | 'dark'
  projectName: string
  baseURL: string
  mock: boolean
  urlPrefix: string
  requestTimeout: number
  successCode: number[] | number
  isShowGithub: boolean
  github: string
  formValidTrigger:
  | 'focus'
  | 'input'
  | 'blur'
  | 'change'
  | ('focus' | 'input' | 'blur' | 'change')[]
}

const defaultSettings: ProjectSettings = {
  // 默认主题
  theme: 'light',
  // 项目名称
  projectName: 'Arco Design Admin',
  // 接口默认url
  baseURL: 'https://demo.opsli.bedebug.com/opsli-boot',
  // 是否开启mock
  mock: false,
  // 接口url前缀
  urlPrefix: '',
  // 超时时间 单位s
  requestTimeout: 5,
  // 接口成功的code集合
  successCode: [0, 200],
  // 是否显示github icon
  isShowGithub: true,
  // github跳转地址,
  github: 'https://www.github.com/cuiyiming1998/arco-design-admin',
  // 表单验证trigger
  formValidTrigger: ['blur', 'change'],
}
export default defaultSettings
