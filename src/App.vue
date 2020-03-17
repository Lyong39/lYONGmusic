<template>
    <div id="player">
        <h2 class="title" @click="goHome()">柠檬茶会</h2>
        <div class="search">
            <input type="text" v-model="inputValue" @keyup.enter="search"/>
            <button @click="search">
                <span class="iconfont icon-search"></span>
            </button>
        </div>
        <div class="tab-wrapper">
            <!-- 对应的内容区域 -->
            <div class="tab-content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                inputValue: ""
            }
        },
        methods: {
            search() {
                if (this.inputValue === '') {
                    alert('请输入歌曲呀~')
                } else {
                    this.$router.push('/songs?q=' + this.inputValue)
                }
            },
            goHome() {
                this.$router.push({
                    path: '/'
                })
            }
        }
    }
</script>

<style>
    @import "assets/css/index.css";
    @import "assets/css/iconfont.css";
</style>
