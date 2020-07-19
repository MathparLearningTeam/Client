<template>
    <div id="nav">
        <router-link to="/choose-profile">Choose profile</router-link>
        <router-link to="/logout">Logout</router-link>
    </div>
</template>

<script>
    export default {
        name: "authenticated-header"
    }
</script>

<style scoped lang="scss">
    #nav {
        padding: 30px;
        text-align: right;

        a {
            font-weight: bold;
            color: white;
            opacity: .5;
            margin: 10px;

            &.router-link-exact-active {
                 opacity: 1;
             }
        }
    }
</style>
