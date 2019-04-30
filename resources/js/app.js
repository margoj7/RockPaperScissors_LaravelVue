require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

import App from './App.vue';
Vue.use(VueAxios, axios);

import HomeComponent from './components/HomeComponent.vue';
import GameComponent from './components/GameComponent.vue';
import HistoryComponent from './components/HistoryComponent.vue';


const routes = [
    {
        name: 'home',
        path: '/',
        component: HomeComponent
    },
    {
        name: 'game',
        path: '/game',
        component: GameComponent
    },
    {
        name: 'history',
        path: '/history',
        component: HistoryComponent
    }
];

const router = new VueRouter({ mode: 'history', routes: routes });
const app = new Vue(Vue.util.extend({ router }, App)).$mount('#app');