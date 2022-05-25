import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue';


import Categories from '../views/Categories.vue';
import CategorieEdit from '../components/Categories/CategorieEdit.vue';
import NewCategorie from '../components/Categories/NewCategorie.vue';

import Clients from '../views/Clients.vue';
import NewClient from '../components/Clients/NewClient.vue';
import EditClient from '../components/Clients/EditClient.vue';


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories 
  }, 
  {
    path: '/categorie-edit/:id',
    name: 'CategorieEdit',
    component: CategorieEdit
  },
  {
    path: '/add-Categorie/',
    name: 'NewCategorie',
    component: NewCategorie
  },
  {
    path: '/clients',
    name: 'Clients',
    component: Clients
  },
  {
    path: '/add-Client/',
    name: 'NewClient',
    component: NewClient
  },

  {
    path: '/client-edit/:id',
    name: 'EditClient',
    component: EditClient
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
