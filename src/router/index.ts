import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const Discover = () => import("@/views/discover"); // 发现页面
// const PlaylistDetails = () => import('@/views/playlist-details'); // 发现页面
// const Mvs = () => import( /* webpackChunkName: "Songs" */ '@/views/mvs'); // 最新视频
// const Mv = () => import( /* webpackChunkName: "Songs" */ '@/views/mv'); // 视频详情
// const Rank = () => import( /* webpackChunkName: "Songs" */ '@/views/rank'); // 排行榜单
// const Songs = () => import( /* webpackChunkName: "Songs" */ '@/views/songs'); // 新歌速递
// const Search = () => import( /* webpackChunkName: "Songs" */ '@/views/search'); // 搜索页

console.log("Discover", Discover);

const constantRoutes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: "/dashboard",
        children: [
            {
                path: "dashboard",
                component: Discover,
                name: "Discover",
                meta: {
                    title: "dashboard",
                },
            },
        ],
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes,
});

export default routes;
