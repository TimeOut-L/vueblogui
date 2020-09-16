import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Blogs from '../views/Blogs.vue'
import BlogEdit from '../views/BlogEdit.vue'
import BlogDetail from '../views/BlogDetail.vue'
Vue.use(VueRouter)

const routes = [

  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    meta: { title: '首页'}
  },
  {
    path: '/category/:cate',
    name: 'category',
    component: () => import('../views/Home.vue'),
    meta: { title: '分类', params: 'cate'}
  },
  {
    path: '/search/:words',
    name: 'search',
    component: () => import('../views/Home.vue'),
    meta: { title: '搜索', params: 'words'}
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
    meta: { title: '关于'}
  },
  {
    path: '/friend',
    name: 'friend',
    component: () => import('../views/Friend.vue'),
    meta: { title: '友链'}
  },
  {
    path: '/article/:id',
    name: 'article',
    component: () => import('../views/Articles.vue'),
    meta: { title: '文章'}
  },
  // {
  //   path: '/blog/:id',
  //   name: 'blogg',
  //   component: () => import('../views/.vue'),
  //   meta: { title: '文章'}
  // },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }/*,
  {
    path: '/blog/add',
    name: 'BlogAdd',
    component: BlogEdit,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/blog/:blogId',
    name: 'BlogDetail',
    component: BlogDetail
  },
  {
    path: '/blog/:blogId/edit',
    name: 'BlogEdit',
    component: BlogEdit,
    meta: {
      requireAuth: true
    }
  }*/
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
