import Home from "@/pages/Home.vue"
import Backend from "@/pages/Backend.vue"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/admin',
    component: Backend
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})