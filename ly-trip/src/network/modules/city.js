import request from '../request'

export function getAllCitiesData() {
  return request.get({
    url: '/city/all'
  })
}