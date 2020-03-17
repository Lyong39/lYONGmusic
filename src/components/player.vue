<template>
    <div class="player" v-if="musicInfo != '' ">
        <div class="left">
            <img class='disc' src="../assets/img/disc.png" alt="">
            <img class='cover' :src="musicInfo.al.picUrl" alt="">
        </div>
        <div class="right">
            <div class="title"><img src="../assets/img/tag.png" alt=""><span>{{musicInfo.name}}</span></div>
            <div class="singer">歌手: <span>{{musicInfo.ar | filterArr}}</span></div>
            <div class="album">所属专辑: <span>{{musicInfo.al.name}}</span></div>
            <audio class='audio' controls :src="musicUrl" v-if="musicUrl!=null"></audio>
            <ul class='lyric-container'>
                <li class='lyric' v-for="(item,index) in lrc" :key="index">{{item.split(']')[1]}}</li>
            </ul>
        </div>
    </div>
</template>

<script>

    export default {
        name: "player",
        data() {
            return {
                musicUrl: '',
                musicInfo: '',
                lrc: []
            }
        },
        created() {
            let id = this.$route.query.id;
            this.$axios({
                url: '/song/url',
                params: {
                    id: id,
                    ttt: Math.random() * 999
                }
            }).then(res => {
                this.musicUrl = res.data.data[0].url
            });

            this.$axios({
                url: '/song/detail',
                params: {
                    ids: id,
                    ttt: Math.random() * 999
                }
            }).then(res => {
                this.musicInfo = res.data.songs[0];
            });

            this.$axios({
                url: '/lyric',
                params: {
                    id: id
                }
            }).then(res => {
                this.lrc = res.data.lrc.lyric.split('\n');
            })
        }
    }
</script>

<style scoped>

</style>