import { defineStore } from 'pinia'
import type { Ref } from 'vue'

interface CounterState {
  n: number
  myRef: Ref<string>
}

export const useAppStore = defineStore('App', {
  state: (): CounterState => ({
    n: 5,
    myRef: ref('hello'),
  }),
  actions: {
    increment() {
      this.n++
    },
  },
})
