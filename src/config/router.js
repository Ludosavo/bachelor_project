import { createWebHistory, createRouter } from "vue-router";

import Islands from "@/Islands.vue";
import Island from "@/Island.vue";
import Home from "@/Home.vue";
import TreasureIsland from "@/TreasureIsland.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/islands", component: Islands },
  { path: "/islands/treasure", component: TreasureIsland },
  { path: "/island/:id/:question", component: Island },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
