/**
 * Vue Routerを使う
 */

import Vue from "vue";
import Router from "vue-router"; //Routerをインポート
import Home from "./views/Home.vue"; //ルーティングしたいコンポーネントをインポート
import Users from "./views/Users.vue"; //ルーティングしたいコンポーネントをインポート
import UsersPosts from "./views/UsersPosts.vue"; //ルーティングしたいコンポーネントをインポート
import UsersProfile from "./views/UsersProfile.vue"; //ルーティングしたいコンポーネントをインポート
import HeaderHome from "./views/HeaderHome"; //ルーティングしたいコンポーネントをインポート
import HeaderUsers from "./views/HeaderUsers"; //ルーティングしたいコンポーネントをインポート

Vue.use(Router); //VueにRouterを使うことを伝える

//Routerインスタンスを作成。必ずexport defaultでエクスポートする
export default new Router({
  mode: "history", //URLに#がつかない
  routes: [
    /**
     * ルーティングの設定
     * path: パス
     * components: パスにアクセスしたときに表示するコンポーネント
     */
    {
      path: "/",
      components: {
        default: Home, //defaultは、名前をつけない場合の名前
        header: HeaderHome
      }
    },
    {
      path: "/users/:id", //:idは動的なパラメータ
      components: {
        default: Users,
        header: HeaderUsers
      },
      name: "users", //ルート名を設定する
      props: {
        //propsをtrueにすると、コンポーネントにパラメータが渡される
        //componentsをオブジェクトに指定した場合は、propsをオブジェクトにしてコンポーネントごとに設定する
        default: true,
        header: true
      },
      children: [
        //子ルートの設定
        {
          path: "posts", //子ルートのパスは、頭に/をつけない
          component: UsersPosts,
          name: "users-id-posts" //ルート名を設定する
        },
        {
          path: "profile",
          component: UsersProfile,
          name: "users-id-profile", //ルート名を設定する
          props: true
        }
      ]
    },
    {
      //リダイレクトの設定
      path: "/hello",
      redirect: "/" //リダイレクト先のパスを指定する
    }
  ]
});
