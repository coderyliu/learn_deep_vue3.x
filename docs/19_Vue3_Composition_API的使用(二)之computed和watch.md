# Vue3_Composition_API的使用(二)之computed和watch及ref_API的补充

### Reactive判断的API

**isProxy**

- 检查对象是否是由 reactive 或 readonly创建的 proxy。 

**isReactive**

- 检查对象是否是由 reactive创建的响应式代理： 
- 如果该代理是 readonly 建的，但包裹了由 reactive 创建的另一个代理，它也会返回 true； 

**isReadonly**

- 检查对象是否是由 readonly 创建的只读代理。 

**toRaw**

- 返回 reactive 或 readonly 代理的原始对象（**不**建议保留对原始对象的持久引用。请谨慎使用）。

**shallowReactive**

- 创建一个响应式代理，它跟踪其自身 property 的响应性，但不执行嵌套对象的深层响应式转换 (深层还是原生对象)。 

**shallowReadonly**

- 创建一个 proxy，使其自身的 property 为只读，但不执行嵌套对象的深度只读转换（深层还是可读、可写的）



### toRefs

如果我们使用**ES6的解构语法**，对**reactive返回的对象进行解构获取值**，那么之后无论是**修改结构后的变量**，还是**修改reactive返回的state对象**，**数据都不再是响应式**的：

![image-20220216125023619](D:\截图\07_composition_API\image-20220216125023619.png)

那么有没有办法**让我们解构出来的属性是响应式**的呢？

- Vue为我们提供了一个toRefs的函数，可以将reactive返回的对象中的属性都转成ref； 
- 那么我们再次进行结构出来的 name 和 age 本身都是 ref的； 

![image-20220216125142992](D:\截图\07_composition_API\image-20220216125142992.png)

这种做法相当于已经在state.name和ref.value之间建立了 链接，任何一个修改都会引起另外一个变化；



### toRef

如果我们只希望转换一个**reactive对象中的属性为ref**, 那么可以**使用toRef的方法**：

![image-20220216125307787](D:\截图\07_composition_API\image-20220216125307787.png)



### ref其他的API

**unref**

如果我们想要**获取一个ref引用中的value**，那么也可以**通过unref方法**： 

- 如果参数是一个 ref，则返回内部值，否则返回参数本身； 
- 这是 val = isRef(val) ? val.value : val 的语法糖函数；

**isRef**

- 判断值是否是一个ref对象。 

**shallowRef**

- 创建一个浅层的ref对象； 

**triggerRef**

- 手动触发和 shallowRef 相关联的副作用：



### customRef

创建一个**自定义的ref**，并**对其依赖项跟踪和更新触发**进行**显示控制**： 

- 它需要一个工厂函数，该函数接受 track 和 trigger 函数作为参数；
- 并且应该返回一个带有 get 和 set 的对象

**这里我们使用一个的案例：**对双向绑定的属性进行debounce(节流)的操作；

![image-20220216132438905](D:\截图\07_composition_API\image-20220216132438905.png)



### computed

在前面我们讲解过计算属性computed：当我们的某些属性是依赖其他状态时，我们可以使用计算属性来处理

- 在前面的Options API中，我们是使用computed选项来完成的；
- 在Composition API中，我们可以在 setup 函数中使用 computed 方法来编写一个计算属性；

如何使用computed呢？

- 方式一：接收一个getter函数，并为 getter 函数返回的值，返回一个不变的 ref 对象；
- 方式二：接收一个具有 get 和 set 的对象，返回一个可变的（可读写）ref 对象；

![image-20220216133524919](D:\截图\07_composition_API\image-20220216133524919.png)



### 侦听数据的变化

在前面的Options API中，我们可以通过watch选项来侦听data或者props的数据变化，当数据变化时执行某一些

操作。

在Composition API中，我们可以使用watchEffect和watch来完成响应式数据的侦听；

- watchEffect用于自动收集响应式数据的依赖；
- watch需要手动指定侦听的数据源；



### watchEffect

当侦听到某些响应式数据变化时，我们希望执行某些操作，这个时候可以使用 watchEffect。 

