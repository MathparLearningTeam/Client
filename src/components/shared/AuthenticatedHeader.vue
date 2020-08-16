<template>
    <div id="nav">
        <router-link to="/account">My account</router-link>
        <router-link to="/apply-for-position">Apply for position</router-link>
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
        margin: 0px;
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
