<template>
    <view>
        <view v-for="(d,index) in mydata" class="flex-col list" :key="index">
            <record :time="time[index]" :mydata="d"></record>
        </view>
    </view>
</template>

<script>
    import record from "@/components/record.vue"
    export default {
        data() {
            return {
                mydata: [],
                time: []
            }
        },
        components: {
            record
        },
        methods: {},
        onLoad() {
            uni.getStorage({
                key: 'isLog',
                success: function(res) {
                    if (res.data === false) {
                        uni.redirectTo({
                            url: '../login/login'
                        })
                    }
                    console.log(isLog);
                },
                fail() {
                    uni.redirectTo({
                        url: '../login/login'
                    })
                }
            });
            let that = this;
            uni.getStorage({
                key: 'userId',
                success(res) {
                    const db = uniCloud.database();
                    console.log("userIdback");
                    console.log(res);
                    console.log(res.data);
                    console.log(`userid == ${res.data}`);
                    db.collection('health-file').where(`userid == "${res.data}"`).get().then((e) => {
                        console.log(e.result.data);
                        let i;
                        for (i = 0; i < e.result.data.length; i++) {
                            let d = e.result.data[i];
                            that.time.push(d.create_time);
                            let j;
                            let nowdata = [];
                            for (j = 1; j < 7; j++) {
                                //   console.log(d.data[`sickness${j}`]);
                                nowdata.push(d.data[`sickness${j}`]);
                            }
                            nowdata.sort((a, b) => {
                                return b.value - a.value;
                            });
                            that.mydata.push(nowdata);

                        }
                        console.log(that.time);
                        console.log(that.mydata);
                    });

                }
            });


        }
    }
</script>

<style>
    .list {
        padding: 15rpx 15rpx;
    }
</style>