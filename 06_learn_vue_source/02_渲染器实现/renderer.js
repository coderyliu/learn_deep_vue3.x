const h = (tag, props, children) => {
  // vNode-->javascript对象-->{}
  return {
    tag,
    props,
    children,
  };
};

const mount = (vNode, container) => {
  // vNode-->element
  // 1.创建出真实的原声，并且在vNode上保留el
  const el = (vNode.el = document.createElement(vNode.tag));

  // 2.处理props
  if (vNode.props) {
    for (const key in vNode.props) {
      const value = vNode.props[key];

      if (key.startsWith("on")) {
        // 绑定事件
        el.addEventListener(key.slice(2).toLowerCase(), value);
      } else {
        el.setAttribute(key, value);
      }
    }
  }

  // 3.处理children
  if (vNode.children) {
    if (typeof vNode.children === "string") {
      el.textContent = vNode.children;
    } else {
      vNode.children.forEach((item) => {
        mount(item, el);
      });
    }
  }

  // 4.将el挂载到container上
  container.appendChild(el);
};

const patch = (n1, n2) => {
  // 1.如果n1和n2节点的type类型不相同
  if (n1.tag !== n2.tag) {
    const n1ElParent = n1.el.parentElement;
    n1ElParent.removeChild(n1.el);
    mount(n2, n1ElParent);
  } else {
    // 2.n1和n2节点类型相同
    // 2.1取出element对象，并且在n2中保存
    const el = (n2.el = n1.el);

    // 2.2处理props
    const newProps = n2.props || {};
    const oldProps = n1.props || {};
    // 2.2.1处理newProps
    for (const key in newProps) {
      // 对于newProps，就是添加属性
      const newValue = newProps[key];
      const oldValue = oldProps[key];

      if (newValue !== oldValue) {
        if (key.startsWith("on")) {
          el.addEventListener(key.slice(2).toLowerCase(), newValue);
        } else {
          el.setAttribute(key, newValue);
        }
      }
    }

    // 2.2.2处理oldProps
    for (const key in oldProps) {
      // 对于oldProps，只需删除旧的属性
      if (key.startsWith("on")) {
        el.removeEventListener(key.slice(2).toLowerCase(), oldProps[key]);
      }

      if (!(key in newProps)) {
        el.removeAttribute(key);
      }
    }

    // 3.处理children
    const newChildren = n2.children;
    const oldChildren = n1.children;

    // 3.1newChildren本身是一个字符串
    if (typeof newChildren === "string") {
      // 边界判断
      if (typeof oldChildren === "string") {
        if (newChildren !== oldChildren) {
          el.textContent = newChildren;
        }
      } else {
        el.innerHTML = newChildren;
      }
    } else {
      // 3.2newChildren本身是一个数组
      // 3.2.1oldChildren是一个字符串
      if (typeof oldChildren === "string") {
        el.innerHTML = "";
        newChildren.forEach((item) => {
          mount(item, el);
        });
      } else {
        // 3.2.2oldChildren也是一个数组
        // oldChildren: [v1, v2, v3, v8, v9]
        // newChildren: [v1, v5, v6]

        // 1.取出oldChildren和newChildren数组的最小长度,进行patch操作
        // 这种对应的diff算法中没有key的操作，效率低
        const commonLength = Math.min(oldChildren.length, newChildren.length);
        for (let i = 0; i < commonLength; i++) {
          patch(oldChildren[i], newChildren[i]);
        }

        // 2.newChildren.length>oldChildren.length-->添加节点
        if (newChildren.length > oldChildren.length) {
          newChildren.slice(oldChildren.length).forEach((item) => {
            mount(item, el);
          });
        }

        // 3.newChildren.length<oldChildren.length-->删除节点
        if (newChildren.length < oldChildren.length) {
          oldChildren.slice(newChildren.length).forEach((item) => {
            el.removeChild(item.el);
          });
        }
      }
    }
  }
};
