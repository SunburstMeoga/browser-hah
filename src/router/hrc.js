export default [
    {
        path: '/hrc',
        name: 'HRC',
        component: () => import('../views/HRC/HRC')
    },
    {
        path: '/token/:address',
        name: 'HRC',
        component: () => import('../views/HRC/HRCDetails')
    }
]