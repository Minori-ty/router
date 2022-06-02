import { defineStore } from 'pinia'

export default defineStore({
    id: 'main',
    state: () => ({
        userInfo: {
            username: '',
            role: '' as 'admin' | 'user' | 'superadmin' | '',
            token: '',
        },
    }),
    actions: {
        setUserInfo(username: string, role: 'admin' | 'user' | 'superadmin', token: string) {
            this.userInfo.username = username
            this.userInfo.role = role
            this.userInfo.token = token
        },
        resetUserInfo() {
            this.userInfo = {
                username: '',
                role: '' as 'admin' | 'user' | 'superadmin' | '',
                token: '',
            }
        },
    },
    persist: {
        enabled: true,
    },
})
