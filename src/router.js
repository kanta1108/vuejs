import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home";
// import Users from "./views/Users";
// import UsersPosts from "./views/UsersPosts";
// import UsersProfile from "./views/UsersProfile";
// import HeaderHome from "./views/HeaderHome";
// import HeaderUsers from "./views/HeaderUsers";

const Home = () => import("./views/Home");
const Users = () => import("./views/Users");
const UsersPosts = () => import("./views/UsersPosts");
const UsersProfile = () => import("./views/UsersProfile");
const HeaderHome = () => import("./views/HeaderHome");
const HeaderUsers = () => import("./views/HeaderUsers");

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
      beforeEnter(to, from, next) {
        next();
      },
    },
    {
      path: "/users/:id",
      components: {
        default: Users,
        header: HeaderUsers,
      },
      props: {
        default: true,
      },
      children: [
        { path: "posts", component: UsersPosts },
        { path: "profile", component: UsersProfile, name: "users-id-profile" },
      ],
    },
    {
      path: "/users",
      redirect: "/users/1",
    },
    {
      path: "*",
      redirect: "/",
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      this.app.$root.$once("triggerScroll", () => {
        let position = { x: 0, y: 0 };
        if (savedPosition) {
          position = savedPosition;
        }
        if (to.hash) {
          position = { selector: to.hash };
        }
        console.log(position);
        resolve(position);
      });
    });
  },
});
