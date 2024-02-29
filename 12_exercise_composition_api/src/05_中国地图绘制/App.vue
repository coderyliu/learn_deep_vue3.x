<template>
  <div class="app">
    <!-- 中国地图绘制 -->
    <div class="echart" ref="echartDivRef" style="width:'1000px',height:'800px'"></div>
    <!-- <div id="myChartChina" :style="{ width: '80%', height: '80%' }"></div> -->
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'
import china from 'echarts/map/json/china.json'

echarts.registerMap('china', china)

const echartDivRef = ref()

function randomData() {
  return Math.round(Math.random() * 500);
}

const options = {
  title: {
    text: '全国销量统计',
    left: 'center',
    // textStyle: {
    //   color: '#fff'
    // }
  },
  tooltip: {
    trigger: 'item',
    // formatter: function (params: any) {
    //   return params.name + ' : ' + params.value[2]
    // }
  },
  visualMap: {
    min: 0,
    max: 60000,
    left: 20,
    bottom: 20,
    calculable: true,
    text: ['高', '低'],
    inRange: {
      color: ['rgb(70, 240, 252)', 'rgb(250, 220, 46)', 'rgb(245, 38, 186)'],
    },
    // textStyle: {
    //   color: '#fff'
    // }
  },
  geo: {
    map: 'china',
    roam: 'scale',
    emphasis: {
      areaColor: '#f4cccc',
      borderColor: 'rgb(9, 54, 95)',
      itemStyle: {
        areaColor: '#f4cccc'
      }
    }
  },
  series: [
    {
      name: '销量',
      type: 'map',
      map: 'china',
      // coordinateSystem: 'geo',
      // data: convertData(props.mapData),
      data: [
        { name: "北京", value: "100" },
        { name: "天津", value: randomData() },
        { name: "上海", value: randomData() },
        { name: "重庆", value: randomData() },
        { name: "河北", value: randomData() },
        { name: "河南", value: randomData() },
        { name: "云南", value: randomData() },
        { name: "辽宁", value: randomData() },
        { name: "黑龙江", value: randomData() },
        { name: "湖南", value: randomData() },
        { name: "安徽", value: randomData() },
        { name: "山东", value: randomData() },
        { name: "新疆", value: randomData() },
        { name: "江苏", value: randomData() },
        { name: "浙江", value: randomData() },
        { name: "江西", value: randomData() },
        { name: "湖北", value: randomData() },
        { name: "广西", value: randomData() },
        { name: "甘肃", value: randomData() },
        { name: "山西", value: randomData() },
        { name: "内蒙古", value: randomData() },
        { name: "陕西", value: randomData() },
        { name: "吉林", value: randomData() },
        { name: "福建", value: randomData() },
        { name: "贵州", value: randomData() },
        { name: "广东", value: randomData() },
        { name: "青海", value: randomData() },
        { name: "西藏", value: randomData() },
        { name: "四川", value: randomData() },
        { name: "宁夏", value: randomData() },
        { name: "海南", value: randomData() },
        { name: "台湾", value: randomData() },
        { name: "香港", value: randomData() },
        { name: "澳门", value: randomData() },

      ],//数据
      // symbolSize: 12,
      // emphasis: {
      //   itemStyle: {
      //     borderColor: '#fff',
      //     borderWidth: 1
      //   }
      // }
    },
    // {
    //   type: 'map',
    //   map: 'china',
    //   geoIndex: 0,
    //   aspectScale: 0.75,
    //   tooltip: {
    //     show: false
    //   }
    // }
  ]
}

onMounted(() => {
  // 初始化echarts
  const echartsInstance = echarts.init(echartDivRef.value, 'dark')

  var resizeMyChartContainer = function () {
    echartDivRef.value.style.width = 100 + "%";
    echartDivRef.value.style.height = window.innerHeight * 0.7 + "px";
  };

  resizeMyChartContainer();
  // 设置options
  echartsInstance.setOption(options)
})

</script>

<style scoped></style>
