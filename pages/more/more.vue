<template>
    <view class="flex-col justify-start page">
        <view class="flex-col group">
            <view class="flex-row justify-center items-center group_2 space-x-20">
                <image class="image_2"
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/62f8bcea5a7e3f03100a0ed5/62f8bd5e689f2800114ed71c/16813056152000797682.png" />
                <text class="font_1 text_2">健康建议</text>
                <image class="image_2"
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/62f8bcea5a7e3f03100a0ed5/62f8bd5e689f2800114ed71c/16813056152019642650.png" />
            </view>
            <text class="text_3">{{adviceBank[type]}}</text>
            <view class="flex-row justify-center items-center group_2 space-x-20">
                <image class="image_2"
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/62f8bcea5a7e3f03100a0ed5/62f8bd5e689f2800114ed71c/16813056152000797682.png" />
                <text class="font_1 text_2">康复运动推荐</text>
                <image class="image_2"
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/62f8bcea5a7e3f03100a0ed5/62f8bd5e689f2800114ed71c/16813056152019642650.png" />
            </view>
            <image src="../../static/step.png" class="image-wrapper" @click="message"></image>
            <image src="../../static/taiji.png" class="image-wrapper" @click="message"></image>
            <image src="../../static/cao.png" class="image-wrapper" @click="message"></image>
        </view>
        <u-toast ref="uToast"></u-toast>
    </view>

</template>

<script>
    export default {
        data() {
            return {
                nameBank: ["糖尿病", "帕金森", "渐冻症", "麻痹症", "亨廷顿", "老年痴呆"],
                adviceBank: [
                    "▪ 控制饮食，保持适当的饮食习惯和食量，避免过度饮食和暴饮暴食。\n▪ 避免高糖食物，如糖果、蛋糕、甜点等，尽量选择低糖或无糖的食物。\n▪ 锻炼身体，适当的有氧运动，如散步、跑步、游泳、慢跑等运动有助于控制血糖。\n▪ 保持适宜的体重，肥胖是引发糖尿病的重要危险因素之一，需要适量控制体重。\n▪ 定期测量血糖，及时发现和控制血糖水平，防止糖尿病的发展。\n▪ 注意药物治疗，如果已经被确诊为糖尿病，需要遵医嘱合理服用药物。\n▪ 定期体检，包括检查眼底、肾功能、神经系统等。这些检查有助于及早发现和治疗糖尿病并发症。\n▪ 戒烟限酒，减少香烟和酒精的摄入，避免影响身体健康并增加糖尿病的发生风险。",
                    "▪ 保持积极的生活态度和心态，参加社交活动以保持社交联系。\n▪ 坚持适度的身体锻炼，如散步、瑜伽等，有助于保持灵活性和肌肉力量。\n▪ 维持平衡膳食，多食用新鲜水果和蔬菜，减少高脂肪、高盐和高热量的食物的摄入。\n▪ 减少饮酒和戒烟，这两个因素是导致帕金森病发病率增加的原因之一。\n▪ 睡眠充足，保持健康的睡眠习惯，每晚保持7-8小时的睡眠，有助于保护神经系统健康。\n▪ 定期接受体检，及时发现和治疗可能出现的健康问题。\n▪ 保持心理健康，如有需要可咨询专业心理医生或社工心理辅导來保持良好的情绪状态。",
                    "▪ 保持积极的心态，参加社交活动以保持社交联系，避免孤独和沮丧。\n▪ 保持适度的身体锻炼，如散步、瑜伽等，有助于保持灵活性和肌肉力量。\n▪ 定期进行认知和思维训练的活动，如阅读、围棋、学外语等，有助于维护神经系统的健康。\n▪ 减少饮酒和戒烟，这两个因素是导致渐冻症发病率增加的原因之一。\n▪ 注意营养均衡，饮食应含有丰富的蛋白质和抗氧化剂，如维生素E、C等，以维护身体的健康。\n▪ 定期接受体检，及时发现和治疗可能出现的健康问题。\n▪ 保持心理健康，如有需要可咨询专业心理医生或社工心理輔導來保持良好的情緒状态。\n▪ 如果存在渐冻症的遗传风险，建议咨询医生进行遗传咨询，并按医生的建议进行检测和随访。",
                    "▪ 坚持适度的身体锻炼，如散步、瑜伽等，有助于保持灵活性和肌肉力量，以预防和减轻麻痹症状。\n▪ 保持良好的营养和饮食习惯，依据个人需要食用适当量的蛋白质、肌肉、蔬菜和水果，并避免食用过多的糖、油和盐等高胆固醇食品。\n▪ 定期接受体检，及时发现和治疗可能出现的健康问题。\n▪ 定期进行神经系统评估，如神经系统疾病筛查和肌肉无力检查等，有助于及早发现可能存在的问题。\n▪ 保持心理健康，如有需要可咨询专业心理医生或社工心理輔導來保持良好的情緒状态。\n▪ 避免长时间固定的姿势，如长时间坐着或浸泡在水中等，防止神经损伤。\n▪ 避免压力和创伤，减少可能造成神经损伤的事故和创伤。\n▪ 如果已经被确诊为麻痹症，需要遵医嘱合理使用药物以及进行相关治疗、理疗等",
                    "▪ 保持积极的心态和情绪，避免过度压力和焦虑，参加社交活动以保持社交联系。\n▪ 注意营养均衡，饮食要含有足够的蛋白质、碳水化合物和脂肪，如全谷物、豆类、坚果、蔬菜水果、低脂肪动物蛋白等，有助于维护身体的健康。\n▪ 积极参与身体锻炼和运动，如散步、瑜伽等，有助于保持身体活跃和健康，减少亨廷顿病症状发展的影响。\n▪ 定期接受体检，及时发现和治疗可能出现的健康问题。\n▪ 参加心理咨询或社会支持小组，保持心理健康，排解负面情绪和压力。\n▪ 避免饮酒，减少酒精的摄入，有助于减少亨廷顿病的风险。\n▪ 如果存在亨廷顿病的家族遗传风险，建议咨询医生进行遗传咨询，并按医生的建议进行检测和随访。",
                    "▪ 坚持适度的身体锻炼，如散步、瑜伽等，有助于维持身体健康和社交联系。\n▪ 注意保持心理健康，积极参加社交活动，参加社会支援小组或志愿者活动，保持身心愉悦。\n▪ 坚持生理快捷响应训练、记忆力提高训练和思维训练等，以维持认知和思维能力。\n▪ 保持营养均衡，饮食需要含有适量的蛋白质、维生素、碳水化合物和脂肪等，避免过度饮食。\n▪ 多尝试新的活动和事物，如学习新的技能、去新的地方旅游等，有助于激发思维和保持脑功能活跃。\n▪ 控制心理压力，避免过度紧张和焦虑，如通过冥想、瑜伽等方式放松心情。\n▪ 定期接受体检，及时发现和治疗可能出现的健康问题。\n▪ 如果家族中存在老年痴呆的遗传风险，建议咨询医生进行遗传咨询，并按医生的建议进行检测和随访。",
                ],
                type: 0,
            }
        },
        methods: {
            message() {
                this.$refs.uToast.show({
                    type: 'success',
                    title: "操作成功",
                    message: "已发送到父母端课程列表中"
                });
            }
        },
        onLoad: function(option) {
            console.log(option.type);
            this.type = option.type;
        }

    }
