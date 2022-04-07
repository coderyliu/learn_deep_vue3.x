# Vuex的替代工具Pinia的简单使用

## Pinia的简介和优势

Pinia是Vue生态里Vuex的代替者，一个全新Vue的状态管理库。在Vue3成为正式版以后，尤雨溪强势推荐的项目就是Pinia。那先来看看Pinia比Vuex好的地方，也就是Pinia的五大优势。

- 可以对Vue2和Vue3做到很好的支持，也就是老项目也可以使用Pinia。
- 抛弃了Mutations的操作，只有state、getters和actions.极大的简化了状态管理库的使用，让代码编写更加容易直观。
- 不需要嵌套模块，符合Vue3的Composition api ，让代码更加扁平化。
- 完整的TypeScript支持。Vue3版本的一大优势就是对TypeScript的支持，所以Pinia也做到了完整的支持。如果你对Vuex很熟悉的化，一定知道Vuex对TS的语法支持不是完整的（经常被吐槽）。
- 代码更加简洁，可以实现很好的代码自动分割。Vue2的时代，写代码需要来回翻滚屏幕屏幕找变量，非常的麻烦，Vue3的Composition api完美了解决这个问题。 可以实现代码自动分割，pinia也同样继承了这个优点。

如果你说这五点有点太多了，记不住。可以简单总结Pinia的优势就是，更加简洁的语法，完美支持Vue3的Composition api 和 对TypesCcript的完美支持。这些优势和尤雨溪的强烈推荐，个人觉得很快Pinia就会完全取代Vuex，成为最适合Vue3的状态管理库。

这里说一点哦，其实pinia的开发团队，就是Vuex的开发团队。



## Pinia安装

安装好Vue3的开发环境后，就可以安装Pinia状态管理库了。安装的方法可以使用npm或者yarn 来安装。

```javascript
npm install pinia
# or with yarn
yarn add pinia
```

安装完成后，可以到项目中的`package.json`文件中查看一下pinia的版本。

```javascript
{
  "name": "pinia-demo",
  "version": "0.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc --noEmit && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "pinia": "^2.0.11",
    "vue": "^3.2.25"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^2.0.0",
    "typescript": "^4.4.4",
    "vite": "^2.7.2",
    "vue-tsc": "^0.29.8"
  }
}
```

可以看到我安装的pinia版本是`2.0.11`。为了防止版本不一样，使用方法不同，你可以使用下面的方法安装固定版本。

```jsx
npm install pinia@2.0.11
```



## 用Pinia的方式创建一个Store

### 在main.ts中引入pinia

安装好Pinia后，需要作的第一件事就是在`/src/main.ts`里引入`pinia`。 这里我们直接使用`import`引入。

```jsx
import { createPinia } from 'pinia'
```

引入后，通过`createPinia( )`方法，得到pinia的实例和挂载到Vue根实例上。为了方便你学习，这里直接给出`main.ts`的全部代码。

```jsx
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia' 

// 创建pinia 实例
const pinia = createPinia()
const app =createApp(App)
// 挂载到 Vue 根实例上
app.use(pinia)
app.mount('#app')
```

这样我们就在项目中引入了`Pinia`,也就是说我们可以在项目中使用它进行编程了。

### 创建一个store实例

引入Pinia后，就可以创建状态管理库了，也就是常说的`Store`。直接在`/src`目录下，新建一个`store`文件夹。有了文件夹之后，再创建一个`index.ts`文件。

这个文件里的代码，我们一般只做三件事。

- 定义状态容器(仓库)
- 修改容器(仓库)中的 state
- 仓库中的 action 的使用

明确了这三件事以后，我们来编写代码。先来定义容器,这个写法是固定的，你甚至可以在VSCode中定义一个代码片段，以后用到的时候，直接可以生成这样的代码。

因为这里是学习，所以我这里就从头写一下。

```javascript
import { defineStore} from 'pinia'

export const mainStore = defineStore('main',{
  state:()=>{
    return {}
  },
  getters:{},
  actions:{}
})
```

写完这段代码，你会感觉这个很像一个Vue的小组件，这也算是Pinia的一个优点。

