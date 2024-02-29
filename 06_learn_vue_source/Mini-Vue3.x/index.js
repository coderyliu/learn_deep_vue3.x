function createApp(rootComponent) {
  return {
    mount(container) {
      const containerEl = document.querySelector(container);

      let isMounted = false;
      let oldNode = null;

      watchEffect(function () {
        if (!isMounted) {
          oldNode = rootComponent.render();
          mount(oldNode, containerEl);
          isMounted = true;
        } else {
          let newNode = rootComponent.render();
          patch(oldNode, newNode);
          oldNode = newNode;
        }
      });
    },
  };
}