</script>


<style>
    .status_bar {
        height: var(--status-bar-height);
        width: 100%;
        //     background-color: #7dbfb5;
    }

    .page {
        padding: 2.08rpx 0;
        background-color: #ffffff;
        width: 100%;
        overflow-y: auto;
        overflow-x: hidden;
        height: 100%;
    }

    .group {
        padding: 0 52.08rpx 102.08rpx;
        overflow-y: auto;
    }

    .group_2 {
        padding: 79.17rpx 0 54.17rpx;
    }

    .space-x-20>view:not(:first-child),
    .space-x-20>text:not(:first-child),
    .space-x-20>image:not(:first-child) {
        margin-left: 41.67rpx;
    }

    .image_2 {
        width: 122.92rpx;
        height: 54.17rpx;
    }

    .font_1 {
        font-size: 54.17rpx;
        font-family: Microsoft YaHei;
        line-height: 52.08rpx;
        font-weight: 700;
        color: #224c7e;
    }

    .text_2 {
        line-height: 53.13rpx;
    }

    .section {
        background-color: #224c7e;
        overflow: hidden;
        height: 387.5rpx;
        width: 650rpx;
    }

    .group_3 {
        margin-top: 91.67rpx;
        padding: 0 58.33rpx;
    }

    .space-x-10>view:not(:first-child),
    .space-x-10>text:not(:first-child),
    .space-x-10>image:not(:first-child) {
        margin-left: 20.83rpx;
    }

    .image-wrapper {
        width: 660rpx;
        height: 270rpx;
        margin: 20rpx 0;
    }

    .text_3 {
        font-family: 'Microsoft YaHei';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        line-height: 60rpx;
        color: #3F4354;
    }

    .group_4 {
        margin-top: 79.17rpx;
    }

    .space-y-14>view:not(:first-child),
    .space-y-14>text:not(:first-child),
    .space-y-14>image:not(:first-child) {
        margin-top: 29.17rpx;
    }

    .image_3 {
        filter: drop-shadow(0px 6.25rpx 10.42rpx #224c7e66);
        width: 627.08rpx;
        height: 143.75rpx;
    }

    .button {
        border-radius: 20.83rpx;
        width: 627.08rpx;
        height: 143.75rpx;
    }
</style>