import {createNamespacedHelpers,mapGetters,useStore} from 'vuex'
import {computed} from 'vue'

export function useGetters2(moduleName,mapper){
  const store=useStore()
  let mapFn=mapGetters

  const storeGetters={}
  if(typeof moduleName==='string'&&moduleName.length>0){
    mapFn=createNamespacedHelpers(moduleName).mapGetters
  }else{
    mapper=moduleName
  }

  const storeGettersFns=mapFn(mapper)
  
  Object.keys(storeGettersFns).forEach(fnKey=>{
    const fn=storeGettersFns[fnKey].bind({$store:store})

    storeGetters[fnKey]=computed(fn)
  })

  return storeGetters
}