<template>
    <div class="page-container">
        <authenticated-header></authenticated-header>
        <div class="columns is-mobile">
            <div class="column is-full-mobile is-half-tablet is-one-third-desktop">
                <user-card v-bind:user="account"></user-card>
            </div>
            <div class="column">
                <div class="card">
                    <nav class="panel">
                        <p class="panel-heading">Change password</p>
                        <div class="panel-block">
                            <b-input type="password" v-model="changePasswordForm.password"
                                     placeholder="Enter your password"></b-input>
                            <b-input type="password" v-model="changePasswordForm.passwordConfirmation"
                                     placeholder="Confirm your password"></b-input>
                        </div>
                        <div class="panel-block">
                            <b-button v-on:click="changePassword" type="is-primary" expanded>Change password!</b-button>
                        </div>
                    </nav>
                </div>

                <hr>

                <CreateSchool/>
            </div>
        </div>
    </div>
</template>

<script>
    import accountStore from "../../store/accountStore";
    import AuthenticatedHeader from "../../components/shared/AuthenticatedHeader";
    import Avatar from "../../components/blocks/Avatar";
    import UserCard from "../../components/profile/user-card";
    import CreateSchool from "./CreateSchool";

    export default {
        name: "Account",
        components: {
            UserCard,
            Avatar,
            AuthenticatedHeader,
            CreateSchool
        },
        data() {
            return {
                account: {},
                changePasswordForm: {
                    password: '',
                    passwordConfirmation: ''
                }
            }
        },
        methods: {
            changePassword: function () {
                console.log("Changing password, all right!")
            }
        },
        async mounted() {
            this.$data.account = await accountStore.getters.get
        }
    }
</script>
<style scoped lang="scss">
    .column {
        margin-right: 20px;
    }

    .panel-heading {
        font-weight: bold;
        text-align: left;
    }

    .card + .card {
        margin-top: 20px;
    }

    .panel-block {
        flex-direction: column;

        .control + .control {
            margin-top: 10px;
        }
    }
</style>
