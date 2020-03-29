<template>
    <div>
        <auth-header></auth-header>
        <div class="container registration">
            <h1 class="title">Registration</h1>
            <h2 class="subtitle">Create a new school account</h2>
            <section class="box" lang="en">
                <b-field>
                    <b-input placeholder="Email" type="email" v-model="data.directorEmail" required></b-input>
                </b-field>

                <b-field>
                    <b-input placeholder="Name" required v-model="data.directorName" maxlength="30"></b-input>
                </b-field>

                <b-field>
                    <b-input placeholder="Password" type="password" required v-model="data.directorPassword"
                             password-reveal></b-input>
                </b-field>

                <b-field>
                    <b-input placeholder="School Name" required v-model="data.schoolName" maxlength="30"></b-input>
                </b-field>

                <b-field>
                    <b-input placeholder="School Address" required v-model="data.schoolAddress"
                             maxlength="30"></b-input>
                </b-field>

                <div class="buttons">
                    <b-button v-on:click="register" type="is-primary" expanded>Register me!</b-button>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    import {userMixin} from "@/mixins/user";
    import AuthHeader from "@/components/AuthHeader";

    export default {
        name: "Registration",
        mixins: [userMixin],
        components: {
            AuthHeader
        },
        data() {
            return {
                data: {
                    directorEmail: '',
                    directorName: '',
                    directorPassword: '',
                    schoolAddress: '',
                    schoolName: ''
                }
            }
        },
        methods: {
            register: function (event) {
                this.createSchool(this.data)
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
