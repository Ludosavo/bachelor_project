import { createWebHistory, createRouter } from "vue-router";

import Islands from "@/Islands.vue";
import Home from "@/Home.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/islands", component: Islands },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
