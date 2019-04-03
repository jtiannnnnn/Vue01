<template>
    <div>
        <h3>这是Account组件</h3>
        <router-link to="/account/log">登录</router-link>
        <router-link to="/account/regist">注册</router-link>
        <router-view></router-view>
    </div>
</template>
<style lang="less" scoped>
    body{
        div{
            font-style:italic;
        }
    }
</style>