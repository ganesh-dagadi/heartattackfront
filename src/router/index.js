import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import AddPatient from '../views/AddPatient.vue'
import ViewPatients from '../views/ViewPatients.vue'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path : '/addpatient',
    name : 'addpatient',
    component : AddPatient
  },
  {
    path : '/viewpatients',
    name : 'viewpatients',
    component : ViewPatients
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
