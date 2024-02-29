// pinia中的组合式API
import { defineStore } from "pinia";
import { ref, reactive, type Ref, computed } from "vue";

interface InfoType {
  name: string;
  age: number;
  friends: {
    name: string;
    age: number;
    hobbies: string[];
  };
}

export const useCounterStore = defineStore("counter", () => {
  // 响应式API - ref
  const counter: Ref<number> = ref(0);

  // 响应式API - reactive
  const info: InfoType = reactive({
    name: "coder",
    age: 18,
    friends: {
      name: "curry",
      age: 35,
      hobbies: ["basketball", "football"],
    },
  });

  // 响应式API - computed ==> getter
  const doubleCounter = computed<number>(() => counter.value * 2);

  // actions
  const increment = () => {
    counter.value++;
  };

  const changeInfo = () => {
    info.name = "kobe";
    info.friends.hobbies.push("swimming");
  };

  // 测试$reset
  const reset = () => {
    counter.value = 0;
    info.name = "coder";
    info.friends.hobbies = ["basketball", "football"];
  };

  return {
    counter,
    info,
    doubleCounter,
    increment,
    changeInfo,
    reset,
  };
});
