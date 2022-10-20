import { createRouter, createWebHashHistory } from "vue-router";
import AboutApp from '@/pages/about-app'
import GalleryPage from '@/pages/gallery-page'
import RegisterPage from '@/pages/register-post'

 
const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
        path: '/about',
        name: 'about',
        component: AboutApp
        },
        {
            path: '/gallery',
            name: 'gallery',
            component: GalleryPage
        },
        {
            path: '/register',
            name: 'register',
            component: RegisterPage
        },] 
});

export default router;