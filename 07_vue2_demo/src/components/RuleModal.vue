<template>
  <van-action-sheet v-model="show" :actions="actions" cancel-text="关闭" @select="onSelect" />
</template>

<script>
export default {
  data() {
    return {
      show: false,
      actions: [{ name: '活动规则详情' }],
    };
  },
  methods: {
    open() {
      this.show = true;
    },
    onSelect(action) {
      alert(action.name);
      this.show = false;
    },
  },
};
</script>