import Vue from 'vue';
import VueRouter from 'vue-router';
import Featured from '../views/Featured.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Featured',
    component: Featured,
  },
  {
    path: '/atlas',
    name: 'Atlas',
    component: () => import(/* webpackChunkName: "atlas" */ '../views/Atlas.vue'),
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "atlas" */ '../views/Search.vue'),
  },
  {
    path: '/article/:id',
    name: 'article',
    props: true,
    component: () => import(/* webpackChunkName: "article" */ '../views/Article.vue'),
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
