// router.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../page/HomePage.vue"
import Schedule from "../page/SchedulePage.vue"
import  Movie from "../page/MoviePage.vue"
import MapContact from "../page/LocationAndContact.vue"
const routes = [
  { path: "/", component: Home },
  { path: "/schedule", component: Schedule },
  { path: "/movie", component: Movie },
  { path: "/mapContact", component: MapContact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
