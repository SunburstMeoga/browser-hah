export default [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/home/Home')
    },
    {
        path: '/address/:address',
        name: 'address',
        component: () => import('../views/home/Address')
    },
    {
        path: '/block/list',
        name: 'block',
        component: () => import('../views/home/BlockList')
    },
    {
        path: '/block/:height',
        name: 'blockList',
        component: () => import('../views/home/Block')
    },
    {
        path: '/trade/list',
        name: 'tradeList',
        component: () => import('../views/home/TradeList')
    },
    {
        path: '/tx/:txid',
        name: 'tx',
        component: () => import('../views/home/Tx')
    },
    {
        path: '/faucet-smart',
        name: 'faucet-smart',
        component: () => import('../views/home/FaucetSmart')
    },
]