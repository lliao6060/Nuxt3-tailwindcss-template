import { defineStore } from 'pinia'
import type { Ref } from 'vue'

interface AppState {
  n: number
  myRef: Ref<string>
}

export const useAppStore = defineStore('App', {
  state: (): AppState => ({
    n: 5,
    myRef: ref('hello'),
  }),
  actions: {
    increment() {
      this.n++
    },
  },
})
