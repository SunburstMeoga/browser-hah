export default [
    {
        path: '/rank',
        name: 'rank',
        component: () => import('@/views/rank/Rank')
    },
    {
        path: '/HRC/details',
        name: 'HRC',
        component: () => import('@/views/hrc/HRCDetails')
    }
]