# Vue3组件化之webpack5篇(三)

### 为什么需要babel？

事实上，在开发中我们很少直接去接触babel，但是**babel对于前端开发**来说，目前是**不可缺少的一部分**： 

- 开发中，我们想要使用ES6+的语法，想要使用TypeScript，开发React项目，它们都是离不开Babel的； 
- 所以，学习Babel对于我们理解代码从编写到线上的转变过程至关重要； 

**那么，Babel到底是什么呢？**

- Babel是一个工具链，主要用于旧浏览器或者环境中将ECMAScript 2015+代码转换为向后兼容版本的

  JavaScript； 

- 包括：语法转换、源代码转换等；

![image-20220206181228612](D:\截图\05_webpack5(二)\image-20220206181228612.png)



### Babel命令行使用

babel本身可以作为**一个独立的工具**（和postcss一样），不和webpack等构建工具配置来单独使用。

如果我们希望在命令行尝试使用babel，需要安装如下库：

- @babel/core：babel的核心代码，必须安装；
- @babel/cli：可以让我们在命令行使用babel； 

使用babel来处理我们的源代码：npm install @babel/cli @babel/core -D

- src：是源文件的目录；
- --out-dir：指定要输出的文件夹dist；

- **npx babel src --out-dir dist**



### 插件的使用

比如我们需要转换箭头函数，那么我们就可以使用**箭头函数转换相关的插件**：

- npm install @babel/plugin-transform-arrow-functions -D
- npx babel src --out-dir dist --plugins=@babel/plugin-transform-arrow-functions

查看转换后的结果：我们会发现 const 并没有转成 var

- 这是因为 plugin-transform-arrow-functions，并没有提供这样的功能；
- 我们需要使用 plugin-transform-block-scoping 来完成这样的功能；

- npm install @babel/plugin-transform-block-scoping -D 
- npx babel src --out-dir dist --plugins=@babel/plugin-transform-block-scoping,@babel/plugin-transform-arrow-functions



### Babel的预设preset

但是如果要转换的内容过多，一个个设置是比较麻烦的，我们可以使用预设（preset）：

后面我们再具体来讲预设代表的含义；

安装@babel/preset-env预设：npm install @babel/preset-env -D

执行如下命令：npx babel src --out-dir dist --presets=@babel/preset-env



### Babel的底层原理

babel是如何做到将我们的**一段代码（ES6、TypeScript、React）**转成**另外一段代码（ES5）**的呢？

- 从一种源代码（原生语言）转换成另一种源代码（目标语言），这是什么的工作呢？
- 就是**编译器**，事实上我们可以将babel看成就是一个编译器。
- Babel编译器的作用就是将我们的源代码，转换成浏览器可以直接识别的另外一段源代码； 

**Babel也拥有编译器的工作流程：**

- 解析阶段（Parsing） 
- 转换阶段（Transformation） 
- 生成阶段（Code Generation） 

https://github.com/jamiebuilds/the-super-tiny-compiler



### Babel编译器执行原理

Babel的执行阶段 :

![image-20220206182523914](D:\截图\05_webpack5(二)\image-20220206182523914.png)

当然，这只是一个简化版的编译器工具流程，在每个阶段又会有自己具体的工作：

![image-20220206182547005](D:\截图\05_webpack5(二)\image-20220206182547005.png)



### babel-loader

在实际开发中，我们通常会在构建工具中通过配置babel来对其进行使用的，比如在webpack中。

那么我们就需要去安装相关的依赖： 

如果之前已经安装了@babel/core，那么这里不需要再次安装；npm install babel-loader -D

我们可以设置一个规则，在加载js文件时，使用我们的babel：

![image-20220206182742217](D:\截图\05_webpack5(二)\image-20220206182742217.png)



### 指定使用的插件

![image-20220206182806425](D:\截图\05_webpack5(二)\image-20220206182806425.png)

### babel-preset

如果我们一个个去安装使用插件，那么需要手动来管理大量的babel插件，我们可以直接给webpack提供一个

preset，webpack会根据我们的预设来加载对应的插件列表，并且将其传递给babel。 

比如常见的预设有三个：

- env
- react
- TypeScript

安装preset-env：npm install @babel/preset-env -D

![image-20220206182937997](D:\截图\05_webpack5(二)\image-20220206182937997.png)

### Babel的配置文件

像之前一样，我们可以将babel的配置信息放到一个独立的文件中，babel给我们提供了两种配置文件的编写：

