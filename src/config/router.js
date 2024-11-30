import { createWebHistory, createRouter } from "vue-router";

import Islands from "@/Islands.vue";
import Island from "@/Island.vue";
import Home from "@/Home.vue";
import TreasureIsland from "@/TreasureIsland.vue";
import GeminiTutorial from "@/components/GeminiTutorial.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/islands", component: Islands },
  { path: "/islands/treasure", component: TreasureIsland },
  { path: "/island/:id/:question", component: Island },
  { path: "/island/:id/:question/geminiTutorial", component: GeminiTutorial },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
