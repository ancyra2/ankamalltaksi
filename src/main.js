import './assets/scss/main.scss'
import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import Home from './components/Home.vue'
import Contact from './components/Contact.vue'
import About from './components/About.vue'
import Galery from './components/Galery.vue'

const routes = [
    {path:'/', component:Home},
    {path:'/about',component:About},
    {path:'/contact',component:Contact},
    {path:'/galery',component:Galery},
    {path:'/#',component:Home}

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


createApp(App).use(router).mount('#app')