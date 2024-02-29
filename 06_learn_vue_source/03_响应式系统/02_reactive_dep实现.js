class Dep {
  constructor() {
    this.subscribes = new Set();
  }

  addEffect(effect) {
    this.subscribes.add(effect);
  }

  notify() {
    this.subscribes.forEach((effect) => {
      effect();
    });
  }
}

const info = {
  counter: 100,
};

const dep = new Dep();

function doubleCounter() {
  console.log(info.counter * 2);
}

function powerCounter() {
  console.log(info.counter * info.counter);
}

dep.addEffect(doubleCounter);
dep.addEffect(powerCounter);

info.counter++;
dep.notify();
