<template>
  <div>
    <!-- 中国地图 -->
    <div class="map-box" ref="chinaMap" style="width: 1100px;height: 600px;" />
  </div>
</template>

<script>
export default {
  methods: {
    mapChinaOptions(data, formatter) {
      let max = 0;
      let riskMaxPoint = data.map((item) => {
        return item.riskPointNum
      })
      if (data && data.length) {
        max = Math.max(...riskMaxPoint)
      }
      return {
        visualMap: {
          show: false,
          min: 0,
          max: max,
        },
        // 暂且不知道做啥子用的
        geo: {
          map: 'china',
        },
        grid: {
          top: 10,
          bottom: 10,
          width: '1000px',
          height: '500px'
        },
        tooltip: {
          trigger: 'item',
          formatter: formatter ? formatter : '{b}<br/>{c}',
          borderColor: '#CB000C',
          borderWidth: '1'
        },
        dataRange: { // 数值范围对应的 取色
          x: 'left',
          y: 'bottom',
          show: true,
          splitList: [
            { start: 20000, color: '#CB000C' },
            { start: 10001, end: 20000, color: '#f1658b' },
            { start: 5001, end: 10000, color: 'rgba(247,168,190,.8)' },
            { end: 5000, color: '#fae8e9' }
          ],
          color: ['#fae8e9', '#f7a8be', '#f1658b ', '#CB000C']
        },
        series: [
          {
            type: 'map',
            map: 'china',
            itemStyle: {
              areaColor: '#fff', //地图的颜色
              borderColor: 'rgba(60,70,88,.5)', //边界线颜色
              borderWidth: '.5', //边界线宽
              emphasis: { // 对应的鼠标悬浮效果
                color: '#FF0000',
                areaColor: '#CB000C',
                borderColor: '#FFF',
                borderWidth: 1,
              }
            },
            label: {
              fontSize: 12,
              // normal: {
              //   show: true, // 默认 是否显示省份标签
              //   color: '#000',
              // },
              emphasis: {
                show: true, // 鼠标 hover 时是否显示身份标签
                textStyle: {
                  color: '#fff',
                },
              },
            },
            data: data
          }
        ]
      }
    }
  },
  mounted() {
    let map = this.$echarts.init(this.$refs.chinaMap)
    const data = [
      { "name": "北京", "value": 632, "riskNum": 563, "riskPointNum": 69 },
      { "name": "黑龙江", "value": 1623, "riskNum": 948, "riskPointNum": 675 },
      { "name": "河北", "value": 98, "riskNum": 98, "riskPointNum": "343" }
    ];

    let options = this.mapChinaOptions(data);

    map.setOption(options);
  }
}
</script>

<style scoped>

</style>