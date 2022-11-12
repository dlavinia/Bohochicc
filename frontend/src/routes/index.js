import { createRouter, createWebHashHistory } from "vue-router";
import ContactPage from '@/pages/contact'
import GalleryPage from '@/pages/gallery-page'
import HomaPage from '@/pages/home'
import DetailsPost from '@/pages/details'
 
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
        },
        {
            path: '/:title',
            component: DetailsPost
        },] 
});

export default router;