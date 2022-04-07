import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: "Home",
      description: "準備去關島旅遊關島自由行的朋友們阿物跟您說聲Hafa Adai ! ",
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
      title: "About"
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  if (to.meta.description) {
    let metaTag = document.createElement('meta');
    metaTag.name = "description"
    metaTag.content = to.meta.description
    document.getElementsByTagName('head')[0].appendChild(metaTag);
  }
  next();
})

export default router