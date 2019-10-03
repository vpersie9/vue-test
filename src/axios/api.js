import service from './request'

export const testApiGet = () => {
    return service({
        url: '/test/api/get.json',
        method: 'get'
    })
};

export const testApiPut = (data) => {
    return service({
        url: '/test/api/put.json',
        method: 'put',
        data: data
    })
};

export const testApiPost = (data) => {
    return service({
        url: '/test/api/post.json',
        method: 'post',
        data: data
    })
};

export const testApiDelete = (data) => {
    return service({
        url: '/test/api/delete.json',
        method: 'delete',
        data: data
    })
};