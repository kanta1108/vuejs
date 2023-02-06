import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import Users from "./views/Users";
import UsersPosts from "./views/UsersPosts";
import UsersProfile from "./views/UsersProfile";
import HeaderHome from "./views/HeaderHome";
import HeaderUsers from "./views/HeaderUsers";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      components: {
        default: Home,
        header: HeaderHome,
      },
    },
    {
      path: "/users/:id",
      components: {
        default: Users,
        header: HeaderUsers,
      },
      props: {
        default: true
      },
      children: [
        { path: "posts", component: UsersPosts },
        { path: "profile", component: UsersProfile, name: "users-id-profile" },
      ],
    },
    {
      path: '/users', redirect: "/users/1"
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    console.log(savedPosition)
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        selector: to.hash,
      }
    }
  }
});
