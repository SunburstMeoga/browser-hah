import request from './request'

export function rankList(params) {
    return request({
        url: '/api/rank/',
        method: 'get',
        params
    })
}