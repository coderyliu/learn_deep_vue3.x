import axios from "axios";

import useMainStore from "@/store/modules/main";
import {
  BASE_URL,
  TIME_OUT
} from "./config";

const mainStore = useMainStore()
class Request {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
    })

    this.instance.interceptors.request.use(config => {
      mainStore.isLoading = true
      return config
    }, err => {
      return err
    })

    this.instance.interceptors.response.use(res => {
      mainStore.isLoading = false
      return res.data
    }, err => {
      mainStore.isLoading = false
      return err
    })
  }

  request(config) {
    return this.instance.request(config)
  }

  get(config) {
    return this.request({
      ...config,
      method: 'get'
    })
  }

  post(config) {
    return this.request({
      ...config,
      method: 'post'
    })
  }
}

export default new Request(BASE_URL, TIME_OUT)