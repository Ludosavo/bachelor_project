import { createWebHistory, createRouter } from "vue-router";

import Islands from "@/Islands.vue";
import Island1 from "@/Island1.vue";
import Island2 from "@/Island2.vue";
import Island3 from "@/Island3.vue";
import Island4 from "@/Island4.vue";
import Home from "@/Home.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/islands", component: Islands },
  { path: "/island1/", component: Island1},
  { path: "/island2", component: Island2},
  { path: "/island3", component: Island3},
  { path: "/island4", component: Island4},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
