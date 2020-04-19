<template>
    <div>You are being logged out</div>
</template>

<script>
    import authenticationStore from '../store/authenticationStore'
    import accountStore from "../store/accountStore";

    export default {
        name: "Logout",
        mounted() {
            accountStore.commit('clearAccount')
            authenticationStore.commit('clearToken')
            this.$router.push('/')
        }
    }
</script>

<style scoped>

</style>