- `defineStore( )`方法的第一个参数：相当于为容器起一个名字。`注意：这里的名字必须唯一，不能重复`。这个是官方特别说明的一个事情。
- `defineStore( )`方法的第二个参数：可以简单理解为一个配置对象，里边是对容器仓库的配置说明。当然这种说明是以对象的形式。
- state 属性：用来存储全局的状态的，这里边定义的，就可以是为SPA里全局的状态了。
- getters属性：用来监视或者说是计算状态的变化的，有缓存的功能。
- actions属性：对state里数据变化的业务逻辑，需求不同，编写逻辑不同。说白了就是修改state全局状态数据的。

如果你会Vuex的话，上面这些内容可能对你来说没什么难度。但如果你不会Vuex，现在只要知道这段代码大概的意思就可以，不用深究。随着我们学习的深入，你会有更具体的了解。

我们在Store里定义一个State，我们这里就写`Hello World!`。

```javascript
state:()=>{
    return {
      helloWorld:'Hello World'
    }
  },
```

这时候这个helloWorld就是全局的状态数据，是每个页面和组件都可以通过Pinia方法读取到的。

### 在Vue3组件中使用pinia中的全局变量

在`\src\components`里，新建一个`.vue`的组件。编写下面的代码:

```jsx
<template>
  <h2 class="">{{ store.helloWorld }}</h2>
</template>

<script lang="ts" setup>
import { mainStore } from "../store/index";
const store = mainStore();
</script>

<style lang="scss" scoped></style>
```

先引入`mainStore`,然后通过`mainStore`得到`store`实例，就可以在组件里调用store里的`state`定义的状态数据了。

写好这个组件后，到`App.vue`里引入，就可以使用了。当然这里我们删除自动生成的一些无用代码。

```jsx
<script setup lang="ts">
import home from "./components/home.vue";
</script>

<template>
  <home></home>
</template>

<style>

</style>
```

写完这些后，在VSCode中打开终端，然后输入`yarn dev`或者`npm run dev` 运行Vue服务，在浏览器中输入`[http://localhost:3000/]` 查看结果。

### 细节补充：

创建出来的该` store `是一个` reactive` 对象，所以不需要 “.value”，也不能对其进行解构使用，否则失去响应性（类似` props`）。

如果一定要对其进行解构使用，可以使用 storeToRefs ，类似 vue3 中的 `toRefs`

```jsx
import { storeToRefs } from 'pinia'

export default defineComponent({
  setup() {
    const store = useMainStore()
    const { user, company } = storeToRefs(store)
    return {
      user, 
      company
    }
  },
})
```



## Pinia改变状态数据的四种方式

### 1.访问state,直接修改

可以通过`store `实例直接修改状态

```jsx
import useMainStore from '@/store/main'
export default defineComponent({
    setup() {
        const mainStore = useMainStore()
        function change() {
            mainStore.teacherName = 'coder'
            mainStore.userList.push({
                name: 'kobe',
                age: 30
            })
        }
        return {
            change
        }
    },
})
```

虽然可以直接修改，但是出于代码结构来说，全局的状态管理还是不要直接在各个组件处随意修改状态，应放于 `action` 中统一方法修改（没有`mutation`了）

### 2.$patch--参数是一个对象

修改`state`还可以通过使用 `$patch` 方法

`$patch` 可以同时修改多个值，举个例子

```jsx
import useMainStore from '@/store/main'

export default defineComponent({
    setup() {
        const mainStore = useMainStore()
        
  mainStore.$patch({
      teacherName: '乌拉',
            userList: [
                { name: '小明', age: 18 },
                { name: '小李', age: 15 },
            ]
  })
        return {}
    },
})
```

但是，这种写法的在修改数组时，例如我只想要把 `userList` 的中第一项"小明"的age 改为 20，也需要传入整个包括所有成员的数组，这无疑增加了书写成本和风险，于是一般都推荐使用以下的传入一个函数的写法

### 3.$patch--参数是一个函数

```jsx
mainStore.$patch((state)=>{
  state.teacherName = '乌拉'
  state.userList[0].age = 20
})
```

### 4.通过actions修改

