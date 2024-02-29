import { ref, watch } from "vue";

export default function (value = "我是默认的title") {
  const data = ref(value);

  watch(
    data,
    (newValue) => {
      document.title = newValue;
    },
    {
      immediate: true,
    }
  );

  return data;
}
