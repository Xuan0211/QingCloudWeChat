<template>
    <view>
        <image class="image" src="@/static/Menu.png" @click="tomore" />
        <view v-for="(d,index) in mydata" class="flex-col list" :key="index">
            <record :time="time[index]" :mydata="d" :img="img[index]"></record>
        </view>
    </view>
</template>

<script>
    import record from "@/components/record.vue"
    export default {
        data() {
            return {
                mydata: [],
                time: [],
                img: [],
            }
        },
        components: {
            record
        },
        methods: {
            tomore() {
                console.log("to more");
                uni.navigateTo({
                    url: '../book/book',
                    success: res => {},
                    fail: () => {
                        console.log("to more fail");
                    },
                    complete: () => {}
                });
            }
        },
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
                        let data = e.result.data.sort((a, b) => {
                            return b.create_time.localeCompare(a.create_time);
                        });
                        console.log("data is");
                        console.log(data);
                        let i;
                        for (i = 0; i < data.length; i++) {
                            let d = data[i];
                            that.time.push(d.create_time);
                            if (d.img != undefined) {
                                that.img.push(d.img);
                            } else {
                                console.log("push default");
                                that.img.push(
                                    "https://mawxuan.oss-cn-hangzhou.aliyuncs.com/img/path/Path/pd007_1slow1.txtColoredAllCOP.png"
                                );
                            }
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

    .image {
        width: 700rpx;
        margin: 20rpx 25rpx;
        height: 300rpx;
    }
</style>