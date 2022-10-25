import {
  defineStore
} from 'pinia'
import {
  getAllCitiesData
} from '@/network'

const useCityStore = defineStore('city', {
  state: () => {
    return {
      allCities: {}
    }
  },
  getters: {},
  actions: {
    // 注意，action不能为箭头函数，否则不能拿到this
    async fetchAllCitiesAction() {
      const res = await getAllCitiesData()
      this.allCities = res.data
    }
  }
})

export default useCityStore