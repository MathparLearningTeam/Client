<template>
    <section class="modal-card-body">
        <h3 class="title has-text-centered has-text-dark">Complete invitation card:</h3>
        <div class="box">
            <p>Enter the email of school headmaster:</p>
            <b-field>
                <b-input v-model="applyingRequest.directorEmail" type="email" placeholder="Email" required></b-input>
            </b-field>
            <p>Specify the position on which you are applying:</p>
            <b-select v-model="applyingRequest.position" @change="onChange" expanded class="positionList">
                <option>Teacher</option>
                <option>HeadTeacher</option>
            </b-select>
            <b-button type="is-primary"
                      v-on:click="applyMe"
                      :disabled="!(isCompleted && clickAllowed)" expanded>Send request
            </b-button>
        </div>
    </section>
</template>

<script>
    import api from "../../api/api";

    export default {
        name: "InvitationCard",
        data() {
            return {
                applyingRequest: {
                    directorEmail: '',
                    position: ''
                },
                positionList: [
                    {id: 1, name: 'Teacher'},
                    {id: 2, name: 'HeadTeacher'}
                ],
                clickAllowed: false
            }
        },
        computed: {
            isCompleted() {
                let formFilled = this.applyingRequest.directorEmail && this.applyingRequest.position;
                if (formFilled) {
                    this.clickAllowed = true
                }
                return formFilled;
            }
        },
        methods: {
            applyMe() {
                this.clickAllowed = false;
                console.log(this.applyingRequest.directorEmail + ', ' + this.applyingRequest.position)
                api.school.requestProfile(this.applyingRequest).then(response => {
                        this.$buefy.dialog.alert({
                            title: "Success!",
                            message: "Your invitation request was successfully sent",
                            confirmText: "OK",
                            hasIcon: true,
                            icon: "check"
                        })
                        this.$router.push("/account")
                    },
                    error => {
                        this.$buefy.dialog.alert({
                            title: "Error!",
                            message: "Check correctness of director's email or fill the position",
                            type: 'is-danger',
                            hasIcon: true,
                            icon: "view-dashboard",
                            confirmText: "OK",
                        })
                    })
            },
            onChange(event) {
                this.applyingRequest.position = position
            }
        },
    }
</script>

<style scoped>
    .positionList {
        margin-bottom: 20px;
    }
</style>