<template>
  <van-checkbox-group v-model="checked" @change="onChange">
    <van-cell-group>
      <van-cell
        v-for="(option, index) in options"
        :key="index"
        :title="option"
        clickable
      >
        <template #right-icon>
          <van-checkbox :name="option" ref="checkboxes" />
        </template>
      </van-cell>
    </van-cell-group>
  </van-checkbox-group>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: {
    options: Array,
  },
  data() {
    return {
      checked: [],
    };
  },
  methods: {
    ...mapMutations(['SET_SELECTED_ACTIVITY_OBJECTS']),
    onChange(checked) {
      this.SET_SELECTED_ACTIVITY_OBJECTS(checked);
    },
  },
};
</script>