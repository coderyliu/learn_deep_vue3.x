<template>
  <table v-if="filterData.length">
    <thead>
      <tr>
        <th
          v-for="key in columns"
          @click="sortBy(key)"
          :class="{ active: sortKey === key }"
          :key="key"
        >
          {{ capitalize(key) }}
          <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'"></span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="entry in filterData" :key="entry.power">
        <td v-for="key in columns" :key="key">
          {{ entry[key] }}
        </td>
      </tr>
    </tbody>
  </table>
  <p v-else>No matches found</p>
</template>

<script setup>
import { ref, computed } from "vue";

// 用props在setup中
const props = defineProps({
  data: Array,
  columns: Array,
  filterKey: String,
});

// 把排序的key变为响应式
const sortKey = ref("");

// 得到一个对象根据columns{name:1,power:1}，并赋值为1，按照正序
const sortOrders = ref(props.columns.reduce((o, key) => ((o[key] = 1), o), {}));

// 得到响应式的data给table的tbody中的tr和td,并且做一个搜索的匹配
const filterData = computed(() => {
  let { data, filterKey } = props;
  // 匹配filterKey搜索项初始值为''空字符串,得到一个数组||[]
  // 不为空得到一个匹配的数组
  if (filterKey) {
    filterKey = filterKey.toLowerCase();
    data = data.filter((row) => {
      return Object.keys(row).some((key) => {
        return String(row[key]).toLowerCase().indexOf(filterKey) > -1;
      });
    });
  }
  // sortKey初始值也为''
  const key = sortKey.value;

  // 做一个排序
  if (key) {
    // 得到sortKey中的key是1还是-1
    const order = sortOrders.value[key];
    data = data.slice().sort((a, b) => {
      a = a[key];//是正值还是负值
      b = b[key];

      // 相等位置不变，如果不等，且a>b正序位置不变，如果a<b倒序,a和b交换位置
      return (a === b ? 0 : a > b ? 1 : -1) * order;
    });
  }

  // 如果初始值都为空，就把data返回
  return data;
});

// 排序，如果点击thead中的th，那么sortKey变化，同时值变为相反
function sortBy(key) {
  sortKey.value = key;
  sortOrders.value[key] *= -1;
}

// 第一个字母转为大写
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
</script>

<style scoped>
table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th,
td {
  min-width: 120px;
  padding: 10px 20px;
}
th .active {
  color: #fff;
}

th .active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow .asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow .dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}
</style>
