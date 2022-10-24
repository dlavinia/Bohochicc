import { createRouter, createWebHashHistory } from "vue-router";
import ContactPage from '@/pages/contact'
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
        path: '/contact',
        name: 'contact',
        component: ContactPage
        },
        {
            path: '/gallery',
            name: 'gallery',
            component: GalleryPage
        },] 
});

export default router;