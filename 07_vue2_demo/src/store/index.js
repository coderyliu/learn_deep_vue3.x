import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    selectedStatus: "进行中",
    selectedDateRange: null,
    selectedActivityObjects: []
  },
  mutations: {
    SET_TASKS(state, tasks) {
      state.tasks = tasks;
    },
    SET_SELECTED_STATUS(state, status) {
      state.selectedStatus = status;
    },
    SET_SELECTED_DATE_RANGE(state, dateRange) {
      state.selectedDateRange = dateRange;
    },
    SET_SELECTED_ACTIVITY_OBJECTS(state, objects) {
      state.selectedActivityObjects = objects;
    }
  },
  actions: {
    fetchTasks({ commit }) {
      // 模拟异步请求
      setTimeout(() => {
        const tasks = [
          {
            title: "首发有效案例",
            status: "进行中",
            time: "活动时间：1月21日-1月24日"
          },
          {
            title: "首发有效案例",
            status: "已结束",
            time: "活动时间：1月21日-1月24日"
          }
          // 更多任务...
        ];
        commit("SET_TASKS", tasks);
      }, 1000);
    }
  },
  getters: {
    filteredTasks: (state) => {
      let filtered = state.tasks;
      if (state.selectedStatus !== "全部任务") {
        filtered = filtered.filter(
          (task) => task.status === state.selectedStatus
        );
      }
      if (state.selectedDateRange) {
        const [start, end] = state.selectedDateRange
          .split("~")
          .map((date) => new Date(date));
        filtered = filtered.filter((task) => {
          const taskDate = new Date(task.time.split("：")[1]);
          return taskDate >= start && taskDate <= end;
        });
      }
      if (state.selectedActivityObjects.length > 0) {
        filtered = filtered.filter((task) =>
          state.selectedActivityObjects.includes(task.activityObject)
        );
      }
      return filtered;
    }
  }
});
