<template>
    <span>用户名:</span> <input type="text" v-model="username" /><br />
    <span>密码:</span><input type="password" v-model="password" /><br />
    <button @click="submit">登录</button>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { login } from '@/request/login'
import usePinia from '@/store'
import { useRouter } from 'vue-router'
import { addRoutes } from '@/router/addRoute'

const { setUserInfo } = usePinia()
const router = useRouter()
let username = ref('test')
let password = ref('test12345')

const submit = async () => {
    try {
        const { data } = await login(username.value, password.value)
        console.log(data.role)
        setUserInfo(data.username, data.role, data.token)
    } catch (error: any) {
        console.log(error)
    }
    // await addRoutes()
    router.push({
        path: '/home',
    })
}
</script>
<style scoped></style>
