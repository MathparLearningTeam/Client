<template>
    <div>
        <auth-header></auth-header>
        <div class="container registration">
            <h1 class="title">Login</h1>
            <section class="box" lang="en">
                <b-field>
                    <b-input placeholder="Email" type="email" v-model="data.email" required></b-input>
                </b-field>

                <b-field>
                    <b-input placeholder="Password" required v-model="data.password" type="password" password-reveal></b-input>
                </b-field>

                <div class="buttons">
                    <b-button v-on:click="login" type="is-primary" expanded>Login</b-button>
                </div>
                <router-link to="/restore">Forgot password?</router-link>
            </section>
        </div>
    </div>
</template>

<script>
    import accountMixin from "../../mixins/account";
    import AuthHeader from "../../components/shared/AuthHeader";

    export default {
        name: "Login",
        mixins: [accountMixin],
        components: {
            AuthHeader
        },
        data() {
            return {
                data: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            login: function () {
                this.authenticate(this.data)
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

        a {
            font-size: 12px;
        }

        .buttons {
            margin-top: 40px;
        }
    }
</style>
