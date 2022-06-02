<template>
    <header><button @click="logOut">退出</button></header>
    <div class="home">
        <aside class="home-aside">
            <button v-for="item in menu" @click="goTo(item.name)">{{ item.name }}</button>
        </aside>
        <main class="home-main">
            <router-view></router-view>
        </main>
    </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import usePinia from '@/store'
import { mapRoute } from '@/router/mapRoute'
const { resetUserInfo, userInfo } = usePinia()
const menu = mapRoute(userInfo.role)
const router = useRouter()
console.log(menu)
const goTo = (name: string) => {
    router.push({
        name,
    })
}
const logOut = () => {
    resetUserInfo()
    router.push('/login')
}
</script>
<style scoped lang="scss">
.home {
    display: flex;

    &-aside {
        width: 200px;
        background-color: skyblue;
    }
    &-main {
        flex: 1;
    }
}
</style>
