<template>
  <div class="detail-position">
    <SectionItem title="位置周边" more-title="查看更多周边信息">
      <div class="map" ref="mapRef"></div>
    </SectionItem>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import SectionItem from '@/components/section-item/index.vue'

const mapRef = ref()
const props = defineProps({
  positionInfo: {
    type: Object,
    default: () => ({})
  }
})

onMounted(() => {
  const map = new BMapGL.Map(mapRef.value) // 创建地图实例 
  const point = new BMapGL.Point(props.positionInfo.longitude, props.positionInfo.latitude);  // 创建点坐标 
  map.centerAndZoom(point, 15)  // 初始化地图，设置中心点坐标和地图级别
  const marker = new BMapGL.Marker(point);        // 创建标注   
  map.addOverlay(marker);
})
</script>

<style lang="less" scoped>
.detail-position {
  padding: 0 10px 20px;
  border-bottom: 5px solid #f2f2f2;

  .map {
    height: 300px;
    margin-bottom:20px;
  }
}
</style>
