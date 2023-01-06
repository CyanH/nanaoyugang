<template>
    <v-drawer direction="right">
      <v-card>
        <v-title title="渔船信息" hasClose></v-title>
        <div class="top">
            <div class="one">
                <img src="@/assets/image/dian.png" alt="" />
                <div class="l1">船名</div>
                <div class="l2">{{ states.list.cm }}</div>
            </div>
            <div class="one on1">
                <img src="@/assets/image/dian.png" alt="" />
                <div class="l1">船舶类型</div>
                <div class="l2">{{ states.list.lx }}</div>
            </div>
            <div class="one on1">
                <img src="@/assets/image/dian.png" alt="" />
                <div class="l1">船籍港</div>
                <div class="l2" :title="states.list.gj">{{ states.list.gj }}</div>
            </div>
            <div class="one on1">
                <img src="@/assets/image/dian.png" alt="" />
                <div class="l1">渔船所有人</div>
                <div class="l2" :title="states.list.syr">{{ states.list.syr }}</div>
            </div>
            <div class="one on1">
                <img src="@/assets/image/dian.png" alt="" />
                <div class="l1">联系方式</div>
                <div class="l2">{{ states.list.lxfs }}</div>
            </div>
        </div>
        <div class="tops">
            <div class="tops_one" v-for="item,index in states.yuan">
                <div class="t1">
                    <div class="tt">
                        {{ item.num }}
                    </div>
                </div>
                <div class="t2">
                    {{ item.name }}
                </div>
            </div>
        </div>
        <div class="tup">
            <div class="tup_o">
                <div class="title">粤番渔运13203</div>
                <div class="zj">
                    <img class="imgs" src="@/assets/image/trawler/ewm.png" alt="">
                </div>
                <div class="tiem">{{ date }} {{ time }} </div>
                <div class="bottom">未见异常</div>
            </div>
        </div>
        <v-title title="渔获上岸"></v-title>
        <div class="two">
            <div class="two_fu" v-for="item,index in states.yhsa" :class="index == 0 ? 'two_one_n' : ''">
                <div class="two_one">
                    <img :src="getImgUrl('r'+(index+1)+'_1.png')" class="icon-label" alt="">
                    <div class="right" :class="index === 0 ? 'right_1' : 'right_2'">
                        <div class="l1">{{ item.name }}</div>
                        <div class="l2" :class="'l2_' + (index + 1)">
                            <span class="num">{{ item.num }}</span>&nbsp;
                            <span class="value">{{ item.dw }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </v-card>
    </v-drawer>
  </template>
  
  <script setup lang="ts">
    import EZUIKit from 'ezuikit-js';
    import { onMounted, reactive, ref, watch, onUnmounted, nextTick } from 'vue';
    import { useBreedStore } from '@/store';
    import { Vue3SeamlessScroll } from 'vue3-seamless-scroll';
    import { getVideoData } from '@/api/breed/index';
    import emitter from '@/utils/eventbus';
    import { parseTime } from '@/utils/parseTime';
    const breedStore = useBreedStore();
    const date = ref(parseTime(new Date(), '{m}-{d}'));
    const time = ref(parseTime(new Date(), '{h}:{m}:{s}'));
    let time_new = ref('' as any);
    let time_old = ref('' as any);
    const states = reactive({
        name: '',
        list: {
           cm: '粤番渔运13203',
           lx: '海洋捕捞辅助船海洋中型',
           gj: '云澳中心渔港',
           syr: '郭有胜',
           lxfs: '13602264293' 
        },
        yhsa: [
            {
                name: '上岸次数',
                num: 30,
                dw: '次'
            },
            {
                name: '渔获重量',
                num: 560,
                dw: '吨'
            }
        ],
        yuan: [
            {
                name: '违规记录',
                num: 0
            },
            {
                name: '信用积分',
                num: 100
            }
        ]
    })
    watch(
        () => breedStore.$state.chuanName,
        (val) => {
            states.name = val
            states.list.cm = val
            goList();
        }
    )
    onMounted(() => {
        console.log(breedStore.$state.chuanName);
        states.name = breedStore.$state.chuanName
        states.list.cm = breedStore.$state.chuanName
        goList();
        time_new.value = setInterval(() => {
            time.value = parseTime(new Date(), '{h}:{m}:{s}');
        }, 1000);
        time_old.value = setInterval(() => {
            date.value = parseTime(new Date(), '{m}-{d}');
        }, 3600000);
    })
    const goList = () => {
        if( states.list.cm == '粤汕渔23156' || states.list.cm == '粤汕渔45632'){
            states.list.lx = '海洋捕捞辅助船海洋小型'
            states.list.syr = '郭锦堂'
            states.list.lxfs = '13532279516'
            states.list.gj = '吴平寨渔港'
        }else if( states.list.cm == '粤汕渔63521' || states.list.cm == '粤汕渔01388'){
            states.list.lx = '内陆捕捞辅助船'
            states.list.syr = '王添有'
            states.list.lxfs = '13570545921'
            states.list.gj = '后江渔港'
        }else if( states.list.cm == '粤汕渔05417'){
            states.list.lx = '捕捞船'
            states.list.syr = '陈炳坤'
            states.list.lxfs = '13609061278'
            states.list.gj = '云澳中心渔港'
        }else{
            states.list.lx = '海洋捕捞辅助船海洋中型'
            states.list.syr = '郭有胜'
            states.list.lxfs = '13602264293'
            states.list.gj = '云澳中心渔港'
        }
    }
    const getImgUrl = (url: string) => {
        return new URL(`../../assets/image/trawler/${url}`, import.meta.url).href;
    };
    onUnmounted(() =>{
        if(time_new.value){
            clearInterval(time_new.value)
        }
        if(time_old.value){
            clearInterval(time_old.value)
        }
    })
  </script>
  
  <style lang="scss" scoped>
    .top{
        width: 100%;
        height: 155px;
        margin: 12px auto 20px;
        .one {
            height: 30px;
            width: 100%;
            line-height: 30px;
            display: flex;
            font-size: 16px;
            .l1 {
                width: 110px;
                // text-align-last: justify;

                color: #b9b9b9;
                letter-spacing: 2px;
                margin-left: 4px;
            }
            .l2 {
                width: calc(100% - 110px);
                color: #fff;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }
        .on1 {
            margin-top: 2px;
        }
    }
    .tops{
        width: 80%;
        margin: 0 auto;
        height: 120px;
        display: flex;
        box-sizing: border-box;
        .tops_one{
            width: calc(50% - 6px);
            height: 100%;
            .t1{
                width: 100%;
                height: 70%;
                display: flex;
                align-items:center;
                justify-content: center;
                .tt{
                    background-image: url('@/assets/image/trawler/yuan.png');
                    background-repeat: no-repeat;
                    width: 90px;
                    height: 90px;
                    background-size: 100%;
                    color: #fec230;
                    font-family: DINB;
                    font-size: 28px;
                    height: 90px;
                    line-height: 90px;
                    text-align: center;
                }
            }
            .t2{
                text-align: center;
                color: #fff;
                font-size: 15px;
                margin-top: 7px;
            }
        }
    }
    .tup{
        width: 100%;
        height: 210px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 12px;
        margin-top: 12px;
        .tup_o{
            width: 220px;
            height: 189px;
            background-image: url('@/assets/image/trawler/background.png');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            text-align: center;
            padding: 10px 8px 2px 8px;
            .title{
                color: #fff;
                font-size: 14px;
                height: 20px;
            }
            .zj{
                height: 104px;
                width: 104px;
                margin: 8px auto;
                background-color: #fff;
                border-radius: 10px;
                box-sizing: border-box;
                display: flex;
                align-items: center;
                justify-content: center;
                .imgs{
                    width: 90px;
                    height: 90px;
                }
            }
            .tiem{
                color: #fff;
                font-family: SHSCNM;
                font-size: 16px;
                height: 20px;
            }
            .bottom{
                border-top-left-radius: 12px;
                border-top-right-radius: 12px;
                width: 50%;
                margin: 0 auto;
                background-color: #13c477;
                height: 24px;
                text-align: center;
                font-size: 14px;
                line-height: 24px;
            }
        }
    }
    .two{
        width: 100%;
        height: calc(100% - 620px);
        margin: 12px auto;
        .two_one_n{
            margin-top: 20px;
        }
        .two_fu{
            width: 80%;
            height: 48%;
            margin: 12px auto;
            // background-color: #13c477;
            display: flex;
            // justify-content: center;
            align-items: center;
        }
        .two_one{
            align-items: center;
            display: flex;
            height: 80px;
            width: 100%;
            .icon-label{
                width: 65px;
                height: 65px;
            }
            .right_1{
                background-image: url('@/assets/image/trawler/r1_2.png');
            }
            .right_2{
                background-image: url('@/assets/image/trawler/r2_2.png');
            }
            .right{
                flex: 1;
                width: calc(100% - 30px);
                height: 100%;
                margin-left: -30px;
                background-repeat: no-repeat;
                background-size: 100% 100%;
                display: flex;
                padding-left: 60px;
                padding-right: 30px;
                align-items: center;
                .l1{
                    width: 80px;
                    color: #fff;
                    flex-shrink: 0;
                    font-size: 15px;
                }
                .l2{
                    
                    font-family: DINB;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    flex: 1;
                    .num{
                        font-size: 26px;
                    }
                    .value{
                        font-size: 16px;
                    }
                }
                .l2_1{
                    color: rgb(55, 183, 255);
                }
                .l2_2{
                    color: rgb(4, 207, 201);
                }
            }
        }
    }
  </style>
  