export default [
    {
        path: '/dpos',
        name: 'dpos',
        component: () => import('../views/dpos/Dpos')
    },
    {
        path: '/dpos/details/:dposAddress',
        name: 'dpos',
        component: () => import('../views/dpos/DposDetail')
    }
]