- babel.config.json（或者.js，.cjs，.mjs）文件；
- .babelrc.json（或者.babelrc，.js，.cjs，.mjs）文件；

它们两个有什么区别呢？目前很多的项目都采用了多包管理的方式（babel本身、element-plus、umi等）；

- .babelrc.json：早期使用较多的配置方式，但是对于配置Monorepos项目是比较麻烦的；
- babel.config.json（babel7）：可以直接作用于Monorepos项目的子包，更加推荐；

![image-20220206183102042](D:\截图\05_webpack5(二)\image-20220206183102042.png)

### Vue源码的打包

我们主要是学习Vue的，那么我们应该包含Vue相关的代码：

![image-20220206183430334](D:\截图\05_webpack5(二)\image-20220206183430334.png)

界面上是没有效果的：并且我们查看运行的控制台，会发现如下的警告信息；

![image-20220206183521827](D:\截图\05_webpack5(二)\image-20220206183521827.png)



### Vue打包后不同版本解析

**vue(.runtime).global(.prod).js：** 

- 通过浏览器中的 <script src="..."> 直接使用；
- 我们之前通过CDN引入和下载的Vue版本就是这个版本；
- 会暴露一个全局的Vue来使用；

**vue(.runtime).esm-browser(.prod).js：** 

- 用于通过原生 ES 模块导入使用 (在浏览器中通过 <script type="module"> 来使用)。 

**vue(.runtime).esm-bundler.js：** 

- 用于 webpack，rollup 和 parcel 等构建工具；
- 构建工具中默认是vue.runtime.esm-bundler.js； 
- 如果我们需要解析模板template，那么需要手动指定vue.esm-bundler.js； 

**vue.cjs(.prod).js：** 

- 服务器端渲染使用；
- 通过require()在Node.js中使用；



### 运行时+编译器 vs 仅运行时

在Vue的开发过程中我们有**三种方式**来编写DOM元素：

- 方式一：template模板的方式（之前经常使用的方式）；

- 方式二：render函数的方式，使用h函数来编写渲染的内容；

- 方式三：通过.vue文件中的template来编写模板；

   **它们的模板分别是如何处理的呢？**

- 方式二中的h函数可以直接返回一个**虚拟节点**，也就是**Vnode节点**； 
- 方式一和方式三的template都需要有特定的代码来对其进行解析：
  - 方式三.vue文件中的template可以通过在vue-loader对其进行编译和处理；
  - 方式一种的template我们必须要通过源码中一部分代码来进行编译；

所以，Vue在让我们选择版本的时候分为 **运行时+编译器** vs **仅运行时**

- 运行时+编译器包含了对template模板的编译代码，更加完整，但是也更大一些；
- 仅运行时没有包含对template版本的编译代码，相对更小一些；



### VSCode对SFC文件的支持

在前面我们提到过，真实开发中多数情况下我们都是使用SFC（ **single-file components (单文件组件)** ）。

我们先说一下VSCode对SFC的支持： 

- 插件一：Vetur，从Vue2开发就一直在使用的VSCode支持Vue的插件；
- 插件二：Volar，官方推荐的插件（后续会基于Volar开发官方的VSCode插件）；



### 编写App.vue代码

接下来我们编写自己的App.vue代码：

![image-20220206184015662](D:\截图\05_webpack5(二)\image-20220206184015662.png)



### App.vue的打包过程

我们对代码打包会报错：我们需要合适的Loader来处理文件。

![image-20220206184045257](D:\截图\05_webpack5(二)\image-20220206184045257.png)

这个时候我们需要使用vue-loader： npm install vue-loader -D

在webpack的模板规则中进行配置：

![image-20220206184125753](D:\截图\05_webpack5(二)\image-20220206184125753.png)

#### @vue/compiler-sfc

打包依然会报错，这是因为我们必须添加@vue/compiler-sfc来对template进行解析： npm install @vue/compiler-sfc -D

另外我们需要配置对应的Vue插件：

![image-20220206184225403](D:\截图\05_webpack5(二)\image-20220206184225403.png)

重新打包即可支持App.vue的写法



### 全局标识的配置

我们会发现控制台还有另外的一个警告：

![image-20220206184311788](D:\截图\05_webpack5(二)\image-20220206184311788.png)

在GitHub上的文档中我们可以找到说明:

![image-20220206184328180](D:\截图\05_webpack5(二)\image-20220206184328180.png)

- 这是两个特性的标识，一个是使用Vue的Options，一个是Production模式下是否支持devtools工具；
- 虽然他们都有默认值，但是强烈建议我们手动对他们进行配置；