import {
  defineStore
} from 'pinia'

const useSearchStore = defineStore('search', {
  state: () => {
    return {
      name: 'xian'
    }
  },
  getters: {},
  actions: {}
})

export default useSearchStore