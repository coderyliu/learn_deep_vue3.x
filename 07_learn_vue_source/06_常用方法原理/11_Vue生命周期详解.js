// 什么是生命周期？
// 不管Vue实例的初始化还是Vue组件都会经过创建、初始化、创建实例、、挂载到真实DOM上渲染、更新、销毁的一个过程，这个过程就被称为生命周期。
// Vue提供给了我们不同的生命周期函数用于处理Vue组件和实例在这个过程中需要做的事情。

// beforeCreate:组件的初始化，把data做响应式处理，但还未变成响应式。并且methods/computed都是未绑定的，组件实例未被创建。
// created:完成了data的响应式处理、methods和computed等生命周期函数都被绑定，可以做一些网络数据请求，组件实例创建完毕。
// beforeMount:这个时候组件模板开始编译，对template模板指令进行解析，把data数据替换进去，进行页面的渲染
// mounted：页面渲染完毕，已经挂载到了真实DOM上
// beforeUpdate:这个时候页面变化，导致数据更新,此时data中的数据是最新的，但是页面的旧数据还未被更新,进入diff算法,patch阶段
// updated:此时页面的旧数据也被更新，页面渲染完成
// beforeDestroy:此时组件实例还未被销毁，组件实例还可以继续使用
// destroyed:组件实例完全被销毁，所有的watch监听器都会被移除,methods、computed也不可以使用

// 父子组件的生命周期:
// 父子组件嵌套时，父组件和子组件各拥有各自独立的钩子函数。
// 1-创建过程:
// parentBeforeCreate-->parentCreated-->parentBeforeMount-->childBeforeCreate-->childCreated-->childBeforeMount-->childMounted-->parentMounted

// 2-更新过程
// Parent BeforeUpdate -> Child BeforeUpdate -> Child Updated -> Parent Updated

// 3-销毁过程
// Parent BeforeDestroy -> Child BeforeDestroy -> Child Destroyed -> Parent Destroyed