import Vue from 'vue'
import Router from 'vue-router'
// Layouts
import DefaultLayout from '../layouts/DefaultLayout';
// Pages
import LandingPage from '../pages/LandingPage'
import MissionPage from "../pages/MissionPage";
import BlogPage from "../pages/BlogPage";
import DonationPage from "../pages/DonationPage";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: DefaultLayout,
            children: [
                {
                    path: '/',
                    name: 'LandingPage',
                    component: LandingPage,
                },
                {
                    path: '/mission',
                    name: "MissionPage",
                    component: MissionPage
                },
                {
                    path: '/blog',
                    name: "BlogPage",
                    component: BlogPage
                },
                {
                    path: '/donate',
                    name: "DonationPage",
                    component: DonationPage
                }
            ]
        }
    ]
})

