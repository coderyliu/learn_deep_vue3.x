<script>
import { h, ref } from "vue"
import Home from './Home.vue'

export default {
 
  render(){
    return h('div'),null,[
      h(Home,null,{
        default:props=>h('span',null,`app传到home内容:${props.name}`),
      })
    ]
  }
};
</script>

<style scoped></style>
