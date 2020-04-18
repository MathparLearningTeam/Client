<template>
    <div>This is an account {{account.fullName}} page</div>
</template>

<script>
    import {accountStore} from "../../store/accountStore";

    export default {
        name: "Account",
        data(){
            return {
                account: {}
            }
        },
        async mounted() {
            this.$data.account = await accountStore.getters.account
        }
    }
</script>
<style scoped>

</style>