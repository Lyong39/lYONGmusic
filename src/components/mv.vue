<template>
    <div class="video" v-if="mvInfo != ''">
        <div class="title-wrapper">
            <span class='tag'>MV</span>
            <span class='title'>{{mvInfo.name}}</span>
            <span class='artist'>{{mvInfo.artists | filterArr}}</span>
        </div>
        <video :src="mvInfo.brs | fileterBrs" controls></video>
    </div>
</template>

<script>

    export default {
        name: "mv",
        data() {
            return {
                mvInfo: ""
            }
        },
        filters: {
            fileterBrs(obj) {
                let maxBrs = 0;
                for (let objKey in obj) {
                    if (+objKey > maxBrs) {
                        maxBrs = objKey
                    }
                }
                return obj[maxBrs];
            }
        },
        created() {
            let mvid = this.$route.query.mvid;
            this.$axios({
                url: '/mv/detail',
                params: {
                    mvid: mvid,
                    ttt: Math.random() * 999
                }
            }).then(res => {
                this.mvInfo = res.data.data;
            })
        }
    }
</script>

<style scoped>

</style>