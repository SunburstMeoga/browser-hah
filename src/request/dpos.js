import request from './request'

export function listDelegate(params) {
    return request({
        url: '/api/listdelegate/',
        method: 'get',
        params
    })
}

export function listDelegateDetails(params) {
    return request({
        url: '/api/listdelegatedetail/',
        method: 'get',
        params
    })
}

export function DPOSInfo(params) {
    return request({
        url: '/api/delegate/',
        method: 'get',
        params
    })
}
