// keep-Alive是vue的内置的全局组件，它本身不会被渲染出来，主要是原来对组件进行缓存
// keep-alive对组件进行缓存的生命周期不会执行created和mounted生命周期
// 只会执行beforeRouteEnter-->activated-->deactivated钩子函数
// 能够对页面缓存，避免对组件的反复重新渲染，能够保持组件的状态

// 主要由三个属性：include  exclude max  参数可以是string|array|regexp
// 其中max是一个数字表示最大的缓存组件的数量，用的是LRU(最近最少被使用)算法

// keep-alive组件不会被渲染主要是abstract这个属性为true表示跳过该实例，直接渲染它包裹的子组件

// keep-alive主要原理是通过它的生命周期函数实现的:created mounted destroyed三个周期函数以及render渲染函数来实现
// 1-created:初始化cache缓存集合，存储缓存组件的vDOM  数组keys存储缓存组件id和tag生成的key
// 2-mounted  watch监听props属性的include exclude的变化，并执行相应的操作
// 3-destroyed  删除所有组件的缓存
// 对应代码
export default {
  name:'keep-alive',
  abstract:true,
  props:{
    include:{
      type:String|Number|Array,
      default:''
    },
    exclude:{
      type:String|Number|Array,
      default:''
    },
    max:String
  },
  created(){
    this.cache=Object.create(null)//对象存储VDOM
    this.keys=[]//缓存Key
  },
  mounted(){
    this.$watch('include',(val)=>{
      // 执行相关操作
    }),
    this.$watch('exclude',(val)=>{
      // 执行相关操作
    })
  },
  destroyed() {
    for(const key in this.cache){
      // 清楚各个组件的缓存,调用各个组件的destroyed方法
      // this.keys=[]
      // this.cache=null
    }
  },
  render(){
    // 渲染函数
    // 1-获取keep-alive包裹的第一个子组件，判断此组件是否被Include或者exclude匹配
    // 2-exclude匹配直接返回vNode渲染成真实DOM ,如果是include接续执行
    // 3-获取组件的id和tag生成key，判断cache是否缓存过此组件，如果是，LRU算法，更新此组件在keys中的位置
    // 4-如果没缓存过，分别在cache和keys中缓存此组件的VDOM和缓存key,并检查最大缓存数量
    // 5-将此组件的keep-alive属性设置为true
    // 6-如果是普通的vue组件会执行vNode-vDOm-patch(diff)-->真实DOM,如果是缓存组件，调用一个函数，直接把缓存真的vDOM插入到页面中
  }

  // 注意:每个组件都有唯一的id，这是Vue初始化时候做的，是个数字并且会递增
}

// keep-alive注意点：
// 注意点一：用 keep-alive 包裹需要缓存的路由，但是判断条件不要写在 keep-alive 上，需要写在 router-view 上，不然会没有作用
// 注意点二：当 router-view 有 transition 过渡动画时的写法。
// 如果需要自定义路由的切换过渡动画，那么就需要在 router-view 上加上 transition 组件，当加上 transition 之后，HTML 层级就达到了三级，然后 transition ，keep-alive ，router-view ，v-if 这几者之间可以有多种不同的组合，在尝试了各种不同的组合之后，我发现只有一种写法可以达到缓存效果，但也有一点小瑕疵，那就是缓存的页面不会触发过渡动画，这也是一个比较遗憾的地方。


