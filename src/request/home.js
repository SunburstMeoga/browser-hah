import request from './request'

export function blockList(params) {
    return request({
        url: '/api/blocklist/',
        method: 'get',
        params
    })
}


export function TXList(params) {
    return request({
        url: '/api/txlist/',
        method: 'get',
        params
    })
}

export function allStatistics(params) {
    return request({
        url: '/api/stat',
        method: 'get',
        params
    })
}

export function blockStatistics(params) {
    return request({
        url: '/api/blockstatistics/',
        method: 'get',
        params
    })
}

export function addressInfo(params) {
    return request({
        url: '/api/address/',
        method: 'get',
        params
    })
}

export function balanceInfo(params) {
    return request({
        url: '/api/balance',
        method: 'get',
        params
    })
}

export function blockInfo(params) {
    return request({
        url: '/api/block',
        method: 'get',
        params
    })
}

export function txDetails(params) {
    return request({
        url: '/api/hrc20_tx/',
        method: 'get',
        params
    })
}

export function txInfo(params) {
    return request({
        url: '/api/tx/',
        method: 'get',
        params
    })
}

export function testHAHChain(params) {
    return request({
        url: '/api/faucet/',
        method: 'get',
        params
    })
}