如果你有一个修改的过程非常复杂，你可以先在`store`里，定义好`actions`中的函数，然后在组件里再调用函数。action 定义的函数可以是普通函数从而可以通过 this 访问整个store实例，同时该函数可以传入任意参数并返回任何数据

我们先到`\src\store\index.ts`文件里，在`actions`的地方编写一个`changeState( )`方法，用来改变数据状态。代码如下：

```jsx
actions:{
    changeState(){
        this.count++
        this.helloWorld='你好啊,李银河'
    }
  }
```

有了这个`changeState( )`函数后，就可以在组件中调用这个函数来修改状态数据了。来到`\src\components\CountButton.vue`文件。编写一个新的方法`handleClickActions( )`方法。然后就可以用`store`调用`changeState( )`方法了。

```jsx
const handleClickActions = ()=>{
  store.changeState()
}
```

然后再加入一个按钮，调用这个方法就可以了。

```jsx
<div>
  <button @click="handleClickActions">修改数据（actions）</button>
</div>
```

> 注意：在用`actions`的时候，不能使用箭头函数，因为箭头函数绑定是外部的this。这个小伙伴们需要注意一下就可以了。

总结：Pinia中改变状态数据的4种方式，这些方式各有利弊，根据实际开发情况进行选择就好。



## 监听订阅state

通过 store.$subscribe() 的方法，

该方法的第一个参数接受一个回调函数，该函数可以在 state 变化时触发

```jsx
const subscribe = store.$subscribe((mutation, state) => {
    console.log(mutation)
    console.log(state)
})
```

如上所示，该回调函数的两个参数,其中 state 是 store 实例，而 mutation 打印如下

![image-20220307085810431](D:\截图\00_知识补充\image-20220307085810431.png)

可以发现，打印结果的mutation对象主要包含三个属性

- events : 是这次state改变的具体数据，包括改变前的值和改变后的值等等数据

- storeId ：是当前store的id

- type：type表示这次变化是通过什么产生的，主要有三个分别是

- - “direct” ：通过 action 变化的
  - ”patch object“ ：通过 $patch 传递对象的方式改变的
  - “patch function” ：通过 $patch 传递函数的方式改变的

> 停止监听

上面代码中，调用store.$subscribe返回的值（即上方示例的 subscribe 变量）可以停止订阅

```jsx
subscribe()
```

store.$subscribe() 的方法的第二个参数options对象，是各种配置参数，包括

detached属性，其值是一个布尔值，默认是 false， 正常情况下，当 订阅所在的组件被卸载时，订阅将被停止删除，如果设置detached值为 true 时，即使所在组件被卸载，订阅依然可以生效。

其他属性主要还有 immediate、deep、flush 等等，和 vue3 watch的对应参数效果一样。



## 监听订阅action

通过 `store.$onAction()`，可以监听action的动作及结果等

该函数可以接收一个回调函数作为参数，回调函数的参数中有五个属性，具体如下

```jsx
const unsubscribe = store.$onAction(({
    name, // action 函数的名称
    store, // store 实例，这里是 store
    args, // action 函数参数数组
    after, // 钩子函数，在action函数执行完成返回或者resolves后执行
    onError, // 钩子函数，在action函数报错或者rejects后执行
}) => {})
```

举个例子，

首先，定义一个store

```jsx
import { defineStore } from 'pinia'
const useMainStore = defineStore('main', {
    state: () => ({
        user: {
            name: '小明',
            age: 7,
        },
    }),
    actions: {
        subscribeAction(name: string, age: number, manualError?: boolean) {
            return new Promise((resolve, reject) => {
                console.log('subscribeAction函数执行')
                if (manualError) {
                    reject('手动报错')
                } else {
                    this.user.name = name
                    this.user.age = age
                    resolve(`${this.user.name}今年${this.user.age}岁了`)
                }
            })
        },
    },
})
export default useMainStore
```

然后在 setup 中使用

