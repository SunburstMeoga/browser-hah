import request from '@/utils/request'

export function newBlock(params) {
    return request({
        url: '/api/newblock/',
        method: 'get',
        params
    })
}


export function newTX(params) {
    return request({
        url: '/api/newtx/',
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

export function TXList(params) {
    return request({
        url: '/api/txlist/',
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