import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [{
    // 網址路徑
    path: '/',
    name: 'home',
    component: HomeView,
    // 宣告meta值
    meta: {
      title: "Home",
      description: "不同輸入類型 text, radio, select、同一 component 切換 prop 來改變對應的輸入類型",
    }
  },
  {
    path: '/another',
    name: 'another',
    // route level code-splitting
    // this generates a separate chunk (another.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "another" */ '../views/AnotherPage.vue'),
    meta: {
      title: "Another Page",
      description: "用表格顯示API取得的資料",
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // 當有宣告title時改變網頁的title
  if (to.meta.title) {
    document.title = to.meta.title
  }

  // 當有宣告description時改變網頁的description
  if (to.meta.description) {
    let description = document.querySelector("meta[name='description']")
    // 當網頁已有description時改寫description
    if (description) {
      document.querySelector("meta[name='description']").content = to.meta.description
    } else {
      // 網頁沒有description時建立並插入head
      let metaTag = document.createElement('meta');
      metaTag.name = "description"
      metaTag.content = to.meta.description
      document.getElementsByTagName('head')[0].appendChild(metaTag);
    }

  }
  next();
})

export default router