```jsx
import useMainStore from '@/store/main'
import { ref, defineComponent, computed } from 'vue'
export default defineComponent({
    setup() {
        const mainStore = useMainStore()

        function subscribeNormal() {
            mainStore.subscribeAction('小李', 18, false)
        }
        
        function subscribeError() {
            mainStore.subscribeAction('小白', 17, true)
        }

        const unsubscribe = mainStore.$onAction(({
            name, // action 函数的名称
            store, // store 实例，这里是 mainStore
            args, // action 函数参数数组
            after, // 钩子函数，在action函数执行完成返回或者resolves后执行
            onError, // 钩子函数，在action函数报错或者rejects后执行
        }) => {
            console.log('action的函数名', name)
            console.log('参数数组', args)
            console.log('store实例', store)

            after((result) => {
                console.log('$onAction after函数', result)
            })

            onError(error => {
                console.log('错误捕获', error)
            })
        })

        return {
            subscribeNormal,
            subscribeError,
        }
    },
})
```

如上，在 setup 中，调用了 subscribeNormal 函数后，页面打印如下

![image-20220307090756767](D:\截图\00_知识补充\image-20220307090756767.png)

调用了 subscribeError 函数后，页面打印如下

![image-20220307090847298](D:\截图\00_知识补充\image-20220307090847298.png)

同样，可以通过调用 mainStore.$onAction 返回的值来手动停止订阅，在上面代码的例子中，即是

```jsx
unsubscribe() // 手动停止订阅
```

store.$onAction 默认在所在组件卸载时会被自动删除，可以通过传递第二个参数 true，来将action订阅和所在组件分开（即组件卸载时，订阅依然有效）

```jsx
mainStore.$onAction(callback, true)
```



## Pinia中的Getters使用

Pinia中的Getter和Vue中的计算属性几乎一样，就是在获取State的值时作一些处理。比如我们有这样一个需求，就是在`state`里有有一个状态数据是电话号码，我们想输出的时候把中间四位展示为`****`.这时候用`getters`就是非常不错的选择。

getters属性的值是一个函数，该函数的第一个参数是 state

```jsx
const useMainStore = defineStore('main', {
    state: () => ({
        user: {
            name: '小明',
            age: 7,
        },
    }),

    getters: {
        userInfo: (state) => `${state.user.name}今年${state.user.age}岁了`,
        // 这里想要正确推断参数 state 的类型，则定义 state 时需要使用箭头函数定义
    },
})
```

上面代码中，getters的值是箭头函数，当getters的值是普通函数时，可以通过 this 访问整个store实例（如下）

**但是如果是普通函数，想要通过 this 获取state的值并希望this的类型能正确推断，同时希望函数的返回值类型正确推断，我们需要声明函数的返回类型。**

```jsx
getters: {
        userDesc: (state) => `${state.user.name}今年${state.user.age}岁了`,
            
        userBesidesDesc(): string{ // 需注明类型
            return `${this.user.age}岁的${this.user.name}` // 可以使用 this 获取值
        },
            
        returnUserInfo() {
            return this.userDesc // 也可以使用 this 获取其他getters
        },    
}
```

### 访问getter

```jsx
import useMainStore from '@/store/main'
export default defineComponent({
    setup() {
        const mainStore = useMainStore()

        const userDesc = computed(() => mainStore.userDesc)
        const userBesidesDesc = computed(() => mainStore.userBesidesDesc)
        const returnUserInfo = computed(() => mainStore.returnUserInfo)

        return {
            userDesc,
            userBesidesDesc,
            returnUserInfo,
        }
    },
})
```



## Pinia中Store的互相调用

我们一直只使用了一个`Store`仓库，在真实项目中我们往往是有多个`Store`的。有多个`Stroe`时，就会涉及Store内部的互相调用问题。

在`\src\store`下新建一个`person.ts`文件。然后下入下面的代码。

```jsx
import { defineStore} from 'pinia'

export const personStore = defineStore('person',{
  state:()=>{
    return {
      list:['小红','小美','胖丫']
    }
  }
})
```

这是一个非常简单的仓库，只有`state`（状态数据），需要注意的是`ID`要是唯一的。有了这个仓库后，就可以回到`index.ts`这个仓库中调用了。

先引入`personStore`这个`store`.

```jsx
import {personStore} from './person'
```

然后在`actions`部分加一个`getList( )`方法。这部分就写的很简单了，只是用`console.log( )`打印到`控制台` 上就可以了。

