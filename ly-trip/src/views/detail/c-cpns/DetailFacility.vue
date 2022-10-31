<template>
  <div class="detail-facility-wrap">
    <SectionItem title="房屋设施" more-title="查看全部设施">
      <div class="inner">
        <template v-for="(item, index) in facilityInfo.houseFacilitys" :key="index">
          <div class="facility" v-if="facilityInfo.facilitySort.includes(index)">
            <div class="left">
              <img :src="item.icon" alt="">
              <span>{{ item.groupName }}</span>
            </div>
            <div class="right">
              <template v-for="(iten) in item.facilitys.slice(0, 4)" :key="iten.name">
                <div class="iten">
                  <i class="icon_check"></i>
                  <span class="name">{{ iten.name }}</span>
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>
    </SectionItem>
  </div>
</template>

<script setup>
import SectionItem from '@/components/section-item/index.vue'

const props = defineProps({
  facilityInfo: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped>
.detail-facility-wrap {
  padding: 0 10px 20px;
  border-bottom:5px solid #f2f2f2;

  .inner {
    padding:30px 10px;
    margin-bottom:20px;
    border-radius: 5px;
    background-color: #f5f7fa;
    .facility {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top:10px;
      padding-bottom:20px;

      .left {
        width:120px;
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
          width: 30px;
        }
      }

      .right {
        flex:1;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

        .iten {
          display: flex;
          justify-content: flex-start;
          align-items: center;

          width:100px;
          margin-top:10px;
          .name{
            margin-left:5px;
          }
        }
      }
    }
  }
}
</style>
