import { createNamespacedHelpers, mapState, useStore } from "vuex";
import { computed } from "vue";

export function useState2(moduleName, mapper) {
  const store = useStore();
  let mapFn = mapState;

  const storeState = {};
  if (typeof moduleName === "string" && moduleName.length > 0) {
    mapFn = createNamespacedHelpers(moduleName).mapState;
  } else {
    mapper = moduleName;
  }

  const storeStateFns = mapFn(mapper);
  Object.keys(storeStateFns).forEach((fnKey) => {
    const fn = storeStateFns[fnKey].bind({ $store: store });

    storeState[fnKey] = computed(fn);
  });

  return storeState;
}
