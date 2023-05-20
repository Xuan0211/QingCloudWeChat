<template>
    <view class="flex-row list-item" @click="toRecord">
        <view class="shrink-0 section"></view>
        <view class="flex-col flex-auto section_2 space-y-12" bindtap="onClick">
            <view class="flex-row space-x-12">
                <view v-for="(d, index) in mydata" :key="index">
                    <u-tag :text="d.name" :bgColor="d.value>30? '#f3c284': (d.value>20? '#5cb6dbcc':'#7dbfb5cc')"
                        :borderColor="d.value>30? '#f3c284': (d.value>20? '#5cb6dbcc':'#7dbfb5cc')"
                        v-if="index < 3"></u-tag>
                </view>
            </view>
            <text class="self-start font_2 text_2">{{time}} 检测</text>
        </view>
    </view>
</template>

<script>
    export default {
        name: "record",
        props: {
            mydata: Array,
            time: String,
        },
        data() {
            return {};
        },
        onLoad() {

        },
        mounted() {
            this.mydata.sort((a, b) => {
                return b.value - a.value
            });
        },
        methods: {
            toRecord() {
                console.log("toRecord");
                //var pages = getCurrentPages() // 获取栈实例
                //let currentRoute = pages[pages.length - 1].route; // 获取当前页面路由
                //console.log(currentRoute);
                uni.navigateTo({
                    url: `../healthRecord/healthRecord?time=${this.time}&mydata=${encodeURIComponent(JSON.stringify(this.mydata))}&from=1`,
                    success: res => {},
                    fail: () => {
                        //  console.log("toRecord fail");
                    },
                    complete: () => {}
                });
            }
        },
    }
</script>

<style>
    .list-item {
        background-image: linear-gradient(116.1deg, #ffffff 10.5%, #ffffff00 54.7%);
        border-radius: 20.83rpx;
        box-shadow: 0px 4.17rpx 8.33rpx #00000040;
    }

    .section {
        background-color: #f3c284;
        border-radius: 16.67rpx 0px 0px 16.67rpx;
        width: 52.08rpx;
        height: 170rpx;
    }

    .section_2 {
        padding: 25rpx 20.83rpx;
        background-image: linear-gradient(180deg, #ffffff 0%, #ffffff00 100%);
        border-radius: 0px 16.67rpx 16.67rpx 0px;
        height: 100rpx;
    }

    .space-y-12>view:not(:first-child),
    .space-y-12>text:not(:first-child),
    .space-y-12>image:not(:first-child) {
        margin-top: 25rpx;
    }

    .space-x-12>view:not(:first-child),
    .space-x-12>text:not(:first-child),
    .space-x-12>image:not(:first-child) {
        margin-left: 25rpx;
    }

    .text-wrapper {
        padding: 8.33rpx 0;
        background-color: #f3c284;
        border-radius: 10.42rpx;
        width: 120.83rpx;
        height: 50rpx;
    }

    .font_1 {
        font-size: 29.17rpx;
        font-family: Microsoft YaHei;
        line-height: 28.13rpx;
        font-weight: 700;
        color: #ffffff;
    }

    .text-wrapper_2 {
        padding: 8.33rpx 0;
        background-color: #5cb6db;
        border-radius: 10.42rpx;
        width: 120.83rpx;
        height: 50rpx;
    }

    .font_2 {
        font-size: 29.17rpx;
        font-family: Roboto;
        line-height: 28.13rpx;
        color: #000000;
    }

    .text_2 {
        line-height: 27.08rpx;
    }
</style>