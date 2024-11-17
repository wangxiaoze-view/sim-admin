import { defineStore } from 'pinia'

export const useErrorStore = defineStore('error', {
  state: (): TErrorType => ({
    errors: [],
  }),
  getters: {
    getErrors: (state) => state.errors,
  },
  actions: {
    setErrors(error: Record<string, any>) {
      this.errors.push(error)
    },
  },
})
