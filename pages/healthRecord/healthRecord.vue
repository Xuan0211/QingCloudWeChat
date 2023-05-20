<template>
    <view>
        <view class="flex-col flex-auto group_2">
            <view class="flex-col items-start relative group">
                <view class="section"></view>
                <view class="section_2"></view>
                <image class="image_3 pos_3"
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/62f8bcea5a7e3f03100a0ed5/62f8bd5e689f2800114ed71c/16775725071621584480.png" />
                <view class="flex-col items-center group_3 space-y-21 pos_4">
                    <text class="text_2">健康得分</text>
                    <text class="text_3">{{score}}</text>
                </view>
            </view>
            <view class="flex-col relative section_3 space-y-24">
                <view class="group_4">
                    <text class="text_4">健康报告</text>
                    <text class="font_1 text_5">生成于{{date}} ByQing Cloud</text>
                </view>
                <image :src="img" class="image"></image>
                <text class="self-start font_2 text_6">疾病风险预估</text>
                <view class="pieChart">
                    <echarts ref="echarts" :option="option" canvasId="echarts"></echarts>
                </view>
                <view class="flex-col group_12 space-y-20">
                    <text class="self-start font_2 text_18">健康建议</text>
                    <view v-for="(d,index) in mydata" :key="index">
                        <advice :mydata="d"></advice>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    import advice from '@/components/healthAdvice.vue';
    import getDateTime from '@/common/getdateTime.js';
    import convertChineseDate from '@/common/ChineseDate.js';

    export default {
        components: {
            advice
        },
        data() {
            return {
                img: "https://mawxuan.oss-cn-hangzhou.aliyuncs.com/img/path/Path/pd007_1slow1.txtColoredAllCOP.png",
                from: false,
                score: 96, //健康得分
                date: "2022/2/11", //日期
                option: {},
                mydata: [],
                myoption: {
                    width: 450,
                    height: 450,
                    visualMap: {
                        type: 'piecewise',
                        pieces: [{
                                lt: 20.0,
                                label: "低风险",
                                color: '#7dbfb5'
                            },
                            {
                                lt: 30.0,
                                label: "中风险",
                                color: '#5cb6db'
                            },
                            {
                                lt: 100.0,
                                label: "高风险",
                                color: '#f3c284'
                            }
                        ],
                        show: true,
                        top: 'top'
                    },
                    series: [{
                        type: 'pie',
                        silent: true,
                        radius: [30, 160], //前一个数据代表内径，后一格数据代表外径
                        left: -70,
                        top: 10,
                        roseType: 'radius',
                        itemStyle: {
                            borderRadius: 8, //设置圆角
                            borderColor: "#ffffff",
                            borderWidth: 4
                        },
                        data: [{
                                name: "帕金森",
                                value: 35.3,
                            },
                            {
                                name: "老年痴呆",
                                value: 24.2,
                            },
                            {
                                name: "糖尿病",
                                value: 41.2,
                            },
                            {
                                name: "亨廷顿",
                                value: 30.2,
                            },
                            {
                                name: "渐冻症",
                                value: 18.2,
                            },
                            {
                                name: "麻痹症",
                                value: 15.2,
                            }
                        ],
                        label: {
                            position: 'inside',
                            formatter: '{b}\n{c}%',
                            color: "#3f4354",
                            fontWeight: "bold",
                            fontSize: 18,
                            lineHeight: 20
                        }
                    }]
                }
            }
        },
        onLoad(option) {
            console.log("from is")
            console.log(option.from);
            console.log("data is");
            console.log(JSON.parse(decodeURIComponent(option.mydata)));
            let ans = 1.0;
            let that = this;
            that.img = JSON.parse(decodeURIComponent(option.img));
            that.myoption.series[0].data = JSON.parse(decodeURIComponent(option.mydata));
            that.mydata = JSON.parse(decodeURIComponent(option.mydata));
            that.mydata.forEach(d => {
                return ans *= (1 - d.value / 100)
            });
            that.date = option.time;
            //捞健康得分
            that.score = Math.ceil(Math.sqrt(Math.sqrt(ans * 100) * 10) * 10);
            //排序数组
            that.myoption.series[0].data.sort((a, b) => {
                return b.value - a.value
            });
        },
        onReady() {
            this.option = this.myoption;
            console.log(this.img)
        }
    }
