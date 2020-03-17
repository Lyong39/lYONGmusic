<template>
    <div class="comment-wrapper">
        <div class="items" v-for="(item,index) in list" :key="index">
            <div class="item">
                <div class="left">
                    <img :src="item.user.avatarUrl" alt="">
                </div>
                <div class="right">
                    <div class="top">
                        <span class='user'>{{item.user.nickname}} : </span>
                        <span class='content'>{{item.content}}</span>
                    </div>
                    <div class="bottom">
                        <div class="time">{{item.time | filterTime}}</div>
                        <div class="like-wrapper">
                            <span>👍</span>({{item.likedCount}})
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import moment from 'moment';

    export default {
        name: "comments",
        data() {
            return {
                list: []
            }
        },
        created() {
            let id = this.$route.query.id;
            this.$axios({
                url: '/comment/music',
                params: {
                    id: id,
                    ttt: Math.random() * 999
                }
            }).then(res => {
                this.list = res.data.comments
            })
        },
        filters: {
            filterTime(num) {
                return moment(num).format('YYYY-DD-MM HH:mm:ss');
            }
        }
    }
</script>

<style scoped>

</style>