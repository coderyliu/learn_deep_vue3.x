import {
  defineStore
} from 'pinia'

const useMainStore = defineStore('main',{
  state: () => {
    return {
      isLoading: false
    }
  }
})

export default useMainStore