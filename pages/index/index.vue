<template>
    <view class="flex-col justify-start page">
        <view class="flex-col group">
            <view class="flex-col justify-start items-end relative section">
                <image class="shrink-0 image_2"
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/62f8bcea5a7e3f03100a0ed5/62f8bd5e689f2800114ed71c/16812272436024279728.png" />
                <text class="font_2 text_2 pos_2">当前模式：</text>
                <text class="font_3 text_3 pos_3">子女端</text>
                <text class="font_2 text_4 pos_4">配对用户ID：</text>
                <text class="font_3 text_5 pos_5">{{userId}}</text>
            </view>
            <view class="flex-col group_2 space-y-18">
                <view class="flex-col items-center space-y-12 mygroup">
                    <text class="font_1">我是子女</text>
                    <view style="margin-top: 40rpx;" class="flex-col items-center space-y-12 mygroup">
                        <text class="font_4">扫描父母二维码进行配对</text>
                        <text class="font_4">随时查看父母健康报告、预约专业医生</text>
                        <text class="font_4">守护健康，步步青云</text>
                    </view>
                </view>
                <view class="flex-col items-center">
                    <image @click="toScan" class="image_3"
                        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/62f8bcea5a7e3f03100a0ed5/62f8bd5e689f2800114ed71c/16812272435991926663.png" />
                </view>
                <image src="../../static/E02.png" class="myphoto"></image>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                userId: "000001",
                canvasUrl: '',
                type: "父母端",
            }
        },
        methods: {
            toScan() {
                let that = this;
                uni.scanCode({
                    success: function(res) {
                        uni.showToast({
                            title: '配对成功'
                        });
                        uni.setStorage({
                            key: 'userId',
                            data: '000001',
                            success() {
                                console.log('条码类型：' + res.scanType);
                                console.log('条码内容：' + res.result);
                                that.$forceUpdate();
                                that.$set(that, 'userId', res.result);
                                that.type = "子女端";
                                if (res.result == '百度大脑' || '000001' || '000002')
                                    uni.navigateTo({
                                        url: '../myrecord/myrecord',
                                        success: res => {},
                                        fail: () => {},
                                        complete: () => {}
                                    });
                            }
                        })

                    }
                });
            },

        },
        mounted() {},
        onLoad() {
            console.log("onLoad Run")
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

    .group {
        margin-top: 40rpx;
        padding: 25rpx 29.17rpx;
        overflow-y: auto;
    }

    .section {
        border-radius: 22.92rpx;
        overflow: hidden;
        background: radial-gradient(147.79% 521.64% at 100% 68.78%, #7DBFB5 1.4%, #5CB6DB 100%)
            /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
        ;
        box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.4);
        border-radius: 11px;
    }

    .image_2 {
        width: 522.92rpx;
        height: 330rpx;
    }

    .font_2 {
        font-size: 31.25rpx;
        font-family: Microsoft YaHei;
        line-height: 30.21rpx;
        font-weight: 700;
    }

    .text_2 {
        color: #ffffffe8;
    }

    .pos_2 {
        position: absolute;
        left: 72.92rpx;
        top: 40.88rpx;
    }

    .font_3 {
        font-size: 62.5rpx;
        font-family: Microsoft YaHei;
        font-weight: 700;
        color: #ffffff;
    }

    .text_3 {
        line-height: 60.42rpx;
    }

    .pos_3 {
        position: absolute;
        left: 71.88rpx;
        top: 100.42rpx;
    }

    .text_4 {
        color: #ffffffcc;
    }

    .pos_4 {
        position: absolute;
        left: 71.88rpx;
        top: 190.33rpx;
    }

    .text_5 {
        line-height: 48.96rpx;
    }

    .pos_5 {
        position: absolute;
        left: 72.92rpx;
        top: 250.13rpx;
    }

    .group_2 {
        margin-top: 50rpx;
        padding: 37.5rpx 18.75rpx;
    }

    .space-y-18>view:not(:first-child),
    .space-y-18>text:not(:first-child),
    .space-y-18>image:not(:first-child) {
        margin-top: 37.5rpx;
    }

    .space-y-12>view:not(:first-child),
    .space-y-12>text:not(:first-child),
    .space-y-12>image:not(:first-child) {
        margin-top: 25rpx;
    }

    .font_1 {
        font-size: 50rpx;
        font-family: Microsoft YaHei;
        line-height: 48.96rpx;
        font-weight: 700;
        color: #224c7e;
    }

    .font_4 {
        font-size: 29.17rpx;
        font-family: Microsoft YaHei;
        line-height: 28.13rpx;
        color: #3f4354;
    }

    .image_3 {
        width: 654.17rpx;
        height: 204.17rpx;
        box-shadow: 0px 3px 10px rgba(34, 76, 126, 0.4);
        margin-top: 30rpx;
    }

    .text_6 {
        margin-top: 41.67rpx;
        line-height: 47.92rpx;
    }

    .text_7 {
        margin-top: 25rpx;
    }

    .section_2 {
        opacity: 0.2;
        overflow: hidden;
        width: 458.33rpx;
        height: 458.33rpx;
        border: solid 20.83rpx #7dbfb5;
    }


    .mygroup {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .myphoto {
        position: fixed;
        bottom: 75rpx;
        left: 50%;
        margin-left: -90rpx;
        width: 180rpx;
        height: 100rpx;
    }
</style>