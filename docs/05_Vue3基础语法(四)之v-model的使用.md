# Vue3基础语法(四)

### v-model的基本使用

**表单提交**是开发中非常常见的功能，也是和用户交互的重要手段：

- 比如用户在登录、注册时需要提交账号密码；
- 比如用户在检索、创建、更新信息时，需要提交一些数据；

这些都要求我们可以在**代码逻辑中获取到用户提交的数据**，我们通常会使用**v-model指令**来完成：

- v-model指令可以在表单 input、textarea以及select元素上创建双向数据绑定； 
- 它会根据控件类型自动选取正确的方法来更新元素；
- 尽管有些神奇，但 v-model 本质上不过是语法糖，它负责监听用户的输入事件来更新数据，并在某种极端场景下进行一些特殊处理；

![image-20220204184233550](D:\截图\02_vue3基础语法\image-20220204184233550.png)



### v-model的原理

官方有说到，**v-model的原理**其实是背后有两个操作：

- v-bind绑定value属性的值；
- v-on绑定input事件监听到函数中，函数会获取最新的值赋值到绑定的属性中；

![image-20220204184341133](D:\截图\02_vue3基础语法\image-20220204184341133.png)



### 事实上v-model更加复杂

![image-20220204184416980](D:\截图\02_vue3基础语法\image-20220204184416980.png)



### v-model绑定textarea

我们再来绑定一下**其他的表单类型**：textarea、checkbox、radio、select

我们来看一下绑定textarea：

![image-20220204184453850](D:\截图\02_vue3基础语法\image-20220204184453850.png)

### v-model绑定checkbox

我们来看一下v-model绑定**checkbox**：单个勾选框和多个勾选框

**单个勾选框：**

- v-model即为布尔值。
- 此时input的value并不影响v-model的值。

**多个复选框：**

- 当是多个复选框时，因为可以选中多个，所以对应的data中属性是一个数组。

- 当选中某一个时，就会将input的value添加到数组中。

  ![image-20220204184627641](D:\截图\02_vue3基础语法\image-20220204184627641.png)



### v-model绑定radio

v-model绑定**radio**，用于选择其中一项；

![image-20220204184703498](D:\截图\02_vue3基础语法\image-20220204184703498.png)

### v-model绑定select

**和checkbox一样，select也分单选和多选两种情况。**

**单选：只能选中一个值**

- v-model绑定的是一个值；
- 当我们选中option中的一个时，会将它对应的value赋值到fruit中；

**多选：可以选中多个值**

- v-model绑定的是一个数组；
- 当选中多个值时，就会将选中的option对应的value添加到数组fruit中；

![image-20220204184805848](D:\截图\02_vue3基础语法\image-20220204184805848.png)



### v-model的值绑定

目前我们在前面的案例中大部分的值都是在template中固定好的： 

- 比如gender的两个输入框值male、female； 
- 比如hobbies的三个输入框值basketball、football、tennis； 

在真实开发中，我们的数据可能是来自服务器的，那么我们就可以先将值请求下来，绑定到data返回的对象中，

- 再通过v-bind来进行值的绑定，这个过程就是**值绑定**。 
- 这里不再给出具体的做法，因为还是v-bind的使用过程。



### v-model修饰符 - lazy

**lazy修饰符是什么作用呢？**

- 默认情况下，v-model在进行双向绑定时，绑定的是input事件，那么会在每次内容输入后就将最新的值和绑定的属性进行同步；
- 如果我们在v-model后跟上lazy修饰符，那么会将绑定的事件切换为 change 事件，只有在失去焦点或者提交时（比如回车）才会触发；

![image-20220204184953893](D:\截图\02_vue3基础语法\image-20220204184953893.png)

### v-model修饰符 - number

我们先来看一下v-model绑定后的值是什么类型的：

- message总是string类型，即使在我们设置type为number也是string类型；

![image-20220204185043268](D:\截图\02_vue3基础语法\image-20220204185043268.png)

如果我们希望转换为数字类型，那么可以使用 .number 修饰符：

![image-20220204185113719](D:\截图\02_vue3基础语法\image-20220204185113719.png)

另外，在我们进行逻辑判断时，如果是一个string类型，在可以转化的情况下会进行隐式转换的：

- 下面的score在进行判断的过程中会进行隐式转化的；

![image-20220204185144417](D:\截图\02_vue3基础语法\image-20220204185144417.png)



### v-model修饰符 - trim

如果要自动过滤用户输入的首尾空白字符，可以给v-model添加 trim 修饰符：

![image-20220204185214004](D:\截图\02_vue3基础语法\image-20220204185214004.png)

### 综合案例

现在我们来做一个相对综合一点的练习：**书籍购物车**

![image-20220204135052054](D:\截图\02_vue3基础语法\image-20220204135052054.png)

案例说明： 

- 1.在界面上以表格的形式，显示一些书籍的数据；
- 2.在底部显示书籍的总价格； 
- 3.点击+或者-可以增加或减少书籍数量（如果为1，那么不能继续-）；
- 4.点击移除按钮，可以将书籍移除（当所有的书籍移除完毕时，显示：购物车为空~）；

代码：

html部分：

```javascript

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="./style.css">
</head>

<body>
  <div id="app"></div>

  <template id='liu'>
    <template v-if="books.length>0">
      <table>
        <thead>
          <th>序号</th>
          <th>书籍名称</th>
          <th>出版日期</th>
          <th>价格</th>
          <th>购买数量</th>
          <th>操作</th>
        </thead>
        <tbody>
          <tr v-for="(book,index) in books" :key="book.id">
            <td>{{index+1}}</td>
            <td>{{book.name}}</td>
            <td>{{book.date}}</td>
            <td>{{formatPrice(book.price)}}</td>
            <td>
              <button @click="decrement(index)" :disabled="book.count<=1">-</button>
              <span class="counter">{{book.count}}</span>
              <button @click="increment(index)">+</button>
            </td>
            <td>
              <button @click="removeBook(index)">移除</button>
            </td>
          </tr>
        </tbody>
      </table>
      <h2>总价格为:{{formatPrice(totalPrice)}}</h2>
    </template>
    <template v-else>
      <h2>购物车为空</h2>
    </template>
  </template>

  <script src='../../js/vue.js'></script>
  <script src='./index.js'></script>
</body>

</html>
```

js部分：

```javascript
Vue.createApp({
  template: '#liu',
  data() {
    return {
      books: [{
          id: 1,
          name: '《算法导论》',
          date: '2006-9',
          price: 85.00,
          count: 1
        },
        {
          id: 2,
          name: '《UNIX编程艺术》',
          date: '2006-2',
          price: 59.00,
          count: 1
        },
        {
          id: 3,
          name: '《编程珠玑》',
          date: '2008-10',
          price: 39.00,
          count: 1
        },
        {
          id: 4,
          name: '《代码大全》',
          date: '2006-3',
          price: 128.00,
          count: 1
        }
      ]
    }
  },
  computed: {
    totalPrice(){
      let finalPrice=0
      for(let book of this.books){
        finalPrice+=book.count*book.price
      }
      return finalPrice
    },
    // Vue3不支持过滤器了, 推荐两种做法: 使用计算属性/使用全局的方法
    filterBooks(){
      return this.books.map(item=>{
        const newItem=Object.assign({},item)
        newItem.price='¥'+item.price
        return newItem
      })
    }
  },
  methods: {
    increment(index){
      this.books[index].count++
    },
    decrement(index){
      this.books[index].count--
    },
    removeBook(index){
      this.books.splice(index,1)
    },
    formatPrice(price){
      return '¥'+price
    }
  }
}).mount('#app')
```

