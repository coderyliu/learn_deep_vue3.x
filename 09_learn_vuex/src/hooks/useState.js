import {useStore,mapState} from 'vuex'
import {computed} from 'vue'

export function useState(mapper){
  // 1.拿到store对象
  const store=useStore()

  // 2.遍历key,给函数绑定this,并且变成响应式
  const storeStateFns=mapState(mapper)

  // 真正的computed对象访问store中的state
  const storeState={}

  Object.keys(storeStateFns).forEach(fnKey=>{
    const fn=storeStateFns[fnKey].bind({$store:store})

    storeState[fnKey]=computed(fn)
  })

  return storeState
}