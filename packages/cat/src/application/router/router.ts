import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../../presentation/Home/HomePage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
