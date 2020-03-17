<template>
    <div class="result-wrapper">
        <div class="song" v-for="(item,index) in list" :key="index" @dblclick="goComments(item.id)">
            <div class="name">
                <span class="iconfont icon-play" @click="goPlayer(item.id)"></span>
                {{item.name}}
                <span class="iconfont icon-editmedia" v-if="item.mvid!=0" @click="goMv(item.mvid)"></span>
            </div>
            <div class="singer">{{item.artists | filterArr}}</div>
            <div class="album">{{item.album.name}}</div>
            <div class="time">{{item.duration | filterTime}}</div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "songs",
        data() {
            return {
                list: []
            }
        },
        methods: {
            getData() {
                let _q = this.$route.query.q;
                this.$axios({
                    url: '/search',
                    params: {
                        keywords: _q,
                        ttt: Math.random() * 999
                    }
                }).then(res => {
                    this.list = res.data.result.songs;
                })
            },
            goMv(mvid) {
                this.$router.push('/mv?mvid=' + mvid);
            },
            goComments(id) {
                this.$router.push({
                    path: '/comments',
                    query: {
                        id: id
                    }
                });
            },
            goPlayer(id) {
                this.$router.push({
                    path: '/player',
                    query: {
                        id: id
                    }
                });
            }
        },
        filters: {
            filterTime(num) {
                let _m = "00000" + Math.floor(num / 1000 / 60);
                let _s = "00000" + Math.floor(num / 1000 % 60);
                return _m.slice(-2) + ':' + _s.slice(-2);
            }
        },
        watch: {
            '$route.query.q'() {
                this.getData();
            }
        },
        created() {
            this.getData();
        }
    }
</script>

<style scoped>

</style>