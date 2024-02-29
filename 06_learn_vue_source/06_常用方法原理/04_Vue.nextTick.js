// Vue.nextTick这个方法主要是用来在下次DOM更新循环结束之后立即执行函数回调

// Vue在更新DOM时是异步执行的，也就是说在更新数据时其不会阻塞代码的执行，直到执行栈中代码执行结束之后，
// 才开始执行异步任务队列的代码，所以在数据更新时，组件不会立即渲染，此时在获取到DOM结构后取得的值依然是旧的值
// ，而在$nextTick方法中设定的回调函数会在组件渲染完成之后执行，取得DOM结构后取得的值便是新的值。

// 函数的实现原理
let callbacks = []; //回调函数
let pending = false;

function flushCallBacks() {
  pending = false; //标志还原为false
  for (let i = 0; i < callbacks.length; i++) {
    callbacks[i]();
  }
}

// 采用微任务并按照优先级方式实现异步刷新
let timerFunc;
if (typeof Promise !== "undefined") {
  // 如果支持Promise
  const p = new Promise.resolve();
  timerFunc = () => {
    p.then(flushCallBacks);
  };
} else if (typeof MutationObserver !== "undefined") {
  // MutationObserver这个方法主要是监听dom的变化，是一个异步的方法(微任务)
  let counter = 1;
  const observer = new MutationObserver(flushCallBacks);
  const textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true,
  });

  timerFunc = () => {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== "undefined") {
  // 如果前面都不支持，判断setImmediate
  timerFunc = () => {
    setImmediate(flushCallBacks);
  };
} else {
  // 最后降级为setTimeout
  timerFunc = () => {
    setTimeout(flushCallBacks, 0);
  };
}

function nextTick(cb) {
  // 把函数添加到数组中
  callbacks.push(cb);
  if (!pending) {
    pending = true;
    timerFunc();
  }
}
