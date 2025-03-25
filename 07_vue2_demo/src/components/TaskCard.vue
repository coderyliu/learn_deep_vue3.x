<template>
  <van-card :title="content.title" :desc="content.time">
    <template #tags>
      <van-tag :type="content.status === '进行中' ? 'primary' : 'danger'" plain>{{ content.status }}</van-tag>
    </template>
    <template #footer>
      <van-button size="mini" round @click="handleDetails">查看详情</van-button>
      <van-button size="mini" round @click="handleRule">{{ content.rule }}</van-button>
    </template>
  </van-card>
</template>

<script>
export default {
  props: {
    content: Object,
  },
  methods: {
    handleDetails() {
      // 跳转到详情页面或展示详情信息模态框
      alert('查看详情');
    },
    handleRule() {
      this.$emit('show-rule');
    },
  },
};
</script>