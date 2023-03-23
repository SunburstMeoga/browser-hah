export default [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/home/Index.vue')
    },
    {
        path: '/address',
        name: 'address',
        component: () => import('@/views/home/Address')
    },
    {
        path: '/block',
        name: 'block',
        component: () => import('@/views/home/Block')
    },
    {
        path: '/tx',
        name: 'tx',
        component: () => import('@/views/home/Tx')
    }
]