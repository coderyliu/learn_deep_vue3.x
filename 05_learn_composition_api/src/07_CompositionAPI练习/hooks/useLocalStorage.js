import {ref,watch} from 'vue'

export default function(key,value){
  const res=ref(value)

  if(value){
    window.localStorage.setItem(key,JSON.stringify(value))
  }else{
    res.value=JSON.parse(window.localStorage.getItem(key))
  }

  watch(res,(newValue)=>{
    window.localStorage.setItem(key,JSON.stringify(newValue))
  })

  return res
}