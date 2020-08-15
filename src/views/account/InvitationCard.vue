<template>
    <div>
        <ValidationObserver ref="formValidator">
            <section class="modal-card-body">
                <h3 class="title has-text-centered has-text-dark">Complete invitation card:</h3>
                <div class="box">
                    <p>Enter the email of school headmaster:</p>
                    <b-field>
                        <ValidationProvider rules="required|email" v-slot="{errors}" mode="passive">
                            <b-input placeholder="Headmaster Email" type="email" v-model="applyingRequest.directorEmail"
                                     required></b-input>
                            <span>{{ errors[0] }}</span>
                        </ValidationProvider>
                    </b-field>
                    <p>Specify the position on which you are applying:</p>
                    <b-select v-model="applyingRequest.position" @change="onChange" expanded class="positionList">
                        <option v-for="position in positionList" :key="position.name">{{ position.name }}</option>
                    </b-select>
                    <b-button type="is-primary" v-on:click="applyMe" expanded>Send request
                    </b-button>
                </div>
            </section>
        </ValidationObserver>
    </div>

</template>

<script>
    import api from "../../api/api";
    import AuthenticatedHeader from "../../components/shared/AuthenticatedHeader";
    import {ValidationObserver, ValidationProvider} from "vee-validate";
    import "../../validation/rules";
    import dialog from "../../mixins/dialog"

    export default {
        name: "InvitationCard",
        mixins: [dialog],
        components: {
            AuthenticatedHeader,
            ValidationProvider,
            ValidationObserver
        },
        data() {
            return {
                applyingRequest: {
                    directorEmail: '',
                    position: ''
                },
                positionList: [
                    {name: 'Teacher'},
                    {name: 'Head Teacher'}
                ]
            }
        },
        methods: {
            applyMe() {
                this.$refs.formValidator.validate().then(success => {
                    if (!success) {
                        return;
                    }
                    api.school.requestProfile(this.applyingRequest).then(response => {
                            dialog.methods.openDialogSuccess("Your invitation request was successfully sent")
                            this.$router.push("/account")
                        },
                        error => {
                            dialog.methods.openDialogError("Check correctness of director's email or fill the position")
                        })
                })
            }
        }
    }
</script>

<style scoped>
    .positionList {
        margin-bottom: 20px;
    }
</style>