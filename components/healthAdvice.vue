<template>
    <view class="flex-col section_13 space-y-8"
        :style="{'background-image':'linear-gradient(89.4deg,'+colorBankBac[level]+' -14.5%, #ffffff00 133.3%)'}">
        <view class="flex-row justify-between items-center">
            <view class="group_13">
                <text class="font_9">{{nameBank[name]}}</text>
                <text class="font_1">危险度</text>
            </view>
            <text class="font_10 text_19" :style="{'color': colorBank[level]}">{{levelBank[level]}}</text>
        </view>
        <view class="flex-row justify-between items-center">
            <text class="font_12 text_20" :style="{'color': colorBank[level]}">{{percent}}%</text>
            <view class="flex-col items-end space-y-8">
                <text class="font_11">{{advice[name][level]}}</text>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        name: "healthAdvice",
        props: {
            mydata: Object
        },
        data() {
            return {
                colorBank: ["#c58b1b", "#224c7e", "#519579"],
                colorBankBac: ["#f3c284cc", "#5cb6dbcc", "#7dbfb5cc"],
                name: 0,
                level: 0,
                percent: 12.5,
                nameBank: ["糖尿病", "帕金森", "渐冻症", "麻痹症", "亨廷顿", "老年痴呆"],
                levelBank: ["高风险", "中风险", "低风险"],
                advice: [
                    ["健康饮食\n规律运动", "控制血糖\n服药治疗", "个性化治疗\n定期监测"],
                    ["锻炼身体\n保持社交", "药物治疗\n康复训练", "手术治疗\n个性化康复"],
                    ["锻炼身体\n康复训练", "药物治疗\n康复治疗", "个性化治疗\n病情监测"],
                    ["加强锻炼\n定期康复治疗", "加强锻炼\n定期康复治疗", "加强锻炼\n定期康复治疗"],
                    ["定期神经系统评估\n针对症状治疗", "定期神经系统评估\n针对症状治疗", "定期神经系统评估\n针对症状治疗"],
                    ["锻炼身体\n健康饮食", "药物治疗\n认知康复", "个性化治疗\n病情监测"],
                ],
            };
        },
        mounted() {
            this.name = this.nameBank.indexOf(this.mydata.name);
            this.percent = this.mydata.value;
            if (this.percent > 30.0) {
                this.level = 0;
            } else {
                if (this.percent > 20.0) {
                    this.level = 1;
                } else {
                    this.level = 2;
                }
            }
        }
    }
</script>

<style>
    .section_13 {
        padding: 41.67rpx 33.33rpx;
        background-image: linear-gradient(89.4deg, #f3c284cc -14.5%, #ffffff00 133.3%);
        border-radius: 41.67rpx;
    }

    .space-y-8>view:not(:first-child),
    .space-y-8>text:not(:first-child),
    .space-y-8>image:not(:first-child) {
        margin-top: 16.67rpx;
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

    .font_1 {
        font-size: 25rpx;
        font-family: Microsoft YaHei;
        line-height: 25rpx;
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
        line-height: 47.71rpx;
        font-weight: 700;
        color: #333333;
        text-align: right;
    }
</style>