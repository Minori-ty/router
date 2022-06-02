import { MockMethod } from 'vite-plugin-mock'
import Mock from 'mockjs'

export default [
    {
        url: '/api/login',
        method: 'post',
        response: (request) => {
            // console.log(request)
            return Mock.mock({
                role: '@pick(["user","admin","superadmin"])',
                token: 'ssss',
            })
        },
    },
]
