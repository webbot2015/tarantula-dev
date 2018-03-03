import Tunnel from './merge/body/Tunnel.vue';
/* import Portfolio from './merge/body/portfolio/index.vue'; */
import Body from './merge/body/Body.vue';

export const routes = [
    {
        path: '/',
        component: Body
    },
    {
        path: '/portfolio',
        component: Tunnel
    }
];