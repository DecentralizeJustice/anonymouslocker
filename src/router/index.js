import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import ordersPage from "../views/ordersPageView.vue"
import faq from "../views/faqView.vue"
import message from "../views/messageMeView.vue"
import about from "../views/aboutMeView.vue"
import privacyPolicy from "../views/privacyPolicy.vue"
import termsOfService from "../views/termsOfService.vue"
import blog from "../views/blogView.vue"
import loyalty from "../views/loyaltyView.vue"
import orderAdmin from "../views/orderAdmin.vue"

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    { path: "/:catchAll(.*)", component: HomeView },
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/orders",
      name: "ordersPage",
      component: ordersPage
    },
    {
      path: "/faq",
      name: "faq",
      component: faq
    },
    {
      path: "/message",
      name: "message",
      component: message
    },
    {
      path: "/about",
      name: "about",
      component: about,
    },
    {
      path: "/privacypolicy",
      name: "privacypolicy",
      component: privacyPolicy
    },
    {
      path: "/termsofservice",
      name: "termsofservice",
      component: termsOfService
    },
    {
      path: "/blog",
      name: "blog",
      component: blog
    },
    {
      path: "/loyalty",
      name: "loyalty",
      component: loyalty
    },
    {
      path: "/admin",
      name: "admin",
      component: orderAdmin
    }
  ],
})

export default router
