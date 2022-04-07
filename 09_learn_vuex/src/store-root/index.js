import {
  createStore
} from 'vuex'
import axios from 'axios'

const store = createStore({
  state() {
    return {
      counter: 0,
      name: 'coder',
      age: 18,
      height: 1.88,
      books: [{
          name: '深入VueJs',
          price: 200,
          count: 3
        },
        {
          name: "深入Webpack",
          price: 240,
          count: 5
        },
        {
          name: "深入React",
          price: 130,
          count: 1
        },
        {
          name: "深入Node",
          price: 220,
          count: 2
        }
      ],
      discount: 0.6,
      banners: []
    }
  },
  getters: {
    totalPrice(state, getters) {
      let totalPrice = 0
      for (const book of state.books) {
        totalPrice += book.count * book.price
      }

      return totalPrice.toFixed(2) * getters.currentDiscount
    },
    currentDiscount(state) {
      return state.discount * 0.9
    },
    totalPriceCountGreaterN(state, getters) {
      return function (n) {
        let totalPrice = 0
        for (const book of state.books) {
          if (book.count > n) {
            totalPrice += book.count * book.price
          }
        }

        return totalPrice * getters.currentDiscount
      }
    },
    nameInfo(state) {
      return state.name
    },
    ageInfo(state) {
      return state.age
    },
    heightInfo(state) {
      return state.height
    }
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    incrementN(state, payLoad) {
      state.counter += payLoad.count
    },
    addBannerData(state, payLoad) {
      state.banners = payLoad
    }
  },
  actions: {
    incrementAction(context, payLoad) {
      setTimeout(() => {
        context.commit('increment', payLoad)
      }, 1000)
    },
    decrementAction(context, payLoad) {
      context.commit('decrement', payLoad)
    },
    getHomeMultidata(context) {
      return new Promise((resolve, reject) => {
        axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
          context.commit('addBannerData', res.data.data.banner.list)
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
})

export default store