```jsx
actions:{
    changeState(){
        this.count++
        this.helloWorld='你好啊,李银河'
    },
    getList(){
       console.log(personStore().list)
    }
  }
```

这样就实现了两个`store`中互相调用。为了看到效果，我们依然来到`\src\components\CountButton.vue`这个文件里，写一个新的方法，就叫做`getList( )`。

```jsx
const getList = () => {
  store.getList();
};
```

有了`getList( )`方法后，在`template`部分，写一个按钮进行触发。

```jsx
<div>
    <button @click="getList">显示List</button>
</div>
```

到浏览器中查看效果，按`F12`打开控制台，点击按钮后，可以看到跨`Store`的状态数据调用已经成功了。

### 细节补充

在组件中使用时，useStore() 在大多数情况下都可以在调用后开箱即用。

在其他地方使用时，需确保在 pinia 激活使用后（ app.use(createPinia()) ）才能使用 useStore()

例如在路由守卫中

```jsx
import { createRouter } from 'vue-router'
import useMainStore from '@/store/main'
const router = createRouter({
  // ...
})

// 报错
const mainStore = useMainStore()

router.beforeEach((to) => {
  // 正常使用
  const mainStore = useMainStore()
})
```



## pinia插件

pinia store 支持扩展，通过 pinia 插件我们可以实现以下

- 给 store 添加新属性

- 给 store 添加新选项

- 给 store 添加新方法

- 包装已存在的方法

- 修改甚至删除actions

  ...

例如可以写一个简单的插件来给所有store添加一个静态属性

```jsx
import { createPinia } from 'pinia'

const pinia = createPinia()
// 传递一个返回函数
pinia.use(() => ({ env: 'dev' }))

app.use(pinia)
```

然后，在所有其他的store都可以访问到上面添加的 env 属性

```jsx
setup() {
        const mainStore = useMainStore()
        console.log(mainStore.env) // dev
}        
```

### 插件函数

从上方代码可以发现，pinia 插件是一个函数，这个函数有一个可选参数

```jsx
import { PiniaPluginContext } from 'pinia'
function myPiniaPlugin(context: PiniaPluginContext) {
    console.log(context)
}
```

![image-20220307093455495](D:\截图\00_知识补充\image-20220307093455495.png)

context 打印出来主要有

- app : 当前应用 Vue.createApp() 创建的 app
- options : defineStore 配置的数据
- pinia : 当前通过 createPinia() 创建的 pinia 实例
- store ：当前 store 实例

通过 context 我们可以在 store 上设置属性

```jsx
pinia.use(({ store }) => {
    store.env = 'dev'
})
```

这样，在所有其他的store都可以访问到上面添加的 env 属性

pinia 的 store 是通过 reactive 包装的，可以自动解包它包含的任何 ref 对象

```jsx
pinia.use(({ store }) => {
    store.env = ref('dev')
})
```

通过上面插件，访问store 的 env 时不需要 .value，就可以直接访问

```jsx
setup() {
        const mainStore = useMainStore()
        console.log(mainStore.env) // 不需要加 .value
}
```

### 添加外部属性

当需要添加来自其他库或不需要响应式的数据时，应该用 markRaw() 包装传递的对象，例如

**markRaw 来自 vue3，可以标记一个对象，使其永远不会转换为 proxy。返回对象本身。**

```jsx
import { markRaw } from 'vue'
import { router } from './router'
import { axios } from 'axios'

pinia.use(({ store }) => {
  store.router = markRaw(router)
  store.axios = markRaw(axios)
})
```

### 在插件内部使用、onAction

```jsx
pinia.use(({ store }) => {
  store.$subscribe(() => {
    // react to store changes
  })
  store.$onAction(() => {
    // react to store actions
  })
})
```

### 新属性的typescript支持

当通过插件添加新属性时，可以扩展 `PiniaCustomProperties`接口

可以用设置get，set或者简单声明值的类型，以此来安全地写入和读取新加的属性

```jsx
import 'pinia'

declare module 'pinia' {
    export interface PiniaCustomProperties {
        set env(value: string | Ref<string>)
        get env(): string
        // 或者
        env: string
    }
}
```