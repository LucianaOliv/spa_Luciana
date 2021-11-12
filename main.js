import Vue from "https://cdn.jsdelivr.net/npm/vue@latest/dist/vue.esm.browser.min.js";

import { Navbar } from "./components/navbar.js";

import { MainTemplate } from "./templates/main-template.js";

import { Hobbies } from "./components/hobbies.js";
import { What } from "./components/what.js";
import { Quem } from "./components/quem.js";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Quem,
      name: "Quem sou eu page",
    },
    {
      path: "/hobbies",
      component: Hobbies,
      name: "Hobbies page",
    },
    {
      path: "/what",
      component: What,
      name: "O que faco page",
    },
  ],
});

new Vue({
  el: "#app", 
  components: {
    navbar: Navbar,
  },
  router,
  template: MainTemplate,
});
