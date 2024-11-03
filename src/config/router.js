import { createWebHistory, createRouter } from "vue-router";

import Islands from "@/Islands.vue";
import Island from "@/Island.vue";
import Home from "@/Home.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/islands", component: Islands },
  { path: "/island/:id/:question", component: Island },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
