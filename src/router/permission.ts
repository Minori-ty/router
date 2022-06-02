import { mapRoute } from './mapRoute'
import router from './index'
import usePinia from '@/store'
import { addRoutes } from './addRoute'

const whileList = ['/login', '/about', '/:pathMatch(.*)*']
let isAddRoute = false
router.beforeEach((to, from, next) => {
    const { userInfo } = usePinia()
    if (!userInfo.token) {
        //没有登录，如果去白名单，则放行
        if (whileList.indexOf(to.path) !== -1) {
            next()
        } else {
            //如果去其他权限路由，则重定向到login
            next(`/login?redirect=${to.path}`)
        }
    } else {
        if (to.path === '/login') {
            next({ path: '/home' })
        } else {
            console.log(router.getRoutes())

            if (isAddRoute) {
                next()
            } else {
                console.log(isAddRoute)
                mapRoute(userInfo.role).forEach((i) => {
                    router.addRoute(i)
                    console.log('动态添加')
                })
                // addRoutes()
                console.log('添加完成')

                isAddRoute = true
                next({
                    ...to,
                    replace: true,
                })
            }
        }
    }
})
