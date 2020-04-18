<template>
    <div>
        <auth-header></auth-header>
        <div class="container registration">
            <h1 class="title">Set New Password</h1>
            <section class="box" lang="en" v-if="!isSent">
                <b-field>
                    <b-input placeholder="New Password" type="password" password-reveal v-model="data.newPassword" required></b-input>
                </b-field>

                <div class="buttons">
                    <b-button v-on:click="submit" type="is-primary" expanded>Set Password</b-button>
                </div>
            </section>
            <section class="box" v-if="isSent">
                <p class="notification is-success">New password was successfully set! Go to <router-link to="/login">Login</router-link></p>
            </section>
        </div>
    </div>
</template>

<script>
    import accountMixin from "../../mixins/account";
    import AuthHeader from "../../components/AuthHeader";

    export default {
        name: "SetPassword",
        mixins: [accountMixin],
        components: {
            AuthHeader
        },
        data() {
            return {
                isSent: false,
                data: {
                    token: this.$route.params.t,
                    newPassword: ''
                }
            }
        },
        methods: {
            submit() {
                this.setPassword(this.data).then(() => this.isSent = true);
            }
        }
    }
</script>

<style scoped lang="scss">
    .registration {
        margin: auto;
        width: 40%;

        .title, .subtitle {
            color: white;
        }

        .buttons {
            margin-top: 40px;
        }
    }
</style>
