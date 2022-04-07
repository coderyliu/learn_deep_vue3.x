// Vue中我们通过v-on或者它的语法糖@来绑定某个事件、它的主要原理是我们对组件的template模板进行编译转化为AST
// AST生成render函数，经过render函数生成VNode，对VNode生成真实DOM的时候，添加了addEventListener绑定事件

// v-on绑定事件可以用在普通元素上，用于监听原声DOM事件。也可以用在自定义组件上，监听子组件的触发的自定义事件。

// 定义的方式:
// 1-字符串：@click='btnClick'
// 可以不传参数，但是在函数内部默认会传递一个event事件对象
// 如果传递参数，则第一个参数必须为$event    @click='btnClick($event,5)'

// 2-还可以是对象格式，为其绑定多个事件
// @click='{mousedown:mouseFn,click:clickFn}',这种形式不能加上事件修饰符

// 常见的事件修饰符:
// stop:阻止事件冒泡   prevent:阻止事件的默认行为
// left:鼠标左键触发   right:鼠标右键触发  middle:鼠标中间触发
// once:事件只会执行一次   keyCode:特定的键值触发


