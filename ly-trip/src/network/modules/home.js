import request from "../request";

export function getHomeRecommendLocation() {
  return request.get({
    url: '/home/hotSuggests'
  })
}

export function getHomeCategories() {
  return request.get({
    url: '/home/categories'
  })
}

export function getHomeHotHouseData(currentPage) {
  return request.get({
    url: '/home/houselist',
    params: {
      page: currentPage
    }
  })
}