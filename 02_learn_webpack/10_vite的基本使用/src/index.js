import { sum } from "./js/math";

import { createApp } from "vue";
import App from "./vue/App.vue";

import "./css/title.css";
import "./css/title.less";

import _ from "lodash-es";

import add from "./ts/mul";

console.log("hello");
console.log(sum(20, 20));
console.log(_.join(["abc", "cba"], ""));

const divEl = document.createElement("div");
divEl.className = "title";
divEl.innerHTML = "你好啊,李银河";

document.body.appendChild(divEl);

console.log(add(1, 2));

createApp(App).mount("#app");
