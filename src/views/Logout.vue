<template>
    <div>You are being logged out</div>
</template>

<script>
    import authenticationStore from '../store/authenticationStore'
    import accountStore from "../store/accountStore";
    import schoolStore from "../store/schoolStore";
    import profileStore from "../store/profileStore";

    export default {
        name: "Logout",
        mounted() {
            schoolStore.commit('clear')
            profileStore.commit('clear')
            accountStore.commit('clear')
            authenticationStore.commit('clearToken')
            this.$router.push('/')
        }
    }
</script>

<style scoped>

</style>