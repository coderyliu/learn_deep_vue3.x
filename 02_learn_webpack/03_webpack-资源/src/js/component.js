import "../css/test.css";
import "../css/title.less";

import "../css/image.css";

import "../font/iconfont.css";

import imageModel from "../img/zznh.png";

const divEl = document.createElement("div");

divEl.className = "title";
divEl.innerHTML = "你好啊,李银河";

document.body.appendChild(divEl);

// 创建一个img元素
const imgEl = document.createElement("img");
imgEl.className = "image-bg";

// 在创建一个img元素
const imageEl = document.createElement("img");
// imageEl.src='../img/zznh.png'
imageEl.src = imageModel;

// 创建一个i元素
const iEl = document.createElement("i");

iEl.className = "iconfont icon-ashbin";

document.body.appendChild(imgEl);
document.body.appendChild(imageEl);
document.body.appendChild(iEl);
