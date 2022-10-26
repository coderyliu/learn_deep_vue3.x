import {
  defineStore
} from 'pinia'

import {
  getHomeRecommendLocation
} from '@/network'

const useHomeStore = defineStore('home',{
  state: () => {
    return {
      recommendLocationInfo: []
    }
  },
  actions: {
    async fetchHomeRecommendLocaltionAction() {
      const res = await getHomeRecommendLocation()

      this.recommendLocationInfo=res.data
    }
  }
})

export default useHomeStore