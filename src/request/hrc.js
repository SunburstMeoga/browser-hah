import request from './request'

export function listHRC20(params) {
    return request({
        url: '/api/listhrc20',
        method: 'get',
        params
    })
}

export function contractTX(params) {
    return request({
        url: '/api/contract_tx',
        method: 'get',
        params
    })
}