import type { VNodeChild, PropType as VuePropType } from 'vue'

declare global {
  type PropType<T> = VuePropType<T>
  type VueNode = VNodeChild | JSX.Element

  export type Writable<T> = {
    -readonly [P in keyof T]: T[P]
  }

  type ValueOf<T> = T[keyof T]
  type Nullable<T> = T | null
  type Recordable<T = any> = Record<string, T>
  type ReadonlyRecordable<T = any> = {
    readonly [key: string]: T
  }
  type Indexable<T = any> = {
    [key: string]: T
  }
  type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>
  }
  type TimeoutHandle = ReturnType<typeof setTimeout>
  type IntervalHandle = ReturnType<typeof setInterval>
  type Simplify<T> = {
    [P in keyof T]: T[P]
  }
  type SetOptional<T, K extends keyof T> = Simplify<
    Partial<Pick<T, K>> & Pick<T, Exclude<keyof T, K>>
  >
  type SetRequired<T, K extends keyof T> = Simplify<
    Required<Pick<T, K>> & Partial<Pick<T, Exclude<keyof T, K>>>
  >

  interface ChangeEvent extends Event {
    target: HTMLInputElement
  }

  interface WheelEvent {
    path?: EventTarget[]
  }
  function parseInt(s: string | number, radix?: number): number

  function parseFloat(string: string | number): number

  interface BasicResponse<T = any> {
    code: number
    msg: string
    data: T
    success: boolean
    timestamp?: number
  }
}

// vue
