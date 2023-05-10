import request from './request'

export function branchList(params) {
    return request({
        method: 'get',
        url: '/api/listfork',
        params
    })
}