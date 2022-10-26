import request from "../request";

export function getHomeRecommendLocation(){
  return request.get({
    url:'/home/hotSuggests'
  })
}