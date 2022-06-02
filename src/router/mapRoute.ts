const userRouter = [
    {
        path: '/home',
        name: 'home',
        redirect: '/home/index',
        component: () => import('@/components/Layout.vue'),
        children: [
            {
                path: 'index',
                component: () => import('@/components/Home.vue'),
            },
        ],
    },
]

const adminRouter = [
    {
        path: '/permission',
        name: 'permission',
        redirect: '/permission/index',
        component: () => import('@/components/Layout.vue'),
        children: [
            {
                path: 'index',
                component: () => import('@/components/Permission.vue'),
            },
        ],
    },
]

export const mapRoute = (role: 'user' | 'admin' | 'superadmin' | '') => {
    switch (role) {
        case 'user':
            return userRouter
        case 'admin':
        case 'superadmin':
            return [...userRouter, ...adminRouter]
        default:
            return []
    }
}
