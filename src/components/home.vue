<template>
    <el-carousel height="360px">
        <el-carousel-item v-for="(item,index) in list" :key="index">
            <img class="img" :src="item.imageUrl" alt="">
        </el-carousel-item>
    </el-carousel>
</template>

<script>

    export default {
        name: "home",
        data() {
            return {
                list: []
            }
        },
        created() {
            this.$axios({
                url: '/banner',
                params: {
                    t: Math.random() * 999
                }
            }).then(res => {
                this.list = res.data.banners;
            });
        }
    }
</script>

<style scoped>
    .img {
        width: 100%;
    }
</style>