我们来看一个案例：

- 首先，watchEffect传入的函数会被立即执行一次，并且在执行的过程中会收集依赖；
- 其次，只有收集的依赖发生变化时，watchEffect传入的函数才会再次执行；

![image-20220216135126341](D:\截图\07_composition_API\image-20220216135126341.png)

#### watchEffect的停止侦听

如果在发生某些情况下，我们希望停止侦听，这个时候我们可以获取watchEffect的返回值函数，调用该函数即可。

- 比如在上面的案例中，我们age达到20的时候就停止侦听：

![image-20220216140338539](D:\截图\07_composition_API\image-20220216140338539.png)



#### watchEffect清除副作用

什么是清除副作用呢？

- 比如在开发中我们需要在侦听函数中执行网络请求，但是在网络请求还没有达到的时候，我们停止了侦听器，

  或者侦听器侦听函数被再次执行了。

- 那么上一次的网络请求应该被取消掉，这个时候我们就可以清除上一次的副作用；

在我们给watchEffect传入的函数被回调时，其实可以获取到一个参数：onInvalidate

- 当**副作用即将重新执行** 或者 **侦听器被停止** 时会执行该函数传入的回调函数；
- 我们可以在传入的回调函数中，执行一些清楚工作；

![image-20220216140432643](D:\截图\07_composition_API\image-20220216140432643.png)



### setup中使用ref

在讲解 watchEffect执行时机之前，我们先补充一个知识：在setup中如何使用ref或者元素或者组件？ 

- 其实非常简单，我们只需要定义一个ref对象，绑定到元素或者组件的ref属性上即可。

![image-20220216141116996](D:\截图\07_composition_API\image-20220216141116996.png)



### watchEffect的执行时机

默认情况下，组件的更新会在watchEffect函数执行之后：如果我们希望在副作用函数中获取到元素，是否可行呢？

![image-20220216141656925](D:\截图\07_composition_API\image-20220216141656925.png)

我们会发现打印结果打印了两次： 

- 这是因为setup函数在执行时就会立即执行传入的函数，这个时候DOM并没有挂载，所以打印为null； 
- 而当DOM挂载时，会给title的ref对象赋值新的值，watchEffect函数会再次执行，打印出来对应的元素；



#### 调整watchEffect的执行时机

如果我们希望在第一次的时候就打印出来对应的元素呢？

- 这个时候我们需要改变watchEffect函数的执行时机； 
- 它的默认值是pre，它会在元素 挂载 或者 更新 之后执行；
- 所以我们会先打印出来一个空的，当依赖的title发生改变时，就会再次执行一次，打印出元素； 

我们可以设置watchEffect函数的执行时机： 

![image-20220216142516835](D:\截图\07_composition_API\image-20220216142516835.png)

flush 选项还接受 sync，这将强制效果始终同步触发。然而，这是低效的，应该很少需要。



### Watch的使用

watch的API完全等同于组件watch选项的Property： 

- watch需要侦听特定的数据源，并在回调函数中执行副作用；
- 默认情况下它是惰性的，只有当被侦听的源发生变化时才会执行回调； 

与watchEffect的比较，watch允许我们：

- 懒执行副作用（第一次不会直接执行）；
- 更具体的说明当哪些状态发生变化时，触发侦听器的执行；
- 访问侦听状态变化前后的值；



### 侦听单个数据源

watch侦听函数的数据源有两种类型：

- 一个getter函数：但是该getter函数必须引用可响应式的对象（比如reactive或者ref）；
- 直接写入一个可响应式的对象，reactive或者ref（比较常用的是ref）；

![image-20220216143234075](D:\截图\07_composition_API\image-20220216143234075.png)



### 侦听多个数据源

侦听器还可以使用数组同时侦听多个源

![image-20220216143303716](D:\截图\07_composition_API\image-20220216143303716.png)



### 侦听响应式对象

如果我们希望侦听一个数组或者对象，那么可以使用一个getter函数，并且对可响应对象进行解构：

![image-20220216143334632](D:\截图\07_composition_API\image-20220216143334632.png)