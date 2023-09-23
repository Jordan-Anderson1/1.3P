import { createRouter, createWebHistory } from 'vue-router';

import PortfolioView from './views/Portfolio-view.vue';
import Home from './views/MyHome.vue';
import Contact from './views/MyContact.vue';
import About from './views/MyAbout.vue';

const routes = [
    { path: '/portfolio', name: 'Portfolio', component: PortfolioView},
    { path: '/', name: 'Home', component: Home},
    { path: '/contact', name: 'Contact', component: Contact},
    { path: '/about', name: 'About', component: About},
    
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;