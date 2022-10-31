<template>
  <div class="detail-introduce">
    <SectionItem title="房东介绍" more-title="查看房东主页">
      <div class="inner">
        <div class="top">
          <div class="top-scroll">
            <img :src="introduceInfo?.topScroll" alt="" />
          </div>
          <div class="bottom-info">
            <div class="left">
              <img :src="introduceInfo?.hotelLogo" alt="">
            </div>
            <div class="center">
              <div class="name">{{introduceInfo?.hotelName}}</div>
              <div class="tag">
                <template v-for="(iten,index) in introduceInfo?.hotelTags" :key="index">
                  <span class="text">{{iten?.tagText?.text}}</span>
                  <span v-if="index!==introduceInfo?.hotelTags.length-1" class="icon">|</span>
                </template>
              </div>
            </div>
            <div class="right">
              联系房东
            </div>
          </div>
        </div>
        <div class="bottom">
          <template v-for="item in introduceInfo?.hotelSummary" :key="item.title">
            <div class="item">
              <span class="title">{{item.title}}</span>
              <span class="score">{{item.introduction}}</span>
              <span class="tip">{{item.tip}}</span>
            </div>
          </template>
        </div>
      </div>
    </SectionItem>
  </div>
</template>

<script setup>
import SectionItem from '@/components/section-item/index.vue'

const props=defineProps({
  introduceInfo:{
    type:Object,
    default:()=>({})
  }
})
</script>

<style lang="less" scoped>
.detail-introduce{
  padding:0 10px 20px;
  border-bottom:5px solid #f2f2f2;

  .inner{
    padding-bottom:30px;
    .top{
      .top-scroll{
        img{
          width:100%;
        }
      }

      .bottom-info{
        display: flex;
        align-items: center;
        .center{
          .name{
            margin-bottom:10px;
            font-size: 17px;
            font-weight: 600;
          }
          .tag{
            font-size: 13px;
            color:#999;
            .icon{
              padding:0 5px;
            }
          }
        }
        .right{
          padding:5px 10px;
          margin-left:30px;
          border-radius: 5px;
          color:#fff;
          background-image: linear-gradient(90deg, #fa8c1d, #fcaf3f);
        }
      }
    }
    .bottom{
      display: flex;
      align-items: center;
      padding-left:20px;
      .item{
        flex:1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        height:80px;

        margin-top:10px;

        .title{
          color:#999;
        }

        .score{
          font-size:20px;
          font-weight: 600;
        }

        .tip{
          color:#666;
        }
      }
    }
  }
}
</style>
