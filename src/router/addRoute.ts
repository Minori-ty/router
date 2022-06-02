import { mapRoute } from './mapRoute'
import usePinia from '@/store'
import router from './index'
const { userInfo } = usePinia()
export function addRoutes() {
    return new Promise((resolve, reject) => {
        mapRoute(userInfo.role).forEach((i) => {
            router.addRoute(i)
            console.log('动态添加')
        })
        resolve(1)
    })
}
