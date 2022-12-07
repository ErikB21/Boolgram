import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);


import HomePage from './components/pages/HomePage.vue';
import ProfilePage from './components/pages/ProfilePage.vue';

const router = new VueRouter({
    mode: 'history',
    routes:[
        {
            path:'/',
            name:'home',
            component: HomePage
        },
        {
            path:'/profile',
            name:'profile',
            component: ProfilePage
        },
    ]
});

export default router;