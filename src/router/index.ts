import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AppsView from '../views/AppsView.vue'
import GamingView from '../views/GamingView.vue'
import MoviesView from '../views/MoviesView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/Home',
      redirect: { name: 'Home' }
    },
    {
      path: '/Apps',
      name: 'Apps',
      component: AppsView
    },
    {
      path: '/Gaming',
      name: 'Gaming',
      component: GamingView
    },
    {
      path: '/Movies',
      name: 'Movies',
      component: MoviesView
    }
  ]
})
router.afterEach((to, from, failure) => {
  if (!failure) {
    setTimeout(() => {
      HSStaticMethods.autoInit()
    }, 100)
  }
})

export default router
