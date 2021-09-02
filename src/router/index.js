import Vue from "vue";
import VueRouter from "vue-router";
import LoginFirebase from "../views/LoginFirebase.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Firebase",
    component: LoginFirebase,
  },
  {
    path: "/register",
    name: "Register",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RegisterFirebase.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
