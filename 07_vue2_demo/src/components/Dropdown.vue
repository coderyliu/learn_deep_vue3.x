<template>
  <div>
    <van-field
      readonly
      clickable
      label="时间筛选"
      :value="value"
      placeholder="选择日期范围"
      @click="showPicker = true"
    />
    <van-popup v-model="showPicker" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="range"
        title="选择日期范围"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </van-popup>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      showPicker: false,
      currentDate: [new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000), new Date()],
      minDate: new Date(new Date().getTime() - 90 * 24 * 60 * 60 * 1000),
      maxDate: new Date(),
    };
  },
  computed: {
    value() {
      const [start, end] = this.currentDate;
      return `${this.formatDate(start)}~${this.formatDate(end)}`;
    },
  },
  methods: {
    ...mapMutations(['SET_SELECTED_DATE_RANGE']),
    formatDate(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}.${month}.${day}`;
    },
    onConfirm(value) {
      this.SET_SELECTED_DATE_RANGE(this.value);
      this.showPicker = false;
    },
  },
};
</script>