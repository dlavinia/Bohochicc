import { createRouter, createWebHashHistory } from "vue-router";
import AboutApp from '@/pages/about-app'
import GalleryPage from '@/pages/gallery-page'
import HomaPage from '@/pages/home'
 
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomaPage
            },
        {
        path: '/about',
        name: 'about',
        component: AboutApp
        },
        {
            path: '/gallery',
            name: 'gallery',
            component: GalleryPage
        },] 
});

export default router;