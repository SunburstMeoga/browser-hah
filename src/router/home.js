export default [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/home/Index.vue')
    },
    {
        path: '/address/:address',
        name: 'address',
        component: () => import('../views/home/Address')
    },
    {
        path: '/block/:height',
        name: 'block',
        component: () => import('../views/home/Block')
    },
    {
        path: '/tx/:txid',
        name: 'tx',
        component: () => import('../views/home/Tx')
    }
]