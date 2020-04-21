<template>
    <div>
        <auth-header></auth-header>
        <div class="container registration">
            <h1 class="title">Restore Password</h1>
            <section class="box" lang="en" v-if="!isSent">
                <b-field>
                    <b-input placeholder="Email" type="email" v-model="data.email" required></b-input>
                </b-field>

                <div class="buttons">
                    <b-button v-on:click="submit" type="is-primary" expanded>Send Restore Link</b-button>
                </div>
            </section>
            <section class="box" v-if="isSent">
                <p class="notification is-success">Restore link was successfully sent to your e-mail!</p>
            </section>
        </div>
    </div>
</template>

<script>
    import AuthHeader from "../../components/shared/AuthHeader";
    import accountMixin from "../../mixins/account";

    export default {
        name: "RestorePassword",
        mixins: [accountMixin],
        components: {
            AuthHeader
        },
        data() {
            return {
                isSent: false,
                data: {
                    email: ''
                }
            }
        },
        methods: {
            submit() {
                this.restore(this.data).then(() => this.isSent = true);
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
