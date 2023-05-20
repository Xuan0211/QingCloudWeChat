<template>
    <view class="flex-col justify-start page">
        <view class="flex-col justify-start">
            <view class="flex-col section_5 space-y-18">
                <text class="self-start font_2 text_2">预约人信息</text>
                <view class="flex-col">
                    <view class="flex-row items-center group_2 view">
                        <image class="image_4"
                            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/62f8bcea5a7e3f03100a0ed5/62f8bd5e689f2800114ed71c/16787199856476461659.png" />
                        <input class="text_1" placeholder="姓名" v-model="userIfo.name" />
                    </view>
                    <view class="flex-row items-center group_3">
                        <image class="image_4"
                            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/62f8bcea5a7e3f03100a0ed5/62f8bd5e689f2800114ed71c/16787199856492553931.png" />
                        <input class="text_1" placeholder="联系方式" v-model="userIfo.phone" />
                    </view>
                    <view class="flex-row items-center group_3">
                        <image class="image_4"
                            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/62f8bcea5a7e3f03100a0ed5/62f8bd5e689f2800114ed71c/16787199856516038286.png" />
                        <input class="text_1" placeholder="备注" v-model="userIfo.more" />
                    </view>
                    <view class="flex-col section_6 space-y-18">
                        <text class="self-start font_2 text_3">预约详情</text>
                        <view class="flex-col">
                            <view class="flex-row items-center group_2">医师姓名： 王小阳</view>
                            <view class="flex-row items-center group_2" @click="showdate=true">
                                <image class="image_4"
                                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/62f8bcea5a7e3f03100a0ed5/62f8bd5e689f2800114ed71c/16787199856554826478.png" />
                                <input class="text_1" placeholder="日期" v-model="date" />
                                <!-- 
                                <text v-if="false" class="text_8" @click="showdate=true">{{value1}}</text> -->
                            </view>
                            <view class="flex-row items-center group_2">
                                <image class="image_4"
                                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/62f8bcea5a7e3f03100a0ed5/62f8bd5e689f2800114ed71c/16787199856564469433.png" />
                                <text class="text_1" @click="show=true">{{pickerlist1[0][s1]}}</text>
                            </view>
                            <view class="flex-row items-center group_2">
                                <image class="image_4"
                                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/62f8bcea5a7e3f03100a0ed5/62f8bd5e689f2800114ed71c/16787199856550577874.png" />
                                <text class="text_1" @click="show1=true">{{pickerlist2[0][s2]}}</text>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="flex-row justify-center group_4 space-x-15">
                    <view class="flex-col justify-start items-center text-wrapper" @click="toBack()"><text
                            class="font_3 text_5">取消</text>
                    </view>
                    <view class="flex-col justify-start items-center text-wrapper_2" @click="onClick">
                        <text class="font_3 text_6">确认</text>
                    </view>
                </view>
            </view>
        </view>
        <!-- <u-datetime-picker :show="showdate" @confirm="confirmdate" v-model="value1" mode="date"></u-datetime-picker>
        -->
        <u-picker :show="show" :columns="pickerlist1" @confirm="confirm"></u-picker>
        <u-picker :show="show1" :columns="pickerlist2" @confirm="confirm1"></u-picker>
        <u-toast ref="uToast"></u-toast>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                userIfo: {
                    name: "",
                    phone: "",
                    more: ""
                },
                show: false,
                show1: false,
                showdate: false,
                s1: 0,
                s2: 0,
                date: undefined,
                value1: Number(new Date()),
                pickerlist1: [
                    ['8:00-10:00', '10:00-12:00', '14:00-16:00', '16:00-18:00']
                ],
                pickerlist2: [
                    ['中南大学湘雅医院', '中南大学湘雅二医院', '中南大学湘雅三医院']
                ]
            }
        },
        methods: {
            onClick() {
                console.log("onClick run")
                this.$refs.uToast.show({
                    type: 'success',
                    title: "预约成功",
                    message: "预约成功\n请查看手机短信"
                });
                setTimeout(function() {
                    uni.navigateBack({
                        delta: 1
                    })
                }, 1000);
            },
            toBack() {
                uni.navigateBack({
                    delta: 1
                });
            },
            confirmdate() {
                this.showdate = false;
            },
            confirm(e) {
                console.log(e);
                this.show = false;
                this.s1 = e.indexs[0];
            },
            confirm1(e) {
                console.log(e);
                this.show1 = false;
                this.s2 = e.indexs[0];
            },
            toast() {
                this.$refs.uToast.show({
                    type: 'success',
                    title: "联系方式",
                    message: "QQ:525690031"
                })
            },
            formatter(type, value) {
                if (type === 'year') {
                    return `${value}年`
                }
                if (type === 'month') {
                    return `${value}月`
                }
                if (type === 'day') {
                    return `${value}日`
                }
                return value
            },
        },
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


    .section_5 {
        margin: 0 32rpx;
        padding: 92rpx 0 68rpx;
        background-color: #ffffff;
        border-radius: 20rpx;
    }

    .font_2 {
        font-size: 38rpx;
        font-family: Inter;
        line-height: 35rpx;
        color: #024b98;
        font-weight: 500;
    }

    .text_2 {
        margin-left: 64rpx;
    }

    .group_2 {
        padding: 20rpx;
        border-bottom: solid 2rpx #97979780;
    }

    .view {
        margin: 0 44rpx;
    }

    .image_4 {
        width: 48rpx;
        height: 48rpx;
    }

    .text_1 {
        margin-left: 20rpx;
    }

    .group_3 {
        margin: 0 44rpx;
        padding: 20rpx 22rpx;
        border-bottom: solid 2rpx #97979780;
    }

    .section_6 {
        margin-top: 26rpx;
        padding: 32rpx 44rpx 0;
        background-color: #ffffff;
        border-radius: 20rpx;
    }

    .space-y-18>view:not(:first-child),
    .space-y-18>text:not(:first-child),
    .space-y-18>image:not(:first-child) {
        margin-top: 36rpx;
    }

    .text_3 {
        margin-left: 20rpx;
    }

    .text_8 {
        margin-left: 24rpx;
    }

    .text_9 {
        margin-left: 16rpx;
    }

    .group_4 {
        padding: 0 96rpx;
        padding-top: 100rpx;
    }

    .space-x-15>view:not(:first-child),
    .space-x-15>text:not(:first-child),
    .space-x-15>image:not(:first-child) {
        margin-left: 30rpx;
    }

    .text-wrapper {
        padding: 24rpx 0;
        background-color: #f5f5f5;
        border-radius: 8rpx;
        width: 232rpx;
        height: 40rpx;
    }

    .font_3 {
        font-size: 32rpx;
        font-family: HarmonyOS Sans;
        letter-spacing: -1.28rpx;
        line-height: 30rpx;
    }

    .text_5 {
        color: #7dbfb5;
        line-height: 29rpx;
        opacity: 0.8;
    }

    .text-wrapper_2 {
        padding: 24rpx 0;
        background-color: #7dbfb5;
        border-radius: 8rpx;
        width: 232rpx;
        height: 40rpx;
    }

    .text_6 {
        color: #ffffff;
    }
</style>