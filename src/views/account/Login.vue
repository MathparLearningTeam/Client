<template>
    <div>
        <auth-header></auth-header>
        <div class="container registration">
            <form name="loginForm" @submit.prevent="login">
                <h1 class="title">Login</h1>
                <section class="box" lang="en">
                    <b-field>
                        <b-input placeholder="Email" type="email" v-model="data.email" required></b-input>
                    </b-field>

                    <b-field>
                        <b-input placeholder="Password" required v-model="data.password" type="password"
                                 password-reveal></b-input>
                    </b-field>

                    <div class="buttons">
                        <b-button v-on:click="login" :disabled="loading" type="is-primary" expanded>
                            <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                            <span>Login</span>
                        </b-button>
                    </div>
                    <router-link to="/restore">Forgot password?</router-link>
                </section>
            </form>
        </div>
    </div>
</template>

<script>
    import accountMixin from "../../mixins/account";
    import AuthHeader from "../../components/shared/AuthHeader";
    import api from "../../api/api";
    import authenticationStore from "../../store/authenticationStore";

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
                },
                loading: false
            }
        },
        methods: {
            login: function () {
                this.authenticate(this.data)
            },
            authenticate: function (data) {
                this.loading = true;
                api.account.authenticate(data).then((response) => {
                        authenticationStore.commit('setToken', response.token)
                        //@ts-ignore
                        this.$router.push('/account');
                    },
                    error => {
                        this.loading = false;
                        this.$router.push('/login')
                    })
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
