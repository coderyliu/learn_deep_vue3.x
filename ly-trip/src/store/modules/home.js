import {
  defineStore
} from 'pinia'

import {
  getHomeCategories,
  getHomeHotHouseData,
  getHomeRecommendLocation
} from '@/network'

const useHomeStore = defineStore('home',{
  state: () => {
    return {
      recommendLocationInfo: [],
      categories:[],

      housesList:[]
    }
  },
  actions: {
    async fetchHomeRecommendLocaltionAction() {
      const res = await getHomeRecommendLocation()

      this.recommendLocationInfo=res.data
    },
    async fetchHomeCategoriesAction(){
      const res=await getHomeCategories()

      this.categories=res.data
    },
    async fetchHomeHousesAction(page){
      const res=await getHomeHotHouseData(page)

      this.housesList=this.housesList.concat(res.data)
    }
  }
})

export default useHomeStore