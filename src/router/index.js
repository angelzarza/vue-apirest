import Vue from "vue";
import VueRouter from "vue-router";
import LoginFirebase from "../views/LoginFirebase.vue";
import firebase from "firebase/compat/app";

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
      import(
        /* webpackChunkName: "register" */ "../views/RegisterFirebase.vue"
      ),
  },
  {
    path: "/lock",
    name: "Lock",
    component: () => import(/* webpackChunkName: "lock" */ "../views/Lock.vue"),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((ruta) => ruta.meta.requiresAuth)) {
    const user = firebase.auth().currentUser;
    if (user) {
      next();
    } else {
      next({
        name: "Firebase",
      });
    }
  } else {
    next();
  }
});

export default router;
