<template>
  <div class="task-list">
    <h1>活动列表</h1>
    <Tabs :options="statusOptions" default="进行中" @change="handleStatusChange" />
    <Dropdown />
    <CheckboxGroup :options="activityObjectOptions" />
    <div class="task-cards">
      <TaskCard
        v-for="(task, index) in filteredTasks"
        :key="index"
        :content="task"
        @show-rule="showRuleModal"
      />
    </div>
    <RuleModal ref="ruleModal" />
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import Tabs from '../components/Tabs.vue';
import Dropdown from '../components/Dropdown.vue';
import CheckboxGroup from '../components/CheckboxGroup.vue';
import TaskCard from '../components/TaskCard.vue';
import RuleModal from '../components/RuleModal.vue';

export default {
  components: {
    Tabs,
    Dropdown,
    CheckboxGroup,
    TaskCard,
    RuleModal,
  },
  data() {
    return {
      statusOptions: ['全部任务', '进行中', '已结束'],
      activityObjectOptions: ['直营顾问', '合作团队顾问', '合作团队组长', '筹款合作团队'],
    };
  },
  computed: {
    ...mapState(['filteredTasks']),
  },
  created() {
    this.fetchTasks();
  },
  methods: {
    ...mapActions(['fetchTasks']),
    ...mapMutations(['SET_SELECTED_STATUS']),
    handleStatusChange(status) {
      this.SET_SELECTED_STATUS(status);
    },
    showRuleModal() {
      this.$refs.ruleModal.open();
    },
  },
};
</script>

<style scoped>
@import url(../assets/styles/main.scss);

.task-list {
  padding: 16px;
  background-color: #ffffff;
}

h1 {
  font-size: 18px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 16px;
}

.task-cards {
  margin-top: 16px;
}
</style>