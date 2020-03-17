import Vue from "vue";
import VueRouter from "vue-router";
import home from "../components/home";
import songs from "../components/songs";
import mv from "../components/mv";
import comments from "../components/comments";
import player from "../components/player";

Vue.use(VueRouter);

// 解决多次相同的路由跳转报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
};

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: home
        },
        {
            path: '/songs',
            component: songs
        },
        {
            path: '/mv',
            component: mv
        },
        {
            path: '/comments',
            component: comments
        },
        {
            path: '/player',
            component: player
        },
        {
            path: '/*',
            redirect: home
        }
    ]
});

export default router;