</script>
<style>
    .page {
        background-color: #ffffff;
        width: 100%;
        overflow-y: auto;
        overflow-x: hidden;
        height: 100%;
    }

    .group_2 {
        overflow-y: auto;
    }

    .group {
        margin-top: -139.58rpx;
        padding-bottom: 291.67rpx;
        overflow-x: hidden;
    }

    .section {
        background-color: #7dbfb5;
        width: 781.25rpx;
        height: 139.58rpx;
    }

    .section_2 {
        background-color: #7dbfb5;
        width: 781.25rpx;
        height: 547.92rpx;
    }

    .image_3 {
        width: 706.25rpx;
        height: 891.67rpx;
    }

    .pos_3 {
        position: absolute;
        left: -201.04rpx;
        bottom: 0;
    }

    .group_3 {
        padding: 8.33rpx 0 41.67rpx;
        filter: drop-shadow(0px 8.33rpx 4.17rpx #00000040);
        width: 300rpx;
    }

    .space-y-21>view:not(:first-child),
    .space-y-21>text:not(:first-child),
    .space-y-21>image:not(:first-child) {
        margin-top: 43.75rpx;
    }

    .pos_4 {
        position: absolute;
        right: 31.25rpx;
        top: 197.92rpx;
    }

    .text_2 {
        color: #ffffff;
        font-size: 45.83rpx;
        font-family: Inter;
        font-weight: 700;
        line-height: 43.75rpx;
    }

    .text_3 {
        color: #ffffff;
        font-size: 183.33rpx;
        font-family: Inter;
        font-weight: 700;
        line-height: 137.5rpx;
    }

    .section_3 {
        margin: -462.5rpx 0 -147.92rpx;
        border-radius: 41.67rpx 41.67rpx 0px 0px;
        background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/62f8bcea5a7e3f03100a0ed5/62f8bd5e689f2800114ed71c/16775712426862355262.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        overflow-x: hidden;
    }

    .space-y-24>view:not(:first-child),
    .space-y-24>text:not(:first-child),
    .space-y-24>image:not(:first-child) {
        margin-top: 50rpx;
    }

    .group_4 {
        display: flex;
        flex-direction: column;
        gap: 30rpx;
        padding: 0 50rpx;
        margin-top: 29.17rpx;
    }

    .text_4 {
        color: #3f4354;
        font-size: 72.92rpx;
        font-family: Microsoft YaHei;
        font-weight: 700;
        line-height: 70.83rpx;
    }

    .font_1 {
        font-size: 25rpx;
        font-family: Microsoft YaHei;
        line-height: 25rpx;
        color: #333333;
    }

    .text_5 {
        color: #3f4354;
        line-height: 27.08rpx;
    }

    .font_2 {
        font-size: 43.75rpx;
        font-family: Microsoft YaHei;
        line-height: 42.71rpx;
        font-weight: 700;
        color: #3f4354;
    }

    .text_6 {
        margin-left: 45.83rpx;
    }

    .group_12 {
        padding: 0 20rpx;
    }

    .space-y-20>view:not(:first-child),
    .space-y-20>text:not(:first-child),
    .space-y-20>image:not(:first-child) {
        margin-top: 20rpx;
    }

    .text_18 {
        margin-left: 16.67rpx;
    }

    .space-y-12>view:not(:first-child),
    .space-y-12>text:not(:first-child),
    .space-y-12>image:not(:first-child) {
        margin-top: 25rpx;
    }

    .section_13 {
        padding: 41.67rpx 33.33rpx;
        background-image: linear-gradient(89.4deg, #f3c284cc -14.5%, #ffffff00 133.3%);
        border-radius: 41.67rpx;
    }

    .group_13 {
        line-height: 36.46rpx;
        height: 36.46rpx;
    }

    .font_9 {
        font-size: 37.5rpx;
        font-family: Microsoft YaHei;
        line-height: 36.46rpx;
        font-weight: 700;
        color: #333333;
    }

    .font_10 {
        font-size: 37.5rpx;
        font-family: Inter;
        line-height: 36.46rpx;
        font-weight: 700;
    }

    .text_19 {
        color: #c58b1b;
        line-height: 35.42rpx;
    }

    .font_12 {
        font-size: 85.42rpx;
        font-family: Inter;
        line-height: 66.67rpx;
        font-weight: 700;
    }

    .text_20 {
        color: #c58b1b;
    }

    .font_11 {
        font-size: 43.75rpx;
        font-family: Microsoft YaHei;
        line-height: 42.71rpx;
        font-weight: 700;
        color: #333333;
    }

    .space-y-8>view:not(:first-child),
    .space-y-8>text:not(:first-child),
    .space-y-8>image:not(:first-child) {
        margin-top: 16.67rpx;
    }

    .pieChart {
        width: 670rpx;
        height: 800rpx;
        padding: 0 40rpx;
        margin-top: 50rpx;
    }

    .button {
        gap: 20rpx;
        margin: 0 50rpx;
    }

    .image {
        width: 800rpx;
    }
</style>