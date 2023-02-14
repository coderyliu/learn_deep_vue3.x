import {
  getDetailInfos
} from "@/network";
import {
  defineStore
} from "pinia";

const useDetailStore = defineStore('detail', {
  state: () => {
    return {
      detailInfos: {}
    }
  },
  actions: {
    async fetchDetailInfosAction(houseId) {
      const res = await getDetailInfos(houseId)

      this.detailInfos = res.data
    }
  }
})

export default useDetailStore