# Vue3动画之gasp库的使用及动画的钩子函数

### 认识gsap库

某些情况下我们希望通过**JavaScript来实现一些动画的效果**，这个时候我们可以选择使用**gsap库**来完成。

**什么是gsap呢？**

- GSAP是The GreenSock Animation Platform（GreenSock动画平台）的缩写； 
- 它可以通过JavaScript为CSS属性、SVG、Canvas等设置动画，并且是浏览器兼容的；

**这个库应该如何使用呢？**

- 第一步：需要安装gsap库；
- 第二步：导入gsap库； 
- 第三步：使用对应的api即可；

**我们可以先安装一下gsap库：**npm install gsap



### JavaScript钩子

在使用动画之前，我们先来看一下**transition组件给我们提供的JavaScript钩子**，这些钩子可以帮助我们监听动画执行到什么阶段了。

![image-20220212160159289](D:\截图\06_Vue3动画\image-20220212160159289.png)

- 当我们使用JavaScript来执行过渡动画时，需要**进行 done 回调**，否则它们将会被同步调用，过渡会立即完成。 
- 添加 **:css="false"**，也会让 Vue 会**跳过 CSS 的检测**，除了性能略高之外，这可以避免过渡过程中 CSS 规则的影响。



### gsap库的使用

**那么接下来我们就可以结合gsap库来完成动画效果：**

![image-20220212161029175](D:\截图\06_Vue3动画\image-20220212161029175.png)



### gsap实现数字变化

在一些项目中，我们会见到**数字快速变化的动画效果**，这个**动画可以很容易通过gsap来实现**：

![image-20220212161057981](D:\截图\06_Vue3动画\image-20220212161057981.png)



### 认识列表的过渡

目前为止，过渡动画我们只要是**针对单个元素或者组件**的：

- 要么是单个节点； 
- 要么是同一时间渲染多个节点中的一个； 

那么如果希望渲染的是**一个列表**，并且**该列表中添加删除数据也希望有动画执行**呢？

- 这个时候我们要使用 transition-group组件来完成；

**使用transition-group 有如下的特点：**

- 默认情况下，它不会渲染一个元素的包裹器，但是你可以指定一个元素并以 tag attribute 进行渲染； 
- 过渡模式不可用，因为我们不再相互切换特有的元素；
- 内部元素总是需要提供唯一的 key attribute 值； 
- CSS 过渡的类将会应用在内部的元素中，而不是这个组/容器本身；



### 列表过渡的基本使用

**我们来做一个案例：**

- 案例是一列数字，可以继续添加或者删除数字； 
- 在添加和删除数字的过程中，对添加的或者移除的数字添加动画

![image-20220212162553773](D:\截图\06_Vue3动画\image-20220212162553773.png)

在上面的案例中**虽然新增的或者删除的节点是有动画**的，但是**对于哪些其他需要移动的节点是没有动画**的：

- 我们可以通过使用一个新增的 v-move 的class来完成动画；
- 它会在元素改变位置的过程中应用；
- 像之前的名字一样，我们可以通过name来自定义前缀；

```javascript
<template>
  <div>
    <button @click="addNum">添加数字</button>
    <button @click="removeNum">删除数字</button>
    <button @click="shuffleNum">数字洗牌</button>

    <transition-group tag="p" name="coder">
      <span v-for="item in numbers" :key="item" class="item">{{ item }}</span>
    </transition-group>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  data() {
    return {
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      numCounter: 10,
    };
  },
  methods: {
    addNum() {
      this.numbers.splice(this.randomIndex(), 0, this.numCounter++);
    },
    removeNum() {
      this.numbers.splice(this.randomIndex(), 1);
    },
    shuffleNum() {
      this.numbers = _.shuffle(this.numbers);
    },
    randomIndex() {
      return Math.floor(Math.random() * this.numbers.length);
    },
  },
};
</script>

<style scoped>
.item {
  margin-right: 10px;
  display: inline-block;
}

.coder-enter-from,
.coder-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.coder-enter-active,
.coder-leave-active {
  transition: all 1s ease;
}

.coder-leave-active {
  position: absolute;
}

.coder-move {
  transition: transform 1s ease;
}
</style>

```





### 列表的交错过渡案例

**我们来通过gsap的延迟delay属性，做一个交替消失的动画：**

![image-20220212163808625](D:\截图\06_Vue3动画\image-20220212163808625.png)

```javascript
<template>
  <div>
    <input v-model="keyword">
    <transition-group tag="ul" name="coder" :css="false"
                      @before-enter="beforeEnter"
                      @enter="enter"
                      @leave="leave">
      <li v-for="(item, index) in showNames" :key="item" :data-index="index">
        {{item}}
      </li>
    </transition-group>
  </div>
</template>

<script>
  import gsap from 'gsap';

  export default {
    data() {
      return {
        names: ["abc", "cba", "nba", "why", "lilei", "hmm", "kobe", "james"],
        keyword: ""
      }
    },
    computed: {
      showNames() {
        return this.names.filter(item => item.indexOf(this.keyword) !== -1)
      }
    },
    methods: {
      beforeEnter(el) {
        el.style.opacity = 0;
        el.style.height = 0;
      },
      enter(el, done) {
        gsap.to(el, {
          opacity: 1,
          height: "1.5em",
          delay: el.dataset.index * 0.5,
          onComplete: done
        })
      },
      leave(el, done) {
        gsap.to(el, {
          opacity: 0,
          height: 0,
          delay: el.dataset.index * 0.5,
          onComplete: done
        })
      }
    }
  }
</script>

<style scoped>

</style>
```

