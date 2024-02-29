// h函数生成vNode/vDom
function h(tag, props, children) {
  return {
    tag,
    props,
    children,
  };
}

// mount函数挂载元素节点
function mount(vNode, container) {
  const el = (vNode.el = document.createElement(vNode.tag));

  // 处理props
  if (vNode.props) {
    for (const key in vNode.props) {
      if (key.startsWith("on")) {
        el.addEventListener(key.slice(2).toLowerCase(), vNode.props[key]);
      } else {
        el.setAttribute(key, vNode.props[key]);
      }
    }
  }

  // 处理children
  if (vNode.children) {
    if (typeof vNode.children === "string") {
      el.textContent = vNode.children;
    } else {
      vNode.children.forEach((child) => {
        mount(child, el);
      });
    }
  }

  // 挂载
  container.appendChild(el);
}

// patch函数对比新旧vNode节点
function patch(n1, n2) {
  // 如果n1和n2的节点不相同
  if (n1.tag === n2.tag) {
    // 直接替换
    const elParent = n1.el.parentElement;
    elParent.removeChild(n1.el);
    mount(n2, elParent);
  } else {
    // 1.n1和n2的节点相同
    const el = (n2.el = n1.el);

    // 2.处理props
    const oldProps = n1.props || {};
    const newProps = n2.props || {};

    // 2.1处理newProps
    for (const key in newProps) {
      const oldValue = oldProps[key];
      const newValue = newProps[key];

      if (newValue !== oldValue) {
        if (key.startsWith("on")) {
          el.addEventListener(key.slice(2).toLowerCase(), value);
        } else {
          el.setAttribute(key, value);
        }
      }
    }

    // 2.2处理oldProps
    for (const key in oldProps) {
      const value = oldProps[key];
      if (key.startsWith("on")) {
        el.removeEventListener(key.slice(2).toLowerCase(), value);
      }

      if (!(key in newProps)) {
        el.removeAttribute(key);
      }
    }

    // 3.处理children
    const newChildren = n2.children || [];
    const oldChildren = n1.children || [];

    // 3.1如果newChildren是字符串
    if (typeof newChildren === "string") {
      el.innerHTML = newChildren;
    } else {
      // 3.2如果oldChildren是字符串
      if (typeof oldChildren === "string") {
        el.innerHTML = "";
        newChildren.forEach((child) => {
          mount(child, el);
        });
      } else {
        // 3.3都是数组
        // oldChildren: [v1, v2, v3, v8, v9]
        // newChildren: [v1, v5, v6]
        const oldChildrenLen = oldChildren.length;
        const newChildrenLen = newChildren.length;

        // 3.3.1取出公共长度的数组,进行patch
        // 这种对应的diff算法中没有key的操作，效率低
        const commonLength = Math.min(newChildrenLen, oldChildrenLen);
        for (let i = 0; i < commonLength; i++) {
          patch(oldChildren[i], newChildren[i]);
        }

        // 3.3.2如果新的数组长度大于旧的数组,直接Mount
        if (newChildrenLen > oldChildrenLen) {
          newChildren.slice(oldChildrenLen).forEach((item) => {
            mount(item, el);
          });
        }

        // 3.3.3如果就数组的长度大于新的数组，移除剩余
        if (newChildrenLen < oldChildrenLen) {
          oldChildren.slice(newChildrenLen).forEach((item) => {
            el.removeChild(item.el);
          });
        }
      }
    }
  }
}
