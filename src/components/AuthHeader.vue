<template>
    <div id="nav">
        <router-link to="/login">Login</router-link>
        |
        <router-link to="/registration">Registration</router-link>
    </div>
</template>

<script>
    export default {
        name: "auth-header"
    }
</script>

<style scoped lang="scss">
    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: white;
            opacity: .5;

            &.router-link-exact-active {
                opacity: 1;
            }
        }
    }
</style>
