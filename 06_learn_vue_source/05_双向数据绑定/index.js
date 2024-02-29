// 构造函数：执行初始化，对data执行响应式处理
function Mvvm(config) {
  this.$el = config.el;
  this._root = document.querySelector(this.$el);
  this._originHTML = this._root.innerHTML;

  // Dep依赖管理
  function _dep() {
    this.subscribers = [];

    this.addDep = function (watcher) {
      if (_dep.target && !this.subscribers.includes(_dep.target)) {
        this.subscribers.push(watcher);
      }
    };

    this.notify = function () {
      this.subscribers.forEach((watcher) => watcher.update());
    };
  }

  // 对data选项做响应式处理
  function _observer(obj) {
    for (const item in obj) {
      const dep = new _dep();
      let value = obj[item];

      if (Object.prototype.toString.call(value) === "[object Object]") {
        _observer(value);
      }
      Object.defineProperty(obj, item, {
        get() {
          if (_dep.target) {
            dep.addDep(_dep.target);
          }

          return value;
        },
        set(newVal) {
          if (value === newVal) return value;
          value = newVal;
          dep.notify();
        },
        configurable: true,
        enumerable: true,
      });
    }

    return obj;
  }

  this.$data = _observer(config.data);

  function _proxy(target) {
    for (let item in target) {
      Object.defineProperty(this, item, {
        configurable: true,
        enumerable: true,
        get() {
          return this.$data[item];
        },
        set(newVal) {
          this.$data[item] = newVal;
        },
      });
    }
  }
  _proxy.call(this, config.data);

  function _watcher(fn) {
    this.update = function () {
      fn();
    };

    this.activeRun = function () {
      _dep.target = this;
      fn();
      _dep.target = null;
    };

    this.activeRun();
  }

  // 搜集依赖
  new _watcher(() => {
    console.log(this.msg, this.date);
  });

  // 模板解析
  new _watcher(() => {
    let html = String(this._originHTML || "")
      .replace(/"/g, '\\"')
      .replace(/\s+|\r|\t|\n/g, " ")
      .replace(/\{\{(.)*?\}\}/g, function (v) {
        return v.replace("{{", '"+').replace("}}", '+"');
      });
    // console.log(html);
    //函数的执行体
    html = `let targetHTML="${html}";return targetHTML`;
    // 第一个参数是函数的形参
    let parseHTML = new Function(...Object.keys(this.$data), html);

    // console.log(parseHTML)
    // 执行函数，传递实参
    this._root.innerHTML = parseHTML(...Object.values(this.$data));
  });
  // console.log(JSON.stringify(this._originHTML))
}
