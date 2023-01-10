<template>
    <div class="maps">
        <div class="title">
        <img src="@/assets/image/ym_title.png" alt="">
        </div>
        <div class="img">
        <div class="img_center">
            <img class="img_di" src="@/assets/image/ym.png" alt=""/>
            <div class="imgss" :class="'imgs' + (index + 1)" v-for="item,index in lists.o1">
            <div class="nr">
                <div class="tops">
                <span class="o1">{{ item.num }}</span>
                <span class="o2">{{ item.danwe }}</span>
                </div>
                <div class="bottoms">{{ item.title }}</div>
            </div>
            </div>
            <div class="left_con left_con1">
            <div class="titles">船员档案</div>
            <div class="con11">在籍船员&nbsp; &nbsp;<span class="num">1359</span>&nbsp;&nbsp; 个</div>
            </div>
            <img class="left_xian1" src="@/assets/image/left.png" alt="">
            <div class="left_con left_con2">
            <div class="titles">船员违规</div>
            <div class="con22">
                <div class="f1" v-for="item in lists.o2">
                <div class="t1">
                    <span class="s1">{{ item.num }}</span>&nbsp;
                    <span class="s2">个</span>
                </div>
                <div class="t2">{{ item.title }}</div>
                </div>
            </div>
            </div>
            <img class="left_xian2" src="@/assets/image/right.png" alt="">
        </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { reactive } from 'vue'
    const lists = reactive({
        o1: [
            {
                num: 3,
                title: '保险过期人员',
                danwe: '个'
            },
            {
                num: 1,
                title: '证书过期人员',
                danwe: '个'
            },
            {
                num: 9,
                title: '超长作业人员',
                danwe: '个'
            }
        ] as any,
        o2: [
            {
                num: 32,
                title: '船员行为违规'
            },
            {
                num: 35,
                title: '船员证书违规'
            }
        ]
    })
</script>
<style lang="scss" scoped>
.maps{
    width: 46%;
    height:85%;
    position: absolute;
    left: 27%;
    top: 15px;
    .title{
      height: 10%;
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .img{
      height: calc(90% - 30px);
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      .img_center{
        width: 872px;
        height: 595px;
        position: relative;
        .img_di{
          width: 100%;
          height: 100%;
        }
        .imgss{
          width: 135px;
          height: 175px;
          background-image: url('@/assets/image/bx.png');
          background-repeat: no-repeat;
          background-size: 100% 100%;
          position: absolute;
          .nr{
            width: 100%;
            padding-top: 40px;
            height: 115px;
            text-align: center;
            .tops{
              .o1{
                font-size: 65px;
                font-family: DIN Condensed;
                font-weight: bold;
                color: #00F6FF;
              }
              .o2{
                font-size: 16px;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #00F6FF;
                opacity: 0.64;
              }
            }
            .bottoms{
              font-size: 14px;
              font-family: Source Han Sans CN;
              font-weight: 400;
              color: #FEFFFF;
              opacity: 0.8;
            }
          }
        }
        .imgs1{
          bottom: 140px;
          left: 130px;
        }
        .imgs2{
          bottom: 80px;
          left: 380px;
        }
        .imgs3{
          bottom: 140px;
          right: 130px;
        }

        .left_con{
          background-image: url('@/assets/image/didi.png');
          background-repeat: no-repeat;
          background-size: 100% 100%;
          .titles{
            width: calc(100% - 20px);
            height: 25px;
            padding-left: 20px;
            padding-top: 5px;
            font-size: 16px;
            font-family: Source Han Sans CN;
            font-weight: 800;
            color: #FEFFFF;
            opacity: 0.8;
          }
          .con11{
            height: calc(100% - 45px);
            text-align: center;
            font-size: 16px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #FEFFFF;
            padding-top: 15px;
            .num{
              font-size: 34px;
              font-family: DIN Condensed;
              font-weight: bold;
              color: #00F6FF;
            }
          }
          .con22{ 
            display: flex;
            height: calc(100% - 28px);
            width: 100%;
            .f1{
              width: 50%;
              text-align: center;
              padding-top: 18px;
              .t1{
                color: #00F6FF;
                height: 55%;
                .s1{
                  font-size: 34px;
                  font-weight: bold;
                  font-family: DIN Condensed;
                }
                .s2{
                  font-size: 12px;
                  font-family: Source Han Sans CN;
                  font-weight: 400;
                  opacity: 0.64;
                }
              }
              .t2{
                width: 100%;
                height: 14px;
                font-size: 14px;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #FEFFFF;
                opacity: 0.8;
              }
            }
          }
        }
        .left_con1{
          position: absolute;
          top: 20px;
          left: 30px;
          width: 242px;
          height: 125px;
        }
        .left_xian1{
          position: absolute;
          top: 100px;
          left: 270px;
          width: 88px;
          height: 144px;
        }
        .left_con2{
          position: absolute;
          top: 80px;
          right: 21px;
          width: 279px;
          height: 133px;
        }
        .left_xian2{
          position: absolute;
          top: 150px;
          right: 300px;
          width: 72.5px;
          height: 67.5px;
        }
      }
    }
  }
</style>