<template>
    <div>
        <auth-header></auth-header>
        <div class="container registration">
            <h1 class="title">Registration</h1>
            <h2 class="subtitle">Create a new user account</h2>
            <ValidationObserver ref="formValidator">
                <section class="box" lang="en">
                    <b-field>
                        <ValidationProvider rules="required|email|email-available" v-slot="{errors}" mode="passive">
                            <b-input placeholder="Email" type="email" v-model="data.email" required></b-input>
                            <span>{{ errors[0] }}</span>
                        </ValidationProvider>
                    </b-field>

                    <b-field>
                        <b-input placeholder="Name" required v-model="data.fullName" maxlength="30"></b-input>
                    </b-field>

                    <b-field>
                        <ValidationProvider rules="required|password" v-slot="{errors}" mode="passive">
                            <b-input placeholder="Password" type="password" required v-model="data.password"
                                     password-reveal></b-input>
                            <span>{{ errors[0] }}</span>
                        </ValidationProvider>
                    </b-field>

                    <div class="buttons">
                        <b-button v-on:click="register" type="is-primary" expanded>Register me!</b-button>
                    </div>
                </section>
            </ValidationObserver>
        </div>
    </div>
</template>

<script>
    import accountMixin from "../../mixins/account";
    import AuthHeader from "../../components/AuthHeader";
    import {ValidationProvider, ValidationObserver} from 'vee-validate';
    import "../../validation/rules";


    export default {
        name: "Registration",
        mixins: [accountMixin],
        components: {
            AuthHeader,
            ValidationProvider,
            ValidationObserver
        },
        data() {
            return {
                data: {
                    email: '',
                    fullName: '',
                    password: ''
                }
            }
        },
        methods: {
            register: function () {
                this.$refs.formValidator.validate().then(success => {
                    if(!success){
                        return;
                    }
                    this.createAccount(this.data)
                })
            }
        }
    }
</script>

<style lang="scss">
    .registration {
        margin: auto;
        width: 40%;

        .title, .subtitle {
            color: white;
        }

        .buttons {
            margin-top: 40px;
        }

        .help {
            text-align: left;

            &.is-invisible {
                display: none !important;
            }
        }
    